type PreviewVariant = "ui" | "care" | "systems";

export function ServicePreview({ variant }: { variant: PreviewVariant }) {
  if (variant === "ui") {
    return (
      <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#2a2420] to-[#1f1c28] p-4 shadow-inner">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400/90" />
          <span className="h-2 w-2 rounded-full bg-amber-400/90" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
        </div>
        <div className="flex gap-3">
          <div className="w-14 shrink-0 space-y-2 rounded-lg bg-white/5 p-2">
            <div className="h-2 w-full rounded bg-accent/50" />
            <div className="h-2 w-3/4 rounded bg-white/15" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-3 w-2/3 rounded-md bg-white/25" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-7 flex-1 rounded-md bg-accent/60" />
              <div className="h-7 w-12 rounded-md bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "care") {
    return (
      <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#2a2420] to-[#2a2540] p-4 shadow-inner">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-amber-200/80">
          People-first review
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-amber-400/60" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-2/3 rounded bg-white/35" />
              <div className="h-1.5 w-full rounded bg-white/15" />
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded-full bg-emerald-500/25 px-2 py-1 text-[10px] text-emerald-200">
              Clear
            </span>
            <span className="rounded-full bg-amber-500/25 px-2 py-1 text-[10px] text-amber-100">
              Friendly
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-[#2a2420] to-[#1f1c28] p-4 shadow-inner">
      <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-accent-light/80">
        Design system
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
      </div>
    </div>
  );
}
