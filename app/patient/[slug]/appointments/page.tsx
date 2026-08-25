import type { Metadata } from "next";
import { CalendarPlus, MapPin, Video, Stethoscope } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Avatar } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/ui/status-badge";
import type { Tone } from "@/components/ui/status-badge";
import { appointments } from "@/lib/mock-data";
import type { Appointment } from "@/lib/types";

export const metadata: Metadata = { title: "Appointments · MediCare" };

const STATUS_TONE: Record<Appointment["status"], Tone> = {
  Confirmed: "good",
  Pending: "warning",
  Completed: "neutral",
  Cancelled: "danger",
};

export default async function AppointmentsPage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  const upcoming = appointments.filter((a) => a.status === "Confirmed" || a.status === "Pending");
  const past = appointments.filter((a) => a.status === "Completed" || a.status === "Cancelled");

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Care Schedule"
        title="Appointments"
        subtitle="Every visit with your care team, upcoming and past, in one timeline."
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <CalendarPlus className="h-4 w-4" />
            Book New Appointment
          </button>
        }
      />

      <Section title="Upcoming">
        {upcoming.map((apt) => (
          <AppointmentRow key={apt.id} apt={apt} />
        ))}
      </Section>

      <Section title="Past">
        {past.map((apt) => (
          <AppointmentRow key={apt.id} apt={apt} />
        ))}
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

function AppointmentRow({ apt }: { apt: Appointment }) {
  const isPastState = apt.status === "Completed" || apt.status === "Cancelled";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-4">
        <Avatar initials={apt.doctor.initials} color={apt.doctor.color} size="lg" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{apt.doctor.name}</p>
          <p className="truncate text-xs text-ink-soft">
            {apt.doctor.specialty} · {apt.reason}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
            <span className="flex items-center gap-1">
              <Stethoscope className="h-3.5 w-3.5" /> {apt.date} · {apt.time}
            </span>
            <span className="flex items-center gap-1">
              {apt.type === "Video Call" ? (
                <Video className="h-3.5 w-3.5" />
              ) : (
                <MapPin className="h-3.5 w-3.5" />
              )}
              {apt.location}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
        <StatusBadge tone={STATUS_TONE[apt.status]}>{apt.status}</StatusBadge>
        {!isPastState && (
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft hover:bg-canvas"
            >
              Reschedule
            </button>
            <button
              type="button"
              className="rounded-lg bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand-dark hover:bg-brand hover:text-white"
            >
              {apt.type === "Video Call" ? "Join Call" : "Directions"}
            </button>
          </div>
        )}
        {apt.status === "Completed" && (
          <button
            type="button"
            className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink-soft hover:bg-canvas"
          >
            Book Again
          </button>
        )}
      </div>
    </div>
  );
}
