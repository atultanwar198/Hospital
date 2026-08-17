import { DashboardCard } from "@/components/DashboardCard";
import type { User } from "@/backend/users";
const content = {
  user: [
    ["Upcoming visit", "Annual check-up • Friday, 10:30 AM"],
    ["Care team", "Message your assigned clinician securely."],
    ["Health summary", "Review recent visit notes and prescriptions."],
  ],
  doctor: [
    ["Today's appointments", "8 appointments scheduled for today."],
    ["Patients", "Review 24 active patient records."],
    ["Schedule", "Your next availability begins at 10:30 AM."],
  ],
  staff: [
    ["Tasks", "6 tasks need attention this morning."],
    ["Patients", "Check in 14 arrivals expected today."],
    ["Notifications", "3 new care-team messages."],
  ],
  admin: [
    ["Total users", "1,248 registered patient accounts."],
    ["Total doctors", "86 active clinicians."],
    ["Total staff", "214 staff members across departments."],
  ],
} as const;
export function RoleDashboard({ user }: { user: User }) {
  return (
    <>
      <section className="my-7 grid gap-3 md:grid-cols-3">
        <div className="rounded-xl bg-cyan-50 p-4">
          <strong>Welcome, {user.name}</strong>
          <span className="mt-1 block text-slate-500">
            Signed in to CarePortal
          </span>
        </div>
        <div className="rounded-xl bg-cyan-50 p-4">
          <strong>Role</strong>
          <span className="mt-1 block text-slate-500">
            {user.role[0].toUpperCase() + user.role.slice(1)}
          </span>
        </div>
        <div className="rounded-xl bg-cyan-50 p-4">
          <strong>Profile slug</strong>
          <span className="mt-1 block text-slate-500">{user.slug}</span>
        </div>
      </section>
      <section className="grid gap-5 md:grid-cols-3">
        {content[user.role].map(([title, text]) => (
          <DashboardCard key={title} title={title} text={text} />
        ))}
      </section>
    </>
  );
}
