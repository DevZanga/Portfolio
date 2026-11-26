
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist_Mono, Inter, Outfit } from "next/font/google";
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
  title: "Adebayo Ibrahim | Lead UX Designer & AI Evaluation Specialist",
  description:
    "Lead UX Designer, Software Engineer and AI Evaluation Specialist based in Sheffield, UK. Designing better experiences and evaluating better AI.",
  openGraph: {
    title: "Adebayo Ibrahim | Lead UX Designer & AI Evaluation Specialist",
    description:
      "Designing better experiences. Evaluating better AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
