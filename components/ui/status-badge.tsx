import { cn } from "@/lib/cn";

const TONE_MAP = {
  good: "bg-brand-soft text-brand-dark",
  warning: "bg-accent-soft text-[#8a4a13]",
  danger: "bg-danger-soft text-danger",
  neutral: "bg-black/5 text-ink-soft",
} as const;

export type Tone = keyof typeof TONE_MAP;

export function StatusBadge({
  tone,
  children,
  className,
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium leading-none",
        TONE_MAP[tone],
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "good" && "bg-brand",
          tone === "warning" && "bg-accent",
          tone === "danger" && "bg-danger",
          tone === "neutral" && "bg-ink-faint",
        )}
      />
      {children}
    </span>
  );
}
