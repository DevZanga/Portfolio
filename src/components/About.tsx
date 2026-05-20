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
    title: "Empathy first",
    text: "Every decision starts with how a real person will experience it.",
  },
  {
    title: "Honest craft",
    text: "Clear feedback, careful spacing, and interfaces that feel welcoming.",
  },
  {
    title: "Calm collaboration",
    text: "I work with teams openly, listening as much as I design.",
  },
];

export function About({ about, workingStyle }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="About"
            title="A designer who actually listens"
            description="I care about people: how they feel when they open an app, read a screen, or tap a button."
          />
        </MotionReveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionReveal delay={100} direction="left">
            <p className="text-base leading-[1.75] text-ink/90 sm:text-lg">{about}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="rounded-xl border border-line bg-surface p-5 shadow-sm"
                >
                  <h3 className="font-display text-sm font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-muted">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={200} direction="right">
            <aside className="rounded-2xl border border-line bg-gradient-to-br from-accent-soft via-surface to-paper p-8 shadow-md lg:p-10">
              <h3 className="font-display text-2xl font-bold leading-snug text-ink">
                How I work with people
              </h3>
              <p className="mt-5 text-base leading-[1.7] text-muted">{workingStyle}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Kind", "Clear", "Reliable", "Human"].map((tag) => (
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
