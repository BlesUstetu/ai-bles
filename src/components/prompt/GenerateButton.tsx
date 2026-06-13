"use client";

import { AudioWaveform } from "lucide-react";

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function GenerateButton({
  loading,
  onClick,
}: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        transition-all
        duration-300

        ${
          loading
            ? `
            bg-gradient-to-r
            from-cyan-400
            to-violet-500
            <AudioWaveform
             className={
              loading
               ? "animate-spin"
               : ""
             }
            />
            shadow-[0_0_25px_rgba(0,245,255,.5)]
            `
            : `
            bg-white
            text-black
            hover:scale-105
            `
        }
      `}
    >
      <AudioWaveform size={18} />
    </button>
  );
}
