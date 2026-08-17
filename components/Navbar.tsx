import Link from "next/link";
export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-7 py-6">
      <Link
        className="text-lg font-extrabold tracking-tight text-cyan-900"
        href="/"
      >
        CarePortal
      </Link>
      <Link className="font-bold text-cyan-900" href="/login">
        Sign in
      </Link>
    </nav>
  );
}
