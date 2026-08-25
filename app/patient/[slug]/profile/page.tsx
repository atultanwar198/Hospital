import type { Metadata } from "next";
import { Pencil, Mail, Phone, MapPin, Droplet } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Avatar } from "@/components/ui/avatar";
import { patient } from "@/lib/mock-data";

export const metadata: Metadata = { title: "My Profile · MediCare" };

export default async function ProfilePage(props: PageProps<"/patient/[slug]">) {
  await props.params;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <PageHeader
        eyebrow="Account"
        title="My Profile"
        subtitle="Your personal, emergency and insurance information on file with MediCare."
        action={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <Pencil className="h-4 w-4" />
            Edit Profile
          </button>
        }
      />

      <section className="flex flex-col items-start gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center">
        <Avatar initials="SJ" color="accent" size="xl" />
        <div className="flex-1">
          <h2 className="font-display text-xl font-semibold text-ink">{patient.name}</h2>
          <p className="text-sm text-ink-soft">{patient.patientId}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip>{patient.gender}</Chip>
            <Chip>{patient.age} years</Chip>
            <Chip>
              <Droplet className="h-3 w-3" /> {patient.bloodType}
            </Chip>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InfoCard title="Personal Information">
          <Field label="Full Name" value={patient.name} />
          <Field label="Date of Birth" value={patient.dob} />
          <Field
            label="Email"
            value={patient.email}
            icon={<Mail className="h-4 w-4" />}
          />
          <Field
            label="Phone"
            value={patient.phone}
            icon={<Phone className="h-4 w-4" />}
          />
          <Field
            label="Address"
            value={patient.address}
            icon={<MapPin className="h-4 w-4" />}
          />
        </InfoCard>

        <InfoCard title="Emergency Contact">
          <Field label="Name" value={patient.emergencyContact.name} />
          <Field label="Relationship" value={patient.emergencyContact.relation} />
          <Field
            label="Phone"
            value={patient.emergencyContact.phone}
            icon={<Phone className="h-4 w-4" />}
          />
        </InfoCard>

        <InfoCard title="Insurance Information">
          <Field label="Provider" value={patient.insurance.provider} />
          <Field label="Policy Number" value={patient.insurance.policyNumber} mono />
          <Field label="Group Number" value={patient.insurance.group} mono />
        </InfoCard>

        <InfoCard title="Medical Information">
          <div>
            <p className="text-xs font-medium text-ink-soft">Allergies</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {patient.allergies.map((a) => (
                <Chip key={a} tone="danger">
                  {a}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-ink-soft">Chronic Conditions</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {patient.conditions.map((c) => (
                <Chip key={c} tone="warning">
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </InfoCard>
      </div>
    </div>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <h2 className="font-display text-base font-semibold text-ink">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  icon,
  mono,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-ink-soft">{label}</span>
      <span
        className={`flex items-center gap-1.5 text-right text-sm font-medium text-ink ${mono ? "font-mono" : ""}`}
      >
        {icon}
        {value}
      </span>
    </div>
  );
}

function Chip({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "danger" | "warning";
}) {
  const toneClass =
    tone === "danger"
      ? "bg-danger-soft text-danger"
      : tone === "warning"
        ? "bg-accent-soft text-[#8a4a13]"
        : "bg-canvas text-ink-soft";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${toneClass}`}
    >
      {children}
    </span>
  );
}
