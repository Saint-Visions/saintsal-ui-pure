"use client";
import React from "react";
import { ArrowRight, Play, Star } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  showVideo?: boolean;
  showRating?: boolean;
  testimonial?: string;
  testimonialAuthor?: string;
}

export default function HeroSection({
  title = "SaintVisionAI™",
  subtitle = "Cooking Knowledge",
  description = "The patent-protected AI movement for elite cooking knowledge",
  primaryButtonText = "🔥 Start Cooking",
  secondaryButtonText = "💬 AI Chat",
  backgroundImage = "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4a769c3a9d844d819be31f969ef02451?format=webp&width=800",
  showVideo = false,
  showRating = true,
  testimonial = '"SaintSal AI doesn\'t just answer. It adapts. It empowers. It becomes your GOTTA GUY™!"',
  testimonialAuthor = "Elite Saint Community",
}: HeroSectionProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Rating Stars */}
        {showRating && (
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-white/70 text-sm ml-2">
              Trusted by Elite Saints
            </span>
          </div>
        )}

        {/* Quote/Testimonial */}
        {testimonial && (
          <div className="text-center mb-8 max-w-2xl">
            <div className="bg-black/80 rounded-xl p-6 mb-6 border border-yellow-500/30">
              <p className="text-yellow-400 text-lg font-medium mb-2">
                {testimonial}
              </p>
              <p className="text-white/70 text-sm">— {testimonialAuthor}</p>
            </div>
          </div>
        )}

        {/* Main Interface Card */}
        <div className="bg-black/90 rounded-2xl p-8 mb-8 border border-yellow-500/30 max-w-md w-full">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <div className="text-black font-bold text-xl">SV</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-xs mb-1">SAINTSAL™</div>
              <div className="text-yellow-400 text-xs mb-2">{subtitle}</div>
              <h1 className="text-white text-2xl font-bold">{title}</h1>
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="text-white/70 text-center text-sm mb-6">
              {description}
            </p>
          )}

          {/* Primary CTA Button */}
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-xl mb-4 flex items-center justify-center transition-all shadow-lg">
            {primaryButtonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors">
              {secondaryButtonText}
            </button>
            {showVideo && (
              <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 mr-1" />
                Watch Demo
              </button>
            )}
            {!showVideo && (
              <button className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-sm flex items-center justify-center transition-colors">
                🔐 Sign In
              </button>
            )}
          </div>

          {/* Quick Access */}
          <div className="text-center text-xs">
            <p className="text-yellow-400 mb-2">Quick Access:</p>
            <div className="flex justify-center space-x-3 text-white/70 mb-3">
              <span className="cursor-pointer hover:text-yellow-400">
                ⚠️ Pricing
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                🤖 Setup
              </span>
              <span className="cursor-pointer hover:text-yellow-400">
                ❓ Help
              </span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center text-xs text-white/50">
          <p className="mb-1">U.S. Patent No. 10,290,222</p>
          <p>
            Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
          </p>
        </div>
      </div>
    </div>
  );
}
