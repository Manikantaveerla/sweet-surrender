import { useState } from "react";
import giftbox from "@/assets/giftbox.png";

export function GiftBox({
  onOpen,
  size = "md",
  label = "tap to open",
}: {
  onOpen: () => void;
  size?: "md" | "lg";
  label?: string;
}) {
  const [opened, setOpened] = useState(false);

  const handle = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(onOpen, 1100);
  };

  const dims = size === "lg" ? "h-[55vh] sm:h-[65vh]" : "h-[40vh] sm:h-[48vh]";

  return (
    <button
      onClick={handle}
      type="button"
      aria-label="Open gift"
      className="group relative outline-none"
    >
      <div
        className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
          opened ? "scale-150 opacity-100" : "scale-90 opacity-60 group-hover:scale-100"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.88 0.1 50 / 0.7), transparent 70%)" }}
        aria-hidden
      />
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          opened ? "scale-110" : "group-hover:scale-105 animate-pulse-glow rounded-3xl"
        }`}
      >
        <img
          src={giftbox}
          alt="Gift box"
          width={1024}
          height={1024}
          className={`${dims} w-auto mx-auto drop-shadow-[0_30px_50px_oklch(0.55_0.16_15/0.4)] ${opened ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        />
      </div>
      <span className="mt-4 inline-block font-script text-2xl text-primary/80">{label}</span>
    </button>
  );
}