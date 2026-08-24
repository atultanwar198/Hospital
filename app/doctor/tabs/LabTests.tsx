import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFlask } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  Badge,
  Button,
  Select,
  Textarea,
  PageHeader,
} from "@/components/ui";

interface Props {
  navigate?: (page: string) => void;
}

const testTypes = [
  {
    category: "Blood Tests",
    tests: [
      "Complete Blood Count (CBC)",
      "Lipid Panel",
      "Blood Glucose",
      "HbA1c",
      "Thyroid Function",
      "Liver Function",
      "Kidney Function",
      "Electrolytes",
    ],
  },
  {
    category: "Cardiac",
    tests: [
      "ECG / EKG",
      "Echocardiogram",
      "Stress Test",
      "Holter Monitor (24hr)",
      "Cardiac Enzyme Panel",
      "BNP / NT-proBNP",
    ],
  },
  {
    category: "Imaging",
    tests: [
      "Chest X-Ray",
      "CT Scan — Chest",
      "MRI — Cardiac",
      "Coronary Angiography",
      "Ultrasound — Cardiac",
    ],
  },
];

const pending = [
  {
    patient: "Sarah Johnson",
    id: "PT-1024",
    test: "Lipid Panel",
    priority: "Normal",
    requested: "20 Aug 2026",
    status: "Pending",
  },
  {
    patient: "Robert Williams",
    id: "PT-1055",
    test: "Echocardiogram",
    priority: "Urgent",
    requested: "20 Aug 2026",
    status: "In Progress",
  },
  {
    patient: "Emily Davis",
    id: "PT-1088",
    test: "CBC",
    priority: "Normal",
    requested: "18 Aug 2026",
    status: "Pending",
  },
  {
    patient: "John Anderson",
    id: "PT-1041",
    test: "Holter Monitor",
    priority: "Normal",
    requested: "15 Aug 2026",
    status: "Completed",
  },
];

export default function LabTests({ navigate }: Props) {
  const [showForm, setShowForm] = useState(false);
  const [priority, setPriority] = useState<"Normal" | "Urgent">("Normal");
  const [selectedTests, setSelectedTests] = useState<string[]>([]);

  function toggleTest(test: string) {
    setSelectedTests((prev) =>
      prev.includes(test)
        ? prev.filter((item) => item !== test)
        : [...prev, test],
    );
  }

  return (
    <div className="p-6 max-w-350 mx-auto">
      <PageHeader
        title="Lab & Tests"
        subtitle="Request and track laboratory tests and imaging"
        action={
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Request Test
          </Button>
        }
      />

      {showForm && (
        <Card className="p-6 mb-6 border-(--primary)">
          <h3
            className="text-base font-semibold mb-5"
            style={{ color: "var(--foreground)" }}
          >
            New Lab / Test Request
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-5">
            <Select label="Patient">
              <option>Sarah Johnson — PT-1024</option>
              <option>John Anderson — PT-1041</option>
              <option>Robert Williams — PT-1055</option>
            </Select>

            <div>
              <p
                className="text-xs font-semibold mb-1.5"
                style={{ color: "var(--muted-foreground)" }}
              >
                Priority
              </p>

              <div className="flex gap-2">
                {["Normal", "Urgent"].map((value) => (
                  <button
                    key={value}
                    onClick={() => setPriority(value as "Normal" | "Urgent")}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold"
                    style={{
                      background:
                        priority === value
                          ? value === "Urgent"
                            ? "#DC2626"
                            : "var(--primary)"
                          : "var(--background)",
                      color:
                        priority === value
                          ? "white"
                          : "var(--muted-foreground)",
                      border: `1px solid ${
                        priority === value
                          ? value === "Urgent"
                            ? "#DC2626"
                            : "var(--primary)"
                          : "var(--border)"
                      }`,
                    }}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p
            className="text-xs font-semibold mb-3"
            style={{ color: "var(--muted-foreground)" }}
          >
            Select Tests
          </p>

          <div className="grid grid-cols-3 gap-5 mb-5">
            {testTypes.map((category) => (
              <div key={category.category}>
                <p
                  className="text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {category.category}
                </p>

                <div className="space-y-1.5">
                  {category.tests.map((test) => (
                    <label
                      key={test}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTests.includes(test)}
                        onChange={() => toggleTest(test)}
                        className="rounded"
                        style={{
                          accentColor: "var(--primary)",
                        }}
                      />

                      <span
                        className="text-sm"
                        style={{ color: "var(--foreground)" }}
                      >
                        {test}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedTests.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedTests.map((test) => (
                <span
                  key={test}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "var(--secondary)",
                    color: "var(--primary)",
                  }}
                >
                  {test}
                </span>
              ))}
            </div>
          )}

          <div className="mb-4">
            <Textarea
              label="Clinical Reason"
              placeholder="Clinical justification for the requested tests..."
              rows={3}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>

            <Button variant="primary">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Request Test
            </Button>
          </div>
        </Card>
      )}

      {/* Test Requests */}
      <Card className="overflow-hidden">
        <div
          className="px-5 py-4"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <h3
            className="text-sm font-semibold"
            style={{ color: "var(--foreground)" }}
          >
            Test Requests
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  background: "var(--background)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {[
                  "Patient",
                  "Test",
                  "Priority",
                  "Requested",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wide"
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
              {pending.map((request, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.background = "var(--background)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.background = "transparent";
                  }}
                >
                  <td className="px-5 py-3.5">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--foreground)" }}
                    >
                      {request.patient}
                    </p>

                    <p
                      className="font-mono text-xs"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {request.id}
                    </p>
                  </td>

                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faFlask}
                        className="text-xs"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                      />

                      <span
                        style={{
                          color: "var(--foreground)",
                        }}
                      >
                        {request.test}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-3.5">
                    <Badge
                      variant={
                        request.priority === "Urgent" ? "danger" : "muted"
                      }
                    >
                      {request.priority}
                    </Badge>
                  </td>

                  <td
                    className="px-5 py-3.5 text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {request.requested}
                  </td>

                  <td className="px-5 py-3.5">
                    <Badge
                      variant={
                        request.status === "Completed"
                          ? "success"
                          : request.status === "In Progress"
                            ? "info"
                            : "warning"
                      }
                    >
                      {request.status}
                    </Badge>
                  </td>

                  <td className="px-5 py-3.5">
                    <div className="flex gap-3">
                      <button
                        className="text-xs font-semibold"
                        style={{ color: "var(--primary)" }}
                        onClick={() => navigate?.("lab-results")}
                      >
                        Results
                      </button>

                      <button
                        className="text-xs font-semibold"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                      >
                        Cancel
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
  );
}
