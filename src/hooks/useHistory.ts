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
    setHistory(getHistory());
  }, []);

  function refresh() {
    setHistory(getHistory());
  }

  return {
    history,
    refresh
  };
}
