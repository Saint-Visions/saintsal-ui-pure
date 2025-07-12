import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaintVisionAI™ - EMERGENCY DEPLOYMENT SUCCESS",
  description: "39 Days of Hell - Finally Over! SaintVisionAI™ is LIVE!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
