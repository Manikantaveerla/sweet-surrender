import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { InteractiveCake } from "./InteractiveCake";
import { Confetti } from "./Confetti";
import { Ornament, PremiumButton } from "./Ornament";

export function Cake2Section({ onNext }: { onNext: () => void }) {
  const [cut, setCut] = useState(false);

  return (
    <SectionShell>
      <Confetti active={cut} count={120} />
      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="animate-fade-up">
          <Ornament label="one more wish" />
        </div>
        <h2 className="mt-4 font-display text-[2.25rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[1] text-foreground animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
          Because <span className="text-shimmer italic font-light">one cake</span>
          <br className="hidden sm:block" /> was never enough.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground font-light italic animate-fade-up" style={{ animationDelay: "0.2s" }}>
          A tiny tradition, just for us. Close your eyes — the next surprise is the loudest one.
        </p>

        <div className="mt-12 animate-bloom" style={{ animationDelay: "0.35s" }}>
          <InteractiveCake variant={2} onCut={() => setCut(true)} />
        </div>

        <p className="mt-6 font-script text-2xl sm:text-3xl text-accent/85">
          {config.cakeTwoCaption}
        </p>

        {cut && (
          <div className="mt-12 animate-bloom">
            <PremiumButton onClick={onNext}>
              Reveal the big one
              <ChevronRight className="h-5 w-5" />
            </PremiumButton>
          </div>
        )}
      </div>
    </SectionShell>
  );
}