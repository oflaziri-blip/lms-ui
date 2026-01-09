"use client"

import { useState, useEffect } from "react"
import { useAuth } from "./useAuth"

interface DashboardStats {
  activeStudents: {
    total: number
    offline: number
    online: number
  }
  activeGroups: {
    total: number
    offline: number
    online: number
  }
  studentsPerGroup: {
    offline: string
    online: string
  }
  courses: Array<{
    id: string
    name: string
    students: number
  }>
  groups: Array<{
    id: string
    name: string
    courseId: string
    students: number
  }>
}

export function useDashboard() {
  const { user, isAdmin, isTeacher } = useAuth()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchDashboardData()
    }
  }, [user])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/dashboard", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard data")
      }

      const result = await response.json()
      setStats(result.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      console.error("Dashboard fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  return {
    stats,
    loading,
    error,
    refetch: fetchDashboardData,
    isAdmin,
    isTeacher,
    userRole: user?.role,
  }
}
