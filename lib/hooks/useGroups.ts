"use client"

import { useState, useEffect } from "react"

interface GroupListItem {
  id: string
  name: string
  course: string
  courseId: string
  teacher: string
  teacherId: string | null
  schedule: string | null
  enrolledCount: number
  maxStudents: number
  isActive: boolean
}

export function useGroups() {
  const [groups, setGroups] = useState<GroupListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchGroups()
  }, [])

  const fetchGroups = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/groups", {
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch groups")
      }

      const result = await response.json()
      setGroups(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      console.error("Groups fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  return {
    groups,
    loading,
    error,
    refetch: fetchGroups,
  }
}
