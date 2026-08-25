import type { Metadata } from "next";
import { Download, CreditCard } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { payments } from "@/lib/mock-data";
import type { Payment } from "@/lib/types";

export const metadata: Metadata = { title: "Bills & Payments · MediCare" };

const STATUS_TONE: Record<Payment["status"], Tone> = {
  Paid: "good",
  Pending: "warning",
  Overdue: "danger",
};

export default async function BillsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  const totalPaid = payments.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
  const totalPending = payments
    .filter((p) => p.status !== "Paid")
    .reduce((s, p) => s + p.amount, 0);
  const pendingCount = payments.filter((p) => p.status !== "Paid").length;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Finance"
        title="Bills & Payments"
        subtitle="Invoices from consultations, labs, imaging and the pharmacy in one ledger."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Paid to date" value={`$${totalPaid.toFixed(2)}`} tone="good" />
        <StatCard
          label="Pending balance"
          value={`$${totalPending.toFixed(2)}`}
          tone={totalPending > 0 ? "warning" : "good"}
        />
        <StatCard label="Open invoices" value={String(pendingCount)} tone="neutral" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <ul className="divide-y divide-line">
          {payments.map((p) => (
            <li key={p.id} className="flex items-center gap-4 p-4 sm:p-5">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{p.description}</p>
                <p className="mt-0.5 truncate text-xs text-ink-soft">
                  {p.invoiceNo} · {p.category} · {p.date}
                </p>
              </div>
              <p className="shrink-0 font-mono text-sm font-semibold text-ink">
                ${p.amount.toFixed(2)}
              </p>
              <StatusBadge tone={STATUS_TONE[p.status]} className="hidden shrink-0 sm:inline-flex">
                {p.status}
              </StatusBadge>
              {p.status === "Paid" ? (
                <button
                  type="button"
                  aria-label={`Download receipt for ${p.description}`}
                  className="shrink-0 rounded-lg border border-line p-2.5 text-ink-soft transition-colors hover:border-brand/30 hover:text-brand"
                >
                  <Download className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  className="flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white hover:opacity-90"
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  Pay Now
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "good" | "warning" | "neutral";
}) {
  const toneClass =
    tone === "good"
      ? "text-brand-dark"
      : tone === "warning"
        ? "text-[#8a4a13]"
        : "text-ink";
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-xs font-medium text-ink-soft">{label}</p>
      <p className={`mt-1 font-display text-2xl font-semibold ${toneClass}`}>{value}</p>
    </div>
  );
}
