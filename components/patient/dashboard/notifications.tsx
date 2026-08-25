import { Bell, CalendarDays, Pill, FlaskConical, Receipt, Info } from "lucide-react";
import { SectionCard } from "@/components/ui/section-card";
import { notifications } from "@/lib/mock-data";
import type { NotificationType } from "@/lib/types";

const TYPE_ICON: Record<NotificationType, React.ComponentType<{ className?: string }>> = {
  appointment: CalendarDays,
  prescription: Pill,
  lab: FlaskConical,
  payment: Receipt,
  general: Info,
};

export function NotificationsFeed({ slug }: { slug: string }) {
  return (
    <SectionCard
      title="Notifications"
      icon={<Bell className="h-4 w-4" />}
      viewAllHref={`/patient/${slug}/notifications`}
    >
      <ul className="space-y-1">
        {notifications.slice(0, 4).map((n) => {
          const Icon = TYPE_ICON[n.type];
          return (
            <li key={n.id} className="flex gap-3 rounded-xl p-2 -mx-2 hover:bg-canvas">
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-canvas text-brand-dark">
                <Icon className="h-4 w-4" />
                {!n.read && (
                  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-surface" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-ink">{n.title}</p>
                <p className="truncate text-xs text-ink-soft">{n.message}</p>
              </div>
              <span className="shrink-0 text-xs text-ink-faint">{n.time}</span>
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}
