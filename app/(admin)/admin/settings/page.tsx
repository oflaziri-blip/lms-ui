"use client"

import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, Upload, CheckCircle2, AlertCircle, Info } from "lucide-react"
import { useAuth } from "@/lib/hooks/useAuth"

export default function SettingsPage() {
  const { user, isAdmin } = useAuth()
  const [isImporting, setIsImporting] = useState(false)
  const [importResult, setImportResult] = useState<{
    success: boolean
    message: string
    data?: {
      coursesCreated: number
      modulesCreated: number
      lessonsCreated: number
      tasksCreated: number
      errors: string[]
    }
  } | null>(null)
  const [fileError, setFileError] = useState<string | null>(null)

  // Redirect if not admin
  React.useEffect(() => {
    if (user && !isAdmin) {
      window.location.href = "/admin/dashboard"
    }
  }, [user, isAdmin])

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setFileError(null)
    setImportResult(null)

    // Validate file type
    if (!file.name.endsWith(".json")) {
      setFileError("Please select a JSON file")
      return
    }

    try {
      // Read file content
      const text = await file.text()
      const jsonData = JSON.parse(text)

      // Validate JSON structure
      if (!jsonData.courses || !Array.isArray(jsonData.courses)) {
        setFileError("Invalid JSON format. Expected 'courses' array.")
        return
      }

      // Import the data
      setIsImporting(true)
      const response = await fetch("/api/courses/import", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ data: jsonData }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to import course data")
      }

      setImportResult(result)
    } catch (error: any) {
      console.error("Import error:", error)
      setFileError(error.message || "Failed to import course data")
      setImportResult({
        success: false,
        message: error.message || "Failed to import course data",
      })
    } finally {
      setIsImporting(false)
      // Reset file input
      event.target.value = ""
    }
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You must be an administrator to access this page.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Settings</h2>
        <p className="text-muted-foreground mt-1">
          Manage system settings and data imports
        </p>
      </div>

      {/* Course Data Import Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" strokeWidth={1.5} />
            Import Course Data
          </CardTitle>
          <CardDescription>
            Import course data from a JSON file. The JSON should contain courses, modules, lessons, and tasks.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <label htmlFor="course-json-file">
              <input
                id="course-json-file"
                type="file"
                accept=".json"
                onChange={handleFileSelect}
                disabled={isImporting}
                className="hidden"
              />
              <Button
                asChild
                variant="outline"
                disabled={isImporting}
                className="cursor-pointer"
              >
                <span>
                  {isImporting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Importing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" strokeWidth={1.5} />
                      Select JSON File
                    </>
                  )}
                </span>
              </Button>
            </label>
          </div>

          {fileError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{fileError}</AlertDescription>
            </Alert>
          )}

          {importResult && (
            <Alert
              variant={importResult.success ? "default" : "destructive"}
              className={
                importResult.success
                  ? "border-green-500 bg-green-50 dark:bg-green-950"
                  : ""
              }
            >
              {importResult.success ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <AlertTitle>
                {importResult.success ? "Import Successful" : "Import Failed"}
              </AlertTitle>
              <AlertDescription className="space-y-2">
                <p>{importResult.message}</p>
                {importResult.data && (
                  <div className="mt-4 space-y-2">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">Courses:</span>{" "}
                        {importResult.data.coursesCreated}
                      </div>
                      <div>
                        <span className="font-semibold">Modules:</span>{" "}
                        {importResult.data.modulesCreated}
                      </div>
                      <div>
                        <span className="font-semibold">Lessons:</span>{" "}
                        {importResult.data.lessonsCreated}
                      </div>
                      <div>
                        <span className="font-semibold">Tasks:</span>{" "}
                        {importResult.data.tasksCreated}
                      </div>
                    </div>
                    {importResult.data.errors.length > 0 && (
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Errors:</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {importResult.data.errors.slice(0, 10).map((error, idx) => (
                            <li key={idx} className="text-muted-foreground">
                              {error}
                            </li>
                          ))}
                          {importResult.data.errors.length > 10 && (
                            <li className="text-muted-foreground">
                              ...and {importResult.data.errors.length - 10} more errors
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Important Notes</AlertTitle>
            <AlertDescription className="mt-2 space-y-1">
              <p>• Existing courses with the same title will be updated</p>
              <p>• Existing lessons and tasks will be replaced for imported lessons</p>
              <p>• Make sure the JSON file follows the expected format</p>
              <p>• The import process may take several minutes for large files</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Database Schema Section */}
      <Card>
        <CardHeader>
          <CardTitle>Database Schema</CardTitle>
          <CardDescription>
            Ensure your database schema is up to date before importing data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Run Schema Migration First</AlertTitle>
            <AlertDescription className="mt-2">
              <p>
                Before importing course data, make sure to run the SQL schema file:
              </p>
              <code className="mt-2 block p-2 bg-muted rounded text-sm">
                lib/database/add_lessons_tasks_schema.sql
              </code>
              <p className="mt-2">
                This will create the necessary tables (modules, lessons, tasks) if they don't exist.
              </p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
