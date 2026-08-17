import { RolePage } from "@/components/RolePage";
export default async function AdminPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <RolePage role="admin" slug={(await params).slug} />;
}
