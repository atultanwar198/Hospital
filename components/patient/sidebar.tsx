"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HeartPulse,
  LayoutDashboard,
  User,
  CalendarDays,
  Stethoscope,
  FileText,
  Pill,
  FlaskConical,
  Receipt,
  LifeBuoy,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/avatar";
import { patient, appointments, prescriptions, labReports } from "@/lib/mock-data";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number;
}

export function Sidebar({
  slug,
  open,
  onClose,
}: {
  slug: string;
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const base = `/patient/${slug}`;

  const confirmedCount = appointments.filter((a) => a.status === "Confirmed").length;
  const activeRxCount = prescriptions.filter((p) => p.status === "Active").length;
  const readyLabCount = labReports.filter((l) => l.status === "Ready").length;

  const primaryNav: NavItem[] = [
    { label: "Dashboard", href: base, icon: LayoutDashboard },
    { label: "My Profile", href: `${base}/profile`, icon: User },
    {
      label: "Appointments",
      href: `${base}/appointments`,
      icon: CalendarDays,
      badge: confirmedCount,
    },
    { label: "Doctors", href: `${base}/doctors`, icon: Stethoscope },
    { label: "Medical Records", href: `${base}/medical-records`, icon: FileText },
    {
      label: "Prescriptions",
      href: `${base}/prescriptions`,
      icon: Pill,
      badge: activeRxCount,
    },
    {
      label: "Lab Reports",
      href: `${base}/lab-reports`,
      icon: FlaskConical,
      badge: readyLabCount,
    },
    { label: "Bills & Payments", href: `${base}/bills`, icon: Receipt },
  ];

  const utilityNav: NavItem[] = [
    { label: "Help & Support", href: `${base}/help-support`, icon: LifeBuoy },
    { label: "Settings", href: `${base}/settings`, icon: Settings },
  ];

  function isActive(href: string) {
    if (href === base) return pathname === base;
    return pathname === href || pathname?.startsWith(href + "/");
  }

  function renderItem(item: NavItem) {
    const active = isActive(item.href);
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          onClick={onClose}
          aria-current={active ? "page" : undefined}
          className={cn(
            "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
            active
              ? "bg-white text-brand-dark"
              : "text-white/75 hover:bg-white/10 hover:text-white",
          )}
        >
          <item.icon
            className={cn(
              "h-[18px] w-[18px] shrink-0",
              active ? "text-brand" : "text-white/55 group-hover:text-white",
            )}
          />
          <span className="flex-1">{item.label}</span>
          {!!item.badge && (
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[11px] font-semibold leading-none",
                active ? "bg-brand-soft text-brand-dark" : "bg-accent text-white",
              )}
            >
              {item.badge}
            </span>
          )}
        </Link>
      </li>
    );
  }

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-[1px] lg:hidden"
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col bg-brand-dark transition-transform duration-200 ease-out lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 pb-5 pt-6">
          <Link href={base} className="flex items-center gap-2.5" onClick={onClose}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              <HeartPulse className="h-5 w-5 text-accent" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              MediCare
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <ul className="space-y-1">{primaryNav.map(renderItem)}</ul>
          <div className="my-4 h-px bg-white/10" />
          <ul className="space-y-1">
            {utilityNav.map(renderItem)}
            <li>
              <button
                type="button"
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-danger/20 hover:text-white"
              >
                <LogOut className="h-[18px] w-[18px] shrink-0 text-white/55 group-hover:text-white" />
                Logout
              </button>
            </li>
          </ul>
        </nav>

        <Link
          href={`${base}/profile`}
          onClick={onClose}
          className="m-3 flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/15"
        >
          <Avatar initials="SJ" color="accent" size="md" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{patient.name}</p>
            <p className="truncate text-xs text-white/60">{patient.patientId}</p>
          </div>
        </Link>
      </aside>
    </>
  );
}
