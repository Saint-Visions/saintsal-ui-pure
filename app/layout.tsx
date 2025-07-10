import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Chatbot UI",
    template: "%s | Chatbot UI",
  },
  description: "Advanced AI chatbot interface built with Next.js",
  keywords: ["AI", "chatbot", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Chatbot UI Team" }],
  creator: "Chatbot UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
    title: "Chatbot UI",
    description: "Advanced AI chatbot interface built with Next.js",
    siteName: "Chatbot UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatbot UI",
    description: "Advanced AI chatbot interface built with Next.js",
    creator: "@chatbotui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
