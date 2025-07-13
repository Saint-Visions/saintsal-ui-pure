"use client";
import { useState, useCallback } from "react";

export function useUpgradeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openUpgradeModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeUpgradeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const triggerUpgrade = useCallback((context?: string) => {
    // Optional: Track where the upgrade was triggered from
    if (context) {
      console.log(`Upgrade triggered from: ${context}`);
      // Add analytics tracking here if needed
    }
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    openUpgradeModal,
    closeUpgradeModal,
    triggerUpgrade,
  };
}
