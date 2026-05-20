"use client";

import { motion } from "framer-motion";
import { whyHireMe } from "@/data/design";
import type { Personal } from "@/types/resume";
import { MotionReveal } from "./motion/MotionReveal";
import { SectionHeading } from "./SectionHeading";

interface WhyHireMeProps {
  personal: Personal;
}

export function WhyHireMe({ personal }: WhyHireMeProps) {
  return (
    <section className="scroll-mt-24 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <MotionReveal direction="left">
            <SectionHeading
              label="Value"
              title={whyHireMe.title}
              description={whyHireMe.description}
            />
            <motion.a
              href={`mailto:${personal.email}`}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25"
            >
              Hire me
            </motion.a>
          </MotionReveal>

          <MotionReveal delay={120} direction="right">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {whyHireMe.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl border border-line bg-surface px-8 py-7 shadow-sm"
                >
                  <p className="font-display text-4xl font-bold leading-none text-accent lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
