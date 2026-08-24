import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import { Card, Button, PageHeader } from "@/components/ui";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const weeklyAppts = [
  { day: "Mon", appointments: 12, completed: 10 },
  { day: "Tue", appointments: 9, completed: 8 },
  { day: "Wed", appointments: 14, completed: 11 },
  { day: "Thu", appointments: 11, completed: 9 },
  { day: "Fri", appointments: 8, completed: 7 },
  { day: "Sat", appointments: 5, completed: 5 },
];

const monthlyVisits = [
  { month: "Mar", visits: 58 },
  { month: "Apr", visits: 72 },
  { month: "May", visits: 65 },
  { month: "Jun", visits: 80 },
  { month: "Jul", visits: 74 },
  { month: "Aug", visits: 86 },
];

const diagnosisData = [
  { name: "Hypertension", value: 32, color: "#1666A8" },
  { name: "Arrhythmia", value: 21, color: "#0D9488" },
  { name: "Heart Failure", value: 18, color: "#7C3AED" },
  { name: "CAD", value: 15, color: "#D97706" },
  { name: "Other", value: 14, color: "#94A3B8" },
];

const stats = [
  {
    label: "Total Patients",
    value: 86,
    change: "+12%",
    up: true,
  },
  {
    label: "Total Appointments",
    value: 342,
    change: "+8%",
    up: true,
  },
  {
    label: "Completed Consultations",
    value: 298,
    change: "+5%",
    up: true,
  },
  {
    label: "Cancelled Appointments",
    value: 18,
    change: "-3%",
    up: false,
  },
  {
    label: "Follow-ups",
    value: 44,
    change: "+15%",
    up: true,
  },
  {
    label: "Prescriptions",
    value: 167,
    change: "+9%",
    up: true,
  },
  {
    label: "Lab Requests",
    value: 89,
    change: "+11%",
    up: true,
  },
];

export default function Reports() {
  return (
    <div className="p-6 max-w-350 mx-auto">
      <PageHeader
        title="Reports & Analytics"
        subtitle="Clinical performance metrics and statistics"
        action={
          <Button variant="ghost">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Export Report
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.slice(0, 4).map((stat) => (
          <Card key={stat.label} className="p-5">
            <p
              className="text-xs font-semibold mb-2"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              {stat.label}
            </p>

            <p
              className="text-2xl font-bold mb-1"
              style={{
                color: "var(--foreground)",
              }}
            >
              {stat.value}
            </p>

            <p
              className="text-xs font-semibold"
              style={{
                color: stat.up ? "#15803D" : "#DC2626",
              }}
            >
              {stat.change} vs last month
            </p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div
        className="grid gap-5 mb-5"
        style={{
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Weekly Appointments */}
        <Card className="p-5">
          <h3
            className="text-sm font-semibold mb-5"
            style={{
              color: "var(--foreground)",
            }}
          >
            Weekly Appointments
          </h3>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyAppts} barGap={4}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                vertical={false}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fontSize: 11,
                  fill: "var(--muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 11,
                  fill: "var(--muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                cursor={{
                  fill: "var(--background)",
                }}
              />

              <Bar
                dataKey="appointments"
                fill="#1666A8"
                radius={[4, 4, 0, 0]}
                name="Appointments"
              />

              <Bar
                dataKey="completed"
                fill="#0D9488"
                radius={[4, 4, 0, 0]}
                name="Completed"
              />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex gap-4 mt-3 justify-center">
            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded"
                style={{
                  background: "#1666A8",
                }}
              />

              <span
                className="text-xs"
                style={{
                  color: "var(--muted-foreground)",
                }}
              >
                Appointments
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded"
                style={{
                  background: "#0D9488",
                }}
              />

              <span
                className="text-xs"
                style={{
                  color: "var(--muted-foreground)",
                }}
              >
                Completed
              </span>
            </div>
          </div>
        </Card>

        {/* Monthly Patient Visits */}
        <Card className="p-5">
          <h3
            className="text-sm font-semibold mb-5"
            style={{
              color: "var(--foreground)",
            }}
          >
            Monthly Patient Visits
          </h3>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyVisits}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                vertical={false}
              />

              <XAxis
                dataKey="month"
                tick={{
                  fontSize: 11,
                  fill: "var(--muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={{
                  fontSize: 11,
                  fill: "var(--muted-foreground)",
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />

              <Line
                type="monotone"
                dataKey="visits"
                stroke="#1666A8"
                strokeWidth={2.5}
                dot={{
                  fill: "#1666A8",
                  r: 4,
                }}
                name="Patient Visits"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Performance + Diagnoses */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "1fr 320px",
        }}
      >
        {/* Performance Summary */}
        <Card className="p-5">
          <h3
            className="text-sm font-semibold mb-5"
            style={{
              color: "var(--foreground)",
            }}
          >
            Performance Summary
          </h3>

          <div className="space-y-4">
            {[
              {
                label: "Appointment Completion Rate",
                value: 87,
                color: "#1666A8",
              },
              {
                label: "Patient Satisfaction Score",
                value: 94,
                color: "#0D9488",
              },
              {
                label: "Average Consultation Duration",
                value: 68,
                unit: "22 min avg",
                color: "#7C3AED",
              },
              {
                label: "Follow-up Compliance",
                value: 78,
                color: "#D97706",
              },
              {
                label: "Prescription Accuracy Rate",
                value: 99,
                color: "#15803D",
              },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {metric.label}
                  </span>

                  <span
                    className="text-sm font-bold"
                    style={{
                      color: metric.color,
                    }}
                  >
                    {metric.unit || `${metric.value}%`}
                  </span>
                </div>

                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{
                    background: "var(--border)",
                  }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${metric.value}%`,
                      background: metric.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {stats.slice(4).map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-3"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs mb-1"
                  style={{
                    color: "var(--muted-foreground)",
                  }}
                >
                  {stat.label}
                </p>

                <p
                  className="text-xl font-bold"
                  style={{
                    color: "var(--foreground)",
                  }}
                >
                  {stat.value}
                </p>

                <p
                  className="text-xs font-semibold mt-0.5"
                  style={{
                    color: stat.up ? "#15803D" : "#DC2626",
                  }}
                >
                  {stat.change}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Common Diagnoses */}
        <Card className="p-5">
          <h3
            className="text-sm font-semibold mb-5"
            style={{
              color: "var(--foreground)",
            }}
          >
            Common Diagnoses
          </h3>

          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={diagnosisData}
                cx="50%"
                cy="50%"
                outerRadius={75}
                innerRadius={40}
                dataKey="value"
                paddingAngle={2}
              >
                {diagnosisData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="space-y-2 mt-2">
            {diagnosisData.map((diagnosis) => (
              <div
                key={diagnosis.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full"
                    style={{
                      width: 8,
                      height: 8,
                      background: diagnosis.color,
                    }}
                  />

                  <span
                    className="text-xs"
                    style={{
                      color: "var(--foreground)",
                    }}
                  >
                    {diagnosis.name}
                  </span>
                </div>

                <span
                  className="font-mono text-xs font-bold"
                  style={{
                    color: diagnosis.color,
                  }}
                >
                  {diagnosis.value}%
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
