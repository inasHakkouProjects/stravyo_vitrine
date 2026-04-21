import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: "royal" | "midnight" | "ice" | "glassLight" | "glassDark";
  size?: "md" | "lg";
  className?: string;
};

const toneClass: Record<NonNullable<IconBadgeProps["tone"]>, string> = {
  royal:
    "bg-gradient-to-br from-royal via-royal-light to-royal-deep text-white shadow-[0_12px_40px_-12px_rgb(26_58_110/0.55)] ring-1 ring-white/20",
  midnight:
    "bg-gradient-to-br from-midnight via-midnight-soft to-royal-deep text-white shadow-[0_14px_44px_-14px_rgb(6_11_20/0.55)] ring-1 ring-white/10",
  ice:
    "bg-gradient-to-br from-white via-ice to-ice-muted text-royal shadow-[inset_0_1px_0_rgb(255_255_255/0.9)] ring-1 ring-royal/12",
  glassLight:
    "bg-gradient-to-br from-white/90 to-ice/80 text-royal shadow-premium ring-1 ring-midnight/[0.06]",
  glassDark:
    "bg-gradient-to-br from-white/[0.12] to-white/[0.04] text-sky-100 shadow-glass ring-1 ring-white/15",
};

const sizeClass: Record<NonNullable<IconBadgeProps["size"]>, string> = {
  md: "h-12 w-12 rounded-xl [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-14 w-14 rounded-2xl [&_svg]:h-6 [&_svg]:w-6",
};

export function IconBadge({
  icon: Icon,
  tone = "royal",
  size = "lg",
  className = "",
}: IconBadgeProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center ${sizeClass[size]} ${toneClass[tone]} ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_18%,rgb(255_255_255/0.35),transparent_55%)] opacity-70"
        aria-hidden
      />
      <Icon className="relative z-[1]" strokeWidth={1.5} aria-hidden />
    </span>
  );
}
