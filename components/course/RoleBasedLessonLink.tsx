"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/hooks/useAuth"

interface RoleBasedLessonLinkProps {
    lessonId: string
    lessonExternalId: string
    children: React.ReactNode
    className?: string
}

/**
 * Wrapper component for lesson links that routes based on user role
 * - Students: /python/[externalId]
 * - Teachers/Admins: /teacher/lesson/[id]
 */
export function RoleBasedLessonLink({
    lessonId,
    lessonExternalId,
    children,
    className,
}: RoleBasedLessonLinkProps) {
    const router = useRouter()
    const { user } = useAuth()

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        // Check role and route accordingly
        if (user?.role === "admin" || user?.role === "teacher") {
            router.push(`/teacher/lesson/${lessonId}`)
        } else {
            router.push(`/python/${lessonExternalId}`)
        }
    }

    return (
        <div onClick={handleClick} className={className} style={{ cursor: "pointer" }}>
            {children}
        </div>
    )
}
