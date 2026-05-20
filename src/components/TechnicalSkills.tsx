"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

interface TechnicalSkillsProps {
  technicalSkills: Record<string, string[]>;
}

export function TechnicalSkills({ technicalSkills }: TechnicalSkillsProps) {
  const designFirst = ["Design", "Frontend"];
  const entries = Object.entries(technicalSkills).sort(([a], [b]) => {
    const ai = designFirst.indexOf(a);
    const bi = designFirst.indexOf(b);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-x-clip bg-ink py-24 text-white lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(91,76,219,0.22)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            variant="dark"
            label="Also fluent in"
            title="Code that supports design"
            description="I implement what I design — so handoff conversations stay grounded in reality."
          />
        </MotionReveal>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {entries.map(([category, items], i) => (
            <MotionReveal key={category} delay={i * 70} direction="up">
              <div>
                <h3
                  className={`font-mono text-xs uppercase tracking-[0.14em] leading-normal ${
                    designFirst.includes(category)
                      ? "text-accent-light"
                      : "text-white/55"
                  }`}
                >
                  {category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-lg px-3 py-1.5 text-sm leading-normal ${
                        designFirst.includes(category)
                          ? "border border-accent/30 bg-accent/10 font-medium text-white"
                          : "border border-white/10 bg-white/5 text-white/85"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
