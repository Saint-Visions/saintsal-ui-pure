"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Premium SaintVisionAI background assets
const backgroundAssets = [
  {
    id: "hero-elite-1",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f354dd132ac04c4c39d4bb4c65c77862f41f22a?width=3268",
    alt: "SaintVisionAI Elite Branding Hero",
    category: "hero",
  },
  {
    id: "professional-team-1",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/96ea55734cd272c8d9f511640ef7ffcf2f4035e3?width=3088",
    alt: "SAINTVISIONAI Professional Showcase",
    category: "team",
  },
  {
    id: "technical-interface-1",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da6b59b03eb596d5891e22c3284158134619540b?width=3304",
    alt: "Technical AI Interface",
    category: "tech",
  },
  {
    id: "elite-team-portrait",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fdde066fd7313bee71a829915a833b4b2674454?width=3330",
    alt: "Elite AI Team Portrait",
    category: "team",
  },
  {
    id: "professional-leadership",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b71a03f0c7d115028338322d5ece23ec4e86fe6?width=3386",
    alt: "Professional Leadership Team",
    category: "team",
  },
  {
    id: "saintsal-elite-showcase",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21d77fd166c0c6e04de68092aa3dd0b95eac1786?width=3386",
    alt: "Saintsal Elite Showcase",
    category: "brand",
  },
  {
    id: "ai-technology-hub",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2b6820a6c78168ad6abe67de848eff2c233f84f?width=3310",
    alt: "AI Technology Hub",
    category: "tech",
  },
  {
    id: "sv-leadership-elite",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5558b433bdd2c4fc7afde42da1826c1d5d7c2b51?width=3736",
    alt: "SV Leadership Elite",
    category: "team",
  },
  {
    id: "best-slide-background",
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/951b7c8ac831fb3e8b5fb7abd4d5da44b9ff44cd?width=3538",
    alt: "The Best Slide Background of All Time",
    category: "hero",
    featured: true,
  },
  {
    id: "premium-elite-backdrop-1",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F8565a5a7cb0e4498b69f1b15a09fb152?format=webp&width=800",
    alt: "Premium Elite Professional Backdrop",
    category: "hero",
  },
  {
    id: "premium-elite-backdrop-2",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb53357c3f7cb4b0f8203ee2ccec9818a?format=webp&width=800",
    alt: "Premium Elite Business Backdrop",
    category: "brand",
  },
  {
    id: "professional-partnership-backdrop",
    src: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fa8db090172224cffb0c3e508de1f8114?format=webp&width=800",
    alt: "Professional Partnership Business Background",
    category: "hero",
    featured: true,
  },
];

interface BackgroundGalleryProps {
  showCategory?: "all" | "hero" | "team" | "tech" | "brand";
  className?: string;
  autoRotate?: boolean;
  featured?: boolean;
}

export function BackgroundGallery({
  showCategory = "all",
  className = "",
  autoRotate = false,
  featured = false,
}: BackgroundGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Filter backgrounds based on category
  const filteredBackgrounds =
    showCategory === "all"
      ? backgroundAssets
      : backgroundAssets.filter((bg) => bg.category === showCategory);

  // Get featured background if requested
  const displayBackgrounds = featured
    ? backgroundAssets.filter((bg) => bg.featured)
    : filteredBackgrounds;

  useEffect(() => {
    if (autoRotate && displayBackgrounds.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayBackgrounds.length);
      }, 8000); // Rotate every 8 seconds

      return () => clearInterval(interval);
    }
  }, [autoRotate, displayBackgrounds.length]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (displayBackgrounds.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background Images */}
      {displayBackgrounds.map((background, index) => (
        <div
          key={background.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            autoRotate
              ? index === currentIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
              : "opacity-100"
          }`}
          style={{
            zIndex: autoRotate ? (index === currentIndex ? 1 : 0) : 1,
          }}
        >
          <Image
            src={background.src}
            alt={background.alt}
            fill
            className={`object-cover transition-all duration-1000 ${
              isLoaded ? "blur-0" : "blur-sm"
            }`}
            style={{
              objectPosition: "center center",
              backgroundAttachment: "fixed",
            }}
            priority={index === 0 || background.featured}
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      ))}

      {/* Elite Golden Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(212, 175, 55, 0.1) 0%, 
              rgba(0, 0, 0, 0.3) 30%, 
              rgba(0, 0, 0, 0.6) 70%, 
              rgba(212, 175, 55, 0.1) 100%
            )
          `,
        }}
      />

      {/* Rotation Indicators */}
      {autoRotate && displayBackgrounds.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {displayBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-400 shadow-lg shadow-yellow-400/50"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Category Badge */}
      {showCategory !== "all" && (
        <div className="absolute top-4 right-4 z-20">
          <span
            className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              background:
                "linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(229, 197, 71, 0.9))",
              color: "#000",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
            }}
          >
            {showCategory}
          </span>
        </div>
      )}
    </div>
  );
}

export default BackgroundGallery;
