"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

function UpgradeSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isLoading, setIsLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // Verify the session and get details
      fetch(`/api/stripe/verify-session?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          setSessionData(data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto"></div>
            <p className="text-gray-400">Verifying your upgrade...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Success Icon */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">🔥</span>
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
                Welcome to the Elite!
              </h1>
              <p className="text-xl text-gray-300">
                🎉 Your SaintSal™ upgrade is complete!
              </p>
              <p className="text-gray-400">
                You now have access to premium cooking knowledge and AI
                features.
              </p>
            </div>

            {/* Plan Details */}
            {sessionData && (
              <div className="bg-gray-900 rounded-xl p-6 border border-yellow-500/30">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  Your New Plan
                </h3>
                <p className="text-white text-xl">
                  {sessionData.planName || "Premium Plan"}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Subscription activated • Check your email for receipt
                </p>
              </div>
            )}

            {/* What's Next */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">
                🚀 What's Next?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="text-white font-medium">Start AI Chat</div>
                  <div className="text-gray-400">Advanced cooking AI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-white font-medium">Download Apps</div>
                  <div className="text-gray-400">iOS & Android access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">👨‍🍳</div>
                  <div className="text-white font-medium">Join Community</div>
                  <div className="text-gray-400">Elite Saint network</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Cooking</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Support */}
            <div className="text-center text-sm text-gray-500">
              <p>Need help? Contact us at support@saintsal.ai</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function UpgradeSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500"></div>
        </div>
      }
    >
      <UpgradeSuccessContent />
    </Suspense>
  );
}
