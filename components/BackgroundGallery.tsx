"use client";

import React, { useState } from "react";

interface BackgroundImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
}

export function BackgroundGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using the Figma design images converted to responsive gallery
  const backgroundImages: BackgroundImage[] = [
    {
      id: "hero-1",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f354dd132ac04c4c39d4bb4c65c77862f41f22a?width=3268",
      alt: "SaintVisionAI Elite Branding",
      title: "Elite Branding",
      category: "corporate",
    },
    {
      id: "hero-2",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/96ea55734cd272c8d9f511640ef7ffcf2f4035e3?width=3088",
      alt: "SAINTVISIONAI Logo Showcase",
      title: "Logo Showcase",
      category: "branding",
    },
    {
      id: "hero-3",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da6b59b03eb596d5891e22c3284158134619540b?width=3304",
      alt: "Technical Interface",
      title: "Technical Interface",
      category: "tech",
    },
    {
      id: "hero-4",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fdde066fd7313bee71a829915a833b4b2674454?width=3330",
      alt: "AI Team Portrait",
      title: "AI Team Portrait",
      category: "team",
    },
    {
      id: "hero-5",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b71a03f0c7d115028338322d5ece23ec4e86fe6?width=3386",
      alt: "Professional Team",
      title: "Professional Team",
      category: "team",
    },
    {
      id: "hero-6",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/21d77fd166c0c6e04de68092aa3dd0b95eac1786?width=3386",
      alt: "Saintsal Elite",
      title: "Saintsal Elite",
      category: "elite",
    },
    {
      id: "hero-7",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2b6820a6c78168ad6abe67de848eff2c233f84f?width=3310",
      alt: "AI Technology",
      title: "AI Technology",
      category: "tech",
    },
    {
      id: "hero-8",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5558b433bdd2c4fc7afde42da1826c1d5d7c2b51?width=3736",
      alt: "SV Leadership",
      title: "SV Leadership",
      category: "corporate",
    },
    {
      id: "hero-9",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/951b7c8ac831fb3e8b5fb7abd4d5da44b9ff44cd?width=3538",
      alt: "The Best Slide Background",
      title: "Premium Background",
      category: "premium",
    },
  ];

  const categories = [
    "all",
    "corporate",
    "branding",
    "tech",
    "team",
    "elite",
    "premium",
  ];
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages =
    activeCategory === "all"
      ? backgroundImages
      : backgroundImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="relative z-10 pt-8 pb-6">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🎨 SaintVisionAI™ Gallery
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Elite background collection from the SAINTSAL™ movement. Premium
              visuals for the Saints.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${
                    activeCategory === category
                      ? "bg-yellow-500 text-black shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-video relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-yellow-400 text-sm capitalize">
                    {image.category}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={selectedImage}
              alt="Full size preview"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Elite Footer */}
      <div className="border-t border-gray-800 bg-black/50 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            ✨ Elite AI Sanctuary • SAINTSAL™ Movement • Premium Content
            Collection
          </p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundGallery;
