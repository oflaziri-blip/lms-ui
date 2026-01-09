import { StudentHeader } from "@/components/layout/StudentHeader"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock breadcrumbs - in real app, these would come from route params or context
  const breadcrumbs = [
    { label: "Python Core", href: "/student/courses/python-core" },
    { label: "Loops", href: "/student/courses/python-core/loops" },
    { label: "Task 1" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <StudentHeader breadcrumbs={breadcrumbs} />
      <main className="h-[calc(100vh-73px)]">{children}</main>
    </div>
  )
}
