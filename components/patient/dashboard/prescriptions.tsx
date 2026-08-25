import { Pill, RefreshCw } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { prescriptions } from "@/lib/mock-data";

export function CurrentPrescriptions({ slug }: { slug: string }) {
  const current = prescriptions.filter((p) => p.status === "Active");

  return (
    <SectionCard
      title="Current Prescriptions"
      icon={<Pill className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/prescriptions`}
    >
      <ul className="divide-y divide-line">
        {current.map((rx) => (
          <li key={rx.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{rx.medication}</p>
              <p className="truncate text-xs text-ink-soft">
                {rx.dosage} · {rx.frequency}
              </p>
            </div>
            <div className="hidden text-right text-xs text-ink-soft sm:block">
              <p>{rx.refillsLeft} refill{rx.refillsLeft === 1 ? "" : "s"} left</p>
              <p className="text-ink-faint">{rx.doctor}</p>
            </div>
            {rx.refillsLeft <= 1 ? (
              <StatusBadge tone="warning" className="shrink-0">
                Refill soon
              </StatusBadge>
            ) : (
              <StatusBadge tone="good" className="shrink-0">
                Active
              </StatusBadge>
            )}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-2.5 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-soft"
      >
        <RefreshCw className="h-4 w-4" />
        Request Refill
      </button>
    </SectionCard>
  );
}
