"use client";

import { motion } from "framer-motion";
import type { FigmaSkill } from "@/types/resume";
import { MotionReveal } from "./motion/MotionReveal";
import { Tilt3D } from "./motion/Tilt3D";
import { SectionHeading } from "./SectionHeading";

const icons = ["◈", "◇", "◆", "○", "◎", "▣", "◐"];

interface DesignSkillsProps {
  figmaSkills: FigmaSkill[];
}

export function DesignSkills({ figmaSkills }: DesignSkillsProps) {
  return (
    <section
      id="design"
      className="scroll-mt-24 border-t border-line py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <MotionReveal>
          <SectionHeading
            label="Figma toolkit"
            title="What I bring to every file"
            description="End-to-end Figma practice — not just pretty screens, but systems teams can build from."
          />
        </MotionReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {figmaSkills.map((skill, i) => (
            <MotionReveal
              key={skill.name}
              delay={i * 60}
              direction={i === 0 ? "scale" : "up"}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Tilt3D intensity={i === 0 ? 5 : 7}>
                <article
                  className={`flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-lg lg:p-7 ${
                    i === 0 ? "lg:flex-row lg:items-start lg:gap-8" : ""
                  }`}
                >
                  <span className="font-mono text-2xl leading-none text-accent/35">
                    {icons[i % icons.length]}
                  </span>
                  <div className={i === 0 ? "lg:flex-1" : ""}>
                    <h3
                      className={`font-display font-bold leading-snug text-ink ${
                        i === 0 ? "mt-4 text-xl lg:mt-0" : "mt-4 text-lg"
                      }`}
                    >
                      {skill.name}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.65] text-muted">
                      {skill.description}
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
