"use client";

import { useEffect, useState } from "react";

import {
  getHistory,
  HistoryItem
} from "@/store/historyStore";

export function useHistory() {
  const [history, setHistory] =
    useState<HistoryItem[]>([]);

  useEffect(() => {
    const updateHistory = () => {
      setHistory(getHistory());
    };

    updateHistory();

    window.addEventListener(
      "history-update",
      updateHistory
    );

    return () => {
      window.removeEventListener(
        "history-update",
        updateHistory
      );
    };
  }, []);

  return {
    history
  };
}
