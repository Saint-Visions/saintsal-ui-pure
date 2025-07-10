import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentPage: string;
  user: any;
  isProUser: boolean;
  isAdmin: boolean;
}

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  emoji?: string;
  requiresPro?: boolean;
  requiresAdmin?: boolean;
}

const menuItems: MenuItem[] = [
  { name: "Main Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "My Companion", href: "/chat", icon: "👤", emoji: "🧠" },
  { name: "My Business", href: "/business", icon: "💼", emoji: "📊" },
  { name: "Sticky Notes", href: "/notes", icon: "📝", emoji: "📌" },
  { name: "AI Tools", href: "/ai-tools", icon: "⚡", emoji: "🔧" },
  { name: "Image Generator", href: "/image-gen", icon: "🎨", emoji: "🖼️" },
  { name: "SVG Launchpad", href: "/svg-tools", icon: "🚀", emoji: "🎯" },
  { name: "Feedback & Help", href: "/help", icon: "⚙️", emoji: "💡" },
  {
    name: "PartnerTech.ai CRM",
    href: "/partnertech",
    icon: "💳",
    requiresPro: true,
  },
  { name: "Client Portal", href: "/client-portal", icon: "🏛️", emoji: "🌟" },
  {
    name: "SVT Institute of AI (R + D)",
    href: "/institute",
    icon: "🏛️",
    emoji: "🔬",
  },
  { name: "Upgrade Tier", href: "/upgrade", icon: "⚡", emoji: "⭐" },
  { name: "My Account", href: "/settings", icon: "👤", emoji: "⚙️" },
  {
    name: "Admin Panel",
    href: "/admin/clients",
    icon: "👑",
    requiresAdmin: true,
  },
  { name: "Logout", href: "/logout", icon: "🚪", emoji: "👋" },
];

export default function Sidebar({
  isOpen,
  onToggle,
  currentPage,
  user,
  isProUser,
  isAdmin,
}: SidebarProps) {
  const router = useRouter();

  const filteredMenuItems = menuItems.filter((item) => {
    if (item.requiresAdmin && !isAdmin) return false;
    if (item.requiresPro && !isProUser) return false;
    return true;
  });

  const handleItemClick = (href: string, requiresPro?: boolean) => {
    if (requiresPro && !isProUser) {
      router.push("/upgrade");
      return;
    }
    router.push(href);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 
        border-r border-yellow-500/20 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Header */}
        <div className="p-4 border-b border-yellow-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <div className="text-black font-bold text-sm">SV</div>
            </div>
            <div>
              <div className="text-yellow-400 text-xs font-medium">
                SAINTSAL™
              </div>
              <div className="text-white text-sm font-semibold">
                SaintVisionAI
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {filteredMenuItems.map((item) => {
              const isActive = currentPage === item.href;
              const isDisabled = item.requiresPro && !isProUser;

              return (
                <button
                  key={item.name}
                  onClick={() => handleItemClick(item.href, item.requiresPro)}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left
                    transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    }
                    ${isDisabled ? "opacity-50" : ""}
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium flex-1">
                    {item.name}
                  </span>
                  {item.emoji && (
                    <span className="text-sm opacity-70 group-hover:opacity-100">
                      {item.emoji}
                    </span>
                  )}
                  {item.requiresPro && !isProUser && (
                    <span className="text-xs bg-yellow-500 text-black px-1 rounded">
                      PRO
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-yellow-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.email?.charAt(0).toUpperCase() || "AP"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {user?.email || "Guest User"}
              </p>
              <p className="text-gray-400 text-xs">
                {isAdmin ? "Admin" : isProUser ? "Pro User" : "Free User"}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onToggle}
          className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </>
  );
}
