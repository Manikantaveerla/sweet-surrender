import { useMemo } from "react";

/** Soft animated background: floating petals, hearts, sparkles. */
export function AmbientBackground({ density = 28 }: { density?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: density }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 20,
        delay: Math.random() * 20,
        duration: 18 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 200,
        kind: i % 4, // 0 petal, 1 heart, 2 sparkle, 3 small heart
        rotate: Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.4,
      })),
    [density],
  );

  // Bokeh light circles (soft glowing dots)
  const bokeh = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 60 + Math.random() * 140,
        delay: Math.random() * 6,
        duration: 5 + Math.random() * 6,
        hue: [25, 50, 70, 320, 18][i % 5],
      })),
    [],
  );

  // Twinkling stars
  const stars = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 3,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      {/* Big breathing glow orbs — saturated twilight */}
      <div className="absolute -top-24 -left-24 h-[36rem] w-[36rem] rounded-full opacity-80 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.22 18 / 0.85), transparent 70%)" }} />
      <div className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full opacity-75 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.2 320 / 0.8), transparent 70%)", animationDelay: "3s" }} />
      <div className="absolute -bottom-32 left-1/4 h-[32rem] w-[32rem] rounded-full opacity-75 blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 55 / 0.8), transparent 70%)", animationDelay: "6s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full opacity-60 blur-3xl animate-glow-pulse"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.18 25 / 0.7), transparent 70%)" }} />

      {/* Vignette for cinematic depth */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.15 0.06 340 / 0.7) 100%)" }} />

      {/* Subtle noise/grain texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }} />

      {/* Bokeh dots */}
      {bokeh.map((b) => (
        <span
          key={`b-${b.id}`}
          className="absolute rounded-full blur-2xl animate-glow-pulse"
          style={{
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, oklch(0.85 0.18 ${b.hue} / 0.75), transparent 70%)`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}

      {/* Twinkling stars */}
      {stars.map((s) => (
        <span
          key={`s-${s.id}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            boxShadow: "0 0 8px oklch(0.95 0.06 60 / 0.9)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

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
          {(it.kind === 1 || it.kind === 3) && <Heart />}
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