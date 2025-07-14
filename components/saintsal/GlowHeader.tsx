"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowHeaderProps {
  title: string;
  subtitle?: string;
  icon?: string;
  status?: "connected" | "active" | "loading";
  rightAction?: React.ReactNode;
}

export default function GlowHeader({
  title,
  subtitle,
  icon = "⚡",
  status = "active",
  rightAction,
}: GlowHeaderProps) {
  const statusConfig = {
    connected: {
      color: "text-emerald-400",
      dot: "bg-emerald-400",
      text: "CONNECTED",
    },
    active: { color: "text-[#FFD700]", dot: "bg-[#FFD700]", text: "ACTIVE" },
    loading: { color: "text-blue-400", dot: "bg-blue-400", text: "LOADING" },
  };

  const currentStatus = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-[#10161C]/90 backdrop-blur-sm border-b border-[#FFD700]/20 p-6"
    >
      {/* Golden glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#FFD700]/5" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Icon with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-xl blur-lg" />
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFD700]/70 rounded-xl flex items-center justify-center text-[#10161C] text-xl font-bold">
              {icon}
            </div>
          </div>

          {/* Title and subtitle */}
          <div>
            <h1 className="text-2xl font-bold text-white font-mono tracking-wider">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-400 text-sm font-mono tracking-wide mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Status and actions */}
        <div className="flex items-center space-x-4">
          {/* Status indicator */}
          <div className="flex items-center space-x-2 bg-black/40 rounded-lg px-3 py-2 border border-white/10">
            <motion.div
              className={`w-2 h-2 rounded-full ${currentStatus.dot}`}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className={`text-xs font-mono font-bold ${currentStatus.color}`}
            >
              {currentStatus.text}
            </span>
          </div>

          {/* Right action */}
          {rightAction}
        </div>
      </div>
    </motion.div>
  );
}
