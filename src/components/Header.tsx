"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import type { Personal } from "@/types/resume";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  personal: Personal;
}

export function Header({ personal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.92)"],
  );
  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(228,230,239,0.85)"],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor, borderBottomColor: borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <motion.a
          href="#"
          aria-label="ZANGA home"
          whileHover={{ scale: 1.02 }}
          className={scrolled ? "text-ink" : "text-white"}
        >
          <Logo variant={scrolled ? "dark" : "light"} />
        </motion.a>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium ${
                scrolled
                  ? "text-muted hover:text-ink"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href={`mailto:${personal.email}`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className={`rounded-full px-5 py-2 text-sm font-semibold shadow-lg ${
            scrolled
              ? "bg-accent text-white shadow-accent/25"
              : "bg-white text-ink shadow-black/20"
          }`}
        >
          Hire me
        </motion.a>
      </div>
    </motion.header>
  );
}
