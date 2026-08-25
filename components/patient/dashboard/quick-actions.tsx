import Link from "next/link";
import {
  CalendarPlus,
  FileText,
  Pill,
  FlaskConical,
  CreditCard,
  PhoneCall,
} from "lucide-react";

export function QuickActions({ slug }: { slug: string }) {
  const base = `/patient/${slug}`;

  const actions = [
    { label: "Book Appointment", href: `${base}/appointments`, icon: CalendarPlus },
    { label: "Medical Records", href: `${base}/medical-records`, icon: FileText },
    { label: "Prescriptions", href: `${base}/prescriptions`, icon: Pill },
    { label: "Lab Reports", href: `${base}/lab-reports`, icon: FlaskConical },
    { label: "Pay Bill", href: `${base}/bills`, icon: CreditCard },
    { label: "Contact Doctor", href: `${base}/doctors`, icon: PhoneCall },
  ];

  return (
    <section aria-label="Quick actions" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {actions.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className="group flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-surface px-3 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-dark transition-colors group-hover:bg-brand group-hover:text-white">
            <Icon className="h-5 w-5" />
          </span>
          <span className="text-sm font-medium text-ink">{label}</span>
        </Link>
      ))}
    </section>
  );
}
