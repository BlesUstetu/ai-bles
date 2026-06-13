"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";

import PromptBar from "@/components/prompt/PromptBar";

import ScriptCard from "@/components/result/ScriptCard";

import VideoCard from "@/components/result/VideoCard";

import EmptyState from "@/components/result/EmptyState";

import HistoryList from "@/components/history/HistoryList";

import { useGenerate } from "@/hooks/useGenerate";

import { useHistory } from "@/hooks/useHistory";

import { useVoice } from "@/hooks/useVoice";

export default function HomePage() {
  const [prompt, setPrompt] =
    useState("");

  const [showHistory,
    setShowHistory] =
    useState(false);

  const {
    loading,
    script,
    videoUrl,
    generate,
    reset
  } = useGenerate();

  const {
    history
  } = useHistory();

  const {
    recording,
    startRecording
  } = useVoice((text) => {
    setPrompt((prev) =>
      prev
        ? prev + " " + text
        : text
    );
  });

  const hasResult =
    Boolean(script) ||
    Boolean(videoUrl);

  async function handleGenerate() {
    await generate(prompt);
  }

  function handleNewChat() {
    setPrompt("");

    reset();

    setShowHistory(false);
  }

  return (
    <main
      className="
      h-screen
      flex
      "
    >
      <Sidebar
        onNewChat={
          handleNewChat
        }
        onOpenHistory={() =>
          setShowHistory(
            !showHistory
          )
        }
      />

      <section
        className="
        flex-1
        flex
        flex-col
        "
      >
        <div
          className="
          flex-1
          overflow-auto
          p-8
          max-w-5xl
          mx-auto
          w-full
          "
        >

          {showHistory && (
            <div
              className="
              glass
              rounded-3xl
              p-5
              mb-6
              "
            >
              <h2
                className="
                font-bold
                mb-4
                "
              >
                Riwayat
              </h2>

              <HistoryList
                items={history}
              />
            </div>
          )}

          {!hasResult && (
            <EmptyState />
          )}

          {hasResult && (
            <div
              className="
              space-y-6
              "
            >
              <ScriptCard
                script={script}
              />

              <VideoCard
                videoUrl={
                  videoUrl
                }
              />
            </div>
          )}

        </div>

        <div className="p-6">

          <PromptBar
            prompt={prompt}
            setPrompt={
              setPrompt
            }
            loading={
              loading
            }
            recording={
              recording
            }
            onVoice={
              startRecording
            }
            onGenerate={
              handleGenerate
            }
          />

        </div>

        {
        loading && (
        <div
         className="
         glass
         rounded-2xl
         p-4
         mb-6
         "
        >
         ⚡ Rendering AI Video...
        </div>
        )
        }

      </section>
    </main>
  );
}
