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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ZANGA · Adebayo Ibrahim · Human-Centred UI/UX",
  description:
    "ZANGA · UI/UX designer in Sheffield. Warm, people-first interfaces in Figma, from wireframes to handoff.",
  openGraph: {
    title: "ZANGA · Adebayo Ibrahim · Human-Centred UI/UX",
    description:
      "A designer who cares how products feel for real people: thoughtful, clear, and easy to work with.",
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
