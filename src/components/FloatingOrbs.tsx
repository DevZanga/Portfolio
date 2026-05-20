"use client";

import { motion } from "framer-motion";

const orbs = [
  { size: 320, x: "75%", y: "15%", color: "rgba(91,76,219,0.45)", delay: 0 },
  { size: 200, x: "5%", y: "70%", color: "rgba(167,139,250,0.3)", delay: 1 },
  { size: 140, x: "50%", y: "85%", color: "rgba(124,110,240,0.25)", delay: 2 },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            transform: "translateZ(-80px)",
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/3 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
