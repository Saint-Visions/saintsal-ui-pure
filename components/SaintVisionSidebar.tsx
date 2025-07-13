"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  emoji?: string;
  isActive?: boolean;
}

interface SaintVisionSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function SaintVisionSidebar({
  isOpen = true,
  onClose,
}: SaintVisionSidebarProps) {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("main-dashboard");

  const sidebarItems: SidebarItem[] = [
    {
      id: "main-dashboard",
      label: "Main Dashboard",
      icon: "🏠",
      href: "/dashboard",
    },
    {
      id: "my-companion",
      label: "My Companion",
      icon: "👤",
      href: "/companion",
      emoji: "🌸",
    },
    {
      id: "my-business",
      label: "My Business",
      icon: "💼",
      href: "/crm",
      emoji: "🏢",
    },
    {
      id: "sticky-notes",
      label: "Sticky Notes",
      icon: "📝",
      href: "/notes",
      emoji: "📋",
    },
    {
      id: "ai-tools",
      label: "AI Tools",
      icon: "🤖",
      href: "/tools",
      emoji: "⚡",
    },
    {
      id: "image-generator",
      label: "Image Generator",
      icon: "🎨",
      href: "/image-gen",
      emoji: "🖼️",
    },
    {
      id: "svg-launchpad",
      label: "SVG Launchpad",
      icon: "🚀",
      href: "/svg",
      emoji: "🎯",
    },
    {
      id: "feedback-help",
      label: "Feedback & Help",
      icon: "💬",
      href: "/help",
      emoji: "💡",
    },
    {
      id: "partner-crm",
      label: "PartnerTech.ai CRM",
      icon: "📊",
      href: "/partner-crm",
    },
    {
      id: "client-portal",
      label: "Client Portal",
      icon: "🌐",
      href: "/portal",
      emoji: "🔗",
    },
    {
      id: "svt-institute",
      label: "SVT Institute of AI (R + D)",
      icon: "🎓",
      href: "/institute",
      emoji: "🏛️",
    },
    {
      id: "upgrade-tier",
      label: "Upgrade Tier",
      icon: "⚡",
      href: "/upgrade",
      emoji: "⭐",
    },
    {
      id: "my-account",
      label: "My Account",
      icon: "👤",
      href: "/account",
      emoji: "⚙️",
    },
    { id: "logout", label: "Logout", icon: "🚪", href: "/logout", emoji: "👋" },
  ];

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id);
    if (item.href === "/logout") {
      // Handle logout logic
      console.log("Logout clicked");
      return;
    }
    router.push(item.href);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`
        fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-amber-50 to-amber-100
        border-4 border-amber-400 rounded-r-3xl z-50 transform transition-transform duration-300
        lg:static lg:transform-none lg:z-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col shadow-2xl
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-amber-200">
          <div className="flex items-center space-x-3">
            {/* SaintVisionAI Logo */}
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SV</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">
                SaintVisionAI™
              </h1>
              <p className="text-xs text-gray-600">Elite AI Sanctuary</p>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-amber-200 transition-colors"
          >
            <span className="text-gray-600">✕</span>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-left
                transition-all duration-200 hover:scale-[1.02] group
                ${
                  activeItem === item.id
                    ? "bg-gray-600 text-white shadow-lg"
                    : "bg-gray-400/70 text-white hover:bg-gray-500/80"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium text-sm flex-1">{item.label}</span>
              {item.emoji && (
                <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.emoji}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-200">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AP</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            SAINTSAL™ Movement
          </p>
        </div>
      </div>
    </>
  );
}

export default SaintVisionSidebar;
