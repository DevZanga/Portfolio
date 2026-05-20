type PreviewVariant = "ui" | "ai" | "systems";

export function ServicePreview({ variant }: { variant: PreviewVariant }) {
  if (variant === "ui") {
    return (
      <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a28] to-[#252538] p-4 shadow-inner">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/90" />
          <span className="h-2 w-2 rounded-full bg-amber-400/90" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
        </div>
        <div className="flex gap-3">
          <div className="w-14 shrink-0 space-y-2 rounded-lg bg-white/5 p-2">
            <div className="h-2 w-full rounded bg-accent/50" />
            <div className="h-2 w-3/4 rounded bg-white/15" />
            <div className="h-2 w-full rounded bg-white/10" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-3 w-2/3 rounded-md bg-white/25" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-5/6 rounded bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-7 flex-1 rounded-md bg-accent/60" />
              <div className="h-7 w-12 rounded-md bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "ai") {
    return (
      <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a28] to-[#2a2540] p-4 shadow-inner">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-accent-light/80">
          Visual QA · Score
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[92, 78, 95, 64, 88, 71].map((score, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center rounded-lg border border-white/10 bg-white/5"
            >
              <span
                className={`text-xs font-bold ${
                  score >= 85 ? "text-emerald-400" : score >= 75 ? "text-amber-300" : "text-white/50"
                }`}
              >
                {score}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a28] to-[#252538] p-4 shadow-inner">
      <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-accent-light/80">
        Design System
      </p>
      <div className="space-y-2">
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-lg bg-accent shadow-md shadow-accent/30" />
          <div className="h-8 w-8 rounded-lg bg-white/20" />
          <div className="h-8 w-8 rounded-full border-2 border-white/20" />
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-2">
          <div className="h-2 w-1/2 rounded bg-white/30" />
          <div className="mt-1.5 h-2 w-full rounded bg-white/10" />
        </div>
        <div className="flex gap-2">
          <div className="h-6 flex-1 rounded-md bg-accent/40" />
          <div className="h-6 flex-1 rounded-md border border-white/15" />
        </div>
      </div>
    </div>
  );
}
