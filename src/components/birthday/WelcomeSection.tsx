import { useEffect, useRef, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import heroHer from "@/assets/hero-her.jpg";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { Confetti } from "./Confetti";

export function WelcomeSection({ onUnlock }: { onUnlock: () => void }) {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const setDigit = (i: number, val: string) => {
    const v = val.replace(/\D/g, "").slice(-1);
    setDigits((d) => {
      const next = [...d];
      next[i] = v;
      return next;
    });
    if (v && i < 3) refs[i + 1].current?.focus();
  };

  const onKey = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) {
      refs[i - 1].current?.focus();
    }
    if (e.key === "ArrowLeft" && i > 0) refs[i - 1].current?.focus();
    if (e.key === "ArrowRight" && i < 3) refs[i + 1].current?.focus();
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 4);
    if (!text) return;
    e.preventDefault();
    const next = ["", "", "", ""];
    text.split("").forEach((c, i) => (next[i] = c));
    setDigits(next);
    refs[Math.min(text.length, 3)].current?.focus();
  };

  // Auto-submit
  useEffect(() => {
    if (digits.every((d) => d.length === 1)) {
      const code = digits.join("");
      if (code === config.passcode) {
        setSuccess(true);
        const t = setTimeout(onUnlock, 1900);
        return () => clearTimeout(t);
      } else {
        setError(true);
        const t = setTimeout(() => {
          setError(false);
          setDigits(["", "", "", ""]);
          refs[0].current?.focus();
        }, 700);
        return () => clearTimeout(t);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digits.join("")]);

  useEffect(() => {
    refs[0].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionShell>
      <Confetti active={success} count={120} />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
        {/* Hero photo */}
        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-rose-gold opacity-30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] shadow-deep ring-1 ring-white/60">
            <img
              src={heroHer}
              alt={`A portrait for ${config.name}`}
              width={1024}
              height={1280}
              className="h-[60vh] sm:h-[68vh] lg:h-[78vh] w-full object-cover object-[35%_top]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 glass rounded-2xl px-4 py-3 shadow-soft">
              <Heart className="h-4 w-4 text-primary" />
              <p className="font-script text-2xl text-primary leading-none">For {config.name}</p>
            </div>
          </div>
        </div>

        {/* Password card */}
        <div className={`animate-fade-up ${error ? "animate-shake" : ""}`} style={{ animationDelay: "0.15s" }}>
          <div className="glass-deep rounded-[2rem] p-7 sm:p-10 shadow-deep relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-rose-gold opacity-20 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary/70">
                <Sparkles className="h-3.5 w-3.5" />
                A little secret
              </div>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
                {config.welcomeHeading.split(" ").map((w, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-gradient-rose italic"> {w}</span>
                  ) : (
                    <span key={i}>{i === 0 ? "" : " "}{w}</span>
                  ),
                )}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
                {config.welcomeSubtitle}
              </p>

              {/* Pin inputs */}
              <div className="mt-8 flex items-center gap-3 sm:gap-4">
                {digits.map((d, i) => (
                  <input
                    key={i}
                    ref={refs[i]}
                    inputMode="numeric"
                    type="text"
                    maxLength={1}
                    value={d}
                    onChange={(e) => setDigit(i, e.target.value)}
                    onKeyDown={(e) => onKey(i, e)}
                    onPaste={onPaste}
                    aria-label={`Passcode digit ${i + 1}`}
                    className={`pin-input h-16 w-14 sm:h-20 sm:w-16 rounded-2xl bg-white/80 border-2 text-center font-display text-3xl sm:text-4xl text-primary shadow-soft transition-all focus:outline-none focus:ring-4 focus:ring-accent/40 ${
                      error ? "border-destructive" : success ? "border-accent ring-glow" : "border-border focus:border-accent"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-4 min-h-[1.5rem] text-sm">
                {error && (
                  <p className="text-destructive font-medium">
                    Mmm, not quite — try again, beautiful.
                  </p>
                )}
                {success && (
                  <p className="text-primary font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-primary" />
                    Unlocking your surprise…
                  </p>
                )}
                {!error && !success && (
                  <p className="text-muted-foreground/80">Hint: a date that means everything to us.</p>
                )}
              </div>

              <p className="mt-8 font-script text-3xl text-primary/80">
                with all my love —
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}