import { useEffect, useState } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { MusicToggle } from "./MusicToggle";
import { StepDots } from "./SectionShell";
import { WelcomeSection } from "./WelcomeSection";
import { WishSection } from "./WishSection";
import { Gift1Section } from "./Gift1Section";
import { Gift2Section } from "./Gift2Section";
import { Cake2Section } from "./Cake2Section";
import { FinaleSection } from "./FinaleSection";

const STEPS = 6;

export function Experience() {
  const [step, setStep] = useState(0);

  const go = (n: number) => {
    setStep(n);
    // smooth scroll top on each transition
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden">
      <AmbientBackground />
      {step > 0 && <MusicToggle />}

      <div key={step} className="animate-fade-up">
        {step === 0 && <WelcomeSection onUnlock={() => go(1)} />}
        {step === 1 && <WishSection onNext={() => go(2)} />}
        {step === 2 && <Gift1Section onNext={() => go(3)} />}
        {step === 3 && <Gift2Section onNext={() => go(4)} />}
        {step === 4 && <Cake2Section onNext={() => go(5)} />}
        {step === 5 && <FinaleSection />}
      </div>

      {step > 0 && <StepDots total={STEPS} current={step} />}
    </main>
  );
}