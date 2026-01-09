"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, UserPlus } from "lucide-react"
import { useAuth } from "@/lib/hooks/useAuth"

interface Student {
  id: string
  name: string
  username: string
  grade: string
  status: 'active' | 'inactive'
  email: string
}

interface Group {
  id: string
  name: string
  course: string
  teacher: string
}

interface GroupData {
  id: string
  name: string
  course: {
    title: string | null
  } | null
  teacher: {
    name: string | null
  } | null
}

interface AddToGroupModalProps {
  student: Student
  onClose: () => void
  onSuccess: () => void
}

export function AddToGroupModal({ student, onClose, onSuccess }: AddToGroupModalProps) {
  const { user, isAdmin } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [groups, setGroups] = useState<Group[]>([])
  const [selectedGroupId, setSelectedGroupId] = useState<string>("")
  const [loadingGroups, setLoadingGroups] = useState(true)

  useEffect(() => {
    fetchActiveGroups()
  }, [])

  const fetchActiveGroups = async () => {
    try {
      setLoadingGroups(true)
      setError(null)
      
      // Use API route instead of direct Supabase calls
      const response = await fetch('/api/groups', {
        credentials: 'include',
      })

      if (!response.ok) {
        if (response.status === 401) {
          setError('You must be logged in to view groups')
        } else {
          setError('Failed to load groups')
        }
        setGroups([])
        return
      }

      const result = await response.json()
      
      if (!result.success || !result.data) {
        setError('Failed to load groups')
        setGroups([])
        return
      }

      // Filter only active groups and transform to match Group interface
      const activeGroups = result.data
        .filter((group: any) => group.isActive)
        .map((group: any) => ({
          id: group.id,
          name: group.name,
          course: group.course || 'Unknown Course',
          teacher: group.teacher || 'Unassigned'
        }))
        .sort((a: Group, b: Group) => a.name.localeCompare(b.name))

      if (activeGroups.length === 0) {
        setError('No active groups available')
      }

      setGroups(activeGroups)
    } catch (err: any) {
      console.error('Error fetching groups:', err)
      setError(`Failed to load groups: ${err.message || 'Unknown error'}`)
      setGroups([])
    } finally {
      setLoadingGroups(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedGroupId) {
      setError('Please select a group')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Use API route for enrollment (has proper validation and RLS handling)
      const response = await fetch(`/api/groups/${selectedGroupId}/enroll`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId: student.id }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to enroll student' }))
        
        // Handle specific HTTP status codes
        if (response.status === 401) {
          setError('You must be logged in to enroll students')
        } else if (response.status === 403) {
          setError('You do not have permission to enroll students')
        } else if (response.status === 404) {
          setError(errorData.error || 'Group or student not found')
        } else if (response.status === 409) {
          setError('Student is already enrolled in this group')
        } else if (response.status === 400) {
          setError(errorData.error || 'Invalid enrollment request')
        } else {
          setError(errorData.error || 'Failed to enroll student in group')
        }
        setIsSubmitting(false)
        return
      }

      const result = await response.json()
      
      if (result.success) {
        // Success - trigger refresh event for any open group pages
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('studentEnrolled', { 
            detail: { groupId: selectedGroupId, studentId: student.id } 
          }))
        }
        
        console.log('Student enrolled successfully:', result.data)
        onSuccess()
      } else {
        throw new Error(result.error || 'Failed to enroll student')
      }
    } catch (err: any) {
      console.error('Enrollment error:', err)
      setError(err.message || 'Failed to enroll student in group')
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={true} onOpenChange={() => !isSubmitting && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Student to Group</DialogTitle>
          <DialogDescription>
            Enroll {student.name} ({student.username}) in a group.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="group">Select Group</Label>
            {loadingGroups ? (
              <div className="flex items-center gap-2 p-2 border rounded">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading groups...
              </div>
            ) : groups.length === 0 ? (
              <div className="p-3 border rounded bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  {error || 'No active groups available'}
                </p>
              </div>
            ) : (
              <Select value={selectedGroupId} onValueChange={setSelectedGroupId}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a group" />
                </SelectTrigger>
                <SelectContent>
                  {groups.map((group) => (
                    <SelectItem key={group.id} value={group.id}>
                      {group.name} - {group.course} ({group.teacher})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || loadingGroups}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enrolling...
                </>
              ) : (
                <>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add to Group
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}