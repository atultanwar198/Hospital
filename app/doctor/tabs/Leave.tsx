"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faCalendarDays,
  faFileArrowUp,
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

interface Props {
  navigate: (page: string) => void;
}

const leaveData = [
  {
    type: "Annual Leave",
    total: 20,
    used: 8,
    pending: 2,
    available: 10,
  },
  {
    type: "Sick Leave",
    total: 10,
    used: 2,
    pending: 0,
    available: 8,
  },
  {
    type: "Conference / CME",
    total: 5,
    used: 1,
    pending: 1,
    available: 3,
  },
];

const requests = [
  {
    type: "Annual Leave",
    start: "25 Aug 2026",
    end: "28 Aug 2026",
    days: 4,
    reason: "Family vacation",
    status: "Pending",
  },
  {
    type: "Conference / CME",
    start: "15 Sep 2026",
    end: "17 Sep 2026",
    days: 3,
    reason: "Cardiology Conference 2026",
    status: "Approved",
  },
  {
    type: "Sick Leave",
    start: "05 Aug 2026",
    end: "06 Aug 2026",
    days: 2,
    reason: "Medical illness",
    status: "Approved",
  },
  {
    type: "Annual Leave",
    start: "01 Jul 2026",
    end: "05 Jul 2026",
    days: 5,
    reason: "Personal leave",
    status: "Approved",
  },
  {
    type: "Annual Leave",
    start: "10 Jun 2026",
    end: "11 Jun 2026",
    days: 2,
    reason: "Personal",
    status: "Rejected",
  },
];

export default function LeaveManagement({ navigate }: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Page Header */}
      <PageHeader
        title="Leave Management"
        subtitle="Track and request medical leave"
        action={
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            <FontAwesomeIcon icon={faPlus} />
            Request Leave
          </Button>
        }
      />

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {leaveData.map((leave) => (
          <Card key={leave.type} className="p-5">
            <p
              className="text-sm font-semibold mb-3"
              style={{
                color: "var(--foreground)",
              }}
            >
              {leave.type}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-3">
              {[
                {
                  label: "Total",
                  value: leave.total,
                  color: "var(--primary)",
                },
                {
                  label: "Used",
                  value: leave.used,
                  color: "#D97706",
                },
                {
                  label: "Available",
                  value: leave.available,
                  color: "#15803D",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center rounded-lg p-2"
                  style={{
                    background: "var(--background)",
                  }}
                >
                  <p
                    className="text-lg font-bold"
                    style={{
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </p>

                  <p
                    className="text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{
                background: "var(--border)",
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(leave.used / leave.total) * 100}%`,
                  background: "#D97706",
                }}
              />
            </div>

            <p
              className="text-xs mt-1.5"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              {leave.used} of {leave.total} days used
            </p>
          </Card>
        ))}
      </div>

      {/* Request Form */}
      {showForm && (
        <Card
          className="p-6 mb-6"
          style={{
            border: "1px solid var(--primary)",
          }}
        >
          {/* Form Header */}
          <div className="flex items-center justify-between mb-5">
            <h3
              className="text-base font-semibold"
              style={{
                color: "var(--foreground)",
              }}
            >
              Request Leave
            </h3>

            <button
              onClick={() => setShowForm(false)}
              className="p-1 rounded hover:bg-slate-100"
              type="button"
              aria-label="Close"
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  color: "var(--muted-foreground)",
                }}
              />
            </button>
          </div>

          {/* Leave Type / Dates */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Select label="Leave Type">
              <option>Annual Leave</option>
              <option>Sick Leave</option>
              <option>Conference / CME</option>
              <option>Emergency Leave</option>
              <option>Maternity / Paternity Leave</option>
            </Select>

            <div />

            <Input label="Start Date" type="date" />

            <Input label="End Date" type="date" />
          </div>

          {/* Reason */}
          <div className="mb-4">
            <Textarea
              label="Reason"
              placeholder="Describe the reason for your leave request..."
              rows={3}
            />
          </div>

          {/* Supporting Document */}
          <div className="mb-5">
            <label
              className="block text-xs font-semibold mb-1.5"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              Supporting Document (optional)
            </label>

            <div
              className="rounded-lg px-4 py-6 text-center cursor-pointer hover:bg-slate-50 transition-colors"
              style={{
                border: "2px dashed var(--border)",
                background: "var(--background)",
              }}
            >
              <FontAwesomeIcon
                icon={faFileArrowUp}
                className="mb-2"
                style={{
                  fontSize: 24,
                  color: "var(--muted-foreground)",
                }}
              />

              <p
                className="text-sm"
                style={{
                  color: "var(--muted-foreground)",
                }}
              >
                Click to upload or drag and drop
              </p>

              <p
                className="text-xs mt-1"
                style={{
                  color: "var(--muted-foreground)",
                }}
              >
                PDF, PNG, JPG up to 10MB
              </p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 justify-end">
            <Button variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>

            <Button variant="primary">Submit Request</Button>
          </div>
        </Card>
      )}

      {/* Leave History */}
      <Card className="overflow-hidden">
        <div
          className="px-5 py-4"
          style={{
            borderBottom: "1px solid var(--border)",
          }}
        >
          <h3
            className="text-sm font-semibold"
            style={{
              color: "var(--foreground)",
            }}
          >
            Leave Requests
          </h3>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr
              style={{
                background: "var(--background)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {[
                "Leave Type",
                "Start Date",
                "End Date",
                "Days",
                "Reason",
                "Status",
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
            {requests.map((request, index) => (
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
                {/* Leave Type */}
                <td
                  className="px-5 py-3.5 font-semibold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {request.type}
                </td>

                {/* Start */}
                <td
                  className="px-5 py-3.5 text-xs"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  {request.start}
                </td>

                {/* End */}
                <td
                  className="px-5 py-3.5 text-xs"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  {request.end}
                </td>

                {/* Days */}
                <td
                  className="px-5 py-3.5 font-mono font-bold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {request.days}
                </td>

                {/* Reason */}
                <td
                  className="px-5 py-3.5 text-xs"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  {request.reason}
                </td>

                {/* Status */}
                <td className="px-5 py-3.5">
                  <Badge
                    variant={
                      request.status === "Approved"
                        ? "success"
                        : request.status === "Pending"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {request.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
