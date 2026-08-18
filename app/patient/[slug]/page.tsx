import { RolePage } from "@/components/RolePage";
import { Appointment } from "./appointment";
import { Bills } from "./bills";
import { MedicalRecords } from "./medical-records";
import { Notifications } from "./notifications";
import { Profile } from "./profile";

export default async function PatientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <RolePage role="patient" slug={slug} />
      <Profile />
      <Appointment />
      <MedicalRecords />
      <Bills />
      <Notifications />
    </>
  );
}
