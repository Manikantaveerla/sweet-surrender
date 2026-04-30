import { useState } from "react";
import { ChevronRight, Mail } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";

const photos = [
  { src: m1, rotate: -6, top: "5%", left: "2%" },
  { src: m3, rotate: 5, top: "0%", right: "4%" },
  { src: m2, rotate: -4, bottom: "8%", left: "6%" },
  { src: m4, rotate: 7, bottom: "3%", right: "2%" },
];

export function Gift2Section({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell>
      <div className="mx-auto w-full max-w-6xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 animate-fade-up">
          {config.gift2Title}
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {config.gift2Subtitle}
        </h2>

        {!opened ? (
          <div className="mt-14 animate-bloom">
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="group relative outline-none"
              aria-label="Open the letter"
            >
              <div className="absolute inset-0 rounded-3xl bg-rose-gold opacity-30 blur-3xl scale-90 group-hover:opacity-60 transition-opacity" aria-hidden />
              <div className="relative mx-auto w-[18rem] sm:w-[24rem] aspect-[4/3] rounded-2xl shadow-deep ring-1 ring-white/60 overflow-hidden bg-rose-gold transition-transform duration-500 group-hover:scale-105">
                {/* Envelope flap */}
                <div
                  className="absolute inset-x-0 top-0 h-1/2 origin-bottom transition-transform duration-700 group-hover:rotate-x-[10deg]"
                  style={{
                    background: "linear-gradient(180deg, oklch(0.82 0.1 25), oklch(0.7 0.13 22))",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-2/3"
                  style={{ background: "linear-gradient(180deg, oklch(0.78 0.11 25), oklch(0.65 0.14 18))" }}
                />
                {/* Wax seal */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full flex items-center justify-center shadow-gold"
                  style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.85 0.13 70), oklch(0.55 0.16 25))" }}>
                  <Mail className="h-7 w-7 text-white/90" />
                </div>
              </div>
              <span className="mt-5 inline-block font-script text-2xl text-primary/80">tap to open the letter</span>
            </button>
          </div>
        ) : (
          <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            {/* Letter */}
            <div className="relative animate-bloom">
              <div className="absolute -inset-3 rounded-[2rem] bg-rose-gold opacity-25 blur-2xl" aria-hidden />
              <article className="relative rounded-[1.75rem] p-8 sm:p-10 shadow-deep text-left ring-1 ring-white/70"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.98 0.012 70) 0%, oklch(0.96 0.022 60) 100%)",
                }}>
                <div className="absolute top-4 right-5 font-script text-2xl text-primary/40">
                  to {config.shortName}
                </div>
                <p className="font-script text-4xl text-primary leading-none">Dearest you,</p>
                <div className="mt-5 font-display text-lg sm:text-xl leading-relaxed text-foreground/85 whitespace-pre-line">
                  {config.letterText}
                </div>
                <p className="mt-6 font-script text-3xl text-primary text-right">— always yours</p>
              </article>
            </div>

            {/* Photo collage */}
            <div className="relative h-[28rem] sm:h-[32rem] animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {photos.map((p, i) => (
                <div
                  key={i}
                  className="absolute h-44 w-36 sm:h-56 sm:w-48 rounded-xl bg-white p-2 shadow-deep ring-1 ring-white/70 transition-transform hover:scale-110 hover:rotate-0 hover:z-10"
                  style={{
                    top: p.top,
                    left: p.left,
                    right: p.right,
                    bottom: p.bottom,
                    transform: `rotate(${p.rotate}deg)`,
                  }}
                >
                  <img src={p.src} alt="memory" loading="lazy" width={400} height={400} className="h-[85%] w-full object-cover rounded-md" />
                  <p className="mt-1 text-center font-script text-base text-primary/70">us ♡</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 mt-2">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-medium text-white shadow-gold transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40"
              >
                There's still more
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}