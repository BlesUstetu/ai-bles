"use client";

import {
  HistoryItem
} from "@/store/historyStore";

interface Props {
  items: HistoryItem[];
}

export default function HistoryList({
  items
}: Props) {
  if (!items.length) {
    return (
      <p className="text-white/50">
        Belum ada riwayat.
      </p>
    );
  }

  return (
    <div className="space-y-2">

      {items.map((item) => (
        <div
          key={item.id}
          className="
          p-3
          rounded-xl
          bg-white/5
          "
        >
          <p
            className="
            truncate
            "
          >
            {item.prompt}
          </p>
        </div>
      ))}

    </div>
  );
}
