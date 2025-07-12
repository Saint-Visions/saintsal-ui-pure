"use client";

import React from "react";
import { Content } from "@builder.io/sdk-react";
import { CRMLayout } from "../../components/PageLayout";

export default function CRMPage() {
  return (
    <CRMLayout>
      <div className="min-h-screen p-8">
        {/* CRM Header */}
        <div className="mb-8">
          <h1 className="saintsal-title text-3xl mb-2">
            SaintSal™ CRM Dashboard
          </h1>
          <p className="saintsal-body">
            Elite customer relationship management for the SaintVisionAI™
            ecosystem.
          </p>
        </div>

        {/* Builder.io Content */}
        <div className="mb-8">
          <Content
            apiKey="d83998c6a81f466db4fb83ab90c7ba25"
            model="page"
            userAttributes={{ urlPath: "/crm" }}
          />
        </div>

        {/* CRM Interface */}
        <div className="saintsal-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#D4AF37] text-xl font-semibold">
              Partner Network Overview
            </h2>
            <button className="saintsal-button px-4 py-2 rounded-lg">
              Add New Partner
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#10161C] p-4 rounded-lg border border-[#D4AF37]/20">
              <div className="text-2xl text-[#D4AF37] font-bold">127</div>
              <div className="text-white/70 text-sm">Active Partners</div>
            </div>
            <div className="bg-[#10161C] p-4 rounded-lg border border-[#D4AF37]/20">
              <div className="text-2xl text-[#D4AF37] font-bold">$847K</div>
              <div className="text-white/70 text-sm">Monthly Revenue</div>
            </div>
            <div className="bg-[#10161C] p-4 rounded-lg border border-[#D4AF37]/20">
              <div className="text-2xl text-[#D4AF37] font-bold">94%</div>
              <div className="text-white/70 text-sm">Success Rate</div>
            </div>
          </div>

          {/* Embedded CRM Interface */}
          <div className="bg-[#10161C] rounded-lg border border-[#D4AF37]/20 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-2xl">💼</span>
              </div>
              <h3 className="text-[#D4AF37] text-lg font-semibold mb-2">
                CRM Module Loading
              </h3>
              <p className="text-white/70">
                Elite partner management system initializing...
              </p>
            </div>
          </div>
        </div>
      </div>
    </CRMLayout>
  );
}
