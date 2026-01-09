"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCourseDetails } from "@/lib/hooks/useCourseDetails"
import { Home, BookOpen, Trophy, Code, Settings, Flame, Zap, Clock, Play, Check, Lock, Terminal as TerminalIcon, Bug, Send, Loader2 } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StudentDashboard() {
    const router = useRouter()
    const [courseId, setCourseId] = React.useState<string | null>(null)
    const [fetchingCourseId, setFetchingCourseId] = React.useState(true)

    // Fetch course ID from API
    React.useEffect(() => {
        async function fetchCourses() {
            try {
                const res = await fetch("/api/courses", { credentials: "include" })
                const data = await res.json()
                if (data.success && data.data && data.data.length > 0) {
                    setCourseId(data.data[0].id)
                }
            } catch (error) {
                console.error("Failed to fetch courses:", error)
            } finally {
                setFetchingCourseId(false)
            }
        }
        fetchCourses()
    }, [])

    const { course, loading, error } = useCourseDetails(courseId)

    if (loading || fetchingCourseId) {
        return (
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="h-8 w-8 animate-spin text-[#53d22d] mx-auto" />
                    <p className="text-gray-400 mt-4">Loading your missions...</p>
                </div>
            </div>
        )
    }

    if (error || !course) {
        return (
            <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
                <Card className="max-w-md w-full p-6 bg-[#1e293b] border-white/10">
                    <h2 className="text-xl font-bold text-red-400 mb-2">Error Loading Course</h2>
                    <p className="text-gray-300">{error || "Course not found"}</p>
                    <Button
                        onClick={() => router.push("/student")}
                        className="mt-4 bg-[#53d22d] hover:bg-[#53d22d]/90 text-[#0f172a]"
                    >
                        Back to Home
                    </Button>
                </Card>
            </div>
        )
    }

    // ========== TESTING MODE: UNLOCK ALL LESSONS ==========
    // TODO: Remove this block when done testing!
    // This unlocks all lessons and marks first 2 as completed for testing
    const allLessons = (course.lessons || []).map((lesson, idx) => ({
        ...lesson,
        isLocked: false, // Unlock all lessons for testing
        isCompleted: idx < 2 // Mark first 2 as completed to test "current lesson" logic
    }))
    // ========== END TESTING MODE ==========
    const completedCount = allLessons.filter(l => l.isCompleted).length
    const totalLessons = allLessons.length
    const xp = completedCount * 120
    const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

    // Find current lesson
    const currentLesson = allLessons.find(lesson => !lesson.isCompleted && !lesson.isLocked) || allLessons[0]

    // Calculate streak (mock for now - you can connect to real data later)
    const streakDays = 12

    // Group lessons by module for timeline
    const modules = course.lessonsByModule || []

    return (
        <div className="relative flex h-screen w-full overflow-hidden bg-[#0f172a] text-white font-sans">
            {/* Background Grid Effect */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(83, 210, 45, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(83, 210, 45, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none" />

            {/* Sidebar */}
            <nav className="glass-panel relative z-20 hidden w-20 flex-col items-center justify-between border-r border-white/5 py-8 transition-all duration-300 hover:w-64 group/sidebar lg:flex">
                <div className="flex flex-col items-center gap-8 w-full">
                    {/* Logo */}
                    <div className="flex items-center gap-3 px-4 w-full justify-center group-hover/sidebar:justify-start">
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#53d22d]/20 text-[#53d22d]" style={{ boxShadow: '0 0 20px rgba(83, 210, 45, 0.15)' }}>
                            <TerminalIcon className="w-6 h-6" />
                        </div>
                        <span className="whitespace-nowrap text-lg font-bold tracking-wide opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">
                            Chronos<span className="text-[#53d22d]">LMS</span>
                        </span>
                    </div>

                    {/* Nav Items */}
                    <div className="flex w-full flex-col gap-2 px-3">
                        <Link className="flex items-center gap-4 rounded-full bg-[#53d22d]/10 px-3 py-3 text-[#53d22d] transition-all hover:bg-[#53d22d]/20 hover:shadow-[0_0_15px_rgba(83,210,45,0.3)] group-hover/sidebar:px-4" href="/dashboard">
                            <Home className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Home</span>
                        </Link>
                        <Link className="flex items-center gap-4 rounded-full px-3 py-3 text-slate-400 transition-all hover:bg-white/5 hover:text-white group-hover/sidebar:px-4" href="/dashboard">
                            <BookOpen className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Courses</span>
                        </Link>
                        <a className="flex items-center gap-4 rounded-full px-3 py-3 text-slate-400 transition-all hover:bg-white/5 hover:text-white group-hover/sidebar:px-4" href="#">
                            <Trophy className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Leaderboard</span>
                        </a>
                        <a className="flex items-center gap-4 rounded-full px-3 py-3 text-slate-400 transition-all hover:bg-white/5 hover:text-white group-hover/sidebar:px-4" href="#">
                            <Code className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Snippets</span>
                        </a>
                    </div>
                </div>

                <div className="flex w-full flex-col px-3">
                    <a className="flex items-center gap-4 rounded-full px-3 py-3 text-slate-400 transition-all hover:bg-white/5 hover:text-white group-hover/sidebar:px-4" href="#">
                        <Settings className="w-5 h-5" />
                        <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Settings</span>
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex h-full flex-1 flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
                {/* Header */}
                <header className="glass-panel sticky top-0 z-30 flex h-20 w-full items-center justify-between px-6 py-4 lg:px-10 border-b border-white/5">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold leading-tight text-white lg:text-2xl">
                            Welcome back, <span className="text-[#53d22d]">Cadet</span>
                        </h1>
                        <p className="text-xs text-slate-400 font-mono">System Status: <span className="text-green-400">Online</span></p>
                    </div>

                    {/* HUD */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Streak */}
                        <div className="hidden items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 md:flex">
                            <Flame className="w-5 h-5 text-orange-500 fill-current" />
                            <span className="font-mono text-sm font-bold text-orange-400">{streakDays} Days</span>
                        </div>

                        {/* XP */}
                        <div className="hidden items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 md:flex">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="font-mono text-sm font-bold text-yellow-400">{xp} XP</span>
                        </div>

                        {/* Profile */}
                        <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800 ring-2 ring-slate-700 transition-all hover:ring-[#53d22d]">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#53d22d] ring-2 ring-[#0f172a]" />
                        </div>
                    </div>
                </header>

                <div className="layout-content-container mx-auto flex w-full max-w-7xl flex-col gap-8 p-6 lg:p-10">
                    {/* Hero Section - Current Lesson */}
                    {currentLesson && (
                        <div className="@container">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1e293b] shadow-2xl group" style={{ boxShadow: '0 0 20px rgba(83, 210, 45, 0.15)' }}>
                                {/* Abstract Code Background */}
                                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent z-10" />
                                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80")' }} />
                                </div>

                                <div className="relative z-20 flex flex-col justify-between gap-8 p-6 md:flex-row md:items-end md:p-10">
                                    <div className="flex max-w-2xl flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <span className="rounded-full bg-[#53d22d]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#53d22d] ring-1 ring-[#53d22d]/50">Current Mission</span>
                                        </div>

                                        <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                                            {currentLesson.title}
                                        </h2>

                                        {currentLesson.description && (
                                            <p className="max-w-lg text-sm text-slate-300 md:text-base">
                                                {currentLesson.description}
                                            </p>
                                        )}

                                        {/* Progress */}
                                        <div className="mt-2 flex w-full max-w-md flex-col gap-2">
                                            <div className="flex justify-between text-xs font-medium text-slate-400">
                                                <span className="font-mono">Course Progress</span>
                                                <span className="font-mono text-[#53d22d]">{progressPercent}%</span>
                                            </div>
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700/50">
                                                <div className="h-full rounded-full bg-[#53d22d]" style={{ width: `${progressPercent}%`, boxShadow: '0 0 10px #53d22d' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <Link href={`/python/${currentLesson.external_id}`}>
                                        <button className="relative flex h-12 w-full min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-[#53d22d] text-[#0f172a] font-bold transition-all hover:scale-105 md:w-auto" style={{ boxShadow: '0 0 20px rgba(83,210,45,0.4)' }}>
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Play className="w-5 h-5" />
                                                Continue Mission
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Layout Grid */}
                    <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                        {/* Left Column: Mission Map (Modules) */}
                        <div className="xl:col-span-2 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Mission Map</h3>
                                <span className="text-xs font-mono text-slate-400">{course.title}</span>
                            </div>

                            {/* Module Timeline */}
                            {modules.length > 0 ? (
                                <div className="space-y-6">
                                    {modules.map((moduleGroup, idx) => {
                                        const moduleLessons = moduleGroup.lessons
                                        const moduleCompleted = moduleLessons.every(l => l.isCompleted)
                                        const moduleActive = moduleLessons.some(l => !l.isCompleted && !l.isLocked)
                                        const moduleLocked = moduleLessons.every(l => l.isLocked)

                                        return (
                                            <div key={moduleGroup.module.id || idx} className="relative flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#1e293b]/50 p-6 backdrop-blur-sm">
                                                {/* Module Header */}
                                                <div className="flex items-center gap-4">
                                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-4 ring-[#0f172a] ${moduleCompleted ? 'bg-[#53d22d] text-[#0f172a]' :
                                                        moduleActive ? 'bg-[#0f172a] border-2 border-[#53d22d] text-[#53d22d] animate-pulse' :
                                                            'bg-slate-800 border border-slate-600 text-slate-500'
                                                        }`} style={moduleCompleted ? { boxShadow: '0 0 15px rgba(83,210,45,0.4)' } : moduleActive ? { boxShadow: '0 0 20px rgba(83,210,45,0.6)' } : {}}>
                                                        {moduleCompleted ? <Check className="w-5 h-5" /> : moduleLocked ? <Lock className="w-5 h-5" /> : <span className="h-2 w-2 rounded-full bg-[#53d22d]" />}
                                                    </div>
                                                    <div>
                                                        <span className={`text-xs font-mono font-bold uppercase tracking-wider ${moduleCompleted ? 'text-[#53d22d]' : moduleActive ? 'text-[#53d22d]' : 'text-slate-500'}`}>
                                                            Module {idx + 1}
                                                        </span>
                                                        <h4 className="text-lg font-bold text-white">{moduleGroup.module.title}</h4>
                                                    </div>
                                                </div>

                                                {/* Lessons in Module */}
                                                <div className="space-y-2 ml-14">
                                                    {moduleLessons.map((lesson, lessonIdx) => (
                                                        <Link key={lesson.id} href={lesson.isLocked ? '#' : `/python/${lesson.external_id}`}>
                                                            <div className={`p-4 rounded-lg border transition-all cursor-pointer ${lesson.isCompleted ? 'border-[#53d22d]/30 bg-[#53d22d]/5 hover:border-[#53d22d]/50' :
                                                                lesson.isLocked ? 'border-slate-700 bg-slate-800/30 opacity-50 cursor-not-allowed' :
                                                                    'border-white/10 bg-white/5 hover:border-[#53d22d]/30'
                                                                }`}>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-3">
                                                                        <span className="text-xs font-mono text-slate-500">L{String(lessonIdx + 1).padStart(2, '0')}</span>
                                                                        <span className="text-sm font-medium text-white">{lesson.title}</span>
                                                                    </div>
                                                                    <div className="flex items-center gap-2">
                                                                        {lesson.isCompleted && <Check className="w-4 h-4 text-[#53d22d]" />}
                                                                        {lesson.isLocked && <Lock className="w-4 h-4 text-slate-500" />}
                                                                        <span className="text-xs font-mono text-slate-400">120 XP</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                // Fallback: Show all lessons if no modules
                                <div className="space-y-2">
                                    {allLessons.map((lesson, idx) => (
                                        <Link key={lesson.id} href={lesson.isLocked ? '#' : `/python/${lesson.external_id}`}>
                                            <div className={`p-4 rounded-lg border transition-all cursor-pointer ${lesson.isCompleted ? 'border-[#53d22d]/30 bg-[#53d22d]/5 hover:border-[#53d22d]/50' :
                                                lesson.isLocked ? 'border-slate-700 bg-slate-800/30 opacity-50 cursor-not-allowed' :
                                                    'border-white/10 bg-white/5 hover:border-[#53d22d]/30'
                                                }`}>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xs font-mono text-slate-500">L{String(idx + 1).padStart(2, '0')}</span>
                                                        <span className="text-sm font-medium text-white">{lesson.title}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {lesson.isCompleted && <Check className="w-4 h-4 text-[#53d22d]" />}
                                                        {lesson.isLocked && <Lock className="w-4 h-4 text-slate-500" />}
                                                        <span className="text-xs font-mono text-slate-400">120 XP</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="p-5 rounded-2xl bg-[#1e293b] border border-white/5 flex flex-col gap-3 hover:border-[#53d22d]/30 transition-colors group">
                                    <div className="flex justify-between items-start">
                                        <div className="h-10 w-10 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] group-hover:text-white group-hover:bg-[#8b5cf6] transition-colors">
                                            <Code className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Completed</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">{completedCount}/{totalLessons}</div>
                                        <div className="text-xs text-slate-400">Lessons completed</div>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-[#1e293b] border border-white/5 flex flex-col gap-3 hover:border-[#53d22d]/30 transition-colors group">
                                    <div className="flex justify-between items-start">
                                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                                            <Trophy className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Progress</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">{progressPercent}%</div>
                                        <div className="text-xs text-slate-400">Course completion</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Quick Stats */}
                        <div className="xl:col-span-1 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Your Stats</h3>
                            </div>

                            {/* XP Card */}
                            <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Zap className="w-8 h-8 text-yellow-400" />
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">{xp} XP</div>
                                        <div className="text-xs text-slate-400">Total Experience</div>
                                    </div>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700/50">
                                    <div className="h-full w-[60%] rounded-full bg-yellow-400" />
                                </div>
                                <p className="text-xs text-slate-400 mt-2">60% to next rank</p>
                            </div>

                            {/* Streak Card */}
                            <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-6">
                                <div className="flex items-center gap-3">
                                    <Flame className="w-8 h-8 text-orange-500 fill-current" />
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">{streakDays} Days</div>
                                        <div className="text-xs text-slate-400">Learning Streak</div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mt-4">Keep it up! You're on fire 🔥</p>
                            </div>

                            {/* Course Info */}
                            <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-6">
                                <h4 className="text-sm font-bold text-slate-300 mb-3 uppercase tracking-wider">Course Info</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Total Lessons</span>
                                        <span className="text-white font-mono">{totalLessons}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Completed</span>
                                        <span className="text-[#53d22d] font-mono">{completedCount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-400">Remaining</span>
                                        <span className="text-slate-300 font-mono">{totalLessons - completedCount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .glass-panel {
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
            `}</style>
        </div>
    )
}
