"use client"

import * as React from "react"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Users,
  Calendar,
  UserPlus,
  MoreVertical,
  Mail,
  Trash2,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useGroup } from "@/lib/hooks/useGroup"
import { EnrollStudentModal } from "@/components/groups/EnrollStudentModal"
import { Skeleton } from "@/components/ui/skeleton"

export default function GroupDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const groupId = params.id as string

  const {
    group,
    enrolledStudents,
    availableStudents,
    loading,
    error,
    enrollStudent,
    refetch,
    refetchAvailableStudents,
  } = useGroup(groupId)

  const [enrollModalOpen, setEnrollModalOpen] = useState(false)

  // Refresh data when page becomes visible (in case enrollment happened from another tab/page)
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refetch()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [refetch])

  // Also refresh on window focus
  React.useEffect(() => {
    const handleFocus = () => {
      refetch()
    }

    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [refetch])

  // Listen for enrollment events from other pages
  React.useEffect(() => {
    const handleStudentEnrolled = (event: CustomEvent) => {
      if (event.detail?.groupId === groupId) {
        console.log('Student enrolled event received, refreshing group data...')
        refetch()
        refetchAvailableStudents()
      }
    }

    window.addEventListener('studentEnrolled', handleStudentEnrolled as EventListener)
    return () => window.removeEventListener('studentEnrolled', handleStudentEnrolled as EventListener)
  }, [groupId, refetch, refetchAvailableStudents])

  // Listen for new student creation events
  React.useEffect(() => {
    const handleStudentCreated = async (event: CustomEvent) => {
      console.log('[GroupDetailsPage] New student created event received:', event.detail)
      // Add a small delay to ensure database write is complete
      await new Promise(resolve => setTimeout(resolve, 200))
      await refetchAvailableStudents()
    }

    window.addEventListener('studentCreated', handleStudentCreated as EventListener)
    return () => window.removeEventListener('studentCreated', handleStudentCreated as EventListener)
  }, [refetchAvailableStudents])

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (error || !group) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-lg text-muted-foreground">
          {error || "Group not found"}
        </p>
        <Button onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" strokeWidth={1.5} />
          Go Back
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{group.name}</h1>
            <p className="text-muted-foreground">
              {group.course.title} • {group.teacher.name}
            </p>
          </div>
        </div>
        <Button variant="outline">
          <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              ENROLLED
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {group.enrolledCount}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              of {group.maxStudents} max
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              AVAILABLE SLOTS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight">
              {group.availableSlots}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {group.availableSlots === 0 ? "Group is full" : "slots remaining"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              SCHEDULE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium">
              {group.schedule || "Not set"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {group.startDate ? new Date(group.startDate).toLocaleDateString() : "—"}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              STATUS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${
                  group.isActive ? "bg-emerald-500" : "bg-slate-400"
                }`}
              />
              <span className="text-sm font-medium">
                {group.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="students" className="w-full">
        <TabsList>
          <TabsTrigger value="students" className="gap-2">
            <Users className="h-4 w-4" strokeWidth={1.5} />
            Students ({enrolledStudents.length})
          </TabsTrigger>
          <TabsTrigger value="schedule" className="gap-2">
            <Calendar className="h-4 w-4" strokeWidth={1.5} />
            Schedule
          </TabsTrigger>
        </TabsList>

        {/* Students Tab */}
        <TabsContent value="students" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Manage student enrollments for this group
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => refetch()}
              >
                Refresh
              </Button>
              <Button
                onClick={() => setEnrollModalOpen(true)}
                disabled={group.availableSlots === 0}
              >
                <UserPlus className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Enroll Student
              </Button>
            </div>
          </div>

          {enrolledStudents.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Users className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">No Students Yet</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center max-w-sm">
                  This group doesn't have any enrolled students yet. Click the button above to add students.
                </p>
                <Button onClick={() => setEnrollModalOpen(true)}>
                  <UserPlus className="mr-2 h-4 w-4" strokeWidth={1.5} />
                  Enroll First Student
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                          STUDENT
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                          EMAIL
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                          PROGRESS
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                          JOINED
                        </th>
                        <th className="text-left p-4 text-sm font-semibold text-muted-foreground">
                          STATUS
                        </th>
                        <th className="text-right p-4 text-sm font-semibold text-muted-foreground">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {enrolledStudents.map((student) => (
                        <tr
                          key={student.id}
                          className="border-b last:border-0 hover:bg-muted/50 transition-colors"
                        >
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-semibold text-primary">
                                  {student.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <span className="font-medium">{student.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {student.email}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-24 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary"
                                  style={{ width: `${student.enrollment.progress}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium">
                                {student.enrollment.progress.toFixed(0)}%
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {new Date(student.enrollment.joinedAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                student.enrollment.status === "active"
                                  ? "bg-emerald-500/10 text-emerald-600"
                                  : student.enrollment.status === "completed"
                                  ? "bg-blue-500/10 text-blue-600"
                                  : "bg-slate-500/10 text-slate-600"
                              }`}
                            >
                              {student.enrollment.status}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreVertical className="h-4 w-4" strokeWidth={1.5} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Mail className="mr-2 h-4 w-4" strokeWidth={1.5} />
                                  Send Email
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" strokeWidth={1.5} />
                                  Remove from Group
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Schedule Tab (Placeholder) */}
        <TabsContent value="schedule">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground/50 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold mb-2">Schedule Coming Soon</h3>
              <p className="text-sm text-muted-foreground text-center max-w-sm">
                The schedule and lesson planning features will be available here.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Enroll Student Modal */}
      <EnrollStudentModal
        open={enrollModalOpen}
        onOpenChange={(open) => {
          setEnrollModalOpen(open)
          // Refresh available students when modal opens (to include newly created students)
          if (open) {
            refetchAvailableStudents()
          }
        }}
        availableStudents={availableStudents}
        onEnroll={async (studentId) => {
          const result = await enrollStudent(studentId)
          // Refresh available students after enrollment to update the list
          if (result.success) {
            await refetchAvailableStudents()
          }
          return result
        }}
        onRefresh={refetchAvailableStudents}
      />
    </div>
  )
}
