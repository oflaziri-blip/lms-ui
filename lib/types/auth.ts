export type UserRole = "admin" | "teacher"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAdmin: boolean
  isTeacher: boolean
}
