import { Siren, PhoneCall, Ambulance } from "lucide-react";

export function EmergencyAssistance() {
  return (
    <section className="rounded-2xl border border-danger/25 bg-danger-soft p-5 sm:p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-danger text-white">
          <Siren className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-semibold text-ink">Emergency Assistance</h2>
      </div>
      <p className="mt-3 text-sm text-ink-soft">
        For life-threatening symptoms, call emergency services right away — don&rsquo;t
        wait for an online response.
      </p>
      <a
        href="tel:911"
        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-danger py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <PhoneCall className="h-4 w-4" />
        Call 911
      </a>
      <a
        href="tel:+15559110000"
        className="mt-2.5 flex items-center justify-center gap-2 rounded-xl border border-danger/30 bg-white py-3 text-sm font-semibold text-danger transition-colors hover:bg-danger-soft"
      >
        <Ambulance className="h-4 w-4" />
        Hospital Emergency Line · (555) 911-0000
      </a>
    </section>
  );
}
