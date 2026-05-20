"use client";

import { motion } from "framer-motion";
import type { Personal } from "@/types/resume";
import { MotionReveal } from "./motion/MotionReveal";

interface ContactProps {
  personal: Personal;
  certifications: string[];
}

export function Contact({ personal, certifications }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionReveal direction="scale">
          <div className="relative overflow-visible rounded-3xl bg-gradient-to-br from-accent via-accent-light to-glow p-10 text-white sm:p-14 lg:p-16">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/12 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-black/10 blur-2xl"
              aria-hidden
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/75">
                  Let&apos;s work together
                </p>
                <h2 className="mt-5 font-display leading-display text-4xl font-bold tracking-tight sm:text-5xl">
                  Ready for your next interface?
                </h2>
                <p className="mt-5 max-w-md text-base leading-[1.7] text-white/85 sm:text-lg">
                  Open to UI/UX design roles, contract work, and collaborations
                  where craft and clarity matter.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="block rounded-2xl bg-white px-6 py-4 text-center font-display text-lg font-bold leading-snug text-ink shadow-2xl shadow-black/20 sm:text-xl"
                >
                  {personal.email}
                </motion.a>
                <p className="text-center text-sm leading-relaxed text-white/75">
                  {personal.phone} · {personal.location}
                </p>
                <div className="flex justify-center gap-8 pt-2">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <MotionReveal key={cert} delay={150 + i * 80} direction="up">
              <li className="flex items-center gap-4 rounded-xl border border-line bg-surface px-6 py-5 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent">
                  ✓
                </span>
                <span className="text-sm font-medium leading-relaxed text-ink">
                  {cert}
                </span>
              </li>
            </MotionReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
