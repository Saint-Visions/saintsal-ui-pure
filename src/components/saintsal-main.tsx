import React, { useState, useEffect } from "react";
import { BuilderComponent } from "@builder.io/react";
import LandingPage from "./landing/landing-page";
import ChatDualBot from "./chat/chat-dualbot";
import Dashboard from "./dashboard/dashboard-main";
import AuthModal from "./auth/auth-modal";
import Sidebar from "./shared/sidebar";
import { useAuth } from "../../lib/hooks/use-auth";
import { useSavedConversations } from "../../lib/hooks/use-saved-conversations";

export default function SaintSalMain(props: any) {
  const [currentPage, setCurrentPage] = useState("landing");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, loading, isProUser, isAdmin } = useAuth();
  const { conversations } = useSavedConversations();

  // Route mapping based on your blueprint
  const routeMap = {
    "/": "landing",
    "/login": "auth",
    "/signup": "auth",
    "/dashboard": "dashboard",
    "/chat": "chat",
    "/partnertech": "partnertech",
    "/pricing": "pricing",
    "/crm": "crm",
  };

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(routeMap[path as keyof typeof routeMap] || "landing");
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#10161C] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto animate-pulse shadow-lg">
            <div className="text-black font-bold text-xl">SV</div>
          </div>
          <div className="text-yellow-400 text-sm font-medium mb-1">
            SAINTSAL™
          </div>
          <p className="text-white/70">Loading your AI sanctuary...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return (
          <LandingPage
            onStartCooking={() =>
              user ? setCurrentPage("chat") : setAuthModalOpen(true)
            }
            onAIChat={() =>
              user ? setCurrentPage("chat") : setAuthModalOpen(true)
            }
            onSignIn={() => setAuthModalOpen(true)}
          />
        );

      case "chat":
        return user ? (
          <ChatDualBot
            user={user}
            isProUser={isProUser}
            conversations={conversations}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          />
        ) : (
          <LandingPage onSignIn={() => setAuthModalOpen(true)} />
        );

      case "dashboard":
        return user ? (
          <Dashboard
            user={user}
            isProUser={isProUser}
            isAdmin={isAdmin}
            onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          />
        ) : (
          <LandingPage onSignIn={() => setAuthModalOpen(true)} />
        );

      default:
        return <LandingPage onSignIn={() => setAuthModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#10161C] text-white overflow-hidden">
      {/* Sidebar for authenticated users */}
      {user && (
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          user={user}
          isProUser={isProUser}
          isAdmin={isAdmin}
        />
      )}

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${user && sidebarOpen ? "md:ml-80" : ""}`}
      >
        {/* Builder.io Dynamic Content Override */}
        {props.content && (
          <BuilderComponent model="page" content={props.content} />
        )}

        {/* Core Application */}
        {!props.content && renderPage()}
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={() => {
          setAuthModalOpen(false);
          setCurrentPage("dashboard");
        }}
      />
    </div>
  );
}
