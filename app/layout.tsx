import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaintVisionAI - SAINTSAL™ Movement",
  description: "Patent-protected AI movement for elite saints",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
