"use client";

import React from "react";
import { motion } from "framer-motion";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "divine" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: string | React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export default function NeonButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  className = "",
}: NeonButtonProps) {
  const variants = {
    primary: {
      base: "bg-[#FFD700] text-[#10161C] border-[#FFD700]",
      hover: "hover:bg-[#FFD700]/90 hover:shadow-[0_0_20px_#FFD700]/50",
      glow: "shadow-[0_0_15px_#FFD700]/30",
    },
    secondary: {
      base: "bg-transparent text-white border-white/30",
      hover: "hover:bg-white/10 hover:border-white/50",
      glow: "hover:shadow-[0_0_15px_white]/20",
    },
    divine: {
      base: "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#10161C] border-[#FFD700]",
      hover:
        "hover:from-[#FFD700]/90 hover:to-[#FFA500]/90 hover:shadow-[0_0_25px_#FFD700]/40",
      glow: "shadow-[0_0_20px_#FFD700]/40",
    },
    danger: {
      base: "bg-red-600 text-white border-red-600",
      hover: "hover:bg-red-500 hover:shadow-[0_0_20px_red]/50",
      glow: "shadow-[0_0_15px_red]/30",
    },
  };

  const sizes = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  };

  const currentVariant = variants[variant];
  const currentSize = sizes[size];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`
        relative font-mono font-bold tracking-wide rounded-lg border transition-all duration-300
        ${currentVariant.base}
        ${disabled ? "opacity-50 cursor-not-allowed" : `${currentVariant.hover} ${currentVariant.glow}`}
        ${currentSize}
        ${className}
      `}
    >
      {/* Background glow effect */}
      {!disabled && (
        <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      )}

      {/* Content */}
      <div className="relative flex items-center justify-center space-x-2">
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </motion.button>
  );
}
