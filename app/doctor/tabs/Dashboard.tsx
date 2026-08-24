"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCheckCircle,
  faClock,
  faXmarkCircle,
  faUsers,
  faFileLines,
  faRotate,
  faPlus,
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Card, Badge, Button } from "@/components/ui";

const schedule = [
  {
    time: "09:00 AM",
    patient: "John Anderson",
    type: "Follow-up Consultation",
    dept: "Cardiology",
    room: "Room 204",
    status: "completed",
  },
  {
    time: "10:30 AM",
    patient: "Sarah Johnson",
    type: "Cardiology Consultation",
    dept: "Cardiology",
    room: "Room 204",
    status: "in-progress",
  },
  {
    time: "11:00 AM",
    patient: "Robert Williams",
    type: "ECG Review",
    dept: "Cardiology",
    room: "Room 204",
    status: "upcoming",
  },
  {
    time: "12:00 PM",
    patient: "Lunch Break",
    type: "",
    dept: "",
    room: "",
    status: "break",
  },
  {
    time: "02:00 PM",
    patient: "Emily Davis",
    type: "New Patient Consultation",
    dept: "Cardiology",
    room: "Room 204",
    status: "upcoming",
  },
  {
    time: "03:30 PM",
    patient: "Michael Brown",
    type: "Follow-up",
    dept: "Cardiology",
    room: "Room 204",
    status: "upcoming",
  },
];

const patients = [
  {
    name: "Sarah Johnson",
    id: "PT-1024",
    age: 34,
    gender: "Female",
    lastVisit: "20 Aug 2026",
    diagnosis: "Hypertension",
    nextAppt: "24 Aug 2026",
    status: "Active",
  },
  {
    name: "John Anderson",
    id: "PT-1041",
    age: 47,
    gender: "Male",
    lastVisit: "18 Aug 2026",
    diagnosis: "Arrhythmia",
    nextAppt: "28 Aug 2026",
    status: "Active",
  },
  {
    name: "Emily Davis",
    id: "PT-1088",
    age: 29,
    gender: "Female",
    lastVisit: "15 Aug 2026",
    diagnosis: "Migraine",
    nextAppt: "30 Aug 2026",
    status: "Active",
  },
  {
    name: "Robert Williams",
    id: "PT-1055",
    age: 62,
    gender: "Male",
    lastVisit: "12 Aug 2026",
    diagnosis: "Heart Failure",
    nextAppt: "24 Aug 2026",
    status: "Critical",
  },
];

const dashboardCards = [
  {
    label: "Today's Appointments",
    value: 12,
    icon: faCalendar,
    color: "#1666A8",
    details: [
      { dot: "#15803D", text: "8 Completed" },
      { dot: "#D97706", text: "3 Upcoming" },
      { dot: "#DC2626", text: "1 Cancelled" },
    ],
    action: {
      label: "View Schedule",
      page: "schedule",
    },
  },
  {
    label: "Active Patients",
    value: 86,
    icon: faUsers,
    color: "#0D9488",
    details: [
      {
        dot: "#0D9488",
        text: "Total active patients",
      },
    ],
    action: {
      label: "View Patients",
      page: "patients",
    },
  },
  {
    label: "Pending Reports",
    value: 5,
    icon: faFileLines,
    color: "#D97706",
    details: [
      {
        dot: "#D97706",
        text: "Awaiting your review",
      },
    ],
    action: {
      label: "Review Reports",
      page: "lab-results",
    },
  },
  {
    label: "Follow-ups",
    value: 7,
    icon: faRotate,
    color: "#7C3AED",
    details: [
      {
        dot: "#7C3AED",
        text: "Patients requiring follow-up",
      },
    ],
    action: {
      label: "View Follow-ups",
      page: "followups",
    },
  },
];

function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case "completed":
      return <Badge variant="success">Completed</Badge>;

    case "in-progress":
      return <Badge variant="primary">In Progress</Badge>;

    case "upcoming":
      return <Badge variant="muted">Upcoming</Badge>;

    case "cancelled":
      return <Badge variant="danger">Cancelled</Badge>;

    case "break":
      return <Badge variant="warning">Break</Badge>;

    case "Active":
      return <Badge variant="success">Active</Badge>;

    case "Critical":
      return <Badge variant="danger">Critical</Badge>;

    default:
      return <Badge variant="muted">{status}</Badge>;
  }
}

export default function Dashboard({
  navigate,
}: {
  navigate: (page: string) => void;
}) {
  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-7">
        <div>
          <h1
            className="text-2xl font-bold mb-1"
            style={{ color: "var(--foreground)" }}
          >
            Good Morning, Dr. Smith 👋
          </h1>

          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Here's your clinical schedule and patient activity for today.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p
              className="text-xs font-semibold mb-0.5"
              style={{ color: "var(--muted-foreground)" }}
            >
              TODAY
            </p>

            <p
              className="text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Monday, 24 August 2026
            </p>
          </div>

          <Button variant="primary" onClick={() => navigate("appointments")}>
            <FontAwesomeIcon icon={faPlus} />
            Add Appointment
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-7">
        {dashboardCards.map((card) => (
          <Card key={card.label} className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div
                className="rounded-lg flex items-center justify-center"
                style={{
                  width: 42,
                  height: 42,
                  background: `${card.color}15`,
                }}
              >
                <FontAwesomeIcon
                  icon={card.icon}
                  style={{
                    color: card.color,
                    fontSize: 20,
                  }}
                />
              </div>

              <span
                className="text-3xl font-bold"
                style={{ color: "var(--foreground)" }}
              >
                {card.value}
              </span>
            </div>

            <p
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              {card.label}
            </p>

            <div className="space-y-1 mb-4">
              {card.details.map((detail) => (
                <div key={detail.text} className="flex items-center gap-2">
                  <div
                    className="rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      background: detail.dot,
                    }}
                  />

                  <span
                    className="text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {detail.text}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate(card.action.page)}
              className="flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: card.color }}
            >
              {card.action.label}

              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 11 }} />
            </button>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "1fr 340px",
        }}
      >
        {/* Today's Schedule */}
        <div>
          <Card className="overflow-hidden">
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <h2
                  className="text-base font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  Today's Schedule
                </h2>

                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  Monday, 24 August 2026
                </p>
              </div>

              <button
                onClick={() => navigate("calendar")}
                className="flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: "var(--primary)" }}
              >
                View Full Calendar
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ fontSize: 11 }}
                />
              </button>
            </div>

            <div>
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-5 py-3.5"
                  style={{
                    borderBottom: "1px solid var(--border)",

                    background:
                      item.status === "in-progress" ? "#EFF6FF" : "transparent",
                  }}
                >
                  {/* Time */}
                  <div className="text-right shrink-0" style={{ width: 68 }}>
                    <p
                      className="font-mono text-xs font-semibold"
                      style={{
                        color:
                          item.status === "in-progress"
                            ? "var(--primary)"
                            : "var(--muted-foreground)",
                      }}
                    >
                      {item.time}
                    </p>
                  </div>

                  {/* Status Dot */}
                  <div
                    className="rounded-full shrink-0"
                    style={{
                      width: 10,
                      height: 10,
                      background:
                        item.status === "completed"
                          ? "#15803D"
                          : item.status === "in-progress"
                            ? "#1666A8"
                            : item.status === "break"
                              ? "#D97706"
                              : item.status === "cancelled"
                                ? "#DC2626"
                                : "#CBD5E1",
                    }}
                  />

                  {/* Patient */}
                  <div className="flex-1 min-w-0">
                    {item.status === "break" ? (
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "#D97706" }}
                      >
                        🍽 Lunch Break
                      </p>
                    ) : (
                      <>
                        <p
                          className="text-sm font-semibold leading-tight"
                          style={{
                            color: "var(--foreground)",
                          }}
                        >
                          {item.patient}
                        </p>

                        <p
                          className="text-xs mt-0.5"
                          style={{
                            color: "var(--muted-foreground)",
                          }}
                        >
                          {item.type} · {item.room}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Badge */}
                  {item.status !== "break" && (
                    <StatusBadge status={item.status} />
                  )}

                  {/* Start */}
                  {item.status === "upcoming" && (
                    <button
                      onClick={() => navigate("consultation")}
                      className="text-xs font-semibold shrink-0"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      Start
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Next Patient */}
          <Card
            className="p-5"
            style={{
              borderLeft: "4px solid var(--primary)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{
                  color: "var(--primary)",
                }}
              >
                Next Patient
              </p>

              <FontAwesomeIcon
                icon={faClock}
                style={{
                  color: "var(--muted-foreground)",
                  fontSize: 14,
                }}
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  background: "linear-gradient(135deg, #1B7FC4, #0D9488)",
                }}
              >
                SJ
              </div>

              <div>
                <p
                  className="text-base font-bold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  Sarah Johnson
                </p>

                <p
                  className="text-xs"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  Age: 34 · Female
                </p>
              </div>
            </div>

            <div
              className="rounded-lg p-3 mb-4 space-y-2"
              style={{
                background: "var(--background)",
              }}
            >
              {[
                ["Appointment", "10:30 AM"],
                ["Type", "Follow-up Consultation"],
                ["Last Visit", "10 August 2026"],
                ["Reason", "Blood pressure follow-up"],
              ].map(([key, value]) => (
                <div key={key} className="flex items-start gap-2">
                  <span
                    className="text-xs w-20 shrink-0"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {key}
                  </span>

                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate("consultation")}
              >
                Start Consultation
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("patient-profile")}
              >
                View Patient Profile
              </Button>
            </div>
          </Card>

          {/* Today's Summary */}
          <Card className="p-5">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-4"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              Today's Summary
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: faCheckCircle,
                  label: "Completed",
                  value: 8,
                  color: "#15803D",
                },
                {
                  icon: faClock,
                  label: "In Progress",
                  value: 1,
                  color: "#1666A8",
                },
                {
                  icon: faCalendar,
                  label: "Upcoming",
                  value: 3,
                  color: "#D97706",
                },
                {
                  icon: faXmarkCircle,
                  label: "Cancelled",
                  value: 1,
                  color: "#DC2626",
                },
              ].map((summary) => (
                <div key={summary.label} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={summary.icon}
                    style={{
                      color: summary.color,
                      fontSize: 15,
                    }}
                  />

                  <span
                    className="flex-1 text-sm"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {summary.label}
                  </span>

                  <span
                    className="font-mono text-sm font-bold"
                    style={{
                      color: summary.color,
                    }}
                  >
                    {summary.value}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Patient List */}
      <div className="mt-5">
        <Card className="overflow-hidden">
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div>
              <h2
                className="text-base font-semibold"
                style={{
                  color: "var(--foreground)",
                }}
              >
                My Patients
              </h2>

              <p
                className="text-xs mt-0.5"
                style={{
                  color: "var(--muted-foreground)",
                }}
              >
                Recent patient activity
              </p>
            </div>

            <button
              onClick={() => navigate("patients")}
              className="flex items-center gap-1.5 text-xs font-semibold"
              style={{
                color: "var(--primary)",
              }}
            >
              View All Patients
              <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: 11 }} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid var(--border)",
                    background: "var(--background)",
                  }}
                >
                  {[
                    "Patient",
                    "Patient ID",
                    "Age",
                    "Gender",
                    "Last Visit",
                    "Diagnosis",
                    "Next Appointment",
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
                {patients.map((patient, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {/* Patient */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{
                            width: 32,
                            height: 32,
                            background:
                              "linear-gradient(135deg, #1B7FC4, #0D9488)",
                          }}
                        >
                          {patient.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <span
                          className="font-semibold"
                          style={{
                            color: "var(--foreground)",
                          }}
                        >
                          {patient.name}
                        </span>
                      </div>
                    </td>

                    {/* ID */}
                    <td
                      className="px-5 py-3.5 font-mono text-xs"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {patient.id}
                    </td>

                    {/* Age */}
                    <td
                      className="px-5 py-3.5"
                      style={{
                        color: "var(--foreground)",
                      }}
                    >
                      {patient.age}
                    </td>

                    {/* Gender */}
                    <td
                      className="px-5 py-3.5"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {patient.gender}
                    </td>

                    {/* Last Visit */}
                    <td
                      className="px-5 py-3.5 text-xs"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {patient.lastVisit}
                    </td>

                    {/* Diagnosis */}
                    <td className="px-5 py-3.5">
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: "var(--foreground)",
                        }}
                      >
                        {patient.diagnosis}
                      </span>
                    </td>

                    {/* Next Appointment */}
                    <td
                      className="px-5 py-3.5 text-xs"
                      style={{
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {patient.nextAppt}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-3.5">
                      <StatusBadge status={patient.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => navigate("patient-profile")}
                          className="text-xs font-semibold"
                          style={{
                            color: "var(--primary)",
                          }}
                        >
                          View
                        </button>

                        <button
                          onClick={() => navigate("medical-records")}
                          className="text-xs font-semibold"
                          style={{
                            color: "var(--muted-foreground)",
                          }}
                        >
                          Records
                        </button>

                        <button
                          onClick={() => navigate("consultation")}
                          className="text-xs font-semibold"
                          style={{
                            color: "#0D9488",
                          }}
                        >
                          Consult
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
    </div>
  );
}
