"use client";

import React from "react";
import { Content, fetchOneEntry } from "@builder.io/sdk-react";
import { DashboardLayout } from "../../components/PageLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen p-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="saintsal-title text-3xl mb-2">
                Welcome to Your Elite Sanctuary
              </h1>
              <p className="saintsal-body">
                Your SaintVisionAI™ dashboard is ready for divine execution.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-lg flex items-center justify-center">
                <div className="text-black font-bold text-lg">SV</div>
              </div>
            </div>
          </div>
        </div>

        {/* Builder.io Content */}
        <div className="mb-8">
          <Content
            apiKey="d83998c6a81f466db4fb83ab90c7ba25"
            model="page"
            userAttributes={{ urlPath: "/dashboard" }}
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h3 className="text-[#D4AF37] font-semibold">Lead Discovery</h3>
            </div>
            <p className="saintsal-body mb-4">
              AI-powered lead generation and discovery tools.
            </p>
            <button className="saintsal-button-secondary w-full py-2 rounded-lg">
              Launch Tool
            </button>
          </div>

          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🤝</span>
              <h3 className="text-[#D4AF37] font-semibold">Referral Network</h3>
            </div>
            <p className="saintsal-body mb-4">
              Manage your partner network and referral tracking.
            </p>
            <button className="saintsal-button-secondary w-full py-2 rounded-lg">
              Open CRM
            </button>
          </div>

          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📊</span>
              <h3 className="text-[#D4AF37] font-semibold">AI Analysis</h3>
            </div>
            <p className="saintsal-body mb-4">
              GPT-4 powered deal analysis and insights.
            </p>
            <button className="saintsal-button-secondary w-full py-2 rounded-lg">
              View Reports
            </button>
          </div>

          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📱</span>
              <h3 className="text-[#D4AF37] font-semibold">Mobile Export</h3>
            </div>
            <p className="saintsal-body mb-4">
              Export to iOS and Android applications.
            </p>
            <button className="saintsal-button-secondary w-full py-2 rounded-lg">
              Export Now
            </button>
          </div>

          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🧠</span>
              <h3 className="text-[#D4AF37] font-semibold">AI Chat</h3>
            </div>
            <p className="saintsal-body mb-4">
              Your personal SaintSal™ AI companion.
            </p>
            <button className="saintsal-button py-2 rounded-lg w-full">
              Start Chat
            </button>
          </div>

          <div className="saintsal-card">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="text-[#D4AF37] font-semibold">Upgrade</h3>
            </div>
            <p className="saintsal-body mb-4">
              Unlock premium features and capabilities.
            </p>
            <button className="saintsal-button py-2 rounded-lg w-full">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
