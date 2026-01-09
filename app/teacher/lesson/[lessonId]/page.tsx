"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, CheckSquare, ArrowLeft, Loader2, FileText } from "lucide-react"
import Link from "next/link"

interface TeacherLessonHubProps {
    params: Promise<{ lessonId: string }>
}

interface LessonData {
    id: string
    external_id: string
    title: string
    description: string | null
    order_index: number
    taskCount: number
}

export default function TeacherLessonHub({ params }: TeacherLessonHubProps) {
    const router = useRouter()
    const [lesson, setLesson] = React.useState<LessonData | null>(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchLessonData() {
            try {
                const { lessonId } = await params

                // Fetch lesson details and task count
                const res = await fetch(`/api/lessons/${lessonId}/teacher-data`, {
                    credentials: "include"
                })

                if (!res.ok) {
                    throw new Error("Failed to fetch lesson data")
                }

                const data = await res.json()
                setLesson(data.data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchLessonData()
    }, [params])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                    <p className="text-muted-foreground mt-4">Loading lesson...</p>
                </div>
            </div>
        )
    }

    if (error || !lesson) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="max-w-md p-6">
                    <h2 className="text-xl font-bold text-destructive mb-2">Error</h2>
                    <p className="text-muted-foreground">{error || "Lesson not found"}</p>
                    <Button onClick={() => router.back()} className="mt-4">
                        Go Back
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background p-6">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Course
                </Button>

                <div className="border-b pb-6">
                    <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
                    {lesson.description && (
                        <p className="text-muted-foreground text-lg">{lesson.description}</p>
                    )}
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <span>Lesson #{lesson.order_index + 1}</span>
                        <span>•</span>
                        <span>{lesson.taskCount} Tasks</span>
                    </div>
                </div>
            </div>

            {/* Action Cards Grid - 3 COLUMNS */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-6">Teacher Actions</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: Lesson Slides */}
                    <Link href={`/teacher/lesson/${lesson.id}/slides`}>
                        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer group h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <FileText className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Lesson Slides</h3>
                                </div>

                                <p className="text-muted-foreground mb-6 flex-grow text-sm">
                                    View the complete lesson slide deck with all teaching materials and explanations.
                                </p>

                                <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                                    View Slides
                                    <ArrowLeft className="h-4 w-4 rotate-180 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Card 2: Student View */}
                    <Link href={`/python/${lesson.external_id}`}>
                        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer group h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <PlayCircle className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Student View</h3>
                                </div>

                                <p className="text-muted-foreground mb-6 flex-grow text-sm">
                                    Preview lesson tasks and exercises exactly as students experience them.
                                </p>

                                <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                                    Launch Preview
                                    <ArrowLeft className="h-4 w-4 rotate-180 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Card 3: Task Manager */}
                    <Link href={`/teacher/lesson/${lesson.id}/tasks`}>
                        <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer group h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <CheckSquare className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Task Manager</h3>
                                </div>

                                <p className="text-muted-foreground mb-6 flex-grow text-sm">
                                    Create, edit, and manage exercises, quizzes, and coding challenges.
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium bg-primary/10 px-3 py-1 rounded-full">
                                        {lesson.taskCount} {lesson.taskCount === 1 ? "Task" : "Tasks"}
                                    </span>
                                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                                        Manage
                                        <ArrowLeft className="h-4 w-4 rotate-180 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}
