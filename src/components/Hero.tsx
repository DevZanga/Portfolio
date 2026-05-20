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
  const city = personal.location.split(",")[0];

  return (
    <section className="hero-mesh relative overflow-x-clip">
      <FloatingOrbs />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] grid-bg"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pt-36 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-mono text-sm font-medium text-amber-200/90"
          >
            Hello, glad you&apos;re here
          </motion.p>

          <StaggerText
            className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.32]"
            lines={[`I'm ${personal.name}`, "Product & Brand", "Designer"]}
            highlightIndex={2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8 max-w-lg text-base leading-[1.8] text-white/75 sm:text-lg"
          >
            A UI/UX designer in {city} who cares about clarity, warmth, and how
            something feels the moment someone opens it. Figma from first sketch
            to handoff, always with people in mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-black/20"
            >
              See my work
            </motion.a>
            <motion.a
              href={`mailto:${personal.email}`}
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
            className="mt-10 inline-flex max-w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-4"
          >
            <div>
              <p className="font-display text-3xl font-bold leading-none text-white">
                4+
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/60">
                Years crafting for people
              </p>
            </div>
            <p className="text-sm leading-[1.65] text-white/65">
              Thoughtful design, honest feedback, and products that feel human
              to use.
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
