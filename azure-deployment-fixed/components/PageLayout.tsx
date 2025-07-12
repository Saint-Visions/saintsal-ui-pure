"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { Sidebar } from "./Sidebar";

interface PageLayoutProps {
  children: ReactNode;
  background?: string;
  showSidebar?: boolean;
  className?: string;
}

export function PageLayout({
  children,
  background = "saintsal-landing-bg",
  showSidebar = false,
  className = "",
}: PageLayoutProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Layer */}
      <div className={`absolute inset-0 ${background}`}>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full">
        {/* Sidebar - Only show when requested */}
        {showSidebar && <Sidebar />}

        {/* Main Content Area */}
        <main
          className={`flex-1 overflow-y-auto ${
            showSidebar ? "ml-64" : ""
          } ${className}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

// Specialized layouts for different pages
export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout background="saintsal-dashboard-bg" showSidebar={true}>
      {children}
    </PageLayout>
  );
}

export function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout background="saintsal-landing-bg" showSidebar={false}>
      {children}
    </PageLayout>
  );
}

export function CRMLayout({ children }: { children: ReactNode }) {
  return (
    <PageLayout background="saintsal-crm-bg" showSidebar={true}>
      {children}
    </PageLayout>
  );
}
