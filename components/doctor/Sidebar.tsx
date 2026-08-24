"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faUser,
  faCalendar,
  faUsers,
  faFileLines,
  faPills,
  faStethoscope,
  faFlask,
  faRotate,
  faChartBar,
  faPlane,
  faMessage,
  faBell,
  faCircleQuestion,
  faGear,
  faRightFromBracket,
  faHeart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  label: string;
  icon: any;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: faGaugeHigh, href: "dashboard" },
  { label: "My Profile", icon: faUser, href: "profile" },
  { label: "Appointments", icon: faCalendar, href: "appointments" },
  { label: "Patients", icon: faUsers, href: "patients" },
  { label: "Medical Records", icon: faFileLines, href: "medical-records" },
  { label: "Prescriptions", icon: faPills, href: "prescriptions" },
  { label: "Diagnosis", icon: faStethoscope, href: "diagnosis" },
  { label: "Lab & Tests", icon: faFlask, href: "lab-tests" },
  { label: "Reports", icon: faChartBar, href: "reports" },
  { label: "Leave Management", icon: faPlane, href: "leave" },
  { label: "Notifications", icon: faBell, href: "notifications" },
];

interface SidebarProps {
  activePage: string;
  onSelect: (page: string) => void;
}

export default function Sidebar({ activePage, onSelect }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`
        fixed sm:static
        flex h-screen shrink-0 flex-col overflow-hidden
        bg-[#0F2140]
        transition-all duration-300 ease-in-out
        ${open ? "w-[240px]" : "w-[64px]"}
        md:w-[240px]
      `}
    >
      {/* HEADER */}
      <div
        className={`
          flex h-[76px] shrink-0 items-center
          border-b border-white/[0.08]
          px-3
          ${open ? "justify-between" : "justify-center"}
          md:justify-start md:px-5
        `}
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-lg bg-[#1B7FC4]">
            <FontAwesomeIcon icon={faHeart} className="h-4 w-4 text-white" />
          </div>

          <div
            className={`
              overflow-hidden whitespace-nowrap
              transition-all duration-300
              ${open ? "w-auto opacity-100" : "w-0 opacity-0"}
              md:w-auto md:opacity-100
            `}
          >
            <p className="text-sm font-semibold leading-tight text-white">
              MediCare
            </p>
            <p className="text-xs text-white/45">Hospital System</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            flex h-8 w-8 shrink-0 items-center justify-center
            rounded-md text-white/70
            transition hover:bg-white/10 hover:text-white
            md:hidden
          "
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-4 w-4" />
        </button>
      </div>

      {/* DOCTOR PROFILE */}
      <div className="shrink-0 border-b border-white/[0.08] px-3 py-4">
        <div
          className={`
            flex items-center gap-3
            ${open ? "justify-start" : "justify-center"}
            md:justify-start
          `}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1B7FC4] to-[#0D9488] text-sm font-bold text-white">
            MS
          </div>

          <div
            className={`
              min-w-0 overflow-hidden whitespace-nowrap
              transition-all duration-300
              ${open ? "w-auto opacity-100" : "w-0 opacity-0"}
              md:w-auto md:opacity-100
            `}
          >
            <p className="truncate text-sm font-semibold text-white">
              Dr. Michael Smith
            </p>
            <p className="truncate text-xs text-white/45">Cardiologist</p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className=" sidebar-scroll flex-1 overflow-y-auto px-2 py-3 md:px-3">
        <p
          className={`
            mb-2 px-2 text-xs font-semibold text-white/30
            ${open ? "opacity-100" : "opacity-0"}
            md:opacity-100
          `}
        >
          MAIN MENU
        </p>

        {navItems.map((item) => {
          const isActive = activePage === item.href;

          return (
            <button
              key={item.href}
              type="button"
              onClick={() => {
                onSelect(item.href);

                // Close sidebar on mobile after selecting
                setOpen(false);
              }}
              title={!open ? item.label : undefined}
              className={`
                mb-1 flex w-full items-center rounded-lg
                py-2.5
                transition-all duration-200

                ${open ? "gap-3 px-3" : "justify-center px-0"}

                md:justify-start
                md:gap-3
                md:px-3

                ${
                  isActive
                    ? "border-l-[3px] border-[#1B7FC4] bg-[#1666A8]/35 text-white"
                    : "border-l-[3px] border-transparent text-white/55 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <FontAwesomeIcon icon={item.icon} className="h-4 w-4 shrink-0" />

              <span
                className={`
                  overflow-hidden whitespace-nowrap
                  text-sm font-medium
                  transition-all duration-300

                  ${open ? "w-auto opacity-100" : "w-0 opacity-0"}

                  md:w-auto md:opacity-100
                `}
              >
                {item.label}
              </span>

              {item.href === "notifications" && (
                <span
                  className={`
                    ml-auto rounded-full bg-red-600
                    px-1.5 py-0.5 text-[10px]
                    font-semibold text-white

                    ${open ? "block" : "hidden"}

                    md:block
                  `}
                >
                  4
                </span>
              )}

              {item.href === "messages" && (
                <span
                  className={`
                    ml-auto rounded-full bg-teal-600
                    px-1.5 py-0.5 text-[10px]
                    font-semibold text-white

                    ${open ? "block" : "hidden"}

                    md:block
                  `}
                >
                  3
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* BOTTOM */}
      <div className="shrink-0 border-t border-white/[0.08] px-2 pb-4 pt-3 md:px-3">
        <button
          type="button"
          className="mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-white/45 hover:bg-white/5 hover:text-white"
        >
          <FontAwesomeIcon icon={faCircleQuestion} className="h-4 w-4" />

          <span
            className={`
              overflow-hidden whitespace-nowrap text-sm font-medium
              ${open ? "w-auto opacity-100" : "w-0 opacity-0"}
              md:w-auto md:opacity-100
            `}
          >
            Help & Support
          </span>
        </button>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-red-400/80 hover:bg-red-500/10 hover:text-red-400"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="h-4 w-4" />

          <span
            className={`
              overflow-hidden whitespace-nowrap text-sm font-medium
              ${open ? "w-auto opacity-100" : "w-0 opacity-0"}
              md:w-auto md:opacity-100
            `}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
