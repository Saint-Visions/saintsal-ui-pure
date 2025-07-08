"use client";
import React from "react";

interface ButtonGoldProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: string;
}

export default function ButtonGold({
  children,
  onClick,
  className = "",
  disabled = false,
  icon,
}: ButtonGoldProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-r from-yellow-400 to-yellow-600
        hover:from-yellow-500 hover:to-yellow-700
        text-black font-bold py-3 px-6 rounded-xl
        transition-all shadow-lg flex items-center justify-center
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
        ${className}
      `}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
