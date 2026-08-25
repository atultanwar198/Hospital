import { FlaskConical, TriangleAlert, Download } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { labReports } from "@/lib/mock-data";

const STATUS_TONE: Record<string, Tone> = {
  Ready: "good",
  Pending: "warning",
  "In Review": "neutral",
};

export function RecentLabReports({ slug }: { slug: string }) {
  const recent = labReports.slice(0, 4);

  return (
    <SectionCard
      title="Recent Lab Reports"
      icon={<FlaskConical className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/lab-reports`}
    >
      <ul className="divide-y divide-line">
        {recent.map((lab) => (
          <li key={lab.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-1.5 truncate text-sm font-medium text-ink">
                {lab.testName}
                {lab.flagged && (
                  <TriangleAlert
                    className="h-3.5 w-3.5 shrink-0 text-accent"
                    aria-label="Result outside typical range"
                  />
                )}
              </p>
              <p className="truncate text-xs text-ink-soft">
                {lab.category} · {lab.date}
              </p>
            </div>
            <StatusBadge tone={STATUS_TONE[lab.status]} className="shrink-0">
              {lab.status}
            </StatusBadge>
            {lab.status === "Ready" && (
              <button
                type="button"
                aria-label={`Download ${lab.testName} report`}
                className="rounded-lg p-2 text-ink-faint transition-colors hover:bg-canvas hover:text-brand"
              >
                <Download className="h-4 w-4" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}
