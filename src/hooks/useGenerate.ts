"use client";

import { useState } from "react";

export function useGenerate() {
  const [loading, setLoading] =
    useState(false);

  const [script, setScript] =
    useState("");

  const [videoUrl, setVideoUrl] =
    useState("");

  async function generate(
    prompt: string
  ) {
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const response =
        await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            prompt
          })
        });

      if (!response.ok) {
        throw new Error(
          "Generate gagal"
        );
      }

      const data =
        await response.json();

      setScript(data.script);

      setVideoUrl(data.videoUrl);

    } catch (error) {
      console.error(error);

      alert(
        "Gagal membuat video"
      );
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setScript("");
    setVideoUrl("");
  }

  return {
    loading,
    script,
    videoUrl,
    generate,
    reset
  };
}
