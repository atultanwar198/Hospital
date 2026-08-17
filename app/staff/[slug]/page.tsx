import { RolePage } from "@/components/RolePage";
export default async function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <RolePage role="staff" slug={(await params).slug} />;
}
