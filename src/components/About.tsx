"use client";

import { motion } from "framer-motion";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

interface AboutProps {
  about: string;
  workingStyle: string;
}

const pillars = [
  {
    title: "Visual hierarchy",
    text: "Spacing, type, and layout that guide the eye before users think.",
  },
  {
    title: "Design systems",
    text: "Reusable components and tokens so products stay consistent at scale.",
  },
  {
    title: "Design ↔ Dev",
    text: "Annotated Figma handoff and React implementation that match intent.",
  },
];

export function About({ about, workingStyle }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="About"
            title="Design-led, detail-obsessed"
            description="I care how interfaces feel — not just how they function. That mindset shows up in Figma files, critique sessions, and shipped UI alike."
          />
        </MotionReveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <MotionReveal delay={100} direction="left">
            <p className="text-base leading-[1.75] text-ink/90 sm:text-lg">{about}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-line bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display leading-snug text-sm font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-muted">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={200} direction="right">
            <aside className="relative rounded-2xl border border-line bg-gradient-to-br from-accent-soft via-surface to-paper p-8 shadow-lg lg:p-10">
              <h3 className="font-display leading-display-tight text-2xl font-bold text-ink">
                How I collaborate
              </h3>
              <p className="mt-5 text-base leading-[1.7] text-muted">{workingStyle}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Figma", "Critique", "Async", "Handoff"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-accent shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
