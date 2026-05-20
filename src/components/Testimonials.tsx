"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/design";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="scroll-mt-24 border-t border-line bg-surface/60 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="Testimonials"
            title="What collaborators say"
            description="Replace these placeholders with real quotes when you have client or team endorsements."
            align="center"
          />
        </MotionReveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <MotionReveal key={t.name} delay={i * 100} direction="scale">
              <motion.blockquote
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-line bg-paper p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft font-mono text-sm font-bold text-accent">
                      {t.initials}
                    </span>
                    <div>
                      <p className="font-semibold leading-snug text-ink">{t.name}</p>
                      <p className="text-xs leading-relaxed text-muted">{t.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                    {t.rating}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-[1.7] text-muted">&ldquo;{t.quote}&rdquo;</p>
              </motion.blockquote>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
