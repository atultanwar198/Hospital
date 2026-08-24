"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFlask,
  faRotate,
  faBuilding,
  faCheck,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

import { Card, Button } from "@/components/ui";

interface Props {
  navigate: (page: string) => void;
}

const notifications = [
  {
    id: 1,
    category: "appointment",
    title: "Upcoming Appointment",
    message: "Sarah Johnson has an appointment at 10:30 AM.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    category: "lab",
    title: "Lab Report Available",
    message: "New ECG report available for review — Robert Williams.",
    time: "35 minutes ago",
    read: false,
  },
  {
    id: 3,
    category: "followup",
    title: "Follow-up Reminder",
    message: "7 patients require follow-up. 2 are overdue.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 4,
    category: "hospital",
    title: "Hospital Announcement",
    message: "Staff meeting scheduled for 4:00 PM today in Conference Room B.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 5,
    category: "lab",
    title: "Critical Lab Result",
    message:
      "Lipid panel for James Wilson shows positive inducible ischemia — requires urgent review.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 6,
    category: "appointment",
    title: "Appointment Cancelled",
    message: "David Lee has cancelled his 11:30 AM appointment.",
    time: "4 hours ago",
    read: true,
  },
  {
    id: 7,
    category: "hospital",
    title: "System Update",
    message:
      "The hospital management system will undergo maintenance from 11 PM–1 AM tonight.",
    time: "6 hours ago",
    read: true,
  },
  {
    id: 8,
    category: "followup",
    title: "Follow-up Overdue",
    message: "Robert Williams' follow-up is 2 days overdue.",
    time: "Yesterday",
    read: true,
  },
];

const categories = ["All", "Appointment", "Lab", "Follow-up", "Hospital"];

const categoryConfig = {
  appointment: {
    icon: faCalendar,
    color: "#1666A8",
  },
  lab: {
    icon: faFlask,
    color: "#D97706",
  },
  followup: {
    icon: faRotate,
    color: "#7C3AED",
  },
  hospital: {
    icon: faBuilding,
    color: "#0D9488",
  },
};

export default function Notifications({ navigate }: Props) {
  const [filter, setFilter] = useState("All");
  const [list, setList] = useState(notifications);

  const filtered = list.filter((notification) => {
    if (filter === "All") {
      return true;
    }

    return notification.category === filter.toLowerCase().replace("-", "");
  });

  const unread = list.filter((notification) => !notification.read).length;

  function markAll() {
    setList((currentList) =>
      currentList.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  }

  function markRead(id: number) {
    setList((currentList) =>
      currentList.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification,
      ),
    );
  }

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1
            className="text-xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Notifications
          </h1>

          <p
            className="text-sm mt-0.5"
            style={{ color: "var(--muted-foreground)" }}
          >
            {unread > 0 ? `${unread} unread notifications` : "All caught up!"}
          </p>
        </div>

        {unread > 0 && (
          <Button variant="ghost" onClick={markAll}>
            <FontAwesomeIcon icon={faCheck} className="mr-2" />
            Mark all as read
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 mb-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={{
              background:
                filter === category ? "var(--primary)" : "var(--card)",

              color: filter === category ? "white" : "var(--muted-foreground)",

              border: `1px solid ${
                filter === category ? "var(--primary)" : "var(--border)"
              }`,
            }}
          >
            {category}

            {category === "All" && unread > 0 && (
              <span
                className="ml-2 px-1.5 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background:
                    filter === "All" ? "rgba(255,255,255,0.3)" : "#DC2626",
                  color: "white",
                  fontSize: 10,
                }}
              >
                {unread}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filtered.map((notification) => {
          const config =
            categoryConfig[
              notification.category as keyof typeof categoryConfig
            ];

          return (
            <Card
              key={notification.id}
              className="p-4"
              style={{
                borderLeft: notification.read
                  ? "1px solid var(--border)"
                  : `3px solid ${config.color}`,

                background: notification.read
                  ? "var(--card)"
                  : `${config.color}06`,
              }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    width: 40,
                    height: 40,
                    background: `${config.color}15`,
                  }}
                >
                  <FontAwesomeIcon
                    icon={config.icon}
                    style={{
                      color: config.color,
                      fontSize: 18,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {/* Title */}
                      <div className="flex items-center gap-2 mb-0.5">
                        <p
                          className="text-sm font-semibold"
                          style={{
                            color: "var(--foreground)",
                          }}
                        >
                          {notification.title}
                        </p>

                        {!notification.read && (
                          <div
                            className="rounded-full"
                            style={{
                              width: 7,
                              height: 7,
                              background: config.color,
                            }}
                          />
                        )}
                      </div>

                      {/* Message */}
                      <p
                        className="text-sm"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {notification.message}
                      </p>
                    </div>

                    {/* Time + Read */}
                    <div className="flex items-center gap-2 shrink-0">
                      <p
                        className="text-xs"
                        style={{
                          color: "var(--muted-foreground)",
                        }}
                      >
                        {notification.time}
                      </p>

                      {!notification.read && (
                        <button
                          onClick={() => markRead(notification.id)}
                          className="p-1 rounded hover:bg-slate-100 transition-colors"
                          title="Mark as read"
                          style={{
                            color: "var(--muted-foreground)",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{
                              fontSize: 13,
                            }}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Lab Action */}
                  {notification.category === "lab" && (
                    <button
                      className="mt-2 text-xs font-semibold"
                      style={{
                        color: config.color,
                      }}
                      onClick={() => navigate("lab-results")}
                    >
                      View Report →
                    </button>
                  )}

                  {/* Appointment Action */}
                  {notification.category === "appointment" && (
                    <button
                      className="mt-2 text-xs font-semibold"
                      style={{
                        color: config.color,
                      }}
                      onClick={() => navigate("schedule")}
                    >
                      View Schedule →
                    </button>
                  )}

                  {/* Follow-up Action */}
                  {notification.category === "followup" && (
                    <button
                      className="mt-2 text-xs font-semibold"
                      style={{
                        color: config.color,
                      }}
                      onClick={() => navigate("followups")}
                    >
                      View Follow-ups →
                    </button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}

        {/* Empty State */}
        {filtered.length === 0 && (
          <Card className="p-10 flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faBell}
              style={{
                color: "var(--muted-foreground)",
                fontSize: 36,
                marginBottom: 12,
                opacity: 0.4,
              }}
            />

            <p
              className="text-base font-semibold"
              style={{
                color: "var(--foreground)",
              }}
            >
              No notifications
            </p>

            <p
              className="text-sm mt-1"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              You're all caught up in this category!
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
