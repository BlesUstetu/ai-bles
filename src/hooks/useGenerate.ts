"use client";

import { useState } from "react";
import { saveHistory } from "@/store/historyStore";

export function useGenerate() {
  const [loading, setLoading] =
    useState(false);

  const [script, setScript] =
    useState("");

  const [videoUrl, setVideoUrl] =
    useState("");

  const generate = async (
    prompt: string
  ) => {
    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 4000)
      );

      setScript(`

const fakeScript = `
Narasi video untuk:

${prompt}

Ini adalah contoh script hasil AI.
`;

const fakeVideo =
  "https://www.w3schools.com/html/mov_bbb.mp4";

setScript(fakeScript);

setVideoUrl(fakeVideo);

saveHistory({
  id: crypto.randomUUID(),
  prompt,
  script: fakeScript,
  videoUrl: fakeVideo,
  createdAt: Date.now()
});
