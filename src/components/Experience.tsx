"use client";

import { motion } from "framer-motion";
import type { Experience as ExperienceItem } from "@/types/resume";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

interface ExperienceProps {
  experience: ExperienceItem[];
}

const peopleCentred = new Set(["Outlier", "Braintrust"]);

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
            title="Where I've worked"
            description="Roles where I helped teams build products that feel clear, welcoming, and easy for real people to use."
          />
        </MotionReveal>

        <ol className="relative">
          {experience.map((role, index) => (
            <MotionReveal key={`${role.company}-${role.title}`} delay={index * 80}>
              <li className="relative pb-14 last:pb-0">
                <article className="rounded-2xl border border-line bg-paper p-8 transition-shadow hover:shadow-lg hover:shadow-accent/8">
                  <div>
                      {peopleCentred.has(role.company) && (
                        <span className="mb-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                          People-centred
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
                        className="text-[15px] leading-[1.65] text-muted"
                      >
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
