"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faClock,
  faCalendarDay,
  faCircleCheck,
  faCirclePlay,
  faCircleExclamation,
  faUtensils,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import { appointments } from "@/backend/Data";

const statusStyle = {
  completed: {
    color: "text-green-700",
    bg: "bg-green-50",
    icon: faCircleCheck,
    label: "Completed",
  },
  "in-progress": {
    color: "text-blue-700",
    bg: "bg-blue-50",
    icon: faCirclePlay,
    label: "In progress",
  },
  upcoming: {
    color: "text-orange-600",
    bg: "bg-orange-50",
    icon: faCircleExclamation,
    label: "Upcoming",
  },
};

function getTime(time) {
  const [value, period] = time.split(" ");
  let [hours, minutes] = value.split(":").map(Number);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 7, 24));

  const sortedAppointments = [...appointments].sort(
    (a, b) => getTime(a.time) - getTime(b.time),
  );

  const completed = appointments.filter(
    (item) => item.status === "completed",
  ).length;

  const inProgress = appointments.filter(
    (item) => item.status === "in-progress",
  ).length;

  const upcoming = appointments.filter((item) => item.status === "upcoming");

  const total = appointments.filter((item) => item.status !== "break").length;

  function changeDate(days) {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  }

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function startAppointment(patient) {
    console.log("Starting appointment:", patient);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="text-blue-600"
                  />
                </div>

                <h1 className="text-xl font-bold">Today's Schedule</h1>
              </div>

              <p className="mt-1 text-sm text-slate-500">
                {formattedDate} · Room 204 · Cardiology
              </p>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              <FontAwesomeIcon icon={faPlus} className="text-xs" />
              New appointment
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        {/* Stats */}
        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Appointments</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">{total}</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {completed}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">In progress</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">
              {inProgress}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Upcoming</p>
            <p className="mt-1 text-2xl font-bold text-orange-600">
              {upcoming.length}
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Schedule */}
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
            {/* Date navigation */}
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <button
                onClick={() => changeDate(-1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <h2 className="text-sm font-semibold">{formattedDate}</h2>

              <button
                onClick={() => changeDate(1)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Appointments */}
            {sortedAppointments.map((appointment, index) => {
              // Available slot
              if (appointment.type === "Available") {
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 border-b border-slate-100 px-5 py-4 hover:bg-slate-50"
                  >
                    <span className="w-16 shrink-0 font-mono text-xs text-slate-400">
                      {appointment.time}
                    </span>

                    <div className="flex flex-1 items-center gap-2">
                      <div className="flex-1 border-t border-dashed border-slate-200" />
                      <span className="text-xs text-slate-400">Available</span>
                    </div>

                    <button className="text-xs font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                      + Add
                    </button>
                  </div>
                );
              }

              // Break
              if (appointment.status === "break") {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-slate-100 bg-slate-50 px-5 py-4"
                  >
                    <span className="w-16 shrink-0 font-mono text-xs text-slate-400">
                      {appointment.time}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FontAwesomeIcon
                        icon={faUtensils}
                        className="text-slate-400"
                      />
                      <span>Lunch break</span>
                    </div>

                    <span className="ml-auto text-xs text-slate-400">
                      {appointment.duration} min
                    </span>
                  </div>
                );
              }

              const style = statusStyle[appointment.status];

              return (
                <div
                  key={index}
                  className="border-b border-slate-100 border-l-4 px-5 py-4 hover:bg-slate-50"
                  style={{
                    borderLeftColor:
                      appointment.status === "completed"
                        ? "#15803d"
                        : appointment.status === "in-progress"
                          ? "#1769aa"
                          : "#d97706",
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Time */}
                    <span
                      className={`w-16 shrink-0 text-xs font-medium ${style.color}`}
                    >
                      {appointment.time}
                    </span>

                    {/* Avatar */}
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                        appointment.status === "completed"
                          ? "bg-green-700"
                          : appointment.status === "in-progress"
                            ? "bg-blue-700"
                            : "bg-orange-600"
                      }`}
                    >
                      {appointment.initials}
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate text-sm font-semibold">
                          {appointment.patient}
                        </p>

                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold ${style.color} ${style.bg}`}
                        >
                          <FontAwesomeIcon
                            icon={style.icon}
                            className="text-[8px]"
                          />
                          {style.label}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-slate-500">
                        {appointment.type} · {appointment.duration} min
                        {appointment.room && ` · ${appointment.room}`}
                      </p>
                    </div>

                    {/* Action */}
                    {appointment.status === "in-progress" && (
                      <button
                        onClick={() => startAppointment(appointment.patient)}
                        className="hidden rounded-lg border border-blue-200 px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-50 sm:block"
                      >
                        Open visit
                      </button>
                    )}

                    {appointment.status === "upcoming" && (
                      <button
                        onClick={() => startAppointment(appointment.patient)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                      >
                        <FontAwesomeIcon
                          icon={faUserDoctor}
                          className="text-[10px]"
                        />
                        Start
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </section>

          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Next appointments */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-bold">Next appointments</h2>

                <span className="text-xs text-slate-400">
                  {upcoming.length}
                </span>
              </div>

              <div className="space-y-4">
                {upcoming.map((appointment, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">
                        {appointment.patient}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {appointment.time} · {appointment.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Working hours */}
            <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-bold">Working hours</h2>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                <FontAwesomeIcon icon={faClock} className="text-slate-400" />
                <span>9:00 AM – 5:30 PM</span>
              </div>

              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className="h-2 w-[65%] rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                5 hrs 15 min scheduled today
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
