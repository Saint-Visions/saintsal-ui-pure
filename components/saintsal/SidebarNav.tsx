"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SidebarNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: "🏠", label: "Main Dashboard", href: "/dashboard", active: true },
    { icon: "🧠", label: "My Companion", href: "/chat", badge: "🧠" },
    { icon: "💼", label: "My Business", href: "/business", badge: "💼" },
    { icon: "📝", label: "Sticky Notes", href: "/notes", badge: "📝" },
    { icon: "⚡", label: "AI Tools", href: "/tools", badge: "⚡📱" },
    { icon: "🎨", label: "Image Generator", href: "/image-gen", badge: "🎨" },
    { icon: "🚀", label: "SVG Launchpad", href: "/svg-launch", badge: "🚀" },
    { icon: "💡", label: "Feedback & Help", href: "/help", badge: "💡" },
    { icon: "📊", label: "PartnerTech.ai CRM", href: "/crm" },
    { icon: "👑", label: "Client Portal", href: "/clients", badge: "👑" },
    {
      icon: "🏛️",
      label: "SVT Institute of AI (R + D)",
      href: "/institute",
      badge: "🏛️",
    },
    {
      icon: "⚡",
      label: "Upgrade Tier",
      href: "/upgrade",
      special: true,
      badge: "⚡",
    },
    { icon: "👋", label: "My Account", href: "/account", badge: "👋" },
    { icon: "🚪", label: "Logout", href: "/logout", danger: true, badge: "👋" },
  ];

  return (
    <>
      {/* Sidebar Container */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-80"
        }`}
        style={{
          background: `linear-gradient(135deg, rgba(26, 31, 40, 0.95) 0%, rgba(16, 22, 28, 0.95) 100%)`,
          backdropFilter: "blur(20px)",
          borderRight: "1px solid rgba(255, 215, 0, 0.2)",
        }}
      >
        {/* Cookin Knowledge Background Logo - Static Blend */}
        <div
          className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800')`,
            filter: "sepia(100%) hue-rotate(40deg) saturate(200%)",
            mixBlendMode: "overlay",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full p-4">
          {/* Header */}
          <div className="mb-6">
            {!isCollapsed && (
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f08cc585a8e96a3b7cfdb90393ba065b2c2e4eb?width=2048"
                    alt="SV"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-lg tracking-wide"
                    style={{
                      fontFamily: '"Sora", system-ui, sans-serif',
                      textShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    SaintVisionAI™
                  </h3>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Items - Rounded Pills */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-4 px-6 py-4 rounded-full transition-all duration-300 group ${
                    item.active
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg"
                      : item.special
                        ? "bg-gradient-to-r from-yellow-600/20 to-orange-600/20 text-yellow-300 hover:from-yellow-600/30 hover:to-orange-600/30"
                        : item.danger
                          ? "bg-gray-500/20 text-red-400 hover:bg-red-600/20"
                          : "bg-gray-500/20 text-white hover:bg-gray-400/30"
                  }`}
                  style={{
                    backdropFilter: "blur(10px)",
                    border: item.active
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: item.active
                      ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                      : "0 4px 16px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {!isCollapsed && (
                    <>
                      <span
                        className="flex-1 text-sm font-medium tracking-wide"
                        style={{ fontFamily: '"Sora", system-ui, sans-serif' }}
                      >
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-xs opacity-70">{item.badge}</span>
                      )}
                    </>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer - User Profile */}
          <div className="mt-6 pt-6 border-t border-white/10">
            {!isCollapsed && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">AP</span>
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
            {isCollapsed && (
              <div className="flex justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AP</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#FFD700] hover:bg-[#FFA500] text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-20"
          style={{ boxShadow: "0 4px 16px rgba(255, 215, 0, 0.4)" }}
        >
          <span className="text-xs font-bold">{isCollapsed ? "→" : "←"}</span>
        </button>
      </motion.div>

      {/* Mobile Overlay */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
}
