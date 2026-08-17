import { RolePage } from "@/components/RolePage";
export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <RolePage role="doctor" slug={(await params).slug} />;
}
