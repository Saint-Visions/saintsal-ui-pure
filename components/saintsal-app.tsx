import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import LandingPage from "./landing-page";
import Sidebar from "./sidebar";
import LoginPage from "./auth/login-page";
import SignupPage from "./auth/signup-page";
import Dashboard from "./dashboard/dashboard";
import ChatInterface from "./chat/chat-interface";
import PartnerTechDashboard from "./partnertech/partnertech-dashboard";
import PricingPage from "./pricing/pricing-page";
import CRMInterface from "./crm/crm-interface";
import SettingsPage from "./settings/settings-page";
import { useAuth } from "../hooks/use-auth";

// Route configuration based on your blueprint
const ROUTES = {
  PUBLIC: ["/", "/login", "/signup", "/pricing"],
  AUTH_REQUIRED: ["/dashboard", "/chat", "/settings", "/upgrade"],
  PRO_REQUIRED: [
    "/partnertech",
    "/crm",
    "/chrome-install",
    "/referral/invite",
    "/setup",
  ],
  ADMIN_REQUIRED: ["/admin/clients", "/admin/logs"],
};

export default function SaintSalApp() {
  const router = useRouter();
  const { user, loading, isProUser, isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(router.pathname);
  }, [router.pathname]);

  // Route protection logic
  const isRouteAllowed = (path: string) => {
    if (ROUTES.PUBLIC.includes(path)) return true;
    if (ROUTES.AUTH_REQUIRED.includes(path)) return !!user;
    if (ROUTES.PRO_REQUIRED.includes(path)) return !!user && isProUser;
    if (ROUTES.ADMIN_REQUIRED.includes(path)) return !!user && isAdmin;
    return true;
  };

  // Redirect logic for protected routes
  useEffect(() => {
    if (!loading && !isRouteAllowed(currentPage)) {
      if (!user) {
        router.push("/login");
      } else if (ROUTES.PRO_REQUIRED.includes(currentPage) && !isProUser) {
        router.push("/upgrade");
      } else if (ROUTES.ADMIN_REQUIRED.includes(currentPage) && !isAdmin) {
        router.push("/dashboard");
      }
    }
  }, [currentPage, user, loading, isProUser, isAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="text-black font-bold text-xl">SV</div>
          </div>
          <p className="text-yellow-400">Loading SaintSal™...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case "/":
        return <LandingPage />;
      case "/login":
        return <LoginPage />;
      case "/signup":
        return <SignupPage />;
      case "/dashboard":
        return <Dashboard />;
      case "/chat":
        return <ChatInterface />;
      case "/partnertech":
        return <PartnerTechDashboard />;
      case "/pricing":
        return <PricingPage />;
      case "/crm":
        return <CRMInterface />;
      case "/settings":
        return <SettingsPage />;
      default:
        return <LandingPage />;
    }
  };

  // Show sidebar for authenticated pages
  const showSidebar = user && !ROUTES.PUBLIC.includes(currentPage);

  return (
    <div className="min-h-screen bg-black text-white">
      {showSidebar && (
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          user={user}
          isProUser={isProUser}
          isAdmin={isAdmin}
        />
      )}

      <main
        className={`transition-all duration-300 ${showSidebar ? "md:ml-64" : ""}`}
      >
        {renderPage()}
      </main>
    </div>
  );
}
