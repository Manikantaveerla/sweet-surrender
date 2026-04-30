import { useState } from "react";
import { Heart, Play, Sparkles } from "lucide-react";
import { config } from "@/lib/birthday-config";
import { SectionShell } from "./SectionShell";
import { GiftBox } from "./GiftBox";
import { Confetti } from "./Confetti";
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
            <p className="text-xs uppercase tracking-[0.3em] text-primary/60">the big one</p>
            <h2 className="mt-3 font-display text-5xl sm:text-7xl text-foreground">
              Open it <span className="text-gradient-rose italic">slowly.</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Inside is a little vault — videos, photos, words, every soft thing I've been keeping for today.
            </p>
            <div className="mt-12">
              <GiftBox onOpen={() => setOpened(true)} size="lg" label="open the vault" />
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            <header className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary/70">
                <Sparkles className="h-3.5 w-3.5" />
                {config.finaleTitle}
              </div>
              <h2 className="mt-4 font-display text-5xl sm:text-7xl text-foreground">
                Everything I love, <span className="text-gradient-rose italic">in one place.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                {config.finaleSubtitle}
              </p>
            </header>

            {/* Videos row */}
            <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-6">our little films</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {(config.finalVideos.length ? config.finalVideos : [
                  { url: "", caption: "the day we couldn't stop laughing" },
                  { url: "", caption: "you, dancing in the kitchen" },
                ]).map((v, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -inset-2 rounded-2xl bg-rose-gold opacity-20 blur-xl group-hover:opacity-40 transition" aria-hidden />
                    <div className="relative overflow-hidden rounded-2xl glass-deep shadow-soft ring-1 ring-white/60">
                      {v.url ? (
                        <video src={v.url} controls playsInline className="w-full aspect-video bg-black" />
                      ) : (
                        <div className="aspect-video w-full flex items-center justify-center bg-gradient-to-br from-blush via-cream to-peach">
                          <div className="h-14 w-14 rounded-full bg-white/85 flex items-center justify-center shadow-gold">
                            <Play className="h-6 w-6 text-primary fill-primary ml-0.5" />
                          </div>
                        </div>
                      )}
                      <p className="font-script text-2xl text-primary text-left px-5 py-3">{v.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Photo gallery */}
            <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-6">the gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {galleryPhotos.map((p, i) => (
                  <figure
                    key={i}
                    className={`group relative overflow-hidden rounded-2xl shadow-soft ring-1 ring-white/60 ${
                      i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    <img
                      src={p.src}
                      alt={p.caption}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-rose-deep/80 to-transparent p-4 text-left">
                      <span className="font-script text-2xl text-white drop-shadow">{p.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* Love notes */}
            <section className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-6">tiny love notes</h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {config.loveNotes.map((n, i) => (
                  <article
                    key={i}
                    className="glass-deep rounded-2xl p-6 text-left shadow-soft transition-transform hover:-translate-y-1"
                  >
                    <Heart className="h-5 w-5 text-primary fill-primary/40" />
                    <h4 className="mt-3 font-display text-2xl text-foreground">{n.title}</h4>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">{n.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section className="pt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="mx-auto max-w-2xl glass-deep rounded-[2rem] p-10 shadow-deep ring-glow">
                <p className="font-script text-5xl sm:text-6xl text-primary leading-none">happy birthday,</p>
                <p className="mt-2 font-display text-4xl sm:text-5xl text-foreground italic">my forever favorite.</p>
                <p className="mt-6 text-muted-foreground">
                  Thank you for being the best part of every day. I'd build a thousand of these for you.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-primary">
                  <Heart className="h-4 w-4 fill-primary" />
                  <span className="text-sm uppercase tracking-[0.3em]">{config.finaleClosing}</span>
                  <Heart className="h-4 w-4 fill-primary" />
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </SectionShell>
  );
}