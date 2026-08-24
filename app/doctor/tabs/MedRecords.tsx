"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faFileLines,
  faEye,
  faDownload,
  faXmark,
  faChevronDown,
  faUserDoctor,
  faCalendarDays,
  faCircleCheck,
  faClock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

type RecordStatus = "Finalized" | "Pending Review";

type MedicalRecord = {
  patient: string;
  id: string;
  type: string;
  date: string;
  doctor: string;
  status: RecordStatus;
};

const records: MedicalRecord[] = [
  {
    patient: "Rajesh Sharma",
    id: "PT-1024",
    type: "Consultation Note",
    date: "20 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Priya Verma",
    id: "PT-1041",
    type: "ECG Report",
    date: "18 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Amit Kumar",
    id: "PT-1088",
    type: "Lab Results",
    date: "15 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Pending Review",
  },
  {
    patient: "Sunita Devi",
    id: "PT-1055",
    type: "Echocardiogram",
    date: "12 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Vikram Singh",
    id: "PT-1033",
    type: "Consultation Note",
    date: "10 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Neha Gupta",
    id: "PT-1062",
    type: "Holter Monitor Report",
    date: "05 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Arun Mehta",
    id: "PT-1077",
    type: "ECG Report",
    date: "02 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Finalized",
  },
  {
    patient: "Kavita Joshi",
    id: "PT-1091",
    type: "Lab Results",
    date: "01 Aug 2026",
    doctor: "Dr. Amit Sharma",
    status: "Pending Review",
  },
];

const avatarColors = [
  "linear-gradient(135deg, #1769AA, #0D9488)",
  "linear-gradient(135deg, #7C3AED, #2563EB)",
  "linear-gradient(135deg, #0891B2, #0D9488)",
  "linear-gradient(135deg, #DC2626, #EA580C)",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}

function StatusBadge({ status }: { status: RecordStatus }) {
  const finalized = status === "Finalized";

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold"
      style={{
        color: finalized ? "#15803D" : "#B45309",
        background: finalized ? "#F0FDF4" : "#FFFBEB",
        borderColor: finalized ? "#BBF7D0" : "#FDE68A",
      }}
    >
      <FontAwesomeIcon
        icon={finalized ? faCircleCheck : faClock}
        className="text-[8px]"
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
  bg,
}: {
  label: string;
  value: number;
  icon: any;
  color: string;
  bg: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{
            color,
            background: bg,
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

export default function MedicalRecordsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | RecordStatus>("All");

  const [typeFilter, setTypeFilter] = useState("All");

  const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(
    null,
  );

  const [showFilters, setShowFilters] = useState(false);

  const recordTypes = [
    "All",
    ...Array.from(new Set(records.map((record) => record.type))),
  ];

  const filteredRecords = useMemo(() => {
    const query = search.toLowerCase().trim();

    return records.filter((record) => {
      const matchesSearch =
        !query ||
        record.patient.toLowerCase().includes(query) ||
        record.id.toLowerCase().includes(query) ||
        record.type.toLowerCase().includes(query) ||
        record.doctor.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" || record.status === statusFilter;

      const matchesType = typeFilter === "All" || record.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, statusFilter, typeFilter]);

  const finalizedCount = records.filter(
    (record) => record.status === "Finalized",
  ).length;

  const pendingCount = records.filter(
    (record) => record.status === "Pending Review",
  ).length;

  const patientCount = new Set(records.map((record) => record.id)).size;

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-sm text-[#1769AA]"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  Medical Records
                </h1>

                <p className="mt-0.5 text-xs text-slate-500">
                  Patient clinical documentation and reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-4 py-5 sm:px-6">
        {/* Stats */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="Total Records"
            value={records.length}
            icon={faFileLines}
            color="#1769AA"
            bg="#EFF6FF"
          />

          <StatCard
            label="Finalized"
            value={finalizedCount}
            icon={faCircleCheck}
            color="#15803D"
            bg="#F0FDF4"
          />

          <StatCard
            label="Pending Review"
            value={pendingCount}
            icon={faClock}
            color="#B45309"
            bg="#FFFBEB"
          />

          <StatCard
            label="Patients"
            value={patientCount}
            icon={faUserGroup}
            color="#7C3AED"
            bg="#F5F3FF"
          />
        </div>

        {/* Main card */}
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
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search patient, record type, ID..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              {/* Status */}
              <div className="flex gap-1 overflow-x-auto">
                {(["All", "Finalized", "Pending Review"] as const).map(
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

              {/* Filter */}
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

            {/* Record type filters */}
            {showFilters && (
              <div className="mt-3 flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-3">
                <span className="mr-1 text-xs font-semibold text-slate-500">
                  Record type:
                </span>

                {recordTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className="rounded-md border px-3 py-1.5 text-xs font-medium transition"
                    style={{
                      borderColor: typeFilter === type ? "#1769AA" : "#E2E8F0",
                      background: typeFilter === type ? "#EFF6FF" : "white",
                      color: typeFilter === type ? "#1769AA" : "#64748B",
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Results */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filteredRecords.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {records.length}
              </span>{" "}
              records
            </p>

            {(search || statusFilter !== "All" || typeFilter !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setStatusFilter("All");
                  setTypeFilter("All");
                }}
                className="text-xs font-semibold text-[#1769AA]"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  {[
                    "Patient",
                    "Record",
                    "Date",
                    "Doctor",
                    "Status",
                    "Actions",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredRecords.map((record, index) => (
                  <tr
                    key={record.id + record.type}
                    className="group border-b border-slate-100 transition hover:bg-slate-50/70"
                  >
                    {/* Patient */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{
                            background: [
                              "linear-gradient(135deg, #1769AA, #0D9488)",
                              "linear-gradient(135deg, #7C3AED, #2563EB)",
                              "linear-gradient(135deg, #0891B2, #0D9488)",
                              "linear-gradient(135deg, #DC2626, #EA580C)",
                            ][index % 4],
                          }}
                        >
                          {getInitials(record.patient)}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-slate-800">
                            {record.patient}
                          </p>

                          <p className="mt-0.5 font-mono text-[10px] text-slate-400">
                            {record.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Record */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            className="text-xs text-[#1769AA]"
                          />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-700">
                            {record.type}
                          </p>

                          <p className="mt-0.5 text-[10px] text-slate-400">
                            Clinical document
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-[10px] text-slate-400"
                        />

                        {record.date}
                      </div>
                    </td>

                    {/* Doctor */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faUserDoctor}
                          className="text-xs text-slate-400"
                        />

                        <span className="text-xs text-slate-600">
                          {record.doctor}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <StatusBadge status={record.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setSelectedRecord(record)}
                          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5
                                     text-xs font-semibold text-[#1769AA]
                                     transition hover:bg-blue-50"
                        >
                          <FontAwesomeIcon
                            icon={faEye}
                            className="text-[10px]"
                          />
                          View
                        </button>

                        <button
                          onClick={() =>
                            alert(
                              `Downloading ${record.type} for ${record.patient}`,
                            )
                          }
                          className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5
                                     text-xs font-semibold text-slate-500
                                     transition hover:bg-slate-100"
                        >
                          <FontAwesomeIcon
                            icon={faDownload}
                            className="text-[10px]"
                          />
                          Download
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredRecords.length === 0 && (
            <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-slate-400"
                />
              </div>

              <h3 className="mt-4 text-sm font-bold text-slate-800">
                No records found
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* Record Preview Modal */}
      {selectedRecord && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-[2px]"
          onClick={() => setSelectedRecord(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="text-sm text-[#1769AA]"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Medical record
                  </p>

                  <h2 className="mt-0.5 text-base font-bold text-slate-900">
                    {selectedRecord.type}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedRecord(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg
                           text-slate-400 transition hover:bg-slate-100
                           hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faXmark} className="text-sm" />
              </button>
            </div>

            {/* Patient */}
            <div className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-[#1769AA]">
                  {getInitials(selectedRecord.patient)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {selectedRecord.patient}
                  </p>

                  <p className="mt-0.5 font-mono text-[10px] text-slate-400">
                    {selectedRecord.id}
                  </p>
                </div>

                <div className="ml-auto">
                  <StatusBadge status={selectedRecord.status} />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 p-5">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Record type
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-700">
                  {selectedRecord.type}
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Date
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-700">
                  {selectedRecord.date}
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Doctor
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-700">
                  {selectedRecord.doctor}
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  Patient ID
                </p>

                <p className="mt-1 font-mono text-xs font-semibold text-slate-700">
                  {selectedRecord.id}
                </p>
              </div>
            </div>

            {/* Preview */}
            <div className="mx-5 mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="text-xs text-slate-400"
                />

                <span className="text-xs font-bold text-slate-600">
                  Document preview
                </span>
              </div>

              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-slate-200" />
                <div className="h-2 w-full rounded bg-slate-200" />
                <div className="h-2 w-5/6 rounded bg-slate-200" />
                <div className="h-2 w-2/3 rounded bg-slate-200" />
              </div>

              <p className="mt-4 text-[11px] text-slate-400">
                Document preview placeholder for prototype.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 border-t border-slate-200 p-4">
              <button
                onClick={() => setSelectedRecord(null)}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5
                           text-sm font-semibold text-slate-600
                           transition hover:bg-slate-50"
              >
                Close
              </button>

              <button
                onClick={() => alert(`Downloading ${selectedRecord.type}`)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg
                           bg-[#1769AA] px-4 py-2.5 text-sm font-semibold
                           text-white transition hover:bg-[#12588E]"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
