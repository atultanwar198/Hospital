import type { Metadata } from "next";
import { patient } from "@/lib/mock-data";
import { UpcomingAppointment } from "@/components/patient/dashboard/upcoming-appointment";
import { QuickActions } from "@/components/patient/dashboard/quick-actions";
import { HealthSummary } from "@/components/patient/dashboard/health-summary";
import { MyDoctors } from "@/components/patient/dashboard/my-doctors";
import { RecentMedicalRecords } from "@/components/patient/dashboard/medical-records";
import { CurrentPrescriptions } from "@/components/patient/dashboard/prescriptions";
import { RecentLabReports } from "@/components/patient/dashboard/lab-reports";
import { RecentPayments } from "@/components/patient/dashboard/payments";
import { NotificationsFeed } from "@/components/patient/dashboard/notifications";
import { HealthTips } from "@/components/patient/dashboard/health-tips";
import { EmergencyAssistance } from "@/components/patient/dashboard/emergency-assistance";

export const metadata: Metadata = { title: "Dashboard · MediCare" };

export default async function DashboardPage(props: PageProps<"/patient/[slug]">) {
  const { slug } = await props.params;
  const firstName = patient.name.split(" ")[0];
  const today = new Date("2026-08-23T09:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Good morning, {firstName}
        </h1>
        <p className="mt-1 text-sm text-ink-soft">{today} · Here&rsquo;s where things stand today.</p>
      </div>

      <UpcomingAppointment slug={slug} />
      <QuickActions slug={slug} />
      <HealthSummary />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          <MyDoctors slug={slug} />
          <RecentMedicalRecords slug={slug} />
          <CurrentPrescriptions slug={slug} />
          <RecentLabReports slug={slug} />
          <RecentPayments slug={slug} />
        </div>
        <div className="flex flex-col gap-6">
          <NotificationsFeed slug={slug} />
          <HealthTips />
          <EmergencyAssistance />
        </div>
      </div>
    </div>
  );
}
