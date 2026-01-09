"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuickImportPage() {
    const [status, setStatus] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const handleImport = async () => {
        setLoading(true)
        setStatus("Importing...")

        try {
            // Fetch the JSON file (32 lessons across 6 Eras!)
            const fileRes = await fetch("/python-go-1-course-full.json")
            const courseData = await fileRes.json()

            // Call the import API
            const res = await fetch("/api/courses/import", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ data: courseData })
            })

            const result = await res.json()

            if (result.success) {
                setStatus(`✅ Success! 
Created: ${result.data.coursesCreated} courses, ${result.data.modulesCreated} modules, ${result.data.lessonsCreated} lessons`)
            } else {
                setStatus(`⚠️ Completed with errors: ${result.data.errors.join(", ")}`)
            }
        } catch (error: any) {
            setStatus(`❌ Error: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <Card className="max-w-2xl mx-auto p-8 bg-gray-800 border-gray-700">
                <h1 className="text-2xl font-bold text-white mb-4">Import: Python Go 1 (Full Course)</h1>
                <p className="text-gray-300 mb-6">
                    This will import <strong>32 lessons</strong> across <strong>6 Eras</strong> into your "Python Go 1" course.
                </p>

                <Button
                    onClick={handleImport}
                    disabled={loading}
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 w-full"
                >
                    {loading ? "Importing..." : "Import Now"}
                </Button>

                {status && (
                    <div className="mt-6 p-4 bg-gray-900 rounded border border-gray-700">
                        <pre className="text-sm text-gray-300 whitespace-pre-wrap">{status}</pre>
                    </div>
                )}

                <div className="mt-6 text-sm text-gray-400">
                    <p>After import, go to: <a href="/dashboard" className="text-purple-400 underline">Dashboard</a></p>
                </div>
            </Card>
        </div>
    )
}
