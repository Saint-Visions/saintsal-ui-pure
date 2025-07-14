"use client";

import React from "react";
import { motion } from "framer-motion";

interface CommandCardProps {
  title: string;
  description?: string;
  icon: string | React.ReactNode;
  value?: string | number;
  trend?: "up" | "down" | "neutral";
  onClick?: () => void;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  className?: string;
}

export default function CommandCard({
  title,
  description,
  icon,
  value,
  trend = "neutral",
  onClick,
  variant = "default",
  className = "",
}: CommandCardProps) {
  const variants = {
    default: {
      bg: "bg-[#10161C]/60 border-white/10",
      accent: "text-white",
      glow: "hover:shadow-[0_0_20px_white]/10",
    },
    primary: {
      bg: "bg-[#FFD700]/10 border-[#FFD700]/30",
      accent: "text-[#FFD700]",
      glow: "hover:shadow-[0_0_20px_#FFD700]/20",
    },
    success: {
      bg: "bg-emerald-500/10 border-emerald-500/30",
      accent: "text-emerald-400",
      glow: "hover:shadow-[0_0_20px_emerald]/20",
    },
    warning: {
      bg: "bg-amber-500/10 border-amber-500/30",
      accent: "text-amber-400",
      glow: "hover:shadow-[0_0_20px_amber]/20",
    },
    danger: {
      bg: "bg-red-500/10 border-red-500/30",
      accent: "text-red-400",
      glow: "hover:shadow-[0_0_20px_red]/20",
    },
  };

  const trendConfig = {
    up: { icon: "↗", color: "text-emerald-400" },
    down: { icon: "↘", color: "text-red-400" },
    neutral: { icon: "→", color: "text-gray-400" },
  };

  const currentVariant = variants[variant];
  const currentTrend = trendConfig[trend];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: onClick ? 1.01 : 1, y: onClick ? -1 : 0 }}
      onClick={onClick}
      className={`
        relative p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 box-accent-glow
        ${currentVariant.bg}
        ${onClick ? `cursor-pointer` : ""}
        ${className}
      `}
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10,0 L 10,10 L 0,10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`text-2xl ${currentVariant.accent} flex items-center justify-center`}
          >
            {typeof icon === "string" ? icon : icon}
          </div>
          {value && (
            <div className="text-right">
              <div className="text-2xl font-bold font-mono text-white">
                {value}
              </div>
              {trend !== "neutral" && (
                <div
                  className={`text-xs font-mono ${currentTrend.color} flex items-center justify-end`}
                >
                  <span>{currentTrend.icon}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Title and description */}
        <div>
          <h3 className="text-lg font-bold text-white font-mono mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-400 text-sm font-mono leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Action indicator */}
        {onClick && (
          <div className="absolute bottom-4 right-4 opacity-50 hover:opacity-100 transition-opacity">
            <span className={`text-xs font-mono ${currentVariant.accent}`}>
              EXECUTE →
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
