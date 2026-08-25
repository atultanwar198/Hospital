import { Activity, HeartPulse, Droplet, Scale, Gauge, TrendingDown, TrendingUp, Minus } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { vitals } from "@/lib/mock-data";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "Blood Pressure": Activity,
  "Heart Rate": HeartPulse,
  "Blood Glucose": Droplet,
  Weight: Scale,
  BMI: Gauge,
};

const TREND_ICON = { up: TrendingUp, down: TrendingDown, flat: Minus };

export function HealthSummary() {
  return (
    <SectionCard title="Health Summary" icon={<Activity className="h-4 w-4" />}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {vitals.map((v) => {
          const Icon = ICON_MAP[v.label] ?? Activity;
          const TrendIcon = TREND_ICON[v.trend];
          return (
            <div key={v.id} className="rounded-xl border border-line p-4">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand-dark">
                  <Icon className="h-4 w-4" />
                </span>
                <TrendIcon
                  className={
                    v.trend === "flat" ? "h-3.5 w-3.5 text-ink-faint" : "h-3.5 w-3.5 text-brand"
                  }
                />
              </div>
              <p className="mt-3 text-xl font-semibold text-ink">
                {v.value}
                <span className="ml-1 text-xs font-normal text-ink-faint">{v.unit}</span>
              </p>
              <p className="text-xs text-ink-soft">{v.label}</p>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}
