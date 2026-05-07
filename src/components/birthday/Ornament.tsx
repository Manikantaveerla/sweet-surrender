import { Heart } from "lucide-react";

/** Decorative serif ornament — replaces generic uppercase eyebrows. */
export function Ornament({
  label,
  icon = true,
  className = "",
}: {
  label?: string;
  icon?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-accent/70 to-accent/70" />
      {icon && (
        <Heart className="h-3 w-3 text-accent fill-accent/60 animate-heartbeat" />
      )}
      {label && (
        <span className="font-script text-xl sm:text-2xl text-accent/90 tracking-wide whitespace-nowrap">
          {label}
        </span>
      )}
      {icon && (
        <Heart className="h-3 w-3 text-accent fill-accent/60 animate-heartbeat" style={{ animationDelay: "0.4s" }} />
      )}
      <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-accent/70 to-accent/70" />
    </div>
  );
}

/** Animated golden corner brackets to frame premium content. */
export function CornerFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const corner = "absolute h-6 w-6 border-accent/70";
  return (
    <div className={`relative ${className}`}>
      <span className={`${corner} top-0 left-0 border-t-2 border-l-2 rounded-tl-xl`} aria-hidden />
      <span className={`${corner} top-0 right-0 border-t-2 border-r-2 rounded-tr-xl`} aria-hidden />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl`} aria-hidden />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl`} aria-hidden />
      {children}
    </div>
  );
}

/** Reusable premium pill button with gold gradient + glow. */
export function PremiumButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-primary-foreground transition-all duration-500 hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-accent/40 w-full sm:w-auto ${className}`}
      style={{
        background: "linear-gradient(135deg, oklch(0.88 0.14 75) 0%, oklch(0.78 0.18 18) 50%, oklch(0.62 0.18 340) 100%)",
        boxShadow:
          "0 10px 30px -8px oklch(0.42 0.19 12 / 0.6), 0 0 50px oklch(0.82 0.14 75 / 0.4), inset 0 1px 0 oklch(1 0 0 / 0.4)",
      }}
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, oklch(0.92 0.14 75) 0%, oklch(0.85 0.2 18) 100%)" }} aria-hidden />
      <span className="relative flex items-center gap-2 font-display tracking-wide">{children}</span>
    </button>
  );
}