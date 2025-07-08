import React from "react";

interface FeaturePlaceholderProps {
  title?: string;
  description?: string;
  comingSoon?: boolean;
}

export default function FeaturePlaceholder({
  title = "Coming Soon",
  description = "This feature is being cooked up by the Saints",
  comingSoon = true,
}: FeaturePlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
            <div className="text-black font-bold text-2xl">SV</div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>

        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
          {description}
        </p>

        {comingSoon && (
          <div className="inline-flex items-center space-x-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-8 py-4 mb-8">
            <span className="text-2xl">🔥</span>
            <span className="text-yellow-400 font-medium">
              We're cooking something special...
            </span>
          </div>
        )}

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-105"
        >
          ← Back to Dashboard
        </button>

        {/* Saint Quote */}
        <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <p className="text-gray-300 italic text-lg">
            "Every great feature starts with a Saint's vision..."
          </p>
          <p className="text-yellow-400 font-medium mt-2">- SaintSal™</p>
        </div>
      </div>
    </div>
  );
}
