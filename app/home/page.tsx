import Link from "next/link";
import { Navbar } from "@/components/Navbar";
function HomePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto grid min-h-[76vh] max-w-7xl items-center gap-12 px-7 py-10 md:grid-cols-[1.15fr_.85fr] md:py-18">
        <section>
          <p className="text-xs font-extrabold uppercase tracking-[.16em] text-cyan-700">
            One connected care team
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-[.96] tracking-tighter text-slate-900 md:text-7xl">
            Healthcare, with everyone in sync.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            CarePortal gives patients, clinicians, staff, and administrators one
            clear place to access the information and tools relevant to their
            work.
          </p>
          <Link
            className="mt-7 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-bold text-white hover:bg-cyan-900"
            href="/login"
          >
            Sign in to your portal
          </Link>
        </section>
        <aside className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
          <h2 className="text-xl font-bold tracking-tight">Demo accounts</h2>
          <div className="divide-y divide-slate-200 text-sm text-slate-600">
            <p className="py-4">Patient — user@example.com / user123</p>
            <p className="py-4">Doctor — doctor@example.com / doctor123</p>
            <p className="py-4">Staff — staff@example.com / staff123</p>
            <p className="pt-4">Admin — admin@example.com / admin123</p>
          </div>
        </aside>
      </main>
    </>
  );
}
export default HomePage;
