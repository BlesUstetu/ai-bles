"use client";

import { Mic } from "lucide-react";

interface VoiceButtonProps {
  recording: boolean;
  onClick: () => void;
}

export default function VoiceButton({
  recording,
  onClick,
}: VoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
      transition-all
      duration-300
      "
    >
      <Mic
        size={20}
        className={
          recording
            ? "text-cyan-400 animate-pulse"
            : "text-white/70"
        }
      />
    </button>
  );
}
