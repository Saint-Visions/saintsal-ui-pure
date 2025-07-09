"use client";
import React from "react";
import { Crown, Zap, ArrowRight } from "lucide-react";

interface UpgradeCTAProps {
  onUpgrade: () => void;
  variant?: "button" | "banner" | "card" | "inline";
  size?: "sm" | "md" | "lg";
  className?: string;
  context?: string;
}

export default function UpgradeCTA({
  onUpgrade,
  variant = "button",
  size = "md",
  className = "",
  context = "generic",
}: UpgradeCTAProps) {
  const handleClick = () => {
    onUpgrade();
    // Optional: Add analytics tracking
    console.log(`Upgrade CTA clicked: ${context}`);
  };

  if (variant === "banner") {
    return (
      <div
        className={`bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-lg p-4 ${className}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Crown className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-yellow-400 font-semibold">
                Unlock Premium Features
              </p>
              <p className="text-white/70 text-sm">
                Get unlimited access to advanced AI cooking tools
              </p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>Upgrade</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`bg-gray-900 border border-yellow-500/30 rounded-xl p-6 text-center ${className}`}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
          <Crown className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Ready to Level Up?
        </h3>
        <p className="text-gray-400 mb-4">
          Unlock the full power of SaintSal™ AI
        </p>
        <button
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-200"
        >
          🔥 Upgrade Now
        </button>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center space-x-2 ${className}`}>
        <button
          onClick={handleClick}
          className="text-yellow-400 hover:text-yellow-300 underline font-medium transition-colors"
        >
          Upgrade to unlock this feature
        </button>
        <Crown className="w-4 h-4 text-yellow-400" />
      </span>
    );
  }

  // Default button variant
  const sizeClasses = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold rounded-lg transition-all duration-200 flex items-center space-x-2 ${sizeClasses[size]} ${className}`}
    >
      <Zap className="w-5 h-5" />
      <span>Upgrade</span>
    </button>
  );
}
