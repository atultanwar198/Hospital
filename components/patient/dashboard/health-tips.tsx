import { Sparkles } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { healthTips } from "@/lib/mock-data";

export function HealthTips() {
  return (
    <SectionCard title="Health Tips For You" icon={<Sparkles className="h-4 w-4" />}>
      <div className="space-y-3">
        {healthTips.map((tip) => (
          <div key={tip.id} className="rounded-xl border border-line p-4">
            <span className="inline-block rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-dark">
              {tip.category}
            </span>
            <p className="mt-2 text-sm font-semibold text-ink">{tip.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{tip.description}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
