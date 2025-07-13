"use client";

import React, { useState } from "react";
import SaintVisionSidebar from "./SaintVisionSidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export function MainLayout({ children, showSidebar = false }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(showSidebar);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      {showSidebar && (
        <SaintVisionSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${showSidebar && sidebarOpen ? "lg:ml-80" : ""}`}
      >
        {/* Mobile Menu Button */}
        {showSidebar && (
          <button
            onClick={toggleSidebar}
            className="lg:hidden fixed top-4 left-4 z-30 bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded-lg shadow-lg transition-colors"
          >
            <span className="text-lg">☰</span>
          </button>
        )}

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
