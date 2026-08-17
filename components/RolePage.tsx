import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { RoleDashboard } from "@/components/RoleDashboard";
import { findUserForRole } from "@/lib/auth";
import type { UserRole } from "@/backend/users";
export async function RolePage({
  role,
  slug,
}: {
  role: UserRole;
  slug: string;
}) {
  const user = findUserForRole(role, slug);
  if (!user) notFound();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-7 py-12">
        <p className="text-xs font-extrabold uppercase tracking-[.16em] text-cyan-700">
          {role} workspace
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          {role === "admin" ? "Operations overview" : `Your ${role} dashboard`}
        </h1>
        <RoleDashboard user={user} />
      </main>
    </>
  );
}
