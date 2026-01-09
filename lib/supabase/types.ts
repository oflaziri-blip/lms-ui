// Database types for Supabase
// These types define the structure of your database tables

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: "admin" | "teacher" | "student"
          phone: string | null
          avatar_url: string | null
          status: "active" | "inactive" | "suspended"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role: "admin" | "teacher" | "student"
          phone?: string | null
          avatar_url?: string | null
          status?: "active" | "inactive" | "suspended"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: "admin" | "teacher" | "student"
          phone?: string | null
          avatar_url?: string | null
          status?: "active" | "inactive" | "suspended"
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          duration: string | null
          lessons_count: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          duration?: string | null
          lessons_count?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          duration?: string | null
          lessons_count?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      groups: {
        Row: {
          id: string
          name: string
          course_id: string
          teacher_id: string | null
          schedule: string | null
          start_date: string | null
          end_date: string | null
          max_students: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          course_id: string
          teacher_id?: string | null
          schedule?: string | null
          start_date?: string | null
          end_date?: string | null
          max_students?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          course_id?: string
          teacher_id?: string | null
          schedule?: string | null
          start_date?: string | null
          end_date?: string | null
          max_students?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          group_id: string
          student_id: string
          status: "active" | "dropped" | "completed"
          joined_at: string
          completed_at: string | null
          progress: number
        }
        Insert: {
          id?: string
          group_id: string
          student_id: string
          status?: "active" | "dropped" | "completed"
          joined_at?: string
          completed_at?: string | null
          progress?: number
        }
        Update: {
          id?: string
          group_id?: string
          student_id?: string
          status?: "active" | "dropped" | "completed"
          joined_at?: string
          completed_at?: string | null
          progress?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_available_students_for_group: {
        Args: {
          p_group_id: string
        }
        Returns: {
          id: string
          name: string
          email: string
          avatar_url: string | null
        }[]
      }
    }
    Enums: {
      user_role: "admin" | "teacher" | "student"
      user_status: "active" | "inactive" | "suspended"
      enrollment_status: "active" | "dropped" | "completed"
    }
  }
}

// Helper types for easier usage
export type User = Database["public"]["Tables"]["users"]["Row"]
export type Course = Database["public"]["Tables"]["courses"]["Row"]
export type Group = Database["public"]["Tables"]["groups"]["Row"]
export type Enrollment = Database["public"]["Tables"]["enrollments"]["Row"]

export type InsertUser = Database["public"]["Tables"]["users"]["Insert"]
export type InsertCourse = Database["public"]["Tables"]["courses"]["Insert"]
export type InsertGroup = Database["public"]["Tables"]["groups"]["Insert"]
export type InsertEnrollment = Database["public"]["Tables"]["enrollments"]["Insert"]
