"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    const result = await response.json();
    setLoading(false);
    if (!response.ok) {
      setError(result.error ?? "Unable to sign in.");
      return;
    }
    router.push(result.redirectTo);
  }
  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60"
      onSubmit={submit}
    >
      <label className="mb-2 block text-sm font-bold" htmlFor="email">
        Email
      </label>
      <input
        className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none ring-cyan-700 focus:ring-2"
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />
      <label className="mb-2 mt-5 block text-sm font-bold" htmlFor="password">
        Password
      </label>
      <input
        className="w-full rounded-lg border border-slate-300 px-3 py-3 outline-none ring-cyan-700 focus:ring-2"
        id="password"
        name="password"
        type="password"
        required
      />
      <button
        className="mt-5 rounded-lg bg-cyan-700 px-5 py-3 font-bold text-white hover:bg-cyan-900 disabled:opacity-60"
        type="submit"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      {error && (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
