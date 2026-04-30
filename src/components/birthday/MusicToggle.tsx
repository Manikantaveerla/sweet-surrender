import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { config } from "@/lib/birthday-config";

// Soft ambient placeholder (silent base64 wav) — replace via config.musicUrl
const SILENT =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(config.musicUrl || SILENT);
    a.loop = true;
    a.volume = 0.45;
    ref.current = a;
    return () => {
      a.pause();
      ref.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = ref.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed top-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full glass-deep shadow-soft transition-all hover:scale-105 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {playing ? (
        <Music className="h-5 w-5 text-primary" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
      <span
        className={`absolute inset-0 rounded-full ${playing ? "animate-pulse-glow" : ""}`}
        aria-hidden
      />
    </button>
  );
}