import staffDatabase from "../../../backend/staffData/staffData.js";

export default async function StaffPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const staff = staffDatabase.find((staff) => staff.id === slug);

  if (!staff) {
    return <div>Staff not found</div>;
  }

  return <div>{staff.name}</div>;
}
