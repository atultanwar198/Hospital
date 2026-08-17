export function DashboardCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
      <p className="mt-1 text-slate-500">{text}</p>
    </article>
  );
}
