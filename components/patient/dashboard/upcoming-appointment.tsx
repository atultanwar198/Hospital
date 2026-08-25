import { MapPin, Video, Stethoscope } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { upcomingAppointment as apt } from "@/lib/mock-data";

export function UpcomingAppointment({ slug }: { slug: string }) {
  const [month, dayRaw] = apt.date.split(" ");
  const dayNum = dayRaw.replace(",", "");
  const isVideo = apt.type === "Video Call";

  return (
    <section className="relative overflow-hidden rounded-2xl bg-brand-dark text-white shadow-sm">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Upcoming Appointment
          </p>

          <div className="mt-4 flex items-center gap-4">
            <Avatar
              initials={apt.doctor.initials}
              color="accent"
              size="lg"
              className="ring-2 ring-white/15"
            />
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-semibold sm:text-xl">
                {apt.doctor.name}
              </p>
              <p className="truncate text-sm text-white/65">
                {apt.doctor.specialty} · {apt.doctor.hospital}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Stethoscope className="h-4 w-4 text-white/50" />
              {apt.reason}
            </span>
            <span className="flex items-center gap-1.5">
              {isVideo ? (
                <Video className="h-4 w-4 text-white/50" />
              ) : (
                <MapPin className="h-4 w-4 text-white/50" />
              )}
              {apt.location}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90"
            >
              {isVideo ? "Join Video Call" : "Get Directions"}
            </button>
            <a
              href={`/patient/${slug}/appointments`}
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Reschedule
            </a>
          </div>
        </div>

        <div
          className="relative hidden w-px shrink-0 border-l border-dashed border-white/25 sm:block"
          aria-hidden="true"
        >
          <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-canvas" />
          <span className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-canvas" />
        </div>
        <div
          className="mx-6 border-t border-dashed border-white/25 sm:hidden"
          aria-hidden="true"
        />

        <div className="flex shrink-0 flex-row items-center justify-between gap-4 p-6 sm:w-44 sm:flex-col sm:items-start sm:justify-center sm:p-7">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/55">{apt.day}</p>
            <p className="font-display text-3xl font-semibold leading-tight">
              {month} {dayNum}
            </p>
            <p className="mt-1 text-sm text-white/80">{apt.time}</p>
          </div>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {apt.status}
          </span>
        </div>
      </div>
    </section>
  );
}
