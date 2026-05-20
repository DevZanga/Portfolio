interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  variant = "light",
  align = "left",
}: SectionHeadingProps) {
  const titleClass = variant === "dark" ? "text-white" : "text-ink";
  const descClass = variant === "dark" ? "text-white/70" : "text-muted";
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`mb-14 max-w-2xl ${alignClass}`}>
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden />
        {label}
      </p>
      <h2
        className={`font-display leading-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18] ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 max-w-xl text-base leading-[1.7] sm:text-lg ${descClass}`}>
          {description}
        </p>
      )}
    </div>
  );
}
