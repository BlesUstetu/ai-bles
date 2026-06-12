export interface HistoryItem {
  id: string;
  prompt: string;
  script: string;
  videoUrl: string;
  createdAt: number;
}

const KEY = "acs-history";

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveHistory(
  item: HistoryItem
) {
  const history = getHistory();

  const updated = [item, ...history];

  localStorage.setItem(
    KEY,
    JSON.stringify(updated)
  );
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
