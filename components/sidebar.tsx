"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
  icon: string;
  emoji?: string;
  requiresPro?: boolean;
  requiresAdmin?: boolean;
}

const navItems: MenuItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "CRM", href: "/crm", icon: "💼" },
  { name: "Upgrade", href: "/upgrade", icon: "⚡" },
  { name: "Profile", href: "/settings", icon: "👤" },
  { name: "Console", href: "/console", icon: "🔧" },
  { name: "Admin", href: "/admin", icon: "👑", requiresAdmin: true },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#10161C] border-r border-[#D4AF37]/20 z-50">
      {/* Header */}
      <div className="p-4 border-b border-[#D4AF37]/20">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-lg flex items-center justify-center">
            <div className="text-black font-bold text-sm">SV</div>
          </div>
          <div>
            <div className="text-[#D4AF37] text-xs font-medium">SAINTSAL™</div>
            <div className="text-white text-sm font-semibold">
              SaintVisionAI
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left
                  transition-all duration-200 group
                  ${
                    isActive
                      ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                      : "text-gray-300 hover:bg-gray-700/50 hover:text-[#D4AF37]"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium flex-1">{item.name}</span>
                {item.emoji && (
                  <span className="text-sm opacity-70 group-hover:opacity-100">
                    {item.emoji}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#D4AF37]/20">
        <div className="text-center text-xs text-gray-400">
          <div className="text-[#D4AF37] font-medium">SAINTSAL™</div>
          <div>Elite AI Sanctuary</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
