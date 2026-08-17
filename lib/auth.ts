import { users, type User, type UserRole } from "@/backend/users";

export function authenticate(email: string, password: string): User | undefined {
  return users.find((user) => user.email === email && user.password === password);
}

export function findUserForRole(role: UserRole, slug: string): User | undefined {
  return users.find((user) => user.role === role && user.slug === slug);
}

export function dashboardPath(user: Pick<User, "role" | "slug">): string {
  return `/${user.role}/${user.slug}`;
}
