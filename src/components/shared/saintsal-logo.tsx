"use client";
import React from "react";

interface SaintSalLogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export function SaintSalLogo({
  size = "medium",
  className = "",
}: SaintSalLogoProps) {
  const sizeClasses = {
    small: "w-12 h-12 text-sm",
    medium: "w-20 h-20 text-xl",
    large: "w-24 h-24 text-3xl",
  };

  return (
    <div
      className={`
      bg-gradient-to-br from-yellow-400 to-yellow-600 
      rounded-xl flex items-center justify-center 
      shadow-lg ${sizeClasses[size]} ${className}
    `}
    >
      <div className="text-black font-bold">SV</div>
    </div>
  );
}
