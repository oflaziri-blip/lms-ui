import type { User } from "./user"

export interface Course {
  id: string
  title: string
  description: string
  duration?: string
  lessonsCount?: number
}

export interface Group {
  id: string
  name: string
  courseId: string
  teacherId: string
  schedule?: string
  startDate?: string
  endDate?: string
  maxStudents: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface GroupDetails extends Group {
  course: Course
  teacher: User
  enrolledCount: number
  availableSlots: number
}

export interface Enrollment {
  id: string
  groupId: string
  studentId: string
  status: "active" | "dropped" | "completed"
  joinedAt: string
  completedAt?: string
  progress: number
}

export interface EnrolledStudent {
  id: string
  name: string
  email: string
  avatarUrl?: string
  enrollment: {
    id: string
    status: "active" | "dropped" | "completed"
    joinedAt: string
    progress: number
  }
}

export interface AvailableStudent {
  id: string
  name: string
  email: string
  avatarUrl?: string
}
