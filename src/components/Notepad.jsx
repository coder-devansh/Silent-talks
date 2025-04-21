import { useState } from 'react';
import './VideoTranscriber.css';
import { transcribeAudio } from '../api/groq';

import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import ffmpeg from '@ffmpeg/ffmpeg';

function VideoTranscriber({ onTranscribed }) {
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    setVideoURL(URL.createObjectURL(file));

    try {
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }

      ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));
      await ffmpeg.run('-i', 'input.mp4', '-vn', '-acodec', 'pcm_s16le', 'output.wav');

      const audioData = ffmpeg.FS('readFile', 'output.wav');
      const audioBlob = new Blob([audioData.buffer], { type: 'audio/wav' });
      const audioFile = new File([audioBlob], 'output.wav', { type: 'audio/wav' });

      const text = await transcribeAudio(audioFile);
      setTranscript(text);
      onTranscribed(text);
    } catch (err) {
      console.error(err);
      setError('Transcription failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="video-transcriber">
      <h2>📹 Upload Video to Transcribe</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoURL && (
        <div className="video-preview">
          <video src={videoURL} controls width="400" />
        </div>
      )}
      {loading && <p>Transcribing...</p>}
      {error && <p className="error">Error: {error}</p>}
      {transcript && (
        <div className="transcript">
          <h3>🗒️ Transcript</h3>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}

export default VideoTranscriber;
