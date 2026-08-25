import { Receipt } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { payments } from "@/lib/mock-data";

const STATUS_TONE: Record<string, Tone> = {
  Paid: "good",
  Pending: "warning",
  Overdue: "danger",
};

export function RecentPayments({ slug }: { slug: string }) {
  return (
    <SectionCard
      title="Recent Payments"
      icon={<Receipt className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/bills`}
    >
      <ul className="divide-y divide-line">
        {payments.map((p) => (
          <li key={p.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{p.description}</p>
              <p className="truncate text-xs text-ink-soft">
                {p.date} · {p.method}
              </p>
            </div>
            <p className="shrink-0 font-mono text-sm font-semibold text-ink">
              Rs{p.amount.toFixed(2)}
            </p>
            <StatusBadge tone={STATUS_TONE[p.status]} className="shrink-0">
              {p.status}
            </StatusBadge>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
