"use client";

import { Plus } from "lucide-react";

import VoiceButton from "./VoiceButton";
import GenerateButton from "./GenerateButton";

interface PromptBarProps {
  prompt: string;
  setPrompt: (value: string) => void;
  loading: boolean;
  recording: boolean;
  onGenerate: () => void;
  onVoice: () => void;
}

export default function PromptBar({
  prompt,
  setPrompt,
  loading,
  recording,
  onGenerate,
  onVoice,
}: PromptBarProps) {
  return (
    <div
      className="
      glass
      glow
      rounded-3xl
      px-4
      py-4
      flex
      items-center
      gap-3
      "
    >
      <button>
        <Plus size={20} />
      </button>

      <input
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        placeholder="Apa yang ingin Anda buat hari ini?"
        className="
        flex-1
        bg-transparent
        outline-none
        text-white
        "
      />

      <VoiceButton
        recording={recording}
        onClick={onVoice}
      />

      <GenerateButton
        loading={loading}
        onClick={onGenerate}
      />
    </div>
  );
}
