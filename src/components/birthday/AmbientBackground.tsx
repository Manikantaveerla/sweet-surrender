import { useMemo } from "react";

/** Soft animated background: floating petals, hearts, sparkles. */
export function AmbientBackground({ density = 18 }: { density?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: density }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 200,
        kind: i % 3, // 0 petal, 1 heart, 2 sparkle
        rotate: Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.4,
      })),
    [density],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Glow orbs */}
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.9 0.08 30 / 0.6), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.05 310 / 0.55), transparent 70%)", animationDelay: "3s" }} />
      <div className="absolute -bottom-32 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.88 0.07 50 / 0.6), transparent 70%)", animationDelay: "6s" }} />

      {items.map((it) => (
        <span
          key={it.id}
          className="absolute animate-float-up"
          style={{
            left: `${it.left}%`,
            bottom: "-40px",
            width: it.size,
            height: it.size,
            opacity: it.opacity,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
            ["--drift" as string]: `${it.drift}px`,
            transform: `rotate(${it.rotate}deg)`,
          } as React.CSSProperties}
        >
          {it.kind === 0 && <Petal />}
          {it.kind === 1 && <Heart />}
          {it.kind === 2 && <Sparkle />}
        </span>
      ))}
    </div>
  );
}

function Petal() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
      <path d="M12 2C8 6 4 10 6 16c1.5 4.5 6 6 12 4-2-3-2-7-2-10S14 4 12 2z"
        fill="oklch(0.86 0.09 25 / 0.85)" />
    </svg>
  );
}
function Heart() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <path
        d="M12 21s-7.5-4.6-9.3-9.4C1.4 8 3.6 4.5 7 4.5c2 0 3.7 1.1 5 3 1.3-1.9 3-3 5-3 3.4 0 5.6 3.5 4.3 7.1C19.5 16.4 12 21 12 21z"
        fill="oklch(0.7 0.15 18 / 0.9)"
      />
    </svg>
  );
}
function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <path d="M12 1l1.8 7.2L21 10l-7.2 1.8L12 19l-1.8-7.2L3 10l7.2-1.8L12 1z"
        fill="oklch(0.92 0.08 75 / 0.95)" />
    </svg>
  );
}