import { useState } from "react";
import cakeOne from "@/assets/cake-one.png";
import cakeTwo from "@/assets/cake-two.png";

export function InteractiveCake({
  variant = 1,
  onCut,
}: {
  variant?: 1 | 2;
  onCut: () => void;
}) {
  const [cut, setCut] = useState(false);
  const img = variant === 1 ? cakeOne : cakeTwo;

  const handleCut = () => {
    if (cut) return;
    setCut(true);
    setTimeout(onCut, 900);
  };

  return (
    <button
      type="button"
      onClick={handleCut}
      aria-label="Cut the cake"
      className="group relative outline-none"
    >
      {/* Glow base */}
      <div
        className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
          cut ? "scale-125 opacity-90" : "scale-90 opacity-50 group-hover:opacity-80"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.88 0.1 50 / 0.7), transparent 70%)" }}
        aria-hidden
      />

      {/* Candle flame layer */}
      {!cut && (
        <div className="pointer-events-none absolute inset-x-0 top-[6%] flex justify-center gap-2 z-10">
          {Array.from({ length: variant === 1 ? 6 : 7 }).map((_, i) => (
            <span
              key={i}
              className="block h-3 w-1.5 rounded-full bg-yellow-200 animate-flicker"
              style={{
                boxShadow:
                  "0 0 12px oklch(0.95 0.15 80 / 0.95), 0 0 24px oklch(0.85 0.18 60 / 0.7)",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Cake image */}
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cut ? "scale-105 -rotate-1" : "group-hover:scale-[1.03]"
        }`}
      >
        <img
          src={img}
          alt="Birthday cake"
          width={1024}
          height={1024}
          className="h-[55vh] sm:h-[62vh] w-auto mx-auto drop-shadow-[0_30px_50px_oklch(0.55_0.16_15/0.35)]"
        />
        {/* Cut slice overlay */}
        {cut && (
          <div
            aria-hidden
            className="absolute inset-0 mix-blend-overlay"
            style={{
              background:
                "conic-gradient(from 200deg at 50% 60%, transparent 0deg, oklch(0.7 0.15 18 / 0.35) 18deg, transparent 36deg)",
            }}
          />
        )}
      </div>

      <span className="mt-4 inline-block font-script text-2xl text-primary/80">
        {cut ? "✨ make a wish ✨" : "tap to cut"}
      </span>
    </button>
  );
}