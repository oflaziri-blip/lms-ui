import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth/middleware"
import type { UserRole } from "@/lib/types/auth"

/**
 * Dashboard API Route
 * Returns dashboard statistics based on user role
 * 
 * GET /api/dashboard
 */
async function getDashboardData(
  req: NextRequest,
  user: { id: string; role: UserRole }
) {
  try {
    // Import your database client here
    // const db = await getDatabase()
    
    let courses, groups, students, activeGroups

    if (user.role === "admin") {
      // ADMIN: Fetch ALL courses and groups
      // courses = await db.course.findMany()
      // groups = await db.group.findMany()
      // students = await db.student.findMany()
      // activeGroups = await db.group.findMany({ where: { isActive: true } })
      
      // Mock data for Admin
      courses = [
        { id: "1", name: "Python Start", students: 45 },
        { id: "2", name: "AI", students: 32 },
        { id: "3", name: "Python Pro", students: 28 },
      ]
      groups = [
        { id: "1", name: "Group A", courseId: "1", students: 20 },
        { id: "2", name: "Group B", courseId: "1", students: 25 },
      ]
      students = 189
      activeGroups = 20
    } else {
      // TEACHER: Fetch ONLY courses where teacher is assigned
      // courses = await db.course.findMany({
      //   where: {
      //     groups: {
      //       some: {
      //         teacherId: user.id
      //       }
      //     }
      //   },
      //   include: {
      //     groups: {
      //       where: {
      //         teacherId: user.id
      //       }
      //     }
      //   }
      // })
      
      // groups = await db.group.findMany({
      //   where: {
      //     teacherId: user.id
      //   },
      //   include: {
      //     students: true
      //   }
      // })
      
      // students = await db.student.count({
      //   where: {
      //     groups: {
      //       some: {
      //         teacherId: user.id
      //       }
      //     }
      //   }
      // })
      
      // activeGroups = await db.group.count({
      //   where: {
      //     teacherId: user.id,
      //     isActive: true
      //   }
      // })
      
      // Mock data for Teacher (filtered)
      courses = [
        { id: "1", name: "Python Start", students: 25 },
      ]
      groups = [
        { id: "1", name: "Group A", courseId: "1", students: 25 },
      ]
      students = 25
      activeGroups = 1
    }

    const dashboardStats = {
      activeStudents: {
        total: students,
        offline: students,
        online: 0,
      },
      activeGroups: {
        total: activeGroups,
        offline: activeGroups,
        online: 0,
      },
      studentsPerGroup: {
        offline: activeGroups > 0 ? (students / activeGroups).toFixed(1) : "0.0",
        online: "0.0",
      },
      courses: courses.map((course) => ({
        id: course.id,
        name: course.name,
        students: course.students,
      })),
      groups: groups.map((group) => ({
        id: group.id,
        name: group.name,
        courseId: group.courseId,
        students: group.students,
      })),
    }

    return NextResponse.json({
      success: true,
      data: dashboardStats,
      role: user.role,
    })
  } catch (error) {
    console.error("Dashboard API Error:", error)
    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    )
  }
}

// Export with authentication middleware
export const GET = requireAuth(getDashboardData)
