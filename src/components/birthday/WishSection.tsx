import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { InteractiveCake } from "./InteractiveCake";
import { Confetti } from "./Confetti";

export function WishSection({ onNext }: { onNext: () => void }) {
  const [cut, setCut] = useState(false);

  return (
    <SectionShell>
      <Confetti active={cut} count={70} />
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="font-script text-4xl sm:text-5xl text-primary/80 animate-fade-up">
          today is all yours,
        </p>
        <h2 className="mt-2 font-display text-5xl sm:text-7xl lg:text-8xl leading-[1] text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {config.birthdayHeadline.split(",")[0]},
          <br />
          <span className="text-gradient-rose italic">
            {config.birthdayHeadline.split(",").slice(1).join(",").trim()}
          </span>
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.25s" }}>
          {config.birthdaySubline}
        </p>

        <div className="mt-10 sm:mt-14 animate-bloom" style={{ animationDelay: "0.4s" }}>
          <InteractiveCake variant={1} onCut={() => setCut(true)} />
        </div>

        <p className="mt-6 font-script text-2xl text-primary/70">
          {config.cakeOneCaption}
        </p>

        {cut && (
          <button
            onClick={onNext}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-rose-gold px-8 py-4 text-base font-medium text-white shadow-gold ring-glow transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/40 animate-bloom"
          >
            Open your first gift
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </SectionShell>
  );
}