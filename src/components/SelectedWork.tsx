"use client";

import { motion } from "framer-motion";
import { selectedWork } from "@/data/design";
import { MotionReveal } from "./motion/MotionReveal";
import { Tilt3D } from "./motion/Tilt3D";

export function SelectedWork() {
  const featured = selectedWork.find((p) => p.featured) ?? selectedWork[0];
  const others = selectedWork.filter((p) => p !== featured);

  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-line bg-paper py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionReveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-6 bg-accent" aria-hidden />
                Portfolio
              </p>
              <h2 className="font-display leading-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Let&apos;s have a look at my work
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted sm:text-lg">
                Representative projects from AI evaluation, enterprise product,
                and design-to-code delivery.
              </p>
            </div>
            <a
              href="#experience"
              className="shrink-0 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              See all →
            </a>
          </div>
        </MotionReveal>

        <MotionReveal direction="scale">
          <Tilt3D intensity={5}>
            <article className="overflow-hidden rounded-3xl border border-line bg-surface shadow-lg">
              <div className={`grid lg:grid-cols-2 ${featured.accent}`}>
                <div className="flex min-h-[280px] items-center justify-center p-8 lg:min-h-[360px]">
                  <div className="w-full max-w-sm rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-md">
                    <div className="mb-4 flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-1/2 rounded-full bg-white/50" />
                      <div className="h-2 w-full rounded-full bg-white/25" />
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        {[1, 2, 3].map((n) => (
                          <div
                            key={n}
                            className="aspect-[4/5] rounded-lg bg-white/15"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-surface p-8 lg:p-12">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
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
                        className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Tilt3D>
        </MotionReveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {others.map((project, i) => (
            <MotionReveal key={project.title} delay={i * 100} direction="up">
              <Tilt3D intensity={7} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-md hover:shadow-xl">
                  <div className={`h-40 ${project.accent} p-5`}>
                    <div className="h-full rounded-xl border border-white/10 bg-black/20 p-4">
                      <div className="h-2 w-1/2 rounded-full bg-white/40" />
                      <div className="mt-2 h-2 w-full rounded-full bg-white/20" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-[1.65] text-muted">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Tilt3D>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
