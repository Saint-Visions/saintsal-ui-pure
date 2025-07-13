"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SaintSalBossPanel from "../../components/SaintSalBossPanel";

export default function CRMPage() {
  const [showBossPanel, setShowBossPanel] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate CRM loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* PartnerTech.ai Professional Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fc6531d3225fc449e86e35b3449b04b5c?format=webp&width=800)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-black/70" />
      </div>
      {/* Header */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">📊</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CRM Dashboard</h1>
              <p className="text-gray-400 text-sm">GoHighLevel Integration</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-1">
              <span className="text-green-400 text-sm">🟢 Connected</span>
            </div>

            <button
              onClick={() => setShowBossPanel(true)}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-4 py-2 rounded-lg transition-all"
            >
              👑 Boss
            </button>
          </div>
        </div>
      </div>

      {/* CRM Stats Bar */}
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">127</div>
            <div className="text-xs text-gray-300">Active Leads</div>
          </div>

          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">32</div>
            <div className="text-xs text-gray-300">Conversions</div>
          </div>

          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">$47k</div>
            <div className="text-xs text-gray-300">Revenue</div>
          </div>

          <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">94%</div>
            <div className="text-xs text-gray-300">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Main CRM Content */}
      <div className="relative z-10 p-6">
        {isLoading ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <motion.div
                className="w-8 h-8 border-4 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Loading CRM Dashboard
            </h3>
            <p className="text-gray-400">Connecting to GoHighLevel...</p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl p-4 text-white transition-all">
                <div className="text-2xl mb-2">👥</div>
                <h3 className="font-bold">Manage Leads</h3>
                <p className="text-sm opacity-90">View and organize contacts</p>
              </button>

              <button className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl p-4 text-white transition-all">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-bold">Email Campaigns</h3>
                <p className="text-sm opacity-90">Create and send emails</p>
              </button>

              <button className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-xl p-4 text-white transition-all">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-bold">Schedule</h3>
                <p className="text-sm opacity-90">Manage appointments</p>
              </button>
            </div>

            {/* CRM Interface */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gray-800/50 p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">
                    GoHighLevel CRM
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 text-sm">●</span>
                    <span className="text-gray-400 text-sm">
                      Live Dashboard
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    CRM Integration Ready
                  </h3>
                  <p className="text-gray-400 mb-4">
                    GoHighLevel dashboard will be embedded here
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>• Lead management system</p>
                    <p>• Email automation workflows</p>
                    <p>• Calendar booking integration</p>
                    <p>• Pipeline tracking & analytics</p>
                  </div>

                  <button className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-lg transition-all">
                    Configure CRM URL
                  </button>
                </div>
              </div>
            </div>

            {/* CRM Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  Recent Activity
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-blue-400">👤</span>
                    <div className="flex-1">
                      <p className="text-white text-sm">New lead: John Smith</p>
                      <p className="text-gray-400 text-xs">5 minutes ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-green-400">📧</span>
                    <div className="flex-1">
                      <p className="text-white text-sm">Email campaign sent</p>
                      <p className="text-gray-400 text-xs">1 hour ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-purple-400">💰</span>
                    <div className="flex-1">
                      <p className="text-white text-sm">Deal closed: $5,000</p>
                      <p className="text-gray-400 text-xs">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-4">
                  AI Insights
                </h4>
                <div className="space-y-4">
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400">🧠</span>
                      <span className="text-blue-400 font-medium text-sm">
                        Lead Quality Score
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Your recent leads show 87% higher engagement than average
                    </p>
                  </div>

                  <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400">📈</span>
                      <span className="text-green-400 font-medium text-sm">
                        Conversion Trend
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Conversion rate increased 23% this week
                    </p>
                  </div>

                  <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-yellow-400">⚡</span>
                      <span className="text-yellow-400 font-medium text-sm">
                        Optimization Tip
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Follow up within 5 minutes for 400% better results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Boss Panel */}
      <SaintSalBossPanel
        isVisible={showBossPanel}
        onToggle={() => setShowBossPanel(!showBossPanel)}
        currentInput=""
        messages={[]}
      />
    </div>
  );
}
