"use client";

import { motion } from "framer-motion";
import { tools } from "@/data/design";

export function Marquee() {
  const items = [...tools, ...tools];

  return (
    <div className="overflow-x-clip border-y border-line bg-surface py-5">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="flex items-center gap-12 text-sm font-medium leading-normal text-muted"
          >
            {tool}
            <span className="text-accent/80" aria-hidden>
              ◆
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
