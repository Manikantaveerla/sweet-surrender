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
          opened ? "scale-150 opacity-100" : "scale-90 opacity-80 group-hover:scale-100"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.82 0.18 50 / 0.85), transparent 65%)" }}
        aria-hidden
      />
      <div
        className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
          opened ? "scale-125 opacity-95" : "scale-75 opacity-65"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 18 / 0.7), transparent 60%)" }}
        aria-hidden
      />
      <div
        className={`relative transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          opened ? "scale-110" : "group-hover:scale-105 animate-float-soft"
        }`}
      >
        <img
          src={giftbox}
          alt="Gift box"
          width={1024}
          height={1024}
          className={`${dims} w-auto mx-auto drop-shadow-[0_40px_60px_oklch(0.42_0.19_12/0.6)] ${opened ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        />
      </div>
      <span className="mt-5 inline-block font-script text-3xl text-shimmer">{label}</span>
    </button>
  );
}