"use client";
import React from "react";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";

export default function UpgradeCancelledPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="space-y-8">
          {/* Cancelled Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <XCircle className="w-12 h-12 text-gray-300" />
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-300">
              Upgrade Cancelled
            </h1>
            <p className="text-xl text-gray-400">
              No worries! Your account remains unchanged.
            </p>
            <p className="text-gray-500">
              You can upgrade to unlock premium features anytime.
            </p>
          </div>

          {/* What You're Missing */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              ✨ Still Available
            </h3>
            <div className="space-y-2 text-left text-sm">
              <div className="flex items-center space-x-3">
                <span className="text-green-400">🤖</span>
                <span className="text-gray-300">
                  Advanced AI Cooking Assistant
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📱</span>
                <span className="text-gray-300">Mobile App Access</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">👨‍🍳</span>
                <span className="text-gray-300">Elite Saint Community</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400">🔥</span>
                <span className="text-gray-300">
                  Unlimited Cooking Knowledge
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* Free Features Reminder */}
          <div className="text-center text-sm text-gray-500">
            <p>Continue enjoying your free SaintSal™ features!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
