import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
export default function LoginPage() {
  return (
    <main className="mx-auto my-14 w-[min(100%-2.5rem,28rem)]">
      <Link
        className="text-lg font-extrabold tracking-tight text-cyan-900"
        href="/"
      >
        ← CarePortal
      </Link>
      <h1 className="mt-9 text-4xl font-extrabold tracking-tight">
        Welcome back.
      </h1>
      <p className="mt-3 leading-7 text-slate-600">
        Enter your demo account details to open your role-specific workspace.
      </p>
      <div className="mt-7">
        <LoginForm />
      </div>
    </main>
  );
}
