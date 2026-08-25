import { cn } from "@/lib/cn";

const COLOR_MAP = {
  brand: "bg-brand-soft text-brand-dark",
  accent: "bg-accent-soft text-[#8a4a13]",
  ink: "bg-ink text-white",
} as const;

const SIZE_MAP = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-xl",
} as const;

export function Avatar({
  initials,
  color = "brand",
  size = "md",
  className,
}: {
  initials: string;
  color?: keyof typeof COLOR_MAP;
  size?: keyof typeof SIZE_MAP;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-semibold tracking-wide",
        COLOR_MAP[color],
        SIZE_MAP[size],
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
