"use client";

import { motion } from "framer-motion";
import type { Experience as ExperienceItem } from "@/types/resume";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const designHeavy = new Set(["Outlier", "Braintrust"]);

export function Experience({ experience }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line bg-surface/80 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="Resume"
            title="My work experience"
            description="From evaluating AI-generated UI to leading engineering — always advocating for clarity, polish, and user-centred decisions."
          />
        </MotionReveal>

        <ol className="relative">
          <div
            className="absolute left-[19px] top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-accent via-line to-transparent lg:block"
            aria-hidden
          />

          {experience.map((role, index) => (
            <MotionReveal key={`${role.company}-${role.title}`} delay={index * 80}>
              <li className="relative grid gap-6 pb-14 last:pb-0 lg:grid-cols-[48px_1fr] lg:gap-10">
                <div className="hidden lg:flex lg:justify-center">
                  <span
                    className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 font-mono text-xs font-bold leading-none ${
                      designHeavy.has(role.company)
                        ? "border-accent bg-accent-soft text-accent"
                        : "border-line bg-surface text-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <article className="rounded-2xl border border-line bg-paper p-8 transition-shadow hover:shadow-lg hover:shadow-accent/8">
                  <div>
                    {designHeavy.has(role.company) && (
                      <span className="mb-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                        Design-focused
                      </span>
                    )}
                    <h3 className="font-display leading-snug text-2xl font-bold text-ink">
                      {role.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {role.company}
                      {role.type && (
                        <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs">
                          {role.type}
                        </span>
                      )}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {role.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bullet.slice(0, 48)}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bi * 0.04 }}
                        className="flex gap-3 text-[15px] leading-[1.65] text-muted"
                      >
                        <span
                          className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </article>
              </li>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
