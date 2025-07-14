"use client";

import React from "react";
import { motion } from "framer-motion";

interface CircuitBGProps {
  intensity?: "low" | "medium" | "high";
  animated?: boolean;
  color?: "gold" | "blue" | "white";
  className?: string;
}

export default function CircuitBG({
  intensity = "medium",
  animated = true,
  color = "gold",
  className = "",
}: CircuitBGProps) {
  const colors = {
    gold: "#FFD700",
    blue: "#60A5FA",
    white: "#FFFFFF",
  };

  const intensityConfig = {
    low: { opacity: 0.05, density: 40 },
    medium: { opacity: 0.1, density: 30 },
    high: { opacity: 0.15, density: 20 },
  };

  const config = intensityConfig[intensity];
  const strokeColor = colors[color];

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main circuit pattern */}
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        style={{ opacity: config.opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: config.opacity * 0.6 }}
        transition={{ duration: 2 }}
      >
        <defs>
          {/* Circuit pattern */}
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width={config.density}
            height={config.density}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${config.density / 2},0 L ${config.density / 2},${config.density / 2} L 0,${config.density / 2}`}
              stroke={strokeColor}
              strokeWidth="0.5"
              fill="none"
            />
            <circle
              cx={config.density / 2}
              cy={config.density / 2}
              r="1"
              fill={strokeColor}
            />
          </pattern>

          {/* Glowing effect for animated elements */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circuit grid */}
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />

        {/* Animated circuit lines */}
        {animated && (
          <g filter="url(#glow)">
            {/* Horizontal flowing line */}
            <motion.path
              d="M 0,150 L 200,150 L 200,250 L 400,250 L 400,150 L 800,150"
              stroke={strokeColor}
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              }}
            />

            {/* Vertical flowing line */}
            <motion.path
              d="M 400,0 L 400,150 L 500,150 L 500,300 L 600,300 L 600,600"
              stroke={strokeColor}
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
            />

            {/* Diagonal flowing line */}
            <motion.path
              d="M 100,600 L 300,400 L 500,400 L 700,200 L 800,200"
              stroke={strokeColor}
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
          </g>
        )}

        {/* Pulse nodes */}
        {animated && (
          <g>
            <motion.circle
              cx="200"
              cy="150"
              r="3"
              fill={strokeColor}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="500"
              cy="300"
              r="3"
              fill={strokeColor}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
            <motion.circle
              cx="300"
              cy="400"
              r="3"
              fill={strokeColor}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            />
          </g>
        )}
      </motion.svg>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F6b86fa2c1e4c414ba874771fa8473016?format=webp&width=1200')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: config.opacity * 2,
          animationDuration: "2s",
          animationIterationCount: "infinite",
          animationName: "pulse",
          animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
        }}
      />
    </div>
  );
}
