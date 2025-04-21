import React, { useRef, useEffect, useState } from "react";
import Tesseract from "tesseract.js";

export default function VisionSpeak() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [speaking, setSpeaking] = useState(false);
  const [mode, setMode] = useState("groq"); // 'groq' or 'ocr'
  const YOUR_GROQ_API_KEY="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";

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => console.error("Camera error:", err));
  }, []);

  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg");
  };

  const sendToGroq = async (imageBase64) => {
    try {
      const response = await fetch("https://api.groqcloud.ai/infer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${YOUR_GROQ_API_KEY}`,
        },
        body: JSON.stringify({ image: imageBase64 }),
      });
      const data = await response.json();
      return data.description || "No description available.";
    } catch (error) {
      console.error("Error calling Groq API:", error);
      return "Unable to process image.";
    }
  };

  const captureAndDescribe = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const frame = captureFrame();
    let description = "";

    if (mode === "ocr") {
      const { data: { text } } = await Tesseract.recognize(canvasRef.current, "eng");
      description = text.trim();
    } else if (mode === "groq") {
      description = await sendToGroq(frame);
    }

    if (description && !speaking) {
      setSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(description);
      utterance.lang = "en-US";
      utterance.onend = () => setSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => captureAndDescribe(), 5000);
    return () => clearInterval(interval);
  }, [mode, speaking]);

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h1 className="text-2xl font-bold">VisionSpeak Web App</h1>

      <video ref={videoRef} className="rounded shadow-lg w-full max-w-lg" />
      <canvas ref={canvasRef} className="hidden" />

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => setMode("groq")}
          className={`px-4 py-2 rounded ${mode === "groq" ? "bg-green-600 text-white" : "bg-gray-200"}`}
        >
          Groq AI Mode
        </button>
        <button
          onClick={() => setMode("ocr")}
          className={`px-4 py-2 rounded ${mode === "ocr" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          OCR Text Mode
        </button>
      </div>

      <button
        onClick={captureAndDescribe}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Read Now
      </button>
    </div>
  );
}
