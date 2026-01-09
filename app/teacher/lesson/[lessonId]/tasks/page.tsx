"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Plus, FileText } from "lucide-react"

interface TaskManagerProps {
    params: Promise<{ lessonId: string }>
}

export default function TaskManagerPage({ params }: TaskManagerProps) {
    const router = useRouter()
    const [lessonId, setLessonId] = React.useState<string>("")

    React.useEffect(() => {
        params.then(p => setLessonId(p.lessonId))
    }, [params])

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-5xl mx-auto">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Lesson Hub
                </Button>

                <Card className="p-8">
                    <div className="text-center max-w-md mx-auto">
                        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <FileText className="h-8 w-8 text-primary" />
                        </div>

                        <h1 className="text-2xl font-bold mb-2">Task Manager</h1>
                        <p className="text-muted-foreground mb-6">
                            This is a placeholder page for managing lesson tasks.
                        </p>

                        <div className="text-sm text-muted-foreground bg-muted p-4 rounded-lg">
                            <p className="font-mono">Lesson ID: {lessonId}</p>
                            <p className="mt-2">
                                Future features:
                            </p>
                            <ul className="list-disc list-inside mt-2 text-left">
                                <li>View all tasks for this lesson</li>
                                <li>Add new tasks (code, quiz, typing, debug)</li>
                                <li>Edit existing tasks</li>
                                <li>Reorder tasks</li>
                                <li>Delete tasks</li>
                            </ul>
                        </div>

                        <Button className="mt-6" disabled>
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Task (Coming Soon)
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
