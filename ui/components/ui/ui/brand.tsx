"use client";
import React from "react";
import Link from "next/link";
import { FC } from "react";

interface BrandProps {
  theme?: "dark" | "light";
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="/"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg">
          <div className="text-black font-bold text-xl">SV</div>
        </div>
      </div>

      <div className="text-2xl font-bold tracking-wide text-yellow-400">
        SaintVisionAI
      </div>
    </Link>
  );
};
