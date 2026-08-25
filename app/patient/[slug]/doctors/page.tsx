import type { Metadata } from "next";
import { Star, PhoneCall, CalendarPlus } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Avatar } from "@/components/ui/avatar";
import { doctors } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Doctors · MediCare" };

export default async function DoctorsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Care Team"
        title="Doctors"
        subtitle="The specialists involved in your care, and how to reach each of them."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {doctors.map((doc) => (
          <div key={doc.id} className="rounded-2xl border border-line bg-surface p-5">
            <div className="flex items-center gap-3.5">
              <Avatar initials={doc.initials} color={doc.color} size="xl" />
              <div className="min-w-0">
                <p className="truncate font-display text-base font-semibold text-ink">
                  {doc.name}
                </p>
                <p className="truncate text-sm text-ink-soft">{doc.specialty}</p>
                <p className="truncate text-xs text-ink-faint">{doc.hospital}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs text-ink-soft">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                {doc.rating} rating · {doc.years} yrs experience
              </span>
              <span>Available {doc.availability}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-soft py-2.5 text-sm font-medium text-brand-dark hover:bg-brand hover:text-white"
              >
                <CalendarPlus className="h-4 w-4" />
                Book Visit
              </button>
              <button
                type="button"
                aria-label={`Call ${doc.name}`}
                className="flex items-center justify-center rounded-xl border border-line px-3 text-ink-soft hover:bg-canvas"
              >
                <PhoneCall className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
