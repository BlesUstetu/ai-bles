"use client";

import { useState } from "react";

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
Narasi video untuk:

${prompt}

Ini adalah contoh script hasil AI.
      `);

      setVideoUrl(
        "https://www.w3schools.com/html/mov_bbb.mp4"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    script,
    videoUrl,
    generate,
  };
}
