import { Readable } from 'stream';
import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import FormData from 'form-data';
import fetch from 'node-fetch';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // collect video buffer
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const videoBuffer = Buffer.concat(chunks);

  // write to temp file
  const inputPath = '/tmp/input.mp4';
  const outputPath = '/tmp/output.wav';
  await fs.promises.writeFile(inputPath, videoBuffer);

  // extract audio
  await new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .setFfmpegPath(ffmpegPath)
      .noVideo()
      .audioCodec('pcm_s16le')
      .save(outputPath)
      .on('end', resolve)
      .on('error', reject);
  });

  // read audio file
  const audioData = await fs.promises.readFile(outputPath);

  // call Groq transcription
  const form = new FormData();
  form.append('model', 'whisper-1');
  form.append('file', Readable.from(audioData), 'output.wav');
  const apiRes = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
    body: form
  });
  const json = await apiRes.json();
  res.status(200).json({ transcript: json.text });
}

// /api/summarize.js remains unchanged