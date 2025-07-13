"use client";
import React from "react";

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <div className="text-black font-bold text-xl">SV</div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            SaintVisionAI™ Brand Showcase
          </h1>
          <p className="text-gray-400 text-lg">
            Elite AI Sanctuary • Patent-Protected Movement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Elements */}
          <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/20">
            <h3 className="text-yellow-400 font-bold text-lg mb-4">
              🏆 Patent Protection
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              U.S. Patent No. 10,290,222 - Patent-Protected AI Movement
              Technology
            </p>
            <div className="text-white font-mono text-xs bg-black p-2 rounded">
              GOTTA GUY™ Methodology
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-blue-500/20">
            <h3 className="text-blue-400 font-bold text-lg mb-4">
              🔥 Cooking Knowledge
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              AI-powered culinary intelligence with personalized cooking
              insights
            </p>
            <div className="text-white font-mono text-xs bg-black p-2 rounded">
              Elite Sanctuary Access
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-green-500/20">
            <h3 className="text-green-400 font-bold text-lg mb-4">
              ⚡ Azure Power
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Azure Cognitive Services + OpenAI GPT-4o integration
            </p>
            <div className="text-white font-mono text-xs bg-black p-2 rounded">
              Enterprise Infrastructure
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gray-900 rounded-xl p-8 border border-yellow-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            🚀 SaintVisionAI™ Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <h4 className="text-white font-semibold">Lead Discovery</h4>
                  <p className="text-gray-400 text-sm">
                    AI-powered customer lookup
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h4 className="text-white font-semibold">Referral Network</h4>
                  <p className="text-gray-400 text-sm">
                    Partner tracking system
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="text-white font-semibold">AI Deal Analysis</h4>
                  <p className="text-gray-400 text-sm">
                    GPT-4 business insights
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="text-white font-semibold">Mobile Export</h4>
                  <p className="text-gray-400 text-sm">
                    iOS/Android applications
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="text-white font-semibold">Custom Solutions</h4>
                  <p className="text-gray-400 text-sm">
                    Tailored AI implementations
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-white font-semibold">Elite Support</h4>
                  <p className="text-gray-400 text-sm">
                    Premium member assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-8">
            <h3 className="text-black font-bold text-2xl mb-4">
              Ready to Join the Movement?
            </h3>
            <p className="text-black/80 mb-6">
              Experience the patent-protected AI sanctuary designed for Saints
            </p>
            <div className="text-black/70 text-sm">
              SaintVisionAI™ • SAINTSAL™ Movement • Elite AI Sanctuary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
