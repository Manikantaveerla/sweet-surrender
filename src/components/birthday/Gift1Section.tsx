import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { GiftBox } from "./GiftBox";
import { Confetti } from "./Confetti";
import { Ornament, PremiumButton, CornerFrame } from "./Ornament";

export function Gift1Section({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell>
      <Confetti active={opened} count={50} />
      <div className="mx-auto w-full max-w-4xl text-center">
        <div className="animate-fade-up">
          <Ornament label={config.gift1Title.toLowerCase()} />
        </div>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl text-foreground animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
          <span className="text-shimmer italic font-light">{config.gift1Subtitle}</span>
        </h2>

        {!opened ? (
          <div className="mt-14 animate-bloom">
            <GiftBox onOpen={() => setOpened(true)} />
          </div>
        ) : (
          <div className="mt-10 animate-bloom">
            <div className="relative mx-auto max-w-3xl">
              {/* Halo */}
              <div className="absolute -inset-8 rounded-[2.5rem] opacity-60 blur-3xl animate-glow-pulse" aria-hidden
                style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.55), transparent 70%)" }} />
              {/* Gold gradient frame */}
              <div className="relative p-[2px] rounded-[2rem]"
                style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75) 0%, oklch(0.78 0.18 18) 50%, oklch(0.62 0.18 340) 100%)" }}>
                <CornerFrame className="rounded-[1.9rem] overflow-hidden bg-background">
                  {config.gift1VideoUrl ? (
                    <video
                      src={config.gift1VideoUrl}
                      controls
                      playsInline
                      className="w-full aspect-video bg-black block"
                    />
                  ) : (
                    <div className="aspect-video w-full flex items-center justify-center placeholder-velvet relative overflow-hidden">
                      <div className="absolute inset-0 opacity-30"
                        style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.82 0.14 75 / 0.4), transparent 60%)" }} />
                      <div className="text-center px-6 relative">
                        <div className="mx-auto h-20 w-20 rounded-full flex items-center justify-center shadow-gold animate-glow-pulse"
                          style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75), oklch(0.72 0.17 15))" }}>
                          <Play className="h-9 w-9 text-white fill-white ml-1" />
                        </div>
                        <p className="mt-5 font-display text-2xl text-shimmer">Your video lives here</p>
                        <p className="mt-2 text-sm text-muted-foreground/80">
                          Replace <code className="px-1.5 rounded bg-white/10 text-accent">gift1VideoUrl</code> in birthday-config.ts
                        </p>
                      </div>
                    </div>
                  )}
                </CornerFrame>
              </div>
              <p className="mt-8 font-script text-3xl text-shimmer">{config.gift1Caption}</p>
            </div>

            <div className="mt-12">
              <PremiumButton onClick={onNext}>
                The next gift
                <ChevronRight className="h-5 w-5" />
              </PremiumButton>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}