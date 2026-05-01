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
      className="group relative outline-none px-6"
    >
      {/* Multi-layer glow base */}
      <div
        className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
          cut ? "scale-150 opacity-100" : "scale-90 opacity-70 group-hover:opacity-90 group-hover:scale-100"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.82 0.18 50 / 0.85), transparent 65%)" }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
          cut ? "scale-125 opacity-90" : "scale-75 opacity-60 group-hover:opacity-80"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.88 0.16 25 / 0.6), transparent 60%)" }}
        aria-hidden
      />

      {/* Candle flame layer with halos */}
      {!cut && (
        <div className="pointer-events-none absolute inset-x-0 top-[5%] flex justify-center gap-2 sm:gap-3 z-10">
          {Array.from({ length: variant === 1 ? 6 : 7 }).map((_, i) => (
            <span key={i} className="relative">
              <span
                className="block h-4 w-2 rounded-full bg-yellow-100 animate-flicker"
                style={{
                  boxShadow:
                    "0 0 16px oklch(0.96 0.18 80 / 1), 0 0 32px oklch(0.88 0.2 60 / 0.9), 0 0 50px oklch(0.78 0.18 30 / 0.7)",
                  animationDelay: `${i * 0.15}s`,
                }}
              />
              <span
                aria-hidden
                className="absolute -inset-2 rounded-full blur-md animate-flicker"
                style={{
                  background: "radial-gradient(circle, oklch(0.92 0.18 70 / 0.6), transparent 70%)",
                  animationDelay: `${i * 0.18}s`,
                }}
              />
            </span>
          ))}
        </div>
      )}

      {/* Sparkle burst on cut */}
      {cut && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * 360;
            return (
              <span
                key={i}
                className="absolute top-1/2 left-1/2 animate-sparkle-burst"
                style={{
                  transform: `rotate(${angle}deg) translateX(120px)`,
                  animationDelay: `${i * 0.04}s`,
                }}
              >
                <span className="block h-2 w-2 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 14px oklch(0.92 0.18 75 / 1), 0 0 28px oklch(0.85 0.2 50 / 0.8)" }} />
              </span>
            );
          })}
        </div>
      )}

      {/* Cake image */}
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          cut ? "scale-110 -rotate-2" : "group-hover:scale-[1.04] animate-float-soft"
        }`}
      >
        <img
          src={img}
          alt="Birthday cake"
          width={1024}
          height={1024}
          className="h-[55vh] sm:h-[62vh] w-auto mx-auto drop-shadow-[0_40px_60px_oklch(0.42_0.19_12/0.55)]"
        />
      </div>

      <span className="mt-5 inline-block font-script text-3xl text-shimmer">
        {cut ? "✨ wish made ✨" : "tap to cut"}
      </span>
    </button>
  );
}