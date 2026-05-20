"use client";

import { motion } from "framer-motion";

export type WorkPreviewVariant = "visual-review" | "enterprise" | "partnership";

interface WorkPreviewProps {
  variant: WorkPreviewVariant;
  featured?: boolean;
}

export function WorkPreview({ variant, featured = false }: WorkPreviewProps) {
  const scale = featured ? "max-w-md" : "max-w-full h-full";

  if (variant === "visual-review") {
    return (
      <div className={`relative w-full ${scale}`}>
        <motion.div
          className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-violet-400/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-amber-300/25 blur-2xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#2a2438] to-[#1a1628] p-5 shadow-2xl shadow-violet-900/30"
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="font-mono text-[10px] text-white/40">review.fig</span>
          </div>

          <div className="grid grid-cols-[1fr_1.2fr] gap-3">
            <div className="space-y-2">
              <motion.div
                className="rounded-lg bg-gradient-to-br from-violet-500/50 to-purple-800/40 p-3"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="h-2 w-8 rounded-full bg-white/60" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/25" />
                <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/20" />
              </motion.div>
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-2"
                >
                  <div className="h-6 w-6 shrink-0 rounded-md bg-accent/60" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 w-full rounded-full bg-white/30" />
                    <div className="h-1 w-2/3 rounded-full bg-white/15" />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border-2 border-dashed border-accent/40 bg-accent/10 p-2">
              <p className="mb-2 text-center font-mono text-[8px] uppercase tracking-wider text-accent-light">
                Before / After
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/10 p-2">
                  <div className="aspect-square rounded-md bg-white/15" />
                  <div className="mt-1.5 h-1 w-full rounded-full bg-white/20" />
                </div>
                <motion.div
                  className="rounded-lg bg-gradient-to-br from-accent/40 to-violet-600/30 p-2 ring-1 ring-accent/50"
                  animate={{ boxShadow: ["0 0 0 rgba(124,92,191,0)", "0 0 20px rgba(124,92,191,0.4)", "0 0 0 rgba(124,92,191,0)"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="aspect-square rounded-md bg-white/25" />
                  <div className="mt-1.5 h-1 w-full rounded-full bg-white/40" />
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-3 flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-emerald-200/90">
              Clarity improved
            </span>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  if (variant === "enterprise") {
    return (
      <div className={`relative flex h-full w-full items-center justify-center ${scale}`}>
        <motion.div
          className="absolute inset-2 rounded-2xl bg-rose-400/20 blur-2xl"
          animate={{ opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="relative w-full rounded-xl border border-white/15 bg-[#1e1a24] p-4 shadow-xl">
          <div className="mb-3 flex gap-2">
            <div className="h-2 w-2 rounded-full bg-rose-400/90" />
            <div className="h-2 w-2 rounded-full bg-violet-400/90" />
          </div>
          <div className="flex gap-2">
            <div className="w-14 shrink-0 space-y-1.5 rounded-lg bg-white/5 p-2">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`h-2 rounded ${n === 1 ? "bg-accent/70 w-full" : "w-3/4 bg-white/15"}`}
                />
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-8 rounded-lg bg-gradient-to-r from-rose-500/30 to-violet-500/30" />
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  className="h-16 rounded-lg bg-white/10"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="h-16 rounded-lg bg-gradient-to-br from-accent/35 to-rose-600/25"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative flex h-full w-full items-center justify-center ${scale}`}>
      <motion.div
        className="absolute right-0 top-0 h-20 w-20 rounded-full bg-indigo-400/25 blur-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="relative w-full space-y-2">
        <motion.div
          className="rounded-xl border border-white/15 bg-[#1a1f2e] p-3"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-400 to-accent" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-2/3 rounded-full bg-white/40" />
              <div className="h-1 w-1/2 rounded-full bg-white/20" />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="rounded-xl border border-accent/30 bg-gradient-to-r from-indigo-900/50 to-accent/20 p-3 shadow-lg shadow-accent/20"
          style={{ transform: "rotate(1deg)" }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex gap-2">
            <div className="h-10 flex-1 rounded-md bg-white/15" />
            <div className="h-10 w-16 rounded-md bg-accent/50" />
          </div>
          <p className="mt-2 text-center font-mono text-[9px] text-white/50">
            Figma → Next.js
          </p>
        </motion.div>
      </div>
    </div>
  );
}
