"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      href: "/chat",
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
      href: "/console",
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
      href: "/pricing",
      emoji: "⭐",
    },
    {
      id: "my-account",
      label: "My Account",
      icon: "👤",
      href: "/settings",
      emoji: "⚙️",
    },
    {
      id: "logout",
      label: "Logout",
      icon: "🚪",
      href: "/logout",
      emoji: "👋",
    },
  ];

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id);
    if (item.href === "/logout") {
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

      {/* Sidebar with golden border design */}
      <div
        className={`
        fixed left-0 top-0 h-full w-[320px] z-50 transform transition-transform duration-300
        lg:static lg:transform-none lg:z-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        flex flex-col
      `}
        style={{
          background: `linear-gradient(135deg, 
            rgba(16, 22, 28, 0.95) 0%, 
            rgba(24, 32, 42, 0.95) 50%, 
            rgba(16, 22, 28, 0.95) 100%)`,
          border: "3px solid #D4AF37",
          borderRadius: "24px",
          boxShadow: `
            0 0 30px rgba(212, 175, 55, 0.3),
            inset 0 1px 0 rgba(212, 175, 55, 0.2)
          `,
        }}
      >
        {/* Header with SaintVisionAI branding */}
        <div className="flex items-center justify-between p-6 border-b border-yellow-500/20">
          <div className="flex items-center space-x-3">
            {/* SV Logo Icon */}
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden relative"
              style={{
                background: `linear-gradient(135deg, #D4AF37 0%, #E5C547 50%, #D4AF37 100%)`,
                boxShadow: `
                  0 4px 15px rgba(212, 175, 55, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
              }}
            >
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fef556df9f2134479a582959e03ab77e9?format=webp&width=800"
                alt="SaintVisionAI Premium Brain Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-yellow-400">
                SaintVisionAI™
              </h1>
              <p className="text-xs text-yellow-500/80">Elite AI Sanctuary</p>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-yellow-500/10 transition-colors"
          >
            <span className="text-yellow-400 text-xl">��</span>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-3">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`
                w-full flex items-center space-x-4 px-6 py-4 rounded-full text-left
                transition-all duration-300 hover:scale-[1.02] group relative
                ${
                  activeItem === item.id
                    ? "bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-white shadow-lg shadow-yellow-500/25"
                    : "bg-gradient-to-r from-gray-700/60 to-gray-600/60 text-white hover:from-gray-600/80 hover:to-gray-500/80"
                }
              `}
              style={{
                backdropFilter: "blur(10px)",
                border:
                  activeItem === item.id
                    ? "1px solid rgba(212, 175, 55, 0.3)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <span className="font-medium text-sm flex-1 leading-tight">
                {item.label}
              </span>
              {item.emoji && (
                <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  {item.emoji}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Footer with SAINTSAL™ Branding */}
        <div className="p-6 border-t border-yellow-500/20">
          {/* User Avatar */}
          <div className="flex items-center justify-center mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, #4A5568 0%, #2D3748 100%)`,
                border: "2px solid #D4AF37",
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
              }}
            >
              <span className="text-white font-bold text-sm">AP</span>
            </div>
          </div>

          {/* Premium Cookin' Knowledge Logo */}
          <div className="flex justify-center mb-3">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F88465a2d1f0c4d7cab7b4f6831fc9307?format=webp&width=800"
              alt="Cookin' Knowledge Premium Script"
              width={120}
              height={40}
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <p className="text-xs text-yellow-400 text-center font-medium">
            SAINTSAL™ Movement
          </p>
          <p className="text-xs text-yellow-500/70 text-center mt-1">
            Cookin' Knowledge
          </p>
        </div>
      </div>
    </>
  );
}

export default SaintVisionSidebar;
