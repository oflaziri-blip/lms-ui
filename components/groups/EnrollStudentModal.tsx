"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search, UserPlus, RefreshCw } from "lucide-react"
import type { AvailableStudent } from "@/lib/types/group"

interface EnrollStudentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  availableStudents: AvailableStudent[]
  onEnroll: (studentId: string) => Promise<{ success: boolean; error?: string }>
  onRefresh?: () => void
}

export function EnrollStudentModal({
  open,
  onOpenChange,
  availableStudents,
  onEnroll,
  onRefresh,
}: EnrollStudentModalProps) {
  const [selectedStudentId, setSelectedStudentId] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Listen for new student creation events and refresh the list
  useEffect(() => {
    if (!open) return

    const handleStudentCreated = async (event: CustomEvent) => {
      console.log('[EnrollStudentModal] New student created, refreshing list...')
      // Add a small delay to ensure database write is complete
      await new Promise(resolve => setTimeout(resolve, 300))
      if (onRefresh) {
        onRefresh()
      }
    }

    window.addEventListener('studentCreated', handleStudentCreated as EventListener)
    return () => window.removeEventListener('studentCreated', handleStudentCreated as EventListener)
  }, [open, onRefresh])

  // Filter students based on search query
  const filteredStudents = availableStudents.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleEnroll = async () => {
    if (!selectedStudentId) {
      setError("Please select a student")
      return
    }

    setIsSubmitting(true)
    setError(null)

    const result = await onEnroll(selectedStudentId)

    if (result.success) {
      // Reset form and close modal
      setSelectedStudentId("")
      setSearchQuery("")
      onOpenChange(false)
    } else {
      setError(result.error || "Failed to enroll student")
    }

    setIsSubmitting(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!isSubmitting) {
      onOpenChange(newOpen)
      if (!newOpen) {
        // Reset form when closing
        setSelectedStudentId("")
        setSearchQuery("")
        setError(null)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" strokeWidth={1.5} />
            Enroll Student
          </DialogTitle>
          <DialogDescription>
            Select a student to enroll in this group. Only students not already enrolled are shown.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Search Input with Refresh Button */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="search">Search Students</Label>
              {onRefresh && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={onRefresh}
                  disabled={isSubmitting}
                  className="h-7 px-2"
                >
                  <RefreshCw className="h-3 w-3 mr-1" strokeWidth={1.5} />
                  Refresh
                </Button>
              )}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <Input
                id="search"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Student Select */}
          <div className="space-y-2">
            <Label htmlFor="student">Select Student</Label>
            <Select
              value={selectedStudentId}
              onValueChange={setSelectedStudentId}
              disabled={isSubmitting}
            >
              <SelectTrigger id="student">
                <SelectValue placeholder="Choose a student..." />
              </SelectTrigger>
              <SelectContent>
                {filteredStudents.length === 0 ? (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    {searchQuery ? "No students found" : "No available students"}
                  </div>
                ) : (
                  filteredStudents.map((student) => (
                    <SelectItem key={student.id} value={student.id}>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{student.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {student.email}
                        </span>
                      </div>
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Info */}
          <div className="rounded-md bg-muted/50 p-3">
            <p className="text-xs text-muted-foreground">
              {availableStudents.length === 0 ? (
                "All students are already enrolled in this group."
              ) : (
                <>
                  <strong>{availableStudents.length}</strong> student{availableStudents.length !== 1 ? "s" : ""} available for enrollment
                </>
              )}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleEnroll}
            disabled={!selectedStudentId || isSubmitting || availableStudents.length === 0}
          >
            {isSubmitting ? "Enrolling..." : "Enroll Student"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
