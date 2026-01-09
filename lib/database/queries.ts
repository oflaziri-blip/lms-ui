/**
 * Database Query Examples for RBAC
 * 
 * These are example queries using Prisma ORM syntax.
 * Adapt to your database client (Prisma, Drizzle, TypeORM, etc.)
 */

// Example Prisma schema structure:
/*
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  role      UserRole
  groups    Group[]
}

model Course {
  id          String   @id @default(cuid())
  title       String
  description String
  duration    String
  groups      Group[]
}

model Group {
  id        String   @id @default(cuid())
  name      String
  courseId  String
  teacherId String
  course    Course   @relation(fields: [courseId], references: [id])
  teacher   User     @relation(fields: [teacherId], references: [id])
  students  Student[]
}

model Student {
  id      String @id @default(cuid())
  name    String
  groupId String
  group   Group  @relation(fields: [groupId], references: [id])
}
*/

/**
 * ADMIN: Get all courses
 */
export async function getAdminCourses(db: any) {
  return await db.course.findMany({
    include: {
      groups: {
        include: {
          students: true,
          teacher: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

/**
 * TEACHER: Get courses where teacher is assigned
 * SECURITY: This filter MUST be on the backend
 */
export async function getTeacherCourses(db: any, teacherId: string) {
  return await db.course.findMany({
    where: {
      groups: {
        some: {
          teacherId: teacherId, // CRITICAL: Filter by teacher ID
        },
      },
    },
    include: {
      groups: {
        where: {
          teacherId: teacherId, // Only include groups assigned to this teacher
        },
        include: {
          students: true,
          teacher: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })
}

/**
 * ADMIN: Get all groups
 */
export async function getAdminGroups(db: any) {
  return await db.group.findMany({
    include: {
      course: true,
      teacher: true,
      students: true,
    },
  })
}

/**
 * TEACHER: Get groups assigned to teacher
 * SECURITY: This filter MUST be on the backend
 */
export async function getTeacherGroups(db: any, teacherId: string) {
  return await db.group.findMany({
    where: {
      teacherId: teacherId, // CRITICAL: Filter by teacher ID
    },
    include: {
      course: true,
      teacher: true,
      students: true,
    },
  })
}

/**
 * ADMIN: Get dashboard stats (all data)
 */
export async function getAdminDashboardStats(db: any) {
  const [totalStudents, totalGroups, activeGroups, courses] = await Promise.all([
    db.student.count(),
    db.group.count(),
    db.group.count({ where: { isActive: true } }),
    db.course.findMany({
      include: {
        groups: {
          include: {
            students: true,
          },
        },
      },
    }),
  ])

  return {
    activeStudents: {
      total: totalStudents,
      offline: totalStudents,
      online: 0,
    },
    activeGroups: {
      total: totalGroups,
      offline: activeGroups,
      online: 0,
    },
    studentsPerGroup: {
      offline: totalGroups > 0 ? (totalStudents / totalGroups).toFixed(1) : "0.0",
      online: "0.0",
    },
    courses,
  }
}

/**
 * TEACHER: Get dashboard stats (filtered by teacher)
 * SECURITY: All filters MUST be on the backend
 */
export async function getTeacherDashboardStats(db: any, teacherId: string) {
  // Get groups assigned to this teacher
  const teacherGroups = await db.group.findMany({
    where: {
      teacherId: teacherId, // CRITICAL: Filter by teacher ID
    },
    include: {
      students: true,
      course: true,
    },
  })

  // Get courses where teacher is assigned
  const courses = await db.course.findMany({
    where: {
      groups: {
        some: {
          teacherId: teacherId, // CRITICAL: Filter by teacher ID
        },
      },
    },
    include: {
      groups: {
        where: {
          teacherId: teacherId, // Only groups assigned to this teacher
        },
        include: {
          students: true,
        },
      },
    },
  })

  const totalStudents = teacherGroups.reduce(
    (sum: number, group: any) => sum + group.students.length,
    0
  )
  const activeGroups = teacherGroups.filter((g: any) => g.isActive).length

  return {
    activeStudents: {
      total: totalStudents,
      offline: totalStudents,
      online: 0,
    },
    activeGroups: {
      total: teacherGroups.length,
      offline: activeGroups,
      online: 0,
    },
    studentsPerGroup: {
      offline:
        teacherGroups.length > 0
          ? (totalStudents / teacherGroups.length).toFixed(1)
          : "0.0",
      online: "0.0",
    },
    courses,
    groups: teacherGroups,
  }
}
