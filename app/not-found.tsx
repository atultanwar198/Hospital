import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto my-14 w-[min(100%-2.5rem,28rem)]">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-cyan-700">
        404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
        Page not found.
      </h1>
      <p className="mt-3 leading-7 text-slate-600">
        This profile does not exist or is not available for this role.
      </p>
      <Link
        className="mt-6 inline-block rounded-lg bg-cyan-700 px-5 py-3 font-bold text-white"
        href="/"
      >
        Back to home
      </Link>
    </main>
  );
}
