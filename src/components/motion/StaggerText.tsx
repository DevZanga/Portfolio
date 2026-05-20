"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  lines: string[];
  className?: string;
  highlightIndex?: number;
}

function GradientLine({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words.pop() ?? "";
  const rest = words.join(" ");

  return (
    <>
      {rest && <span className="grad-from">{rest} </span>}
      <span className="grad-to">{last}</span>
    </>
  );
}

export function StaggerText({
  lines,
  className = "",
  highlightIndex,
}: StaggerTextProps) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
      }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={`${line}-${i}`}
          className={`hero-headline-line block ${
            i === highlightIndex ? "hero-headline-gradient" : ""
          }`}
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {i === highlightIndex ? <GradientLine text={line} /> : line}
        </motion.span>
      ))}
    </motion.h1>
  );
}
