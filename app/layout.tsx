import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaintVisionAI™ - Elite AI Sanctuary | SAINTSAL™ Movement",
  description:
    "Patent-protected AI movement. Elite sanctuary for Saints. Azure-powered with GPT-4o integration. Your GOTTA GUY™ AI that adapts, empowers, and transforms.",
  keywords:
    "AI, SaintVisionAI, SAINTSAL, artificial intelligence, patent protected, Azure, GPT-4, elite sanctuary",
  authors: [{ name: "SAINTSAL™ Movement" }],
  robots: "index, follow",
  openGraph: {
    title: "SaintVisionAI™ - Elite AI Sanctuary",
    description:
      "Patent-protected AI movement. Your GOTTA GUY™ AI that adapts, empowers, and transforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaintVisionAI™ - Elite AI Sanctuary",
    description:
      "Patent-protected AI movement. Your GOTTA GUY™ AI that adapts, empowers, and transforms.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
