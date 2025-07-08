"use client";
import { useAuth } from "../../../lib/hooks/use-auth";
import {
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "../../../lib/animations/page-transitions";
import { BuilderWrapper } from "../../../integration/builder/builder-wrapper";

export default function ConsolePage() {
  const { user, isProUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-400">Loading Console...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-yellow-400 mb-4">
              Access Denied
            </h1>
            <p className="text-white/70 mb-6">
              Please sign in to access the console
            </p>
            <a
              href="/login"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-xl"
            >
              Sign In
            </a>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <StaggerContainer className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-6 py-8">
          <StaggerItem>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-yellow-400 mb-2">
                AI Console
              </h1>
              <p className="text-white/70">Your SaintVisionAI command center</p>
            </div>
          </StaggerItem>

          <StaggerContainer
            delay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <StaggerItem>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-yellow-500/20">
                <div className="text-2xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Companion
                </h3>
                <p className="text-white/70 mb-4">Your personal AI assistant</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  Open Chat
                </button>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-yellow-500/20">
                <div className="text-2xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
                <p className="text-white/70 mb-4">
                  Track your AI usage and insights
                </p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                  View Stats
                </button>
              </div>
            </StaggerItem>

            {isProUser && (
              <StaggerItem>
                <div className="bg-gray-900/50 rounded-xl p-6 border border-yellow-500/20">
                  <div className="text-2xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Pro Tools
                  </h3>
                  <p className="text-white/70 mb-4">Advanced AI capabilities</p>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                    Access Tools
                  </button>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>

          {/* Builder.io content override */}
          <div className="mt-12">
            <BuilderWrapper model="console-page" content={null} />
          </div>
        </div>
      </StaggerContainer>
    </PageTransition>
  );
}
