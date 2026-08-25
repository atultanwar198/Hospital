import type { Metadata } from "next";
import { RefreshCw, Pill } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { prescriptions } from "@/lib/mock-data";
import type { Prescription } from "@/lib/types";

export const metadata: Metadata = { title: "Prescriptions · MediCare" };

const STATUS_TONE: Record<Prescription["status"], Tone> = {
  Active: "good",
  Completed: "neutral",
  Expired: "danger",
};

export default async function PrescriptionsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  const active = prescriptions.filter((p) => p.status === "Active");
  const inactive = prescriptions.filter((p) => p.status !== "Active");

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Medication"
        title="Prescriptions"
        subtitle="Active medications, dosages and refill status from your care team."
      />

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Active ({active.length})
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {active.map((rx) => (
            <div key={rx.id} className="rounded-2xl border border-line bg-surface p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-dark">
                    <Pill className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{rx.medication}</p>
                    <p className="text-xs text-ink-soft">{rx.dosage} · {rx.frequency}</p>
                  </div>
                </div>
                <StatusBadge tone={STATUS_TONE[rx.status]}>{rx.status}</StatusBadge>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-y-2 border-t border-line pt-4 text-xs">
                <dt className="text-ink-faint">Prescribed by</dt>
                <dd className="text-right font-medium text-ink">{rx.doctor}</dd>
                <dt className="text-ink-faint">Start date</dt>
                <dd className="text-right font-medium text-ink">{rx.startDate}</dd>
                <dt className="text-ink-faint">Duration</dt>
                <dd className="text-right font-medium text-ink">{rx.duration}</dd>
                <dt className="text-ink-faint">Refills left</dt>
                <dd className="text-right font-medium text-ink">{rx.refillsLeft}</dd>
              </dl>
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-line py-2 text-sm font-medium text-brand-dark hover:bg-brand-soft"
              >
                <RefreshCw className="h-4 w-4" />
                Request Refill
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          Past
        </h2>
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <ul className="divide-y divide-line">
            {inactive.map((rx) => (
              <li key={rx.id} className="flex items-center gap-4 p-4 sm:p-5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{rx.medication}</p>
                  <p className="truncate text-xs text-ink-soft">
                    {rx.doctor} · {rx.startDate} · {rx.duration}
                  </p>
                </div>
                <StatusBadge tone={STATUS_TONE[rx.status]}>{rx.status}</StatusBadge>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
