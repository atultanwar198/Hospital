import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function SectionCard({
  title,
  icon,
  viewAllHref,
  viewAllLabel = "View all",
  action,
  className,
  bodyClassName,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
  action?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-line bg-surface p-5 sm:p-6",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
          {icon && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-dark">
              {icon}
            </span>
          )}
          {title}
        </h2>
        {action}
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
          >
            {viewAllLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
      <div className={bodyClassName}>{children}</div>
    </section>
  );
}
