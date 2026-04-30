import { useEffect, useState } from "react";

/** One-shot confetti + hearts burst. */
export function Confetti({ active, count = 80 }: { active: boolean; count?: number }) {
  const [items, setItems] = useState<
    { id: number; left: number; delay: number; duration: number; color: string; kind: number; size: number }[]
  >([]);

  useEffect(() => {
    if (!active) return;
    const palette = [
      "oklch(0.78 0.12 18)",
      "oklch(0.78 0.11 70)",
      "oklch(0.92 0.05 20)",
      "oklch(0.86 0.05 310)",
      "oklch(0.88 0.07 50)",
    ];
    setItems(
      Array.from({ length: count }).map((_, i) => ({
        id: i + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 2.2,
        color: palette[i % palette.length],
        kind: i % 4,
        size: 6 + Math.random() * 10,
      })),
    );
    const t = setTimeout(() => setItems([]), 5500);
    return () => clearTimeout(t);
  }, [active, count]);

  if (!items.length) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.kind === 3 ? "transparent" : p.color,
            borderRadius: p.kind === 0 ? "9999px" : p.kind === 1 ? "2px" : "0",
            animation: `confetti-fall ${p.duration}s cubic-bezier(0.2, 0.6, 0.4, 1) ${p.delay}s forwards`,
          }}
        >
          {p.kind === 3 && (
            <svg viewBox="0 0 24 24" className="h-full w-full">
              <path
                d="M12 21s-7.5-4.6-9.3-9.4C1.4 8 3.6 4.5 7 4.5c2 0 3.7 1.1 5 3 1.3-1.9 3-3 5-3 3.4 0 5.6 3.5 4.3 7.1C19.5 16.4 12 21 12 21z"
                fill={p.color}
              />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}