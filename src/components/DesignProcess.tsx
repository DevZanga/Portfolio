"use client";

import { motion } from "framer-motion";
import { designProcess } from "@/data/design";
import { MotionReveal } from "./motion/MotionReveal";
import { Tilt3D } from "./motion/Tilt3D";
import { SectionHeading } from "./SectionHeading";

export function DesignProcess() {
  return (
    <section id="process" className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="Process"
            title="How I design"
            description="A repeatable flow from ambiguity to shipped interface — used across freelance, contract, and product teams."
          />
        </MotionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {designProcess.map((step, i) => (
            <MotionReveal key={step.step} delay={i * 100} direction="up">
              <Tilt3D intensity={5}>
                <motion.article
                  className="group relative h-full rounded-2xl border border-line bg-surface p-6 lg:p-7"
                  whileHover={{
                    borderColor: "rgba(91, 76, 219, 0.35)",
                    boxShadow: "0 20px 40px -16px rgba(91, 76, 219, 0.18)",
                  }}
                >
                  <span className="font-display leading-none text-5xl font-bold text-accent-soft">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-display leading-snug text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.65] text-muted">
                    {step.description}
                  </p>
                  <div className="pointer-events-none absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/8 blur-2xl" />
                </motion.article>
              </Tilt3D>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
