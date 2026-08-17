export type UserRole = "user" | "doctor" | "staff" | "admin";

export type User = { id: string; name: string; email: string; password: string; role: UserRole; slug: string };

export const users: User[] = [
  { id: "1", name: "John Doe", email: "user@example.com", password: "user123", role: "user", slug: "john-doe" },
  { id: "2", name: "Dr. Sarah", email: "doctor@example.com", password: "doctor123", role: "doctor", slug: "dr-sarah" },
  { id: "3", name: "Mike", email: "staff@example.com", password: "staff123", role: "staff", slug: "mike" },
  { id: "4", name: "Admin 01", email: "admin@example.com", password: "admin123", role: "admin", slug: "admin-01" }
];
