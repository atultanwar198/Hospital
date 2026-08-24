"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faFilter,
  faEllipsisVertical,
  faUser,
  faChevronDown,
  faArrowRight,
  faPhone,
  faCalendarDays,
  faHeartPulse,
  faUserGroup,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type PatientStatus = "Active" | "Critical" | "Inactive";

type Patient = {
  name: string;
  id: string;
  age: number;
  gender: "Male" | "Female";
  blood: string;
  phone: string;
  lastVisit: string;
  diagnosis: string;
  nextAppt: string;
  status: PatientStatus;
};

const patients: Patient[] = [
  {
    name: "Rajesh Sharma",
    id: "PT-1024",
    age: 56,
    gender: "Male",
    blood: "O+",
    phone: "+91 98765 43210",
    lastVisit: "20 Aug 2026",
    diagnosis: "Hypertension",
    nextAppt: "24 Aug 2026",
    status: "Active",
  },
  {
    name: "Priya Verma",
    id: "PT-1041",
    age: 42,
    gender: "Female",
    blood: "A+",
    phone: "+91 98765 43211",
    lastVisit: "18 Aug 2026",
    diagnosis: "Arrhythmia",
    nextAppt: "28 Aug 2026",
    status: "Active",
  },
  {
    name: "Amit Kumar",
    id: "PT-1088",
    age: 34,
    gender: "Male",
    blood: "B+",
    phone: "+91 98765 43212",
    lastVisit: "15 Aug 2026",
    diagnosis: "Migraine",
    nextAppt: "30 Aug 2026",
    status: "Active",
  },
  {
    name: "Sunita Devi",
    id: "PT-1055",
    age: 68,
    gender: "Female",
    blood: "AB+",
    phone: "+91 98765 43213",
    lastVisit: "12 Aug 2026",
    diagnosis: "Heart Failure",
    nextAppt: "24 Aug 2026",
    status: "Critical",
  },
  {
    name: "Vikram Singh",
    id: "PT-1033",
    age: 51,
    gender: "Male",
    blood: "O-",
    phone: "+91 98765 43214",
    lastVisit: "10 Aug 2026",
    diagnosis: "Type 2 Diabetes",
    nextAppt: "25 Aug 2026",
    status: "Active",
  },
  {
    name: "Neha Gupta",
    id: "PT-1099",
    age: 39,
    gender: "Female",
    blood: "A-",
    phone: "+91 98765 43215",
    lastVisit: "08 Aug 2026",
    diagnosis: "Hypertension",
    nextAppt: "Scheduled",
    status: "Inactive",
  },
  {
    name: "Arun Mehta",
    id: "PT-1062",
    age: 47,
    gender: "Male",
    blood: "B+",
    phone: "+91 98765 43216",
    lastVisit: "05 Aug 2026",
    diagnosis: "Atrial Fibrillation",
    nextAppt: "27 Aug 2026",
    status: "Active",
  },
  {
    name: "Kavita Joshi",
    id: "PT-1077",
    age: 59,
    gender: "Female",
    blood: "O+",
    phone: "+91 98765 43217",
    lastVisit: "02 Aug 2026",
    diagnosis: "Coronary Artery Disease",
    nextAppt: "29 Aug 2026",
    status: "Active",
  },
  {
    name: "Ramesh Patel",
    id: "PT-1091",
    age: 64,
    gender: "Male",
    blood: "A+",
    phone: "+91 98765 43218",
    lastVisit: "01 Aug 2026",
    diagnosis: "Heart Failure",
    nextAppt: "26 Aug 2026",
    status: "Critical",
  },
  {
    name: "Anjali Sharma",
    id: "PT-1044",
    age: 45,
    gender: "Female",
    blood: "AB-",
    phone: "+91 98765 43219",
    lastVisit: "28 Jul 2026",
    diagnosis: "Hypertension",
    nextAppt: "24 Aug 2026",
    status: "Active",
  },
];

const avatarColors = [
  "linear-gradient(135deg, #1769AA, #0D9488)",
  "linear-gradient(135deg, #7C3AED, #2563EB)",
  "linear-gradient(135deg, #0891B2, #0D9488)",
  "linear-gradient(135deg, #DC2626, #EA580C)",
  "linear-gradient(135deg, #2563EB, #4F46E5)",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function StatusBadge({ status }: { status: PatientStatus }) {
  const styles = {
    Active: {
      color: "#15803D",
      background: "#F0FDF4",
      border: "#BBF7D0",
    },
    Critical: {
      color: "#DC2626",
      background: "#FEF2F2",
      border: "#FECACA",
    },
    Inactive: {
      color: "#64748B",
      background: "#F8FAFC",
      border: "#E2E8F0",
    },
  };

  const style = styles[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
      style={{
        color: style.color,
        background: style.background,
        borderColor: style.border,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: style.color }}
      />

      {status}
    </span>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
  background,
}: {
  label: string;
  value: number;
  icon: any;
  color: string;
  background: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{
            color,
            background,
          }}
        >
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </div>

        <span className="text-2xl font-bold" style={{ color }}>
          {value}
        </span>
      </div>

      <p className="mt-3 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default function PatientsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | PatientStatus>(
    "All",
  );

  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const [showFilters, setShowFilters] = useState(false);

  const filteredPatients = useMemo(() => {
    const query = search.toLowerCase().trim();

    return patients.filter((patient) => {
      const matchesStatus =
        statusFilter === "All" || patient.status === statusFilter;

      const matchesSearch =
        !query ||
        patient.name.toLowerCase().includes(query) ||
        patient.id.toLowerCase().includes(query) ||
        patient.diagnosis.toLowerCase().includes(query) ||
        patient.phone.toLowerCase().includes(query);

      return matchesStatus && matchesSearch;
    });
  }, [search, statusFilter]);

  const activeCount = patients.filter((p) => p.status === "Active").length;

  const criticalCount = patients.filter((p) => p.status === "Critical").length;

  const inactiveCount = patients.filter((p) => p.status === "Inactive").length;

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-sm text-[#1769AA]"
                  />
                </div>

                <div>
                  <h1 className="text-xl font-bold tracking-tight">
                    My Patients
                  </h1>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Manage and monitor patients under your care
                  </p>
                </div>
              </div>
            </div>

            <button
              className="inline-flex items-center justify-center gap-2 rounded-lg
                         bg-[#1769AA] px-4 py-2.5 text-sm font-semibold
                         text-white shadow-sm transition hover:bg-[#12588E]"
              onClick={() => alert("Add patient")}
            >
              <FontAwesomeIcon icon={faPlus} className="text-xs" />
              Add Patient
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6">
        {/* Stats */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="Total Patients"
            value={patients.length}
            icon={faUserGroup}
            color="#1769AA"
            background="#EFF6FF"
          />

          <StatCard
            label="Active"
            value={activeCount}
            icon={faHeartPulse}
            color="#15803D"
            background="#F0FDF4"
          />

          <StatCard
            label="Critical"
            value={criticalCount}
            icon={faTriangleExclamation}
            color="#DC2626"
            background="#FEF2F2"
          />

          <StatCard
            label="Inactive"
            value={inactiveCount}
            icon={faUser}
            color="#64748B"
            background="#F8FAFC"
          />
        </div>

        {/* Main Card */}
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="border-b border-slate-200 px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-xs text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, ID, diagnosis..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-xs" />
                  </button>
                )}
              </div>

              {/* Status filters */}
              <div className="flex gap-1 overflow-x-auto">
                {(["All", "Active", "Critical", "Inactive"] as const).map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setStatusFilter(filter)}
                      className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition"
                      style={{
                        background:
                          statusFilter === filter ? "#1769AA" : "#FFFFFF",
                        color: statusFilter === filter ? "#FFFFFF" : "#64748B",
                        border: `1px solid ${
                          statusFilter === filter ? "#1769AA" : "#E2E8F0"
                        }`,
                      }}
                    >
                      {filter}
                    </button>
                  ),
                )}
              </div>

              {/* Filter button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg
                           border border-slate-200 px-3 text-xs font-semibold
                           text-slate-600 transition hover:bg-slate-50"
              >
                <FontAwesomeIcon icon={faFilter} className="text-[10px]" />
                Filters
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-[9px] transition ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Optional filters */}
            {showFilters && (
              <div className="mt-3 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 p-3">
                <span className="text-xs font-semibold text-slate-500">
                  Additional filters:
                </span>

                <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  All ages
                </button>

                <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  Any gender
                </button>

                <button className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  Any blood group
                </button>
              </div>
            )}
          </div>

          {/* Result summary */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filteredPatients.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {patients.length}
              </span>{" "}
              patients
            </p>

            {(search || statusFilter !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setStatusFilter("All");
                }}
                className="text-xs font-semibold text-[#1769AA]"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Patient
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Patient ID
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Age / Gender
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Blood
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Last Visit
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Diagnosis
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Next Visit
                  </th>

                  <th className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-3 text-right text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPatients.map((patient, index) => (
                  <tr
                    key={patient.id}
                    className="group border-b border-slate-100 transition hover:bg-slate-50/70"
                  >
                    {/* Patient */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{
                            background:
                              avatarColors[index % avatarColors.length],
                          }}
                        >
                          {getInitials(patient.name)}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {patient.name}
                          </p>

                          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-slate-400">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="text-[8px]"
                            />

                            {patient.phone}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-[11px] text-slate-500">
                        {patient.id}
                      </span>
                    </td>

                    {/* Age */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs text-slate-700">
                        {patient.age} yrs
                      </span>

                      <span className="mx-1 text-slate-300">/</span>

                      <span className="text-xs text-slate-500">
                        {patient.gender}
                      </span>
                    </td>

                    {/* Blood */}
                    <td className="px-4 py-3.5">
                      <span className="inline-flex rounded-md bg-blue-50 px-2 py-1 font-mono text-[11px] font-bold text-[#1769AA]">
                        {patient.blood}
                      </span>
                    </td>

                    {/* Last visit */}
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-[10px] text-slate-400"
                        />

                        {patient.lastVisit}
                      </div>
                    </td>

                    {/* Diagnosis */}
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-medium text-slate-700">
                        {patient.diagnosis}
                      </span>
                    </td>

                    {/* Next appointment */}
                    <td className="px-4 py-3.5">
                      <span
                        className={`text-xs ${
                          patient.nextAppt === "Scheduled"
                            ? "text-slate-400"
                            : "font-medium text-slate-600"
                        }`}
                      >
                        {patient.nextAppt}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3.5">
                      <StatusBadge status={patient.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedPatient(patient)}
                          className="rounded-lg px-2.5 py-1.5 text-xs font-semibold
                                     text-[#1769AA] transition hover:bg-blue-50"
                        >
                          View
                        </button>

                        <button
                          onClick={() =>
                            alert(`Opening consultation for ${patient.name}`)
                          }
                          className="hidden rounded-lg bg-[#1769AA] px-2.5 py-1.5
                                     text-xs font-semibold text-white
                                     transition hover:bg-[#12588E] sm:block"
                        >
                          Consult
                        </button>

                        <button
                          className="flex h-7 w-7 items-center justify-center rounded-lg
                                     text-slate-400 transition hover:bg-slate-100
                                     hover:text-slate-700"
                        >
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="text-xs"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredPatients.length === 0 && (
            <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <FontAwesomeIcon icon={faUser} className="text-slate-400" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-slate-800">
                No patients found
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Patient Preview Modal */}
      {selectedPatient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-[2px]"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Patient profile
                </p>

                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  {selectedPatient.name}
                </h2>
              </div>

              <button
                onClick={() => setSelectedPatient(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg
                           text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faXmark} className="text-sm" />
              </button>
            </div>

            {/* Modal body */}
            <div className="space-y-4 p-5">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full
                             bg-blue-50 text-sm font-bold text-[#1769AA]"
                >
                  {getInitials(selectedPatient.name)}
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {selectedPatient.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {selectedPatient.id} · {selectedPatient.age} years ·{" "}
                    {selectedPatient.gender}
                  </p>
                </div>

                <div className="ml-auto">
                  <StatusBadge status={selectedPatient.status} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Blood group
                  </p>

                  <p className="mt-1 font-mono text-sm font-bold text-[#1769AA]">
                    {selectedPatient.blood}
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Diagnosis
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {selectedPatient.diagnosis}
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Last visit
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {selectedPatient.lastVisit}
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-bold uppercase text-slate-400">
                    Next appointment
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {selectedPatient.nextAppt}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 text-xs text-blue-700">
                <FontAwesomeIcon icon={faPhone} />
                {selectedPatient.phone}
              </div>
            </div>

            {/* Modal actions */}
            <div className="flex gap-2 border-t border-slate-200 p-4">
              <button
                onClick={() => setSelectedPatient(null)}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm
                           font-semibold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>

              <button
                onClick={() =>
                  alert(`Opening consultation for ${selectedPatient.name}`)
                }
                className="flex flex-1 items-center justify-center gap-2 rounded-lg
                           bg-[#1769AA] px-4 py-2.5 text-sm font-semibold
                           text-white hover:bg-[#12588E]"
              >
                Open consultation
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
