import { useState } from "react";
import { ChevronRight, Heart } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { Ornament, PremiumButton } from "./Ornament";
import placeholder1 from "@/assets/memory-2.jpg";
import placeholder2 from "@/assets/memory-3.jpg";

const m1 = "/videos/Picsart_26-04-17_19-33-00-409.jpg.jpeg";
const m2 = "/videos/Blue and Gold Modern Birthday Instagram Post_20260426_214246_0000.png";

const photos = [
  { src: m1, rotate: -8, top: "2%", left: "4%" },
  { src: placeholder1, rotate: 6, top: "10%", right: "6%" },
  { src: placeholder2, rotate: -5, bottom: "10%", left: "8%" },
  { src: m2, rotate: 9, bottom: "4%", right: "4%" },
];

export function Gift2Section({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell>
      <div className="mx-auto w-full max-w-6xl text-center">
        <div className="animate-fade-up">
          <Ornament label={config.gift2Title.toLowerCase()} />
        </div>
        <h2 className="mt-4 font-display text-[2.5rem] sm:text-[5rem] lg:text-[6rem] text-foreground animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
          <span className="text-shimmer italic font-light">{config.gift2Subtitle}</span>
        </h2>

        {!opened ? (
          <div className="mt-8 sm:mt-14 animate-bloom">
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="group relative outline-none"
              aria-label="Open the letter"
            >
              <div className="absolute -inset-10 rounded-[3rem] opacity-60 blur-3xl scale-90 group-hover:opacity-90 group-hover:scale-100 transition-all duration-700 animate-glow-pulse" aria-hidden
                style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.7), transparent 70%)" }} />

              {/* Envelope */}
              <div className="relative mx-auto w-[18rem] sm:w-[26rem] aspect-[4/3] rounded-2xl shadow-deep overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 animate-float-soft"
                style={{
                  background: "linear-gradient(180deg, oklch(0.65 0.16 18), oklch(0.5 0.18 12))",
                  boxShadow: "0 30px 80px -20px oklch(0.18 0.1 340 / 0.8), inset 0 0 0 1px oklch(0.88 0.14 75 / 0.4)",
                }}>
                {/* Envelope body texture lines */}
                <div className="absolute inset-0 opacity-30"
                  style={{ background: "repeating-linear-gradient(45deg, transparent 0 12px, oklch(0.4 0.12 12 / 0.4) 12px 13px)" }} />

                {/* Envelope flap (triangular top) */}
                <div
                  className="absolute inset-x-0 top-0 h-[55%] origin-top transition-transform duration-700 group-hover:-translate-y-1 z-20"
                  style={{
                    background: "linear-gradient(180deg, oklch(0.72 0.17 18), oklch(0.55 0.18 14))",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    filter: "drop-shadow(0 4px 8px oklch(0.18 0.1 340 / 0.5))",
                  }}
                />

                {/* Wax seal with monogram */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[40%] h-20 w-20 rounded-full flex items-center justify-center z-30 transition-transform duration-500 group-hover:rotate-12"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, oklch(0.7 0.22 18), oklch(0.42 0.19 12))",
                    boxShadow: "0 0 30px oklch(0.78 0.18 18 / 0.7), inset -3px -3px 8px oklch(0.25 0.12 12 / 0.7), inset 3px 3px 6px oklch(0.85 0.18 25 / 0.5)",
                  }}>
                  <Heart className="h-8 w-8 text-accent fill-accent/90 drop-shadow-lg animate-heartbeat" />
                  <span className="absolute -inset-1 rounded-full border border-accent/60" />
                </div>

                {/* Subtle "to" inscription */}
                <div className="absolute bottom-3 right-4 font-script text-lg text-accent/80 z-30">
                  to {config.shortName}
                </div>
              </div>
              <span className="mt-7 inline-block font-script text-2xl sm:text-3xl text-shimmer">tap to break the seal</span>
            </button>
          </div>
        ) : (
          <div className="mt-6 sm:mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-12 items-start">
            {/* Letter */}
            <div className="relative animate-bloom">
              <div className="absolute -inset-6 rounded-[2.5rem] opacity-50 blur-3xl animate-glow-pulse" aria-hidden
                style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.55), transparent 70%)" }} />
              <article className="relative rounded-[1.5rem] p-6 sm:p-10 lg:p-12 text-left parchment overflow-hidden">
                {/* Desktop header */}
                <div className="hidden sm:block absolute top-5 right-6 font-script text-2xl parchment-muted">
                  to {config.shortName}
                </div>
                <div className="hidden sm:flex absolute top-5 left-6 items-center gap-2 parchment-muted">
                  <Heart className="h-3.5 w-3.5 fill-current" />
                  <span className="font-script text-base">a love letter</span>
                </div>
                {/* Mobile header */}
                <div className="sm:hidden flex items-center justify-between parchment-muted mb-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-3.5 w-3.5 fill-current" />
                    <span className="font-script text-base">a love letter</span>
                  </div>
                  <span className="font-script text-xl">to {config.shortName}</span>
                </div>
                <p className="mt-2 sm:mt-8 font-script text-4xl sm:text-5xl parchment-ink leading-tight">Dearest you,</p>
                <div className="mt-5 sm:mt-6 font-display text-base sm:text-lg lg:text-xl leading-[1.7] whitespace-pre-line break-words" style={{ color: "oklch(0.32 0.08 20)" }}>
                  {config.letterText}
                </div>
                <div className="mt-7 sm:mt-8 flex items-center justify-end gap-3">
                  <span className="h-px w-16 bg-current opacity-30 parchment-ink" />
                  <p className="font-script text-2xl sm:text-3xl parchment-ink">always yours</p>
                </div>
              </article>
            </div>

            {/* Photo collage */}
            <div className="relative h-[24rem] sm:h-[30rem] lg:h-[34rem] animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {/* Center glow */}
              <div className="absolute inset-1/4 rounded-full opacity-40 blur-3xl animate-glow-pulse" aria-hidden
                style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.5), transparent 70%)" }} />
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="absolute h-36 w-28 sm:h-52 sm:w-44 lg:h-56 lg:w-48 rounded-xl bg-cream p-2 sm:p-2.5 shadow-deep ring-1 ring-accent/30 transition-all duration-500 hover:scale-110 hover:rotate-0 hover:z-10 animate-float-soft"
                  style={{
                    top: p.top,
                    left: p.left,
                    right: p.right,
                    bottom: p.bottom,
                    transform: `rotate(${p.rotate}deg)`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <img src={p.src} alt="memory" loading="lazy" width={400} height={400} className="h-[85%] w-full object-cover rounded-md" />
                  <p className="mt-1.5 text-center font-script text-lg" style={{ color: "oklch(0.42 0.16 18)" }}>us ♡</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 mt-4 text-center">
              <PremiumButton onClick={onNext}>
                There's still more
                <ChevronRight className="h-5 w-5" />
              </PremiumButton>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}