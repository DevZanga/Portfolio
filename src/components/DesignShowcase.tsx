"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export function DesignShowcase() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 120,
    damping: 20,
  });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      className="scene-3d relative mx-auto h-[420px] w-full max-w-lg lg:h-[480px] lg:max-w-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ perspective: 1400 }}
    >
      <motion.div
        className="preserve-3d relative h-full w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Back plate */}
        <motion.div
          className="card-3d absolute left-8 top-12 w-52 rounded-2xl border border-white/5 bg-[#12121a]/80 p-3 shadow-2xl"
          style={{ transform: "translateZ(-60px) rotateY(-8deg)" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <p className="font-mono text-[9px] uppercase tracking-wider text-accent-light/70">
            Components
          </p>
          <div className="mt-2 space-y-1.5">
            {[0.4, 1, 0.6].map((op, i) => (
              <div
                key={i}
                className="h-7 rounded-md bg-white/10"
                style={{ opacity: op }}
              />
            ))}
          </div>
        </motion.div>

        {/* Side card */}
        <motion.div
          className="card-3d absolute -left-2 bottom-16 w-36 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl"
          style={{ transform: "translateZ(40px) rotateY(12deg)" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-glow shadow-lg shadow-accent/40" />
            <div className="space-y-1">
              <div className="h-1.5 w-12 rounded-full bg-white/30" />
              <div className="h-1.5 w-8 rounded-full bg-white/15" />
            </div>
          </div>
          <p className="mt-2 font-mono text-[9px] text-white/35">Prototype · v3</p>
        </motion.div>

        {/* Main Figma window */}
        <motion.div
          className="card-3d absolute right-0 top-0 z-10 w-[88%] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_32px_80px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          style={{ transform: "translateZ(80px)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/90 shadow-sm" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90 shadow-sm" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90 shadow-sm" />
            <span className="ml-2 font-mono text-[10px] text-white/45">
              dashboard.fig
            </span>
          </div>

          <div className="space-y-3 rounded-xl bg-[#1a1a26] p-4 shadow-inner">
            <div className="flex gap-3">
              <motion.div
                className="h-20 w-16 shrink-0 rounded-lg bg-gradient-to-br from-accent/40 to-violet-900/50"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-accent/70" />
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-5/6 rounded-full bg-white/10" />
                <div className="mt-3 flex gap-2">
                  <div className="h-6 w-14 rounded-md bg-accent shadow-md shadow-accent/30" />
                  <div className="h-6 w-14 rounded-md bg-white/10" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-lg bg-gradient-to-br from-accent/35 to-indigo-900/40"
                  style={{ transform: `translateZ(${12 + i * 4}px)` }}
                  whileHover={{ scale: 1.05, translateZ: 20 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(91,76,219,0.15) 0%, transparent 70%)",
          transform: "translateZ(-100px)",
        }}
      />
    </div>
  );
}
