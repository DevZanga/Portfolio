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
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal direction="scale">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent via-accent-light to-warm/80 p-5 text-white sm:rounded-3xl sm:p-10 lg:p-14">
            <div className="relative grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-end lg:gap-12">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 sm:text-xs">
                  Let&apos;s have a conversation
                </p>
                <h2 className="mt-4 font-display text-2xl font-bold leading-[1.25] tracking-tight sm:mt-5 sm:text-4xl lg:text-5xl">
                  I&apos;d love to hear from you
                </h2>
                <p className="mt-4 text-sm leading-[1.65] text-white/90 sm:mt-5 sm:text-base lg:text-lg">
                  Whether you need a designer for a new product, a thoughtful
                  second pair of eyes on your UI, or a calm collaborator on your
                  team. Reach out. I reply personally.
                </p>
              </div>

              <div className="min-w-0 space-y-4">
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full max-w-full break-all rounded-xl bg-white px-4 py-3.5 text-center text-sm font-bold leading-snug text-ink shadow-xl sm:rounded-2xl sm:px-6 sm:py-4 sm:text-base"
                >
                  {personal.email}
                </motion.a>
                <div className="space-y-1 text-center text-xs leading-relaxed text-white/85 sm:text-sm">
                  <p>{personal.phone}</p>
                  <p>{personal.location}</p>
                </div>
                <div className="flex justify-center gap-6 pt-1 sm:gap-8">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>

        <ul className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
          {certifications.map((cert, i) => (
            <MotionReveal key={cert} delay={150 + i * 80} direction="up">
              <li className="rounded-xl border border-line bg-surface px-4 py-4 sm:px-6 sm:py-5">
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
