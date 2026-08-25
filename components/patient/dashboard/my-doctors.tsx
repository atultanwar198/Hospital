import { Stethoscope, Star } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { Avatar } from "@/components/ui/avatar";
import { doctors } from "@/lib/mock-data";

export function MyDoctors({ slug }: { slug: string }) {
  return (
    <SectionCard
      title="My Doctors"
      icon={<Stethoscope className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/doctors`}
    >
      <div className="-mx-1 flex snap-x gap-3 overflow-x-auto px-1 pb-1">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="flex w-64 shrink-0 snap-start flex-col gap-3 rounded-xl border border-line p-4"
          >
            <div className="flex items-center gap-3">
              <Avatar initials={doc.initials} color={doc.color} size="lg" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-ink">{doc.name}</p>
                <p className="truncate text-xs text-ink-soft">{doc.specialty}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-ink-soft">
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                {doc.rating} · {doc.years} yrs
              </span>
              <span>{doc.availability}</span>
            </div>
            <a
              href={`/patient/${slug}/appointments`}
              className="mt-1 rounded-lg bg-brand-soft py-2 text-center text-sm font-medium text-brand-dark transition-colors hover:bg-brand hover:text-white"
            >
              Book Visit
            </a>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
