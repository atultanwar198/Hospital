import { NextResponse } from "next/server";
import { authenticate, dashboardPath } from "@/lib/auth";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (typeof email !== "string" || typeof password !== "string") return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  const user = authenticate(email, password);
  if (!user) return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  return NextResponse.json({ redirectTo: dashboardPath(user) });
}
