"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import { Footer } from "./footer";

export function PatientShell({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="patient-theme lg:flex">
      <Sidebar slug={slug} open={navOpen} onClose={() => setNavOpen(false)} />
      <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col">
        <Topbar slug={slug} onMenuClick={() => setNavOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <Footer slug={slug} />
      </div>
    </div>
  );
}
