import type { Metadata } from "next";
import { TriangleAlert, Download, FlaskConical } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { labReports } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Lab Reports · MediCare" };

const STATUS_TONE: Record<string, Tone> = {
  Ready: "good",
  Pending: "warning",
  "In Review": "neutral",
};

export default async function LabReportsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Diagnostics"
        title="Lab Reports"
        subtitle="Test results ordered by your care team, with status and downloadable reports."
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <ul className="divide-y divide-line">
          {labReports.map((lab) => (
            <li key={lab.id} className="flex items-center gap-4 p-4 sm:p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink-soft">
                <FlaskConical className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1.5 truncate text-sm font-semibold text-ink">
                  {lab.testName}
                  {lab.flagged && (
                    <TriangleAlert
                      className="h-3.5 w-3.5 shrink-0 text-accent"
                      aria-label="Result outside typical range"
                    />
                  )}
                </p>
                <p className="mt-0.5 truncate text-xs text-ink-soft">
                  {lab.category} · {lab.doctor} · {lab.date}
                </p>
              </div>
              <StatusBadge tone={STATUS_TONE[lab.status]} className="shrink-0">
                {lab.status}
              </StatusBadge>
              {lab.status === "Ready" ? (
                <button
                  type="button"
                  aria-label={`Download ${lab.testName} report`}
                  className="shrink-0 rounded-lg border border-line p-2.5 text-ink-soft transition-colors hover:border-brand/30 hover:text-brand"
                >
                  <Download className="h-4 w-4" />
                </button>
              ) : (
                <span className="w-9" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
