interface LogoProps {
  variant?: "light" | "dark";
}

export function Logo({ variant = "light" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span
      className={`font-display text-base font-extrabold tracking-[0.22em] sm:text-lg ${
        isLight ? "text-white" : "text-ink"
      }`}
    >
      ZANGA
    </span>
  );
}
