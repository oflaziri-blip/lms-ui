export type UserRole = "admin" | "teacher" | "student"

export interface User {
  id: string
  name: string
  email: string
  role?: UserRole
  avatarUrl?: string
}

export interface LMSUser {
  id: string
  name: string
  email: string
  role: UserRole
  status: "active" | "invited" | "suspended"
  avatarUrl?: string
  phone?: string
  // Teacher-only metadata
  bio?: string
  hourlyRate?: number
  tags?: string[]
}

