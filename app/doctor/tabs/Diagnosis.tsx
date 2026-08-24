"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faStethoscope,
  faEye,
  faPen,
  faXmark,
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  Badge,
  Button,
  Select,
  Textarea,
  PageHeader,
} from "@/components/ui";

type DiagnosisStatus = "Active" | "Critical";

interface DiagnosisRecord {
  patient: string;
  id: string;
  primary: string;
  secondary: string;
  date: string;
  status: DiagnosisStatus;
}

const commonDiagnoses = [
  { code: "I10", label: "Hypertension" },
  { code: "I49", label: "Cardiac Arrhythmia" },
  { code: "I50", label: "Heart Failure" },
  { code: "I25", label: "Coronary Artery Disease" },
  { code: "I48", label: "Atrial Fibrillation" },
  { code: "R07", label: "Chest Pain" },
  { code: "I21", label: "Acute Myocardial Infarction" },
  { code: "I47", label: "Paroxysmal Tachycardia" },
];

const diagnosisHistory: DiagnosisRecord[] = [
  {
    patient: "Aarav Sharma",
    id: "PT-1024",
    primary: "Hypertension",
    secondary: "—",
    date: "20 Aug 2026",
    status: "Active",
  },
  {
    patient: "Priya Verma",
    id: "PT-1041",
    primary: "Cardiac Arrhythmia",
    secondary: "Hypertension",
    date: "18 Aug 2026",
    status: "Active",
  },
  {
    patient: "Rahul Mehta",
    id: "PT-1088",
    primary: "Chest Pain",
    secondary: "—",
    date: "15 Aug 2026",
    status: "Active",
  },
  {
    patient: "Sunita Devi",
    id: "PT-1055",
    primary: "Heart Failure",
    secondary: "Coronary Artery Disease",
    date: "12 Aug 2026",
    status: "Critical",
  },
  {
    patient: "Vikram Singh",
    id: "PT-1033",
    primary: "Atrial Fibrillation",
    secondary: "Hypertension",
    date: "10 Aug 2026",
    status: "Active",
  },
  {
    patient: "Neha Gupta",
    id: "PT-1062",
    primary: "Hypertension",
    secondary: "—",
    date: "08 Aug 2026",
    status: "Active",
  },
];

const statusVariant = (status: DiagnosisStatus) => {
  return status === "Critical" ? "danger" : "success";
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Diagnosis() {
  const [search, setSearch] = useState("");
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const [secondaryDiagnosis, setSecondaryDiagnosis] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredDiagnoses = useMemo(() => {
    if (!search.trim()) return commonDiagnoses;

    const query = search.toLowerCase();

    return commonDiagnoses.filter(
      (diagnosis) =>
        diagnosis.label.toLowerCase().includes(query) ||
        diagnosis.code.toLowerCase().includes(query),
    );
  }, [search]);

  const handleAddDiagnosis = () => {
    if (!selectedDiagnosis) {
      window.alert("Please select a primary diagnosis.");
      return;
    }

    window.alert(`Diagnosis "${selectedDiagnosis}" added successfully.`);
    setSelectedDiagnosis("");
    setSecondaryDiagnosis("");
    setSearch("");
    setShowForm(false);
  };

  return (
    <div className="mx-auto max-w-350 p-6">
      <PageHeader
        title="Diagnosis"
        subtitle="Manage patient diagnoses and clinical findings"
        action={
          <Button
            variant="primary"
            onClick={() => setShowForm((current) => !current)}
          >
            <FontAwesomeIcon icon={faPlus} className="text-xs" />
            Add Diagnosis
          </Button>
        }
      />

      {/* Summary */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryCard
          label="Total Diagnoses"
          value={diagnosisHistory.length}
          color="#1769aa"
          icon={faStethoscope}
        />

        <SummaryCard
          label="Active"
          value={diagnosisHistory.filter((d) => d.status === "Active").length}
          color="#15803D"
          icon={faCircleCheck}
        />

        <SummaryCard
          label="Critical"
          value={diagnosisHistory.filter((d) => d.status === "Critical").length}
          color="#DC2626"
          icon={faTriangleExclamation}
        />
      </div>

      {/* Add Diagnosis */}
      {showForm && (
        <Card className="mb-6 p-5 border ">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{
                    background: "var(--secondary)",
                    color: "var(--primary)",
                  }}
                >
                  <FontAwesomeIcon icon={faStethoscope} className="text-sm" />
                </div>

                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Add New Diagnosis
                </h3>
              </div>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                Select a diagnosis and add clinical notes.
              </p>
            </div>

            <button
              onClick={() => setShowForm(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg transition hover:bg-slate-100"
              style={{ color: "var(--muted-foreground)" }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
            {/* Diagnosis selection */}
            <div>
              <label
                className="mb-1.5 block text-xs font-semibold"
                style={{ color: "var(--muted-foreground)" }}
              >
                Search Diagnosis
              </label>

              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2.5"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--background)",
                }}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-xs"
                  style={{ color: "var(--muted-foreground)" }}
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search ICD-10 code or diagnosis..."
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                  style={{ color: "var(--foreground)" }}
                />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {filteredDiagnoses.slice(0, 6).map((diagnosis) => {
                  const selected = selectedDiagnosis === diagnosis.label;

                  return (
                    <button
                      key={diagnosis.code}
                      type="button"
                      onClick={() => setSelectedDiagnosis(diagnosis.label)}
                      className="rounded-lg px-3 py-2 text-left transition"
                      style={{
                        border: `1px solid ${
                          selected ? "var(--primary)" : "var(--border)"
                        }`,
                        background: selected
                          ? "var(--secondary)"
                          : "transparent",
                      }}
                    >
                      <div
                        className="font-mono text-[10px] font-bold"
                        style={{
                          color: selected
                            ? "var(--primary)"
                            : "var(--muted-foreground)",
                        }}
                      >
                        {diagnosis.code}
                      </div>

                      <div
                        className="mt-0.5 text-xs font-medium"
                        style={{
                          color: selected
                            ? "var(--primary)"
                            : "var(--foreground)",
                        }}
                      >
                        {diagnosis.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <Select
                label="Primary Diagnosis"
                value={selectedDiagnosis}
                onChange={(e) => setSelectedDiagnosis(e.target.value)}
              >
                <option value="">Select diagnosis...</option>

                {commonDiagnoses.map((diagnosis) => (
                  <option key={diagnosis.code} value={diagnosis.label}>
                    {diagnosis.code} — {diagnosis.label}
                  </option>
                ))}
              </Select>

              <Select
                label="Secondary Diagnosis"
                value={secondaryDiagnosis}
                onChange={(e) => setSecondaryDiagnosis(e.target.value)}
              >
                <option value="">None</option>

                {commonDiagnoses.map((diagnosis) => (
                  <option key={diagnosis.code} value={diagnosis.label}>
                    {diagnosis.code} — {diagnosis.label}
                  </option>
                ))}
              </Select>

              <Textarea label="Patient-ID" placeholder="patient ID" rows={1} />

              <Textarea
                label="Clinical Notes"
                placeholder="Add relevant clinical observations..."
                rows={3}
              />

              <Textarea
                label="Treatment Recommendation"
                placeholder="Recommended treatment or follow-up..."
                rows={2}
              />
            </div>
          </div>

          <div
            className="mt-5 flex justify-end gap-2 border-t pt-4"
            style={{ borderColor: "var(--border)" }}
          >
            <Button variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>

            <Button variant="primary" onClick={handleAddDiagnosis}>
              <FontAwesomeIcon icon={faPlus} className="text-xs" />
              Add Diagnosis
            </Button>
          </div>
        </Card>
      )}

      {/* History */}
      <Card className="overflow-hidden">
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Diagnosis History
            </h3>

            <p
              className="mt-0.5 text-xs"
              style={{ color: "var(--muted-foreground)" }}
            >
              Recent patient diagnoses
            </p>
          </div>

          <span
            className="rounded-full px-2.5 py-1 text-xs font-semibold"
            style={{
              background: "var(--secondary)",
              color: "var(--primary)",
            }}
          >
            {diagnosisHistory.length} Records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5 text-sm">
            <thead>
              <tr
                style={{
                  background: "var(--background)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {[
                  "Patient",
                  "Primary Diagnosis",
                  "Secondary",
                  "Date",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 text-left text-[11px] font-semibold uppercase tracking-wide"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {diagnosisHistory.map((record) => (
                <tr
                  key={record.id}
                  className="transition-colors hover:bg-slate-50"
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {/* Patient */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #1769aa, #0D9488)",
                        }}
                      >
                        {getInitials(record.patient)}
                      </div>

                      <div>
                        <p
                          className="font-semibold"
                          style={{ color: "var(--foreground)" }}
                        >
                          {record.patient}
                        </p>

                        <p
                          className="mt-0.5 font-mono text-[10px]"
                          style={{
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {record.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Primary */}
                  <td className="px-5 py-3.5">
                    <span
                      className="font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {record.primary}
                    </span>
                  </td>

                  {/* Secondary */}
                  <td
                    className="px-5 py-3.5 text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {record.secondary}
                  </td>

                  {/* Date */}
                  <td
                    className="px-5 py-3.5 text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {record.date}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-3.5">
                    <Badge variant={statusVariant(record.status)}>
                      {record.status}
                    </Badge>
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <button
                        className="flex items-center gap-1 text-xs font-semibold"
                        style={{ color: "var(--primary)" }}
                      >
                        <FontAwesomeIcon icon={faEye} className="text-[10px]" />
                        View
                      </button>

                      <button
                        className="flex items-center gap-1 text-xs font-semibold"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                        onClick={() =>
                          window.alert(
                            `Updating diagnosis for ${record.patient}`,
                          )
                        }
                      >
                        <FontAwesomeIcon icon={faPen} className="text-[10px]" />
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {diagnosisHistory.length === 0 && (
          <div className="p-10 text-center">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="mb-3 text-2xl"
              style={{ color: "var(--muted-foreground)" }}
            />

            <p
              className="text-sm font-medium"
              style={{ color: "var(--foreground)" }}
            >
              No diagnosis records found
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  color,
  icon,
}: {
  label: string;
  value: number;
  color: string;
  icon: any;
}) {
  return (
    <Card className="flex items-center justify-between px-5 py-4">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{
            background: `${color}12`,
            color,
          }}
        >
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </div>

        <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
          {label}
        </p>
      </div>

      <p className="text-xl font-bold" style={{ color }}>
        {value}
      </p>
    </Card>
  );
}
