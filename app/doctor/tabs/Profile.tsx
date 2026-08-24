"use client";

import { useState } from "react";

type Tab = "Personal" | "Professional" | "Availability";

const allDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type ProfileData = {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  address: string;
  specialty: string;
  department: string;
  qualification: string;
  license: string;
  experience: string;
  fee: string;
};

type EmergencyContact = {
  name: string;
  relationship: string;
  phone: string;
  email: string;
};

type Availability = {
  startTime: string;
  endTime: string;
  breakStart: string;
  breakDuration: string;
  consultationDuration: string;
  maxAppointments: string;
  bookingLeadTime: string;
  appointmentTypes: string;
};

const profile: ProfileData = {
  firstName: "Michael",
  lastName: "Smith",
  gender: "Male",
  dob: "1984-06-15",
  phone: "+1 555 234 5678",
  email: "michael.smith@medicare.com",
  address: "123 Medical Center Dr, Boston, MA 02101",
  specialty: "Cardiology",
  department: "Cardiology Department",
  qualification: "MD, FACC, FESC",
  license: "MC-2009-4521",
  experience: "15",
  fee: "250",
};

const emergencyContact: EmergencyContact = {
  name: "Jane Smith",
  relationship: "Spouse",
  phone: "+1 555 234 9999",
  email: "jane.smith@email.com",
};

const availability: Availability = {
  startTime: "9:00 AM",
  endTime: "5:30 PM",
  breakStart: "12:00 PM",
  breakDuration: "1 Hour",
  consultationDuration: "30 Minutes",
  maxAppointments: "12",
  bookingLeadTime: "24 Hours",
  appointmentTypes: "Both",
};

const expertise = [
  "Interventional Cardiology",
  "Heart Failure",
  "Cardiac Imaging",
  "Arrhythmia Management",
  "Preventive Cardiology",
  "Echocardiography",
];

const activeDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function Profile() {
  const [tab, setTab] = useState<Tab>("Personal");

  const fullName = `${profile.firstName} ${profile.lastName}`;

  const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(
    0,
  )}`;

  const scheduleDays = activeDays.length
    ? activeDays.map((day) => day.slice(0, 3)).join(", ")
    : "No working days selected";

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="mx-auto w-full max-w-[1440px] p-4 sm:p-6 lg:p-8">
        {/* HEADER */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
            <span>Dashboard</span>

            <i className="fa-solid fa-chevron-right text-[8px]" />

            <span className="font-medium text-[#1B7FC4]">My Profile</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Doctor Profile
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            View your professional information and availability
          </p>
        </div>

        {/* PROFILE HERO */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="h-2 bg-gradient-to-r from-[#1B7FC4] via-[#2495C7] to-[#0D9488]" />

          <div className="p-5 sm:p-6 lg:p-7">
            <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
              {/* DOCTOR */}
              <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                {/* AVATAR */}
                <div className="relative shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1B7FC4] to-[#0D9488] text-2xl font-bold text-white shadow-sm ring-4 ring-blue-50 sm:h-24 sm:w-24 sm:text-3xl">
                    {initials}
                  </div>
                </div>

                {/* INFORMATION */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="truncate text-xl font-bold text-gray-900 sm:text-2xl">
                      Dr. {fullName}
                    </h2>

                    <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-600">
                      <i className="fa-solid fa-circle-check text-[9px]" />
                      Verified
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-[#1B7FC4]">
                    {profile.specialty}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {profile.department} · MediCare Hospital
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag
                      icon="fa-graduation-cap"
                      text={profile.qualification}
                      color="bg-blue-50 text-blue-700"
                    />

                    <Tag
                      icon="fa-briefcase"
                      text={`${profile.experience} Years Experience`}
                      color="bg-teal-50 text-teal-700"
                    />

                    <Tag
                      icon="fa-id-card"
                      text={`License: ${profile.license}`}
                      color="bg-purple-50 text-purple-700"
                    />
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 divide-x divide-gray-100 rounded-xl border border-gray-100 bg-gray-50/70 px-2 py-4 xl:min-w-[420px]">
                <Stat icon="fa-users" label="Total Patients" value="86" />

                <Stat
                  icon="fa-calendar-check"
                  label="Consultations"
                  value="1,248"
                />

                <Stat
                  icon="fa-award"
                  label="Years Active"
                  value={profile.experience}
                />
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mb-5 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex min-w-max">
            {(["Personal", "Professional", "Availability"] as Tab[]).map(
              (item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setTab(item)}
                  className={`relative flex items-center gap-2 px-5 py-4 text-sm font-semibold transition sm:px-7 ${
                    tab === item
                      ? "text-[#1B7FC4]"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      item === "Personal"
                        ? "fa-user"
                        : item === "Professional"
                          ? "fa-stethoscope"
                          : "fa-clock"
                    } text-xs`}
                  />

                  {item}

                  {tab === item && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#1B7FC4] sm:left-6 sm:right-6" />
                  )}
                </button>
              ),
            )}
          </div>
        </div>

        {/* PERSONAL    */}

        {tab === "Personal" && (
          <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            {/* PERSONAL INFORMATION */}
            <Card
              title="Personal Information"
              description="Basic information about the doctor"
              icon="fa-user"
            >
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <DisplayField label="First Name" value={profile.firstName} />

                  <DisplayField label="Last Name" value={profile.lastName} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <DisplayField label="Gender" value={profile.gender} />

                  <DisplayField
                    label="Date of Birth"
                    value={formatDate(profile.dob)}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <DisplayField label="Phone Number" value={profile.phone} />

                  <DisplayField label="Email Address" value={profile.email} />
                </div>

                <DisplayField label="Address" value={profile.address} />
              </div>
            </Card>

            {/* EMERGENCY CONTACT */}
            <Card
              title="Emergency Contact"
              description="Someone we can contact in an emergency"
              icon="fa-phone"
            >
              <div className="space-y-5">
                <DisplayField
                  label="Contact Name"
                  value={emergencyContact.name}
                />

                <DisplayField
                  label="Relationship"
                  value={emergencyContact.relationship}
                />

                <DisplayField
                  label="Contact Phone"
                  value={emergencyContact.phone}
                />

                <DisplayField
                  label="Contact Email"
                  value={emergencyContact.email}
                />

                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1B7FC4] shadow-sm">
                      <i className="fa-solid fa-shield-heart" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        Your information is secure
                      </p>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Emergency contact details are only visible to authorized
                        hospital staff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* PROFESSIONAL*/}

        {tab === "Professional" && (
          <div className="grid gap-5 xl:grid-cols-[1.2fr_1fr]">
            {/* PROFESSIONAL INFORMATION */}
            <Card
              title="Professional Information"
              description="Medical and professional credentials"
              icon="fa-stethoscope"
            >
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <DisplayField label="Specialty" value={profile.specialty} />

                  <DisplayField label="Department" value={profile.department} />
                </div>

                <DisplayField
                  label="Qualification"
                  value={profile.qualification}
                />

                <DisplayField
                  label="Medical License Number"
                  value={profile.license}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <DisplayField
                    label="Years of Experience"
                    value={`${profile.experience} Years`}
                  />

                  <DisplayField
                    label="Consultation Fee"
                    value={`$${profile.fee}`}
                  />
                </div>
              </div>
            </Card>

            {/* EXPERTISE */}
            <Card
              title="Expertise & Languages"
              description="Specializations and spoken languages"
              icon="fa-brain"
            >
              <SectionLabel text="Areas of Expertise" />

              <div className="mb-7 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-[#1B7FC4]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <SectionLabel text="Languages" />

              <div className="flex flex-wrap gap-2">
                {["English", "Spanish"].map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    <i className="fa-solid fa-language mr-1.5 text-gray-400" />
                    {language}
                  </span>
                ))}
              </div>

              {/* BOARD CERTIFIED */}
              <div className="mt-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-teal-50 p-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#1B7FC4] shadow-sm">
                    <i className="fa-solid fa-award" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Board Certified
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      American Board of Internal Medicine · Cardiovascular
                      Disease
                    </p>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Professional status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    Active & Verified
                  </p>
                </div>

                <span className="flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Active
                </span>
              </div>
            </Card>
          </div>
        )}

        {/* AVAILABILITY */}

        {tab === "Availability" && (
          <div className="grid gap-5 xl:grid-cols-[1.3fr_1fr]">
            {/* WORKING SCHEDULE */}
            <Card
              title="Working Schedule"
              description="Your weekly consultation schedule"
              icon="fa-calendar-days"
            >
              <SectionLabel text="Working Days" />

              <div className="mb-6 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {allDays.map((day) => {
                  const active = activeDays.includes(day);

                  return (
                    <div
                      key={day}
                      className={`rounded-lg border px-2 py-2.5 text-center text-xs font-semibold ${
                        active
                          ? "border-[#1B7FC4] bg-[#1B7FC4] text-white shadow-sm"
                          : "border-gray-200 bg-gray-50 text-gray-400"
                      }`}
                    >
                      {day.slice(0, 3)}
                    </div>
                  );
                })}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <DisplayField
                  label="Start Time"
                  value={availability.startTime}
                />

                <DisplayField label="End Time" value={availability.endTime} />

                <DisplayField
                  label="Break Start"
                  value={availability.breakStart}
                />

                <DisplayField
                  label="Break Duration"
                  value={availability.breakDuration}
                />
              </div>

              <div className="mt-4">
                <DisplayField
                  label="Consultation Duration"
                  value={availability.consultationDuration}
                />
              </div>

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1B7FC4] shadow-sm">
                    <i className="fa-solid fa-clock" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-800">
                      Current schedule
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {scheduleDays} · {availability.startTime}–
                      {availability.endTime}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* APPOINTMENT SETTINGS */}
            <Card
              title="Appointment Settings"
              description="How patients can book appointments"
              icon="fa-sliders"
            >
              <div className="space-y-5">
                <DisplayField
                  label="Max Appointments Per Day"
                  value={availability.maxAppointments}
                />

                <DisplayField
                  label="Booking Lead Time"
                  value={availability.bookingLeadTime}
                />

                <DisplayField
                  label="Appointment Types Allowed"
                  value={availability.appointmentTypes}
                />
              </div>

              <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <i className="fa-solid fa-check" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Availability is active
                    </p>

                    <p className="mt-0.5 text-xs text-gray-500">
                      Patients can currently book appointments.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* FOOTER */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto]">
          {/* PROFILE COMPLETION */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Profile completion
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Your profile is almost complete
                </p>
              </div>

              <span className="text-lg font-bold text-[#1B7FC4]">92%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1B7FC4] to-[#0D9488]"
                style={{ width: "92%" }}
              />
            </div>

            <p className="mt-2 text-[11px] text-gray-400">
              Your profile is 92% complete.
            </p>
          </div>

          {/* LAST UPDATED */}
          <div className="flex items-center justify-between gap-6 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm lg:min-w-[300px]">
            <div>
              <p className="text-xs text-gray-400">Last updated</p>

              <p className="mt-1 text-sm font-semibold text-gray-800">
                Today, 4:32 PM
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-600">
              <i className="fa-solid fa-cloud-check text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* REUSABLE COMPONENTS   */

function Card({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description?: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
        {icon && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1B7FC4]">
            <i className={`fa-solid ${icon} text-sm`} />
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

          {description && (
            <p className="mt-1 text-xs text-gray-400">{description}</p>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function DisplayField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-gray-600">
        {label}
      </label>

      <div className="flex min-h-[42px] items-center justify-between rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-2.5">
        <span className="text-sm text-gray-800">{value}</span>

        <i className="fa-solid fa-lock text-[10px] text-gray-300" />
      </div>
    </div>
  );
}

function Tag({
  text,
  color,
  icon,
}: {
  text: string;
  color: string;
  icon?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${color}`}
    >
      {icon && <i className={`fa-solid ${icon} text-[9px]`} />}

      {text}
    </span>
  );
}

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: string;
}) {
  return (
    <div className="px-2 text-center">
      {icon && <i className={`fa-solid ${icon} mb-2 text-xs text-[#1B7FC4]`} />}

      <p className="text-xl font-bold text-gray-900 sm:text-2xl">{value}</p>

      <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">{label}</p>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400">
      {text}
    </p>
  );
}

function formatDate(date: string) {
  const value = new Date(`${date}T00:00:00`);

  return value.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
