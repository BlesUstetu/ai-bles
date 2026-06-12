"use client";

import HistoryItem from "./HistoryItem";

import { HistoryItem as Item } from "@/store/historyStore";

interface Props {
  items: Item[];
}

export default function HistoryList({
  items
}: Props) {
  return (
    <div className="mt-4">

      {items.map((item) => (
        <HistoryItem
          key={item.id}
          title={item.prompt}
          onClick={() => {}}
        />
      ))}

    </div>
  );
}
