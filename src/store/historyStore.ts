export interface HistoryItem {
  id: string;
  prompt: string;
  script: string;
  videoUrl: string;
  createdAt: number;
}

const KEY = "acs-history";

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = localStorage.getItem(KEY);

  if (!raw) {
    return [];
  }

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveHistory(
  item: HistoryItem
) {
  const history = getHistory();

  const updated = [
    item,
    ...history,
  ];

  localStorage.setItem(
    KEY,
    JSON.stringify(updated)
  );

  window.dispatchEvent(
    new Event("history-update")
  );
}

export function clearHistory() {
  localStorage.removeItem(KEY);

  window.dispatchEvent(
    new Event("history-update")
  );
}
