"use client";

import { useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export function useVoice(
  onResult: (text: string) => void
) {
  const [recording, setRecording] =
    useState(false);

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice input tidak didukung");
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "id-ID";

    recognition.onstart = () =>
      setRecording(true);

    recognition.onend = () =>
      setRecording(false);

    recognition.onresult = (event: any) => {
      const transcript =
        event.results[0][0].transcript;

      onResult(transcript);
    };

    recognition.start();
  };

  return {
    recording,
    startRecording,
  };
}
