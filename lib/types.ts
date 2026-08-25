export interface Patient {
  slug: string;
  name: string;
  patientId: string;
  email: string;
  phone: string;
  dob: string;
  age: number;
  gender: string;
  bloodType: string;
  address: string;
  emergencyContact: { name: string; relation: string; phone: string };
  insurance: { provider: string; policyNumber: string; group: string };
  allergies: string[];
  conditions: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  rating: number;
  years: number;
  availability: string;
  initials: string;
  color: "brand" | "accent" | "ink";
}

export interface Appointment {
  id: string;
  doctor: Doctor;
  date: string;
  day: string;
  time: string;
  type: "In-person" | "Video Call";
  location: string;
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled";
  reason: string;
}

export type RecordCategory =
  | "Consultation"
  | "Lab"
  | "Imaging"
  | "Vaccination"
  | "Surgery";

export interface MedicalRecord {
  id: string;
  title: string;
  category: RecordCategory;
  doctor: string;
  date: string;
  summary: string;
  fileSize: string;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  doctor: string;
  startDate: string;
  duration: string;
  refillsLeft: number;
  status: "Active" | "Completed" | "Expired";
}

export interface LabReport {
  id: string;
  testName: string;
  category: string;
  date: string;
  doctor: string;
  status: "Ready" | "Pending" | "In Review";
  flagged: boolean;
}

export interface Payment {
  id: string;
  description: string;
  category: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  method: string;
  invoiceNo: string;
}

export type NotificationType =
  | "appointment"
  | "prescription"
  | "lab"
  | "payment"
  | "general";

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: NotificationType;
  read: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface Vital {
  id: string;
  label: string;
  value: string;
  unit: string;
  status: "normal" | "watch" | "alert";
  trend: "up" | "down" | "flat";
  reading: string;
}
