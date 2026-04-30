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
    <div className="fixed left-1/2 -translate-x-1/2 bottom-5 z-40 flex gap-2 glass rounded-full px-4 py-2 shadow-soft">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === current
              ? "w-7 bg-rose-gold"
              : i < current
                ? "w-3 bg-primary/50"
                : "w-3 bg-primary/15"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}