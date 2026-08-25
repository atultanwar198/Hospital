import type { Metadata } from "next";
import {
  Stethoscope,
  FlaskConical,
  ScanLine,
  Syringe,
  Scissors,
  Download,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { medicalRecords } from "@/lib/mock-data";
import type { RecordCategory } from "@/lib/types";

export const metadata: Metadata = { title: "Medical Records · MediCare" };

const CATEGORY_ICON: Record<RecordCategory, React.ComponentType<{ className?: string }>> = {
  Consultation: Stethoscope,
  Lab: FlaskConical,
  Imaging: ScanLine,
  Vaccination: Syringe,
  Surgery: Scissors,
};

export default async function MedicalRecordsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Documentation"
        title="Medical Records"
        subtitle="Consultation notes, imaging, lab summaries and vaccination history, all in one file."
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <ul className="divide-y divide-line">
          {medicalRecords.map((rec) => {
            const Icon = CATEGORY_ICON[rec.category];
            return (
              <li key={rec.id} className="flex items-center gap-4 p-4 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink-soft">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{rec.title}</p>
                  <p className="mt-0.5 truncate text-xs text-ink-soft">{rec.summary}</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
                    <span className="rounded-full bg-brand-soft px-2 py-0.5 font-medium text-brand-dark">
                      {rec.category}
                    </span>
                    <span>{rec.doctor}</span>
                    <span>·</span>
                    <span>{rec.date}</span>
                    <span>·</span>
                    <span>{rec.fileSize}</span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={`Download ${rec.title}`}
                  className="shrink-0 rounded-lg border border-line p-2.5 text-ink-soft transition-colors hover:border-brand/30 hover:text-brand"
                >
                  <Download className="h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
