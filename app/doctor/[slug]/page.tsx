"use client";

import { useState } from "react";

import Navbar from "@/components/doctor/Navbar";
import Sidebar from "@/components/doctor/Sidebar";

import Dashboard from "../tabs/Dashboard";
import Profile from "../tabs/Profile";
import Appointments from "../tabs/Appointemt";
import Patients from "../tabs/Patients";
import MedicalRecords from "../tabs/MedRecords";
import Prescriptions from "../tabs/Prescriptions";
import Diagnosis from "../tabs/Diagnosis";
import LabTests from "../tabs/LabTests";
import Reports from "../tabs/Reports";
import Leave from "../tabs/Leave";
import Notifications from "../tabs/Notifications";

export default function DoctorPage() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;

      case "profile":
        return <Profile />;

      case "appointments":
        return <Appointments />;

      case "patients":
        return <Patients />;

      case "medical-records":
        return <MedicalRecords />;

      case "prescriptions":
        return <Prescriptions />;

      case "diagnosis":
        return <Diagnosis />;

      case "lab-tests":
        return <LabTests />;

      case "reports":
        return <Reports />;

      case "leave":
        return <Leave />;

      case "notifications":
        return <Notifications />;

      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar activePage={activePage} onSelect={setActivePage} />

      {/* RIGHT SIDE */}
      <main className="min-w-0 flex-1 overflow-hidden">
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="p-6 overflow-y-scroll  h-[90vh]">
          <div className="min-h-[calc(100vh-100px)] rounded-xl bg-white p-6 shadow-sm">
            {renderPage()}
          </div>
        </div>
      </main>
    </div>
  );
}
