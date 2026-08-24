"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPrint,
  faMagnifyingGlass,
  faXmark,
  faEye,
  faTrash,
  faPills,
  faCalendarDays,
  faUser,
  faFilePrescription,
} from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  Badge,
  Button,
  Input,
  Select,
  Textarea,
  PageHeader,
} from "@/components/ui";

type Medicine = {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
};

type Prescription = {
  patient: string;
  id: string;
  date: string;
  doctor: string;
  medicines: Medicine[];
  generalInstructions: string;
  status: "Active" | "Completed";
};

const prescriptions: Prescription[] = [
  {
    patient: "Priya Sharma",
    id: "PT-1024",
    date: "20 Aug 2026",
    doctor: "Dr. Rajesh Kumar",
    status: "Active",
    generalInstructions:
      "Monitor blood pressure regularly and maintain a low-salt diet.",
    medicines: [
      {
        name: "Amlodipine",
        dosage: "5 mg",
        frequency: "Once Daily",
        duration: "30 Days",
        instructions: "Take after breakfast.",
      },
      {
        name: "Atorvastatin",
        dosage: "10 mg",
        frequency: "Once Daily",
        duration: "30 Days",
        instructions: "Take at night.",
      },
    ],
  },
  {
    patient: "Rahul Verma",
    id: "PT-1041",
    date: "18 Aug 2026",
    doctor: "Dr. Rajesh Kumar",
    status: "Active",
    generalInstructions: "Avoid strenuous activity and monitor heart rate.",
    medicines: [
      {
        name: "Metoprolol",
        dosage: "50 mg",
        frequency: "Twice Daily",
        duration: "60 Days",
        instructions: "Take with food.",
      },
    ],
  },
  {
    patient: "Ananya Gupta",
    id: "PT-1088",
    date: "15 Aug 2026",
    doctor: "Dr. Rajesh Kumar",
    status: "Active",
    generalInstructions: "Maintain hydration and adequate sleep.",
    medicines: [
      {
        name: "Sumatriptan",
        dosage: "50 mg",
        frequency: "As Needed",
        duration: "30 Days",
        instructions: "Take at onset of migraine.",
      },
    ],
  },
  {
    patient: "Arjun Mehta",
    id: "PT-1055",
    date: "12 Aug 2026",
    doctor: "Dr. Rajesh Kumar",
    status: "Active",
    generalInstructions: "Check weight daily and report sudden changes.",
    medicines: [
      {
        name: "Furosemide",
        dosage: "40 mg",
        frequency: "Once Daily",
        duration: "90 Days",
        instructions: "Take in the morning.",
      },
      {
        name: "Aspirin",
        dosage: "75 mg",
        frequency: "Once Daily",
        duration: "90 Days",
        instructions: "Take after breakfast.",
      },
    ],
  },
  {
    patient: "Neha Sharma",
    id: "PT-1033",
    date: "10 Aug 2026",
    doctor: "Dr. Rajesh Kumar",
    status: "Completed",
    generalInstructions: "Continue diabetic diet and monitor blood sugar.",
    medicines: [
      {
        name: "Metformin",
        dosage: "500 mg",
        frequency: "Twice Daily",
        duration: "30 Days",
        instructions: "Take with meals.",
      },
    ],
  },
];

const medicineOptions = [
  "Amlodipine",
  "Metoprolol",
  "Lisinopril",
  "Atorvastatin",
  "Aspirin",
  "Furosemide",
  "Warfarin",
  "Clopidogrel",
  "Metformin",
  "Pantoprazole",
];

export default function PrescriptionsPage() {
  const [showForm, setShowForm] = useState(false);
  const [showView, setShowView] = useState(false);

  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  const [search, setSearch] = useState("");

  const [selectedMeds, setSelectedMeds] = useState<Medicine[]>([]);

  const filtered = prescriptions.filter((p) => {
    const query = search.toLowerCase();

    return (
      p.patient.toLowerCase().includes(query) ||
      p.id.toLowerCase().includes(query) ||
      p.medicines.some((m) => m.name.toLowerCase().includes(query))
    );
  });

  function addMedicine() {
    setSelectedMeds((prev) => [
      ...prev,
      {
        name: "",
        dosage: "",
        frequency: "Once Daily",
        duration: "30 Days",
        instructions: "",
      },
    ]);
  }

  function removeMedicine(index: number) {
    setSelectedMeds((prev) => prev.filter((_, i) => i !== index));
  }

  function openPrescription(p: Prescription) {
    setSelectedPrescription(p);
    setShowView(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <div className="mx-auto max-w-[1400px] p-6">
        <PageHeader
          title="Prescriptions"
          subtitle="Create and manage patient prescriptions"
          action={
            <Button
              onClick={() => {
                setSelectedMeds([]);
                setShowForm(true);
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Create Prescription
            </Button>
          }
        />

        {/* Create Form */}
        {showForm && (
          <Card className="mb-6 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  New Prescription
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Add patient and medication details
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <Select label="Patient">
                <option>Priya Sharma — PT-1024</option>
                <option>Rahul Verma — PT-1041</option>
                <option>Ananya Gupta — PT-1088</option>
                <option>Arjun Mehta — PT-1055</option>
                <option>Neha Sharma — PT-1033</option>
              </Select>

              <Input label="Prescription Date" type="date" />
            </div>

            {/* Medicines */}
            <div className="mb-6">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Medicines
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Add medicines and dosage instructions
                  </p>
                </div>

                <Button variant="secondary" size="sm" onClick={addMedicine}>
                  <FontAwesomeIcon icon={faPlus} />
                  Add Medicine
                </Button>
              </div>

              {selectedMeds.length === 0 ? (
                <button
                  onClick={addMedicine}
                  className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center hover:bg-slate-100"
                >
                  <FontAwesomeIcon
                    icon={faPills}
                    className="mb-3 text-xl text-slate-400"
                  />

                  <p className="text-sm font-semibold text-slate-700">
                    No medicines added
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Click to add the first medicine
                  </p>
                </button>
              ) : (
                <div className="space-y-3">
                  {selectedMeds.map((medicine, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#1769aa]">
                            <FontAwesomeIcon icon={faPills} />
                          </div>

                          <span className="text-xs font-bold text-slate-600">
                            Medicine {index + 1}
                          </span>
                        </div>

                        <button
                          onClick={() => removeMedicine(index)}
                          className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        <Select label="Medicine">
                          <option>Select medicine</option>

                          {medicineOptions.map((medicine) => (
                            <option key={medicine}>{medicine}</option>
                          ))}
                        </Select>

                        <Input label="Dosage" placeholder="5 mg" />

                        <Select label="Frequency">
                          <option>Once Daily</option>
                          <option>Twice Daily</option>
                          <option>Three Times Daily</option>
                          <option>As Needed</option>
                          <option>Every 8 Hours</option>
                        </Select>

                        <Input label="Duration" placeholder="30 Days" />
                      </div>

                      <div className="mt-3">
                        <Input
                          label="Instructions"
                          placeholder="Take after breakfast"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Textarea
              label="General Instructions"
              placeholder="Additional instructions for the patient..."
              rows={3}
            />

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setShowForm(false)}>
                Cancel
              </Button>

              <Button variant="outline">
                <FontAwesomeIcon icon={faPrint} />
                Print Preview
              </Button>

              <Button onClick={() => setShowForm(false)}>
                Save Prescription
              </Button>
            </div>
          </Card>
        )}

        {/* Table */}
        <Card className="overflow-hidden">
          <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
            <div className="flex max-w-[360px] flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-xs text-slate-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search patient or medicine..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>

            <span className="ml-auto text-xs text-slate-400">
              {filtered.length} prescriptions
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {[
                    "Patient",
                    "Prescription",
                    "Medicines",
                    "Date",
                    "Doctor",
                    "Status",
                    "Actions",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-5 py-3 text-left text-[11px] font-bold uppercase tracking-wide text-slate-400"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filtered.map((p) => (
                  <tr
                    key={p.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >
                    {/* Patient */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#1B7FC4] to-[#0D9488] text-xs font-bold text-white">
                          {p.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {p.patient}
                          </p>

                          <p className="font-mono text-[11px] text-slate-400">
                            {p.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Prescription */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1769aa]">
                          <FontAwesomeIcon
                            icon={faFilePrescription}
                            className="text-sm"
                          />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-700">
                            Prescription
                          </p>

                          <p className="text-xs text-slate-400">
                            {p.medicines.length} medicine
                            {p.medicines.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Medicine names only */}
                    <td className="px-5 py-4">
                      <div className="max-w-[230px]">
                        <p className="truncate text-sm font-medium text-slate-700">
                          {p.medicines.map((m) => m.name).join(", ")}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-400">
                          View for dosage & instructions
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-500">
                      {p.date}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-500">
                      {p.doctor}
                    </td>

                    <td className="px-5 py-4">
                      <Badge
                        variant={p.status === "Active" ? "success" : "muted"}
                      >
                        {p.status}
                      </Badge>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => openPrescription(p)}
                          className="flex items-center gap-1.5 text-xs font-semibold text-[#1769aa] hover:text-[#12588e]"
                        >
                          <FontAwesomeIcon icon={faEye} />
                          View
                        </button>

                        <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700">
                          <FontAwesomeIcon icon={faPrint} />
                          Print
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* View Prescription Modal */}
      {showView && selectedPrescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Prescription Details
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  {selectedPrescription.id} · {selectedPrescription.date}
                </p>
              </div>

              <button
                onClick={() => setShowView(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="p-6">
              {/* Patient */}
              <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1B7FC4] to-[#0D9488] text-xs font-bold text-white">
                    {selectedPrescription.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      {selectedPrescription.patient}
                    </p>

                    <div className="mt-1 flex gap-4 text-xs text-slate-400">
                      <span>
                        <FontAwesomeIcon icon={faUser} className="mr-1" />
                        {selectedPrescription.id}
                      </span>

                      <span>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="mr-1"
                        />
                        {selectedPrescription.date}
                      </span>
                    </div>
                  </div>

                  <div className="ml-auto">
                    <Badge
                      variant={
                        selectedPrescription.status === "Active"
                          ? "success"
                          : "muted"
                      }
                    >
                      {selectedPrescription.status}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Medicine Details */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800">
                    Medicines & Dosage
                  </h3>

                  <span className="text-xs text-slate-400">
                    {selectedPrescription.medicines.length} items
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedPrescription.medicines.map((medicine, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-slate-200 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1769aa]">
                          <FontAwesomeIcon icon={faPills} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-bold text-slate-800">
                              {medicine.name}
                            </p>

                            <span className="rounded-md bg-blue-50 px-2.5 py-1 font-mono text-xs font-bold text-[#1769aa]">
                              {medicine.dosage}
                            </span>
                          </div>

                          <div className="mt-3 grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-[10px] font-bold uppercase text-slate-400">
                                Frequency
                              </p>

                              <p className="mt-1 text-xs text-slate-700">
                                {medicine.frequency}
                              </p>
                            </div>

                            <div>
                              <p className="text-[10px] font-bold uppercase text-slate-400">
                                Duration
                              </p>

                              <p className="mt-1 text-xs text-slate-700">
                                {medicine.duration}
                              </p>
                            </div>
                          </div>

                          <div className="mt-3 border-t border-slate-100 pt-3">
                            <p className="text-[10px] font-bold uppercase text-slate-400">
                              Instructions
                            </p>

                            <p className="mt-1 text-xs text-slate-600">
                              {medicine.instructions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Instructions */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                  General Instructions
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedPrescription.generalInstructions}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-end gap-3">
                <Button variant="ghost" onClick={() => setShowView(false)}>
                  Close
                </Button>

                <Button variant="outline">
                  <FontAwesomeIcon icon={faPrint} />
                  Print Prescription
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
