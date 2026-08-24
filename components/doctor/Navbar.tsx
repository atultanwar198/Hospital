"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faMessage,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
      {/* Search */}
      <div className="relative w-full max-w-md">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search patients, appointments..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-[#1B7FC4] focus:bg-white"
        />
      </div>

      {/* Right Section */}
      <div className="ml-4 flex items-center gap-2 sm:gap-4">
        {/* Messages */}
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faMessage} />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-teal-500" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <FontAwesomeIcon icon={faBell} />

          <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold text-white">
            4
          </span>
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-gray-200 sm:block" />

        {/* User Profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-gray-50"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1B7FC4] to-[#0D9488] text-sm font-semibold text-white">
            MS
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Dr. Michael Smith
            </p>

            <p className="text-xs text-gray-400">Cardiologist</p>
          </div>
        </button>
      </div>
    </nav>
  );
}
