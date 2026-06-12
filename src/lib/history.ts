import { ChatItem } from "@/types";

const KEY = "ai-video-history";

export function saveHistory(item: ChatItem) {
  const old = getHistory();

  localStorage.setItem(
    KEY,
    JSON.stringify([item, ...old])
  );
}

export function getHistory(): ChatItem[] {
  const raw = localStorage.getItem(KEY);

  if (!raw) return [];

  return JSON.parse(raw);
}
