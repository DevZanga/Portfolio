"use client";

import { motion } from "framer-motion";
import type { Personal } from "@/types/resume";
import { DesignShowcase } from "./DesignShowcase";
import { FloatingOrbs } from "./FloatingOrbs";
import { StaggerText } from "./motion/StaggerText";

interface HeroProps {
  personal: Personal;
}

export function Hero({ personal }: HeroProps) {
  const firstName = personal.name.split(" ")[0];

  return (
    <section className="hero-mesh relative overflow-x-clip">
      <FloatingOrbs />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] grid-bg"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-36 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-sm font-medium text-accent-light"
          >
            Hello!
          </motion.p>

          <StaggerText
            className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.32]"
            lines={[`I'm ${firstName},`, "Product Design", "& UX Specialist"]}
            highlightIndex={2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 max-w-lg text-base leading-[1.8] text-white/70 sm:text-lg"
          >
            UI/UX designer in {personal.location.split(",")[0]} — crafting
            thoughtful interfaces in Figma, from wireframes to developer-ready
            handoff.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/25"
            >
              Portfolio
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Hire me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
          >
            <div>
              <p className="font-display text-3xl font-bold leading-none text-white">
                4+
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/60">
                Years experience
              </p>
            </div>
            <div className="h-10 w-px bg-white/15" aria-hidden />
            <p className="max-w-[200px] text-xs leading-[1.6] text-white/55">
              Design-led work across AI evaluation, enterprise UI, and product
              teams.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 lg:mt-0"
        >
          <DesignShowcase />
        </motion.div>
      </div>
    </section>
  );
}
