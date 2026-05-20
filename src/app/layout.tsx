import type { Metadata } from "next";
import { Geist_Mono, Inter, Outfit } from "next/font/google";
import { GrainOverlay } from "@/components/GrainOverlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZANGA — Adebayo Ibrahim · UI/UX Designer",
  description:
    "ZANGA — UI/UX designer specializing in Figma, design systems, prototyping, and pixel-perfect implementation. Sheffield, UK.",
  openGraph: {
    title: "ZANGA — Adebayo Ibrahim · UI/UX Designer",
    description:
      "Product designer crafting thoughtful interfaces — from wireframes to shipped products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
