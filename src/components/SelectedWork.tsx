"use client";

import { motion } from "framer-motion";
import { selectedWork } from "@/data/design";
import { MotionReveal } from "./motion/MotionReveal";
import { Tilt3D } from "./motion/Tilt3D";
import { WorkPreview } from "./WorkPreview";

export function SelectedWork() {
  const featured = selectedWork.find((p) => p.featured) ?? selectedWork[0];
  const others = selectedWork.filter((p) => p !== featured);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line bg-paper py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Portfolio
              </p>
              <h2 className="font-display leading-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Work I&apos;m proud of
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
                Projects where clarity, care, and how people experience the product
                came first.
              </p>
            </div>
            <a
              href="#experience"
              className="shrink-0 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              See all
            </a>
          </div>
        </MotionReveal>

        <MotionReveal direction="scale">
          <Tilt3D intensity={6}>
            <motion.article
              className="group overflow-hidden rounded-3xl border border-line/80 bg-surface shadow-[0_8px_40px_-12px_rgba(124,92,191,0.25)] transition-shadow hover:shadow-[0_24px_56px_-16px_rgba(124,92,191,0.35)]"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <div className="grid lg:grid-cols-2">
                <div
                  className={`relative flex min-h-[300px] items-center justify-center overflow-hidden p-8 lg:min-h-[400px] lg:p-12 ${featured.accent}`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(124,92,191,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(212,165,116,0.3), transparent 45%)",
                    }}
                  />
                  <WorkPreview variant={featured.preview} featured />
                </div>
                <div className="relative flex flex-col justify-center bg-surface p-8 lg:p-12">
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                    {featured.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-ink lg:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.7] text-muted">
                    {featured.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-accent/15 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent shadow-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          </Tilt3D>
        </MotionReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {others.map((project, i) => (
            <MotionReveal key={project.title} delay={i * 100} direction="up">
              <Tilt3D intensity={8} className="h-full">
                <motion.article
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-md transition-all hover:border-accent/25 hover:shadow-[0_20px_48px_-16px_rgba(124,92,191,0.28)]"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <div
                    className={`relative flex h-52 items-center justify-center overflow-hidden p-6 ${project.accent}`}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.5), transparent 70%)",
                      }}
                    />
                    <WorkPreview variant={project.preview} />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-[1.65] text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-paper px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </Tilt3D>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
