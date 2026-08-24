export type UserRole = "patient" | "doctor" | "staff" | "admin";

export type User = { id: string; name: string; email: string; password: string; role: UserRole; slug: string };

export const users: User[] = [
  { id: "1", name: "John Doe", email: "user@example.com", password: "user123", role: "patient", slug: "john-doe" },
  { id: "2", name: "Dr. Sarah", email: "doctor@example.com", password: "doctor123", role: "doctor", slug: "dr-sarah" },
  {
    id: "STF001",
    name: "Rahul Sharma",
    email: "rahul.sharma@hospitaldemo.in",
    password: "rahul123",
    role: "staff",
    slug: "STF001"
  },
  {
    id: "STF002",
    name: "Anjali Verma",
    email: "anjali.verma@hospitaldemo.in",
    password: "anjali123",
    role: "staff",
    slug: "STF002"
  },
  {
    id: "STF003",
    name: "Vikram Singh",
    email: "vikram.singh@hospitaldemo.in",
    password: "vikram123",
    role: "staff",
    slug: "STF003"
  },
  {
    id: "STF004",
    name: "Sneha Patel",
    email: "sneha.patel@hospitaldemo.in",
    password: "sneha123",
    role: "staff",
    slug: "STF004"
  },
  { 
    id: "4", name: "Admin 01", email: "admin@example.com", password: "admin123", role: "admin", slug: "admin-01" }
];
