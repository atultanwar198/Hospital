import {
  FileText,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Syringe,
  Scissors,
  Download,
} from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { medicalRecords } from "@/lib/mock-data";
import type { RecordCategory } from "@/lib/types";

const CATEGORY_ICON: Record<RecordCategory, React.ComponentType<{ className?: string }>> = {
  Consultation: Stethoscope,
  Lab: FlaskConical,
  Imaging: ScanLine,
  Vaccination: Syringe,
  Surgery: Scissors,
};

export function RecentMedicalRecords({ slug }: { slug: string }) {
  const recent = medicalRecords.slice(0, 4);

  return (
    <SectionCard
      title="Recent Medical Records"
      icon={<FileText className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/medical-records`}
    >
      <ul className="divide-y divide-line">
        {recent.map((rec) => {
          const Icon = CATEGORY_ICON[rec.category];
          return (
            <li key={rec.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-canvas text-ink-soft">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{rec.title}</p>
                <p className="truncate text-xs text-ink-soft">
                  {rec.doctor} · {rec.date}
                </p>
              </div>
              <button
                type="button"
                aria-label={`Download ${rec.title}`}
                className="rounded-lg p-2 text-ink-faint transition-colors hover:bg-canvas hover:text-brand"
              >
                <Download className="h-4 w-4" />
              </button>
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
