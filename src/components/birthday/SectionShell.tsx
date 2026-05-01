import { type ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative min-h-[100dvh] w-full flex items-center justify-center px-5 sm:px-8 py-16 sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-5 z-40 flex gap-2 glass-deep rounded-full px-5 py-2.5 shadow-soft ring-1 ring-accent/30">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === current
              ? "w-8 bg-gradient-to-r from-accent via-primary to-accent shadow-[0_0_10px_oklch(0.82_0.14_75/0.8)]"
              : i < current
                ? "w-3 bg-accent/60"
                : "w-3 bg-accent/15"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}