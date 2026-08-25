"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { patient, notifications } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

export function Topbar({
  slug,
  onMenuClick,
}: {
  slug: string;
  onMenuClick: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read).length;
  const base = `/patient/${slug}`;

  return (
    <header className="sticky top-0 z-30 flex items-center gap-2 border-b border-line bg-surface/90 px-4 py-3 backdrop-blur sm:gap-3 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="rounded-lg p-2 text-ink-soft hover:bg-black/5 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <label className="relative hidden max-w-md flex-1 sm:block">
        <span className="sr-only">Search</span>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
        <input
          type="search"
          placeholder="Search doctors, appointments, reports..."
          className="w-full rounded-xl border border-line bg-canvas py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
        />
      </label>

      <button
        type="button"
        aria-label="Search"
        className="rounded-lg p-2 text-ink-soft hover:bg-black/5 sm:hidden"
      >
        <Search className="h-5 w-5" />
      </button>

      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <Link
          href={`${base}/notifications`}
          aria-label={`Notifications${unread ? `, ${unread} unread` : ""}`}
          className="relative rounded-lg p-2.5 text-ink-soft hover:bg-black/5"
        >
          <Bell className="h-5 w-5" />
          {unread > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white ring-2 ring-surface">
              {unread}
            </span>
          )}
        </Link>
        <button
          type="button"
          aria-label="Messages"
          className="relative rounded-lg p-2.5 text-ink-soft hover:bg-black/5"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand ring-2 ring-surface" />
        </button>

        <div className="relative ml-1">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            className="flex items-center gap-2 rounded-xl py-1.5 pl-1.5 pr-2 hover:bg-black/5"
          >
            <Avatar initials="SJ" size="sm" />
            <span className="hidden text-left sm:block">
              <span className="block text-sm font-semibold leading-tight text-ink">
                {patient.name}
              </span>
              <span className="block text-xs leading-tight text-ink-soft">Patient</span>
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 text-ink-faint transition-transform",
                menuOpen && "rotate-180",
              )}
            />
          </button>

          {menuOpen && (
            <>
              <button
                aria-hidden="true"
                tabIndex={-1}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-10 cursor-default"
              />
              <div
                role="menu"
                className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-xl border border-line bg-surface py-1.5 shadow-lg"
              >
                <Link
                  href={`${base}/profile`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-ink hover:bg-canvas"
                >
                  <User className="h-4 w-4 text-ink-soft" /> My Profile
                </Link>
                <Link
                  href={`${base}/settings`}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-ink hover:bg-canvas"
                >
                  <Settings className="h-4 w-4 text-ink-soft" /> Settings
                </Link>
                <div className="my-1 h-px bg-line" />
                <button
                  type="button"
                  role="menuitem"
                  className="flex w-full items-center gap-2.5 px-3.5 py-2 text-sm text-danger hover:bg-danger-soft"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
