import { RolePage } from "@/components/RolePage";
export default async function UserPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <RolePage role="user" slug={(await params).slug} />;
}
