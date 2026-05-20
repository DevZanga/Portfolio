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
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.95)"],
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = scrolled
    ? "text-muted hover:text-ink"
    : "text-white/80 hover:text-white";

  return (
    <motion.header
      style={{ backgroundColor, borderBottomColor: borderColor }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          aria-label="ZANGA home"
          whileTap={{ scale: 0.98 }}
          className={`shrink-0 ${scrolled ? "text-ink" : "text-white"}`}
          onClick={() => setMenuOpen(false)}
        >
          <Logo variant={scrolled ? "dark" : "light"} />
        </motion.a>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className={`text-sm font-medium ${linkClass}`}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <motion.a
            href={`mailto:${personal.email}`}
            whileTap={{ scale: 0.97 }}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-md sm:px-5 sm:py-2 sm:text-sm ${
              scrolled
                ? "bg-accent text-white"
                : "bg-white text-ink"
            }`}
          >
            Say hello
          </motion.a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg xl:hidden ${
              scrolled
                ? "border border-line bg-surface text-ink"
                : "border border-white/20 bg-white/10 text-white"
            }`}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className={`border-t px-4 py-4 xl:hidden ${
            scrolled
              ? "border-line bg-surface"
              : "border-white/15 bg-[#12121c]/95"
          }`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    scrolled
                      ? "text-ink hover:bg-paper"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
}
