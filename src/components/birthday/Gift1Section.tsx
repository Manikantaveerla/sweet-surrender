import { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { GiftBox } from "./GiftBox";
import { Confetti } from "./Confetti";

export function Gift1Section({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell>
      <Confetti active={opened} count={50} />
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 animate-fade-up">
          {config.gift1Title}
        </p>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {config.gift1Subtitle}
        </h2>

        {!opened ? (
          <div className="mt-12 animate-bloom">
            <GiftBox onOpen={() => setOpened(true)} />
          </div>
        ) : (
          <div className="mt-10 animate-bloom">
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-rose-gold opacity-30 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] glass-deep shadow-deep ring-1 ring-white/60">
                {config.gift1VideoUrl ? (
                  <video
                    src={config.gift1VideoUrl}
                    controls
                    playsInline
                    className="w-full aspect-video bg-black"
                  />
                ) : (
                  <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-blush via-cream to-peach">
                    <div className="text-center px-6">
                      <div className="mx-auto h-20 w-20 rounded-full bg-white/80 flex items-center justify-center shadow-gold">
                        <Play className="h-9 w-9 text-primary fill-primary ml-1" />
                      </div>
                      <p className="mt-5 font-display text-2xl text-primary">Your video lives here</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Replace <code className="px-1 rounded bg-white/60">gift1VideoUrl</code> in birthday-config.ts
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-6 font-script text-3xl text-primary/85">{config.gift1Caption}</p>
            </div>

            <button
              onClick={onNext}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-medium text-white shadow-gold transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40"
            >
              The next gift
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </SectionShell>
  );
}