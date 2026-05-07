import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { InteractiveCake } from "./InteractiveCake";
import { Confetti } from "./Confetti";
import { Ornament, PremiumButton } from "./Ornament";

export function WishSection({ onNext }: { onNext: () => void }) {
  const [cut, setCut] = useState(false);

  return (
    <SectionShell>
      <Confetti active={cut} count={70} />
      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="animate-fade-up">
          <Ornament label="today is all yours" />
        </div>
        <h2 className="mt-4 font-display text-[2.5rem] sm:text-[5rem] lg:text-[6.5rem] leading-[0.95] text-foreground animate-fade-up tracking-tight" style={{ animationDelay: "0.1s" }}>
          {config.birthdayHeadline.split(",")[0]},
          <br />
          <span className="text-shimmer italic font-light">
            {config.birthdayHeadline.split(",").slice(1).join(",").trim()}
          </span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground font-light italic animate-fade-up" style={{ animationDelay: "0.25s" }}>
          {config.birthdaySubline}
        </p>

        <div className="mt-12 sm:mt-16 animate-bloom" style={{ animationDelay: "0.4s" }}>
          <InteractiveCake variant={1} onCut={() => setCut(true)} />
        </div>

        <p className="mt-6 font-script text-2xl sm:text-3xl text-accent/85">
          {config.cakeOneCaption}
        </p>

        {cut && (
          <div className="mt-12 animate-bloom">
            <PremiumButton onClick={onNext}>
              Open your first gift
              <ChevronRight className="h-5 w-5" />
            </PremiumButton>
          </div>
        )}
      </div>
    </SectionShell>
  );
}