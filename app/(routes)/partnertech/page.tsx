"use client";
import { useAuth } from "../../../lib/hooks/use-auth";
import {
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "../../../lib/animations/page-transitions";
import { BuilderWrapper } from "../../../integration/builder/builder-wrapper";

export default function PartnerTechPage() {
  const { user, isProUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-yellow-400">
          Loading PartnerTech...
        </div>
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
              Please sign in to access PartnerTech
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

  if (!isProUser) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <div className="text-black font-bold text-3xl">PT</div>
            </div>
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">
              PartnerTech Pro
            </h1>
            <p className="text-white/70 mb-6 max-w-md">
              Advanced CRM integration with GoHighLevel, Stripe billing, and
              premium AI tools.
            </p>
            <p className="text-yellow-400 font-semibold mb-6">
              Pro subscription required
            </p>
            <a
              href="/upgrade"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-8 rounded-xl inline-block"
            >
              Upgrade to Pro
            </a>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <StaggerContainer className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="container mx-auto px-6 py-8">
          <StaggerItem>
            <div className="mb-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <div className="text-white font-bold text-2xl">PT</div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">
                PartnerTech Pro
              </h1>
              <p className="text-white/70">
                Advanced CRM & AI Integration Suite
              </p>
            </div>
          </StaggerItem>

          <StaggerContainer
            delay={0.2}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <StaggerItem>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
                <div className="text-2xl mb-4">🔗</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  GoHighLevel CRM
                </h3>
                <p className="text-white/70 mb-4">
                  Live sync with your CRM pipeline
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">● Connected</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
                <div className="text-2xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Stripe Billing
                </h3>
                <p className="text-white/70 mb-4">
                  Automated payment processing
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 text-sm">● Active</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-500/20">
                <div className="text-2xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Automation
                </h3>
                <p className="text-white/70 mb-4">GPT-4o powered workflows</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 text-sm">● Learning</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                    Setup
                  </button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Builder.io content override */}
          <StaggerItem>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Custom Integrations
              </h2>
              <BuilderWrapper model="partnertech-page" content={null} />
            </div>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </PageTransition>
  );
}
