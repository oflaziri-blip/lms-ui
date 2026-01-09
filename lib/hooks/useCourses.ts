"use client"

import { useState, useEffect } from "react"

interface Course {
  id: string
  title: string
  description: string | null
  duration: string
  lessons: number
  students: number
  isActive: boolean
}

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/courses", {
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch courses")
      }

      const result = await response.json()
      setCourses(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      console.error("Courses fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  return {
    courses,
    loading,
    error,
    refetch: fetchCourses,
  }
}
