"use client"

import { useState, useEffect } from "react"
import type { GroupDetails, EnrolledStudent, AvailableStudent } from "@/lib/types/group"

export function useGroup(groupId: string) {
  const [group, setGroup] = useState<GroupDetails | null>(null)
  const [enrolledStudents, setEnrolledStudents] = useState<EnrolledStudent[]>([])
  const [availableStudents, setAvailableStudents] = useState<AvailableStudent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (groupId) {
      fetchGroupDetails()
      fetchAvailableStudents()
    }
  }, [groupId])

  const fetchGroupDetails = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(`/api/groups/${groupId}`, {
        credentials: "include",
      })

      if (!response.ok) {
        throw new Error("Failed to fetch group details")
      }

      const result = await response.json()
      setGroup(result.data)
      
      // Transform enrollments to enrolled students
      // Filter out any enrollments without student data
      const enrolled = (result.data.enrollments || [])
        .filter((e: any) => e.student) // Only include enrollments with student data
        .map((e: any) => ({
          id: e.student.id,
          name: e.student.name,
          email: e.student.email,
          avatarUrl: e.student.avatarUrl,
          enrollment: {
            id: e.id,
            status: e.status,
            joinedAt: e.joinedAt,
            progress: e.progress || 0,
          },
        }))
      
      console.log('Fetched enrolled students:', enrolled.length, enrolled)
      setEnrolledStudents(enrolled)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
      console.error("Group fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  const fetchAvailableStudents = async () => {
    try {
      console.log(`[useGroup] Fetching available students for group ${groupId}`)
      const response = await fetch(`/api/groups/${groupId}/students`, {
        credentials: "include",
      })

      if (response.ok) {
        const result = await response.json()
        console.log(`[useGroup] Received ${result.data?.length || 0} available students`)
        setAvailableStudents(result.data || [])
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error(`[useGroup] Failed to fetch available students:`, response.status, errorData)
      }
    } catch (err) {
      console.error("[useGroup] Available students fetch error:", err)
    }
  }

  const enrollStudent = async (studentId: string) => {
    try {
      console.log('[useGroup] Enrolling student:', studentId, 'in group:', groupId)
      const response = await fetch(`/api/groups/${groupId}/enroll`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId }),
      })

      console.log('[useGroup] Enrollment response status:', response.status)

      if (!response.ok) {
        const error = await response.json()
        console.error('[useGroup] Enrollment failed:', error)
        throw new Error(error.error || "Failed to enroll student")
      }

      const result = await response.json()
      console.log('[useGroup] Enrollment result:', result)
      
      // OPTIMISTIC UI UPDATE: Immediately update local state
      if (result.success && result.data) {
        // Find the student in available students to get full data
        const studentData = availableStudents.find(s => s.id === studentId)
        
        if (studentData) {
          // Create enrolled student object
          const newStudent: EnrolledStudent = {
            id: studentData.id,
            name: studentData.name,
            email: studentData.email,
            avatarUrl: studentData.avatarUrl,
            enrollment: {
              id: result.data.id,
              status: result.data.status,
              joinedAt: result.data.joinedAt,
              progress: result.data.progress || 0,
            },
          }
          
          // Immediately update enrolled students list
          setEnrolledStudents(prev => [...prev, newStudent])
          console.log('[useGroup] Optimistically added student to enrolled list')
          
          // Immediately remove from available students
          setAvailableStudents(prev => prev.filter((s) => s.id !== studentId))
          console.log('[useGroup] Optimistically removed student from available list')
          
          // Update group state to reflect new counts
          if (group) {
            setGroup({
              ...group,
              enrolledCount: group.enrolledCount + 1,
              availableSlots: group.availableSlots - 1,
            })
          }
        }
      }

      // DON'T refresh at all - rely on optimistic updates
      // The enrollment is persisting but the GET endpoint may have caching or RLS issues
      // Optimistic updates provide instant feedback
      
      return { success: true }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to enroll student"
      console.error("Enrollment error:", err)
      return { success: false, error: message }
    }
  }

  return {
    group,
    enrolledStudents,
    availableStudents,
    loading,
    error,
    enrollStudent,
    refetch: fetchGroupDetails,
    refetchAvailableStudents: fetchAvailableStudents,
  }
}
