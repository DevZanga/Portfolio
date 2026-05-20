"use client";

import { motion } from "framer-motion";
import { services } from "@/data/design";
import { MotionReveal } from "./motion/MotionReveal";
import { ServiceIcon } from "./ServiceIcon";
import { ServicePreview } from "./ServicePreview";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 relative overflow-x-clip border-t border-line py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(124,92,191,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="Services"
            title="How I can help"
            description="Human-centred design services — shaped around real users, honest conversation, and work you can trust."
          />
        </MotionReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <MotionReveal key={service.title} delay={i * 120} direction="up">
              <motion.article
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/80 bg-surface shadow-[0_4px_24px_-8px_rgba(12,12,16,0.08)] transition-all duration-300 hover:border-accent/25 hover:shadow-[0_24px_48px_-16px_rgba(91,76,219,0.2)]"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-light shadow-lg shadow-accent/30">
                      <ServiceIcon variant={service.variant} />
                    </div>
                    <span className="font-mono text-xs font-medium text-accent/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold leading-[1.35] tracking-tight text-ink lg:text-[1.35rem]">
                    {service.title}
                  </h3>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 flex-1 text-[15px] leading-[1.7] text-muted">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-line/60 bg-gradient-to-b from-paper to-accent-soft/30 p-5">
                  <ServicePreview variant={service.variant} />
                </div>

                <div className="flex items-center justify-between border-t border-line/60 px-7 py-4 lg:px-8">
                  <span className="text-xs font-medium text-muted">
                    Open for new work
                  </span>
                  <motion.a
                    href="#contact"
                    className="flex items-center gap-1 text-sm font-semibold text-accent"
                    whileHover={{ x: 4 }}
                  >
                    Say hello
                    <span aria-hidden>→</span>
                  </motion.a>
                </div>
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
