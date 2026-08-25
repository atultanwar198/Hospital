import type { Metadata } from "next";
import { CalendarDays, Pill, FlaskConical, Receipt, Info, CheckCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { notifications } from "@/lib/mock-data";
import type { NotificationType } from "@/lib/types";
import { cn } from "@/lib/cn";

export const metadata: Metadata = { title: "Notifications · MediCare" };

const TYPE_ICON: Record<NotificationType, React.ComponentType<{ className?: string }>> = {
  appointment: CalendarDays,
  prescription: Pill,
  lab: FlaskConical,
  payment: Receipt,
  general: Info,
};

export default async function NotificationsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <PageHeader
        eyebrow="Activity"
        title="Notifications"
        subtitle="Reminders and updates about your appointments, prescriptions and bills."
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink-soft hover:bg-canvas"
          >
            <CheckCheck className="h-4 w-4" />
            Mark all as read
          </button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <ul className="divide-y divide-line">
          {notifications.map((n) => {
            const Icon = TYPE_ICON[n.type];
            return (
              <li
                key={n.id}
                className={cn("flex items-start gap-4 p-4 sm:p-5", !n.read && "bg-brand-soft/40")}
              >
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-brand-dark">
                  <Icon className="h-4 w-4" />
                  {!n.read && (
                    <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-surface" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">{n.title}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{n.message}</p>
                </div>
                <span className="shrink-0 text-xs text-ink-faint">{n.time}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
