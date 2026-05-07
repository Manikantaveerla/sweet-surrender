import { useEffect, useRef, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import heroHer from "@/assets/hero-her.jpg";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { Confetti } from "./Confetti";
import { Ornament } from "./Ornament";

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
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:gap-20 lg:grid-cols-[1.05fr_0.95fr] items-center">
        {/* Hero photo */}
        <div className="relative animate-fade-up">
          {/* Layered auras */}
          <div className="absolute -inset-10 rounded-[3rem] opacity-70 blur-3xl animate-glow-pulse" aria-hidden
            style={{ background: "radial-gradient(circle, oklch(0.78 0.18 18 / 0.6), transparent 70%)" }} />
          <div className="absolute -inset-6 rounded-[3rem] opacity-60 blur-3xl animate-glow-pulse" aria-hidden
            style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.55), transparent 70%)", animationDelay: "1.5s" }} />
          <div className="absolute -inset-3 rounded-[3rem] opacity-50 blur-2xl animate-glow-pulse" aria-hidden
            style={{ background: "radial-gradient(circle, oklch(0.62 0.18 320 / 0.5), transparent 70%)", animationDelay: "3s" }} />

          {/* Orbiting hearts around the photo */}
          <div aria-hidden className="absolute inset-0 hidden sm:block pointer-events-none">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit"
                style={{
                  ["--orbit-r" as string]: `${250 + i * 24}px`,
                  animationDuration: `${22 + i * 6}s`,
                  animationDelay: `${i * -3}s`,
                  animationDirection: i % 2 ? "reverse" : "normal",
                }}
              >
                <Heart className="h-4 w-4 text-accent fill-accent/80 drop-shadow-[0_0_10px_oklch(0.82_0.14_75/0.9)]" />
              </span>
            ))}
          </div>

          {/* Decorative golden frame */}
          <div className="relative animate-float-soft">
            <div className="absolute -inset-1.5 rounded-[2.25rem] opacity-90"
              style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75) 0%, oklch(0.78 0.18 18) 50%, oklch(0.62 0.18 340) 100%)" }} aria-hidden />
            <div className="relative overflow-hidden rounded-[2rem] shadow-deep">
            <img
              src={heroHer}
              alt={`A portrait for ${config.name}`}
              width={1024}
              height={1280}
              className="h-[45vh] sm:h-[60vh] lg:h-[82vh] w-full object-cover object-[35%_top]"
            />
            {/* Cinematic dual gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20" />
            {/* Sparkle accents on photo */}
            <Sparkles className="absolute top-6 right-6 h-6 w-6 text-accent animate-twinkle drop-shadow-[0_0_12px_oklch(0.82_0.14_75/0.9)]" />
            <Sparkles className="absolute top-1/3 left-7 h-3.5 w-3.5 text-accent/90 animate-twinkle drop-shadow-[0_0_8px_oklch(0.82_0.14_75/0.9)]" style={{ animationDelay: "1s" }} />
            <Sparkles className="absolute bottom-1/3 right-9 h-4 w-4 text-accent/90 animate-twinkle drop-shadow-[0_0_8px_oklch(0.82_0.14_75/0.9)]" style={{ animationDelay: "2s" }} />
            {/* Name plate */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-deep rounded-2xl px-5 py-4 shadow-soft flex items-center gap-3">
                <div className="h-9 w-9 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75), oklch(0.72 0.17 15))" }}>
                  <Heart className="h-4 w-4 text-white fill-white animate-heartbeat" />
                </div>
                <div>
                  <p className="font-script text-xl leading-none text-accent/80">a surprise for</p>
                  <p className="font-display text-2xl leading-tight text-shimmer mt-0.5">{config.name}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Password card */}
        <div className={`animate-fade-up ${error ? "animate-shake" : ""}`} style={{ animationDelay: "0.15s" }}>
          <div className="glass-deep rounded-[2rem] p-8 sm:p-12 shadow-deep relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full opacity-50 blur-3xl" aria-hidden
              style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.6), transparent 70%)" }} />
            <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full opacity-40 blur-3xl" aria-hidden
              style={{ background: "radial-gradient(circle, oklch(0.62 0.18 320 / 0.6), transparent 70%)" }} />
            <div className="relative">
              <Ornament label="a little secret" className="justify-start" />
              <h1 className="mt-5 font-display text-[2rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.05] text-foreground">
                {config.welcomeHeading.split(" ").map((w, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-shimmer italic font-light"> {w}</span>
                  ) : (
                    <span key={i}>{i === 0 ? "" : " "}{w}</span>
                  ),
                )}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md font-light">
                {config.welcomeSubtitle}
              </p>

              {/* Pin inputs */}
              <div className="mt-7 flex items-center gap-2 sm:gap-4">
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
                    className={`pin-input h-14 w-12 sm:h-20 sm:w-16 rounded-2xl bg-white/8 backdrop-blur border-2 text-center font-display text-2xl sm:text-4xl text-accent shadow-soft transition-all focus:outline-none focus:ring-4 focus:ring-accent/40 ${
                      error ? "border-destructive" : success ? "border-accent ring-glow" : "border-accent/30 focus:border-accent"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-5 min-h-[1.5rem] text-sm">
                {error && (
                  <p className="text-destructive font-medium">
                    Mmm, not quite — try again, beautiful.
                  </p>
                )}
                {success && (
                  <p className="text-accent font-medium flex items-center gap-2">
                    <Heart className="h-4 w-4 fill-accent animate-heartbeat" />
                    Unlocking your surprise…
                  </p>
                )}
                {!error && !success && (
                  <p className="text-muted-foreground/80 italic">Hint: a date that means everything to us.</p>
                )}
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/40" />
                <p className="font-script text-3xl text-shimmer">with all my love</p>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}