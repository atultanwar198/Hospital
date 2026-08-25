import Link from "next/link";
import { HeartPulse, Phone, Mail, MapPin } from "lucide-react";

export function Footer({ slug }: { slug: string }) {
  const base = `/patient/${slug}`;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft">
              <HeartPulse className="h-4 w-4 text-brand-dark" />
            </span>
            <span className="font-display text-lg font-semibold text-ink">
              MediCare
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            Your care, organized in one calm, secure place.
          </p>
        </div>

        <FooterColumn
          title="Quick Links"
          links={[
            { label: "Dashboard", href: base },
            { label: "Appointments", href: `${base}/appointments` },
            { label: "Medical Records", href: `${base}/medical-records` },
            { label: "Bills & Payments", href: `${base}/bills` },
          ]}
        />

        <FooterColumn
          title="Support"
          links={[
            { label: "Help & Support", href: `${base}/help-support` },
            { label: "Contact Us", href: `${base}/help-support` },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
          ]}
        />

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" /> (555) 911-0000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" /> care@medicare-hospital.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              500 Wellness Ave, Springfield, IL
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-4 py-4 text-center text-xs text-ink-faint sm:px-6">
        © {year} MediCare Hospital. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-3 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-ink-soft transition-colors hover:text-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
