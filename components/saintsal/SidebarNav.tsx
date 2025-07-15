"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SidebarNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: "🏠", label: "Main Dashboard", href: "/dashboard", active: true },
    { icon: "🧠", label: "My Companion", href: "/chat" },
    { icon: "💼", label: "My Business", href: "/business" },
    { icon: "📝", label: "Sticky Notes", href: "/notes" },
    { icon: "⚡", label: "AI Tools", href: "/tools" },
    { icon: "🎨", label: "Image Generator", href: "/image-gen" },
    { icon: "🚀", label: "SVG Launchpad", href: "/svg-launch" },
    { icon: "💡", label: "Feedback & Help", href: "/help" },
    { icon: "📊", label: "PartnerTech.ai CRM", href: "/crm" },
    { icon: "👑", label: "Client Portal", href: "/clients" },
    { icon: "🏛️", label: "SVT Institute of AI (R + D)", href: "/institute" },
    { icon: "⚡", label: "Upgrade Tier", href: "/upgrade", special: true },
    { icon: "👋", label: "My Account", href: "/account" },
    { icon: "🚪", label: "Logout", href: "/logout", danger: true },
  ];

  return (
    <>
      {/* Sidebar Container */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 top-0 h-screen bg-[#1a1f28]/95 backdrop-blur-lg border-r border-[#FFD700]/20 z-50 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-72"
        }`}
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Background Overlay for readability */}
        <div className="absolute inset-0 bg-[#10161C]/85 backdrop-blur-sm" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-[#FFD700]/20">
            <div className="flex items-center justify-between">
              {!isCollapsed && (
                <div className="flex items-center space-x-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f08cc585a8e96a3b7cfdb90393ba065b2c2e4eb?width=2048"
                    alt="SaintVisionAI"
                    className="w-10 h-10 object-contain rounded-lg"
                  />
                  <div>
                    <h3
                      className="text-[#FFD700] font-bold text-sm tracking-wide"
                      style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                    >
                      SaintVisionAI™
                    </h3>
                    <p className="text-white/60 text-xs">Elite AI Sanctuary</p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-[#FFD700] hover:text-[#FFA500] transition-colors p-1"
              >
                {isCollapsed ? "→" : "←"}
              </button>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    item.active
                      ? "bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30"
                      : item.special
                        ? "bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 hover:bg-yellow-600/30"
                        : item.danger
                          ? "text-red-400 hover:bg-red-600/20"
                          : "text-white/70 hover:bg-[#FFD700]/10 hover:text-[#FFD700]"
                  }`}
                  style={{
                    boxShadow: item.active
                      ? "inset 0 0 20px rgba(255, 215, 0, 0.2)"
                      : "none",
                  }}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {!isCollapsed && (
                    <span
                      className="text-sm font-medium tracking-wide"
                      style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                    >
                      {item.label}
                    </span>
                  )}
                  {!isCollapsed && (
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs">→</span>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[#FFD700]/20">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FFD700]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#FFD700] text-xs font-bold">AP</span>
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">
                    Admin Portal
                  </div>
                  <div className="text-white/60 text-xs">Elite Access</div>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Sidebar Toggle for Mobile */}
      <button
        className="fixed top-4 left-4 z-60 md:hidden bg-[#FFD700] text-black p-2 rounded-lg shadow-lg"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        ☰
      </button>
    </>
  );
}
