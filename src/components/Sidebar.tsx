"use client";

import {
  SquarePen,
  History
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/10 p-4">

      <button
        className="
        flex items-center gap-3
        w-full
        p-3
        rounded-xl
        hover:bg-cyan-500/10
        "
      >
        <SquarePen size={20}/>
        <span>Obrolan baru</span>
      </button>

      <button
        className="
        flex items-center gap-3
        w-full
        p-3
        rounded-xl
        hover:bg-cyan-500/10
        mt-2
        "
      >
        <History size={20}/>
        <span>Riwayat</span>
      </button>

    </aside>
  );
}
