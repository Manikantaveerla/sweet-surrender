import { useState } from "react";
import { Heart, Play } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { GiftBox } from "./GiftBox";
import { Confetti } from "./Confetti";
import { Ornament, CornerFrame } from "./Ornament";
import m1 from "@/assets/memory-1.jpg";
import m2 from "@/assets/memory-2.jpg";
import m3 from "@/assets/memory-3.jpg";
import m4 from "@/assets/memory-4.jpg";
import m5 from "@/assets/memory-5.jpg";
import m6 from "@/assets/memory-6.jpg";

const galleryPhotos = [
  { src: m1, caption: "the moment we started" },
  { src: m3, caption: "soft mornings" },
  { src: m2, caption: "the slow sunsets" },
  { src: m4, caption: "the little lights" },
  { src: m5, caption: "every cheers, only you" },
  { src: m6, caption: "every word, only true" },
];

export function FinaleSection() {
  const [opened, setOpened] = useState(false);

  return (
    <SectionShell className="!min-h-[100dvh]">
      <Confetti active={opened} count={150} />
      <div className="mx-auto w-full max-w-6xl text-center">
        {!opened ? (
          <div className="animate-bloom">
            <Ornament label="the big one" />
            <h2 className="mt-6 font-display text-[3rem] sm:text-[5rem] lg:text-[6rem] leading-[0.95] text-foreground tracking-tight">
              Open it <span className="text-shimmer italic font-light">slowly.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground font-light italic">
              Inside is a little vault — videos, photos, words, every soft thing I've been keeping for today.
            </p>
            <div className="mt-8 sm:mt-14">
              <GiftBox onOpen={() => setOpened(true)} size="lg" label="open the vault" />
            </div>
          </div>
        ) : (
          <div className="space-y-12 sm:space-y-20">
            <header className="animate-fade-up">
              <Ornament label={config.finaleTitle.toLowerCase()} />
              <h2 className="mt-4 font-display text-[2.5rem] sm:text-[5rem] lg:text-[6rem] leading-[0.95] text-foreground tracking-tight">
                Everything I love,
                <br className="hidden sm:block" />
                <span className="text-shimmer italic font-light">in one place.</span>
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground font-light italic">
                {config.finaleSubtitle}
              </p>
            </header>

            {/* Videos row */}
            <SectionTitle eyebrow="chapter one" title="our little films" />
            <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="grid sm:grid-cols-2 gap-8">
                {(config.finalVideos.length ? config.finalVideos : [
                  { url: "", caption: "the day we couldn't stop laughing" },
                  { url: "", caption: "you, dancing in the kitchen" },
                ]).map((v, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-3 rounded-[1.75rem] opacity-40 blur-2xl group-hover:opacity-70 transition-opacity duration-500" aria-hidden
                      style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.6), transparent 70%)" }} />
                    <div className="relative p-[1.5px] rounded-[1.5rem]"
                      style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75 / 0.7), oklch(0.78 0.18 18 / 0.4), oklch(0.62 0.18 320 / 0.6))" }}>
                      <CornerFrame className="rounded-[1.4rem] overflow-hidden bg-background">
                        {v.url ? (
                          <video src={v.url} controls playsInline className="w-full aspect-video bg-black block" />
                        ) : (
                          <div className="aspect-video w-full flex items-center justify-center placeholder-velvet">
                            <div className="h-16 w-16 rounded-full flex items-center justify-center shadow-gold animate-glow-pulse"
                              style={{ background: "linear-gradient(135deg, oklch(0.88 0.14 75), oklch(0.72 0.17 15))" }}>
                              <Play className="h-7 w-7 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        )}
                        <p className="font-script text-2xl text-shimmer text-left px-6 py-4 bg-background/40">{v.caption}</p>
                      </CornerFrame>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo gallery — masonry */}
            <SectionTitle eyebrow="chapter two" title="the gallery" />
            <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="columns-2 sm:columns-3 gap-5 [column-fill:_balance]">
                {galleryPhotos.map((p, i) => {
                  const aspects = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]"];
                  return (
                    <figure
                      key={i}
                      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-deep ring-1 ring-accent/20 hover:ring-accent/60 transition-all duration-500"
                    >
                      <img
                        src={p.src}
                        alt={p.caption}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className={`${aspects[i % aspects.length]} h-auto w-full object-cover transition-transform duration-1000 group-hover:scale-110`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90" />
                      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-left">
                        <Heart className="h-3.5 w-3.5 text-accent fill-accent/70 mb-2" />
                        <span className="font-script text-2xl text-shimmer drop-shadow block">{p.caption}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </section>

            {/* Love notes — varied tilt cards */}
            <SectionTitle eyebrow="chapter three" title="tiny love notes" />
            <section className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="grid sm:grid-cols-3 gap-6">
                {config.loveNotes.map((n, i) => {
                  const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];
                  return (
                    <article
                      key={i}
                      className={`group relative parchment rounded-2xl p-7 text-left shadow-deep transition-all duration-500 hover:scale-[1.04] hover:rotate-0 ${tilts[i % 3]}`}
                      style={{ minHeight: "13rem" }}
                    >
                      <div className="absolute top-4 right-4 h-7 w-7 rounded-full flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, oklch(0.7 0.22 18), oklch(0.42 0.19 12))" }}>
                        <Heart className="h-3.5 w-3.5 text-white fill-white" />
                      </div>
                      <h4 className="font-script text-3xl parchment-ink leading-tight">{n.title}</h4>
                      <p className="mt-3 font-display text-lg leading-relaxed" style={{ color: "oklch(0.32 0.08 20)" }}>{n.body}</p>
                      <div className="mt-4 h-px w-12 bg-current opacity-30 parchment-ink" />
                    </article>
                  );
                })}
              </div>
            </section>

            {/* Closing */}
            <section className="pt-8 sm:pt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative mx-auto max-w-2xl">
                <div className="absolute -inset-8 rounded-[3rem] opacity-60 blur-3xl animate-glow-pulse" aria-hidden
                  style={{ background: "radial-gradient(circle, oklch(0.82 0.14 75 / 0.6), transparent 70%)" }} />
                <div className="relative glass-deep rounded-[2rem] p-12 shadow-deep ring-glow">
                  <Ornament icon className="mb-6" />
                  <p className="font-script text-5xl sm:text-6xl sm:text-7xl text-shimmer leading-none">happy birthday,</p>
                  <p className="mt-3 font-display text-3xl sm:text-4xl sm:text-5xl text-foreground italic font-light">my forever favorite.</p>
                  <p className="mt-7 text-muted-foreground italic font-light max-w-md mx-auto">
                    Thank you for being the best part of every day. I'd build a thousand of these for you.
                  </p>
                  <div className="mt-9 inline-flex items-center gap-3">
                    <Heart className="h-4 w-4 fill-accent text-accent animate-heartbeat" />
                    <span className="text-xs uppercase tracking-[0.4em] text-accent/80 font-medium">{config.finaleClosing}</span>
                    <Heart className="h-4 w-4 fill-accent text-accent animate-heartbeat" style={{ animationDelay: "0.5s" }} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </SectionShell>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center animate-fade-up">
      <p className="text-[10px] uppercase tracking-[0.4em] text-accent/70 font-medium">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl sm:text-5xl text-foreground italic font-light">
        {title}
      </h3>
      <div className="mt-3 mx-auto h-px w-20 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
    </div>
  );
}