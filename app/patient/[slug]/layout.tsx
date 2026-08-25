import { PatientShell } from "@/components/patient/shell";

export default async function PatientLayout({
  children,
  params,
}: LayoutProps<"/patient/[slug]">) {
  const { slug } = await params;
  return <PatientShell slug={slug}>{children}</PatientShell>;
}
