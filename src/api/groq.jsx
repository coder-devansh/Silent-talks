import axios from 'axios';

const GROQ_API_KEY = "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";
const CHAT_URL = 'https://api.groq.com/openai/v1/chat/completions';
const AUDIO_URL = 'https://api.groq.com/openai/v1/audio/transcriptions';

export const fetchGroqResponse  = async (messages) => {
  try {
    const res = await axios.post(
      CHAT_URL,
      { model: 'meta-llama/llama-4-scout-17b-16e-instruct', messages, temperature: 0.2 },
      { headers: { Authorization: `Bearer ${GROQ_API_KEY}` } }
    );
    return res.data.choices[0].message.content;
  } catch (err) {
    console.error('Groq Chat Error:', err);
    throw err;
  }
};

export const transcribeAudio = async (file) => {
  try {
    const formData = new FormData();
    formData.append('model', 'whisper-1');
    formData.append('file', file);

    const res = await axios.post(
      AUDIO_URL,
      formData,
      { headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'multipart/form-data' } }
    );
    return res.data.text;
  } catch (err) {
    console.error('Groq Transcription Error:', err);
    throw err;
  }
};
