import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { SaintSalLoader } from "../lib/animations/page-transitions";

export const metadata: Metadata = {
  title: "SaintVisionAI - SAINTSAL™ Movement",
  description:
    "Patent-protected AI movement for elite saints. U.S. Patent No. 10,290,222",
  keywords: "AI, SaintSal, SaintVisionAI, patent-protected, elite AI sanctuary",
  openGraph: {
    title: "SaintVisionAI - Elite AI Sanctuary",
    description: "The patent-protected AI movement for saints",
    url: "https://saintvisionai.com",
    siteName: "SaintVisionAI",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F24ec722c92144286a6714ce12f92f029?format=webp&width=800",
        width: 800,
        height: 600,
        alt: "SaintVisionAI - Elite AI Sanctuary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaintVisionAI - Elite AI Sanctuary",
    description: "The patent-protected AI movement for saints",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white">
        <Suspense fallback={<SaintSalLoader isLoading={true} />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
