import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { InteractiveCake } from "./InteractiveCake";
import { Confetti } from "./Confetti";

export function Cake2Section({ onNext }: { onNext: () => void }) {
  const [cut, setCut] = useState(false);

  return (
    <SectionShell>
      <Confetti active={cut} count={120} />
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 animate-fade-up">
          one more wish
        </p>
        <h2 className="mt-3 font-display text-5xl sm:text-7xl text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Because <span className="text-gradient-rose italic">one cake</span>
          <br className="hidden sm:block" /> was never enough.
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A tiny tradition, just for us. Close your eyes — the next surprise is the loudest one.
        </p>

        <div className="mt-10 animate-bloom" style={{ animationDelay: "0.35s" }}>
          <InteractiveCake variant={2} onCut={() => setCut(true)} />
        </div>

        <p className="mt-6 font-script text-2xl text-primary/70">
          {config.cakeTwoCaption}
        </p>

        {cut && (
          <button
            onClick={onNext}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-medium text-white shadow-gold ring-glow transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 animate-bloom"
          >
            Reveal the big one
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </SectionShell>
  );
}