"use client"

import { useDashboard } from "@/lib/hooks/useDashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ChevronDown } from "lucide-react"
import { SparklineChart } from "./SparklineChart"

/**
 * Role-Based Dashboard Statistics
 * Shows different stats based on user role (Admin vs Teacher)
 */
export function RoleBasedStats() {
  const { stats, loading, isAdmin, isTeacher } = useDashboard()

  if (loading) {
    return <StatsSkeleton />
  }

  if (!stats) {
    return <div>No data available</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Active Students Card - Visible to both roles */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {isAdmin ? "ACTIVE STUDENTS" : "MY STUDENTS"}
          </CardTitle>
          <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold tracking-tight mb-2">
            {stats.activeStudents.total}
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {stats.activeStudents.offline} offline / {stats.activeStudents.online} online
          </div>
          <div className="h-12 w-full">
            <SparklineChart data={[10, 15, 12, 18, 20, 17, 19]} />
          </div>
        </CardContent>
      </Card>

      {/* Active Groups Card - Visible to both roles */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {isAdmin ? "ACTIVE GROUPS" : "MY GROUPS"}
          </CardTitle>
          <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold tracking-tight mb-2">
            {stats.activeGroups.total}
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            {stats.activeGroups.offline} offline / {stats.activeGroups.online} online
          </div>
          <div className="h-12 w-full">
            <SparklineChart data={[5, 8, 12, 15, 18, 20, 20]} />
          </div>
        </CardContent>
      </Card>

      {/* Students per Group Card - Visible to both roles */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            STUDENTS PER GROUP, AVG.
          </CardTitle>
          <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="text-4xl font-bold tracking-tight mb-1">
                {stats.studentsPerGroup.offline}
              </div>
              <div className="text-sm text-muted-foreground">Offline</div>
            </div>
            <div>
              <div className="text-4xl font-bold tracking-tight mb-1">
                {stats.studentsPerGroup.online}
              </div>
              <div className="text-sm text-muted-foreground">Online</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Admin-only: All Branches Stats */}
      {isAdmin && (
        <Card className="hover:shadow-lg transition-shadow md:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">SYSTEM OVERVIEW</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold">All Branches</div>
                <div className="text-sm text-muted-foreground">System-wide access</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Global Settings</div>
                <div className="text-sm text-muted-foreground">Platform configuration</div>
              </div>
              <div>
                <div className="text-2xl font-bold">Total Courses</div>
                <div className="text-sm text-muted-foreground">{stats.courses.length} active</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Teacher-only: My Classes Summary */}
      {isTeacher && (
        <Card className="hover:shadow-lg transition-shadow md:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">MY CLASSES SUMMARY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold">{stats.groups.length}</div>
                <div className="text-sm text-muted-foreground">Assigned Groups</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.courses.length}</div>
                <div className="text-sm text-muted-foreground">Teaching Courses</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-10 w-24 mb-4" />
            <Skeleton className="h-4 w-40 mb-4" />
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
