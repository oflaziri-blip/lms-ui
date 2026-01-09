"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  BarChart3,
  Instagram,
  Facebook,
  Link as LinkIcon,
  Edit,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/hooks/useAuth"
import { useDashboard } from "@/lib/hooks/useDashboard"
import { RoleBasedStats } from "@/components/dashboard/RoleBasedStats"
import { SparklineChart } from "@/components/dashboard/SparklineChart"

export default function DashboardPage() {
  const { user, isAdmin, isTeacher } = useAuth()
  const { stats, loading } = useDashboard()

  // Calculate courses data for chart
  const coursesData = stats?.courses.map((course, index) => {
    const colors = [
      "bg-primary",
      "bg-emerald-500",
      "bg-rose-500",
      "bg-amber-500",
      "bg-yellow-400",
      "bg-rose-300",
    ]
    return {
      name: course.name,
      students: course.students,
      color: colors[index % colors.length],
    }
  }) || []

  const totalStudents = coursesData.reduce((sum, course) => sum + course.students, 0)

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="glass-strong sticky top-0 z-40 border-b -mx-6 px-6 py-4 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-lg font-semibold hover:bg-accent">
                  Main Branch
                  <ChevronDown className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Main Branch</DropdownMenuItem>
                <DropdownMenuItem>Secondary Branch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" className="gap-2">
              <BarChart3 className="h-4 w-4" strokeWidth={1.5} />
              Analytics
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <LinkIcon className="h-4 w-4" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Edit className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" strokeWidth={1.5} />
                  <span className="hidden sm:inline">{user?.name || "User"}</span>
                  <span className="sm:hidden">User</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Role-Based Dashboard Stats */}
      <RoleBasedStats />

      {/* Students by Courses Card */}
      {coursesData.length > 0 && (
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {isAdmin ? "STUDENTS BY COURSES" : "MY COURSES"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Segmented Progress Bar */}
            <div className="h-8 w-full rounded-md overflow-hidden flex mb-6">
              {coursesData.map((course, index) => {
                const width = totalStudents > 0 ? (course.students / totalStudents) * 100 : 0
                return (
                  <div
                    key={index}
                    className={`${course.color} h-full`}
                    style={{ width: `${width}%` }}
                    title={`${course.name}: ${course.students} students`}
                  />
                )
              })}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coursesData.map((course, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className={`w-3 h-3 rounded-full ${course.color} flex-shrink-0 mt-1`} />
                  <div className="text-sm min-w-0">
                    <div className="font-medium truncate">{course.name}</div>
                    <div className="text-xs text-muted-foreground">{course.students} students</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
