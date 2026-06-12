"use client";

import { Film } from "lucide-react";

interface Props {
  title: string;
  onClick: () => void;
}

export default function HistoryItem({
  title,
  onClick
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
      w-full
      text-left
      p-3
      rounded-xl
      hover:bg-cyan-500/10
      flex
      items-center
      gap-2
      "
    >
      <Film size={16} />

      <span
        className="
        truncate
        text-sm
        "
      >
        {title}
      </span>
    </button>
  );
}
