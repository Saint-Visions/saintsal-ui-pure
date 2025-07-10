"use client";
import { useEffect } from "react";

interface UseHotkeyProps {
  key: string;
  callback: () => void;
  enabled?: boolean;
}

export default function useHotkey({
  key,
  callback,
  enabled = true,
}: UseHotkeyProps) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [key, callback, enabled]);
}
