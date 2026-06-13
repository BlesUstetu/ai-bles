"use client";

import {
  SquarePen,
  History
} from "lucide-react";

interface Props {
  onNewChat: () => void;
  onOpenHistory: () => void;
}

export default function Sidebar({
  onNewChat,
  onOpenHistory
}: Props) {
  return (
    <aside
      className="
      w-56
      border-r
      border-white/10
      p-4
      "
    >
      <button
        onClick={onNewChat}
        className="
        flex
        items-center
        gap-3
        w-full
        p-3
        rounded-xl
        hover:text-cyan-300
        "
      >
        <SquarePen size={20} />
        <span>Obrolan baru</span>
      </button>

      <button
        onClick={onOpenHistory}
        className="
        flex
        items-center
        gap-3
        w-full
        p-3
        rounded-xl
        hover:bg-cyan-500/10
        mt-2
        "
      >
        <History size={20} />
        <span>Riwayat</span>
      </button>
    </aside>
  );
}
