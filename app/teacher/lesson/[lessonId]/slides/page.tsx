"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { lesson01Slides } from "@/components/slides/lesson01-slides"

interface SlidesViewerProps {
    params: Promise<{ lessonId: string }>
}

export default function LessonSlidesViewer({ params }: SlidesViewerProps) {
    const router = useRouter()
    const [lessonId, setLessonId] = React.useState<string>("")
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [slides, setSlides] = React.useState<any[]>([])

    React.useEffect(() => {
        async function loadParams() {
            const { lessonId: id } = await params
            setLessonId(id)

            // Select slides based on lesson ID
            // In a real app, this might be a dynamic import or registry
            if (id === 'lesson_01') {
                setSlides(lesson01Slides)
            } else if (id === 'lesson_02') {
                const { lesson02Slides } = await import("@/components/slides/lesson02-slides")
                setSlides(lesson02Slides)
            } else if (id === 'lesson_03') {
                const { lesson03Slides } = await import("@/components/slides/lesson03-slides")
                setSlides(lesson03Slides)
            } else if (id === 'lesson_04') {
                const { lesson04Slides } = await import("@/components/slides/lesson04-slides")
                setSlides(lesson04Slides)
            } else if (id === 'lesson_05') {
                const { lesson05Slides } = await import("@/components/slides/lesson05-slides-index")
                setSlides(lesson05Slides)
            } else {
                setSlides([])
            }

            setLoading(false)
        }
        loadParams()
    }, [params])

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentSlide, slides])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-white">Loading slides...</p>
            </div>
        )
    }

    // Fix: Ensure we don't access out of bounds if switching lessons
    const CurrentSlideComponent = slides[currentSlide]?.component

    if (!CurrentSlideComponent) {
        return (
            <div className="min-h-screen p-6 bg-gray-900">
                <Button variant="ghost" onClick={() => router.back()}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back
                </Button>
                <div className="max-w-2xl mx-auto p-8 mt-4 text-white">
                    <h2 className="text-xl font-bold mb-2">Slides Not Found</h2>
                    <p className="text-gray-400">
                        {slides.length === 0
                            ? `No slides available for lesson: ${lessonId}`
                            : "Slide component not found"}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Render Current Slide Component */}
            <div className="relative">
                <CurrentSlideComponent />
            </div>

            {/* Floating Navigation Overlay */}
            <div className="fixed top-6 left-6 z-50">
                <Button
                    variant="ghost"
                    onClick={() => router.back()}
                    className="bg-black/50 hover:bg-black/70 text-white backdrop-blur"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Exit Slides
                </Button>
            </div>

            {/* Navigation Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cyan-500/30 bg-black/80 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-sm text-cyan-400 font-mono">
                        {slides[currentSlide]?.phase} • Slide {currentSlide + 1}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={prevSlide}
                            disabled={currentSlide === 0}
                            className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                        >
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                        </Button>

                        <div className="text-sm font-mono text-gray-400">
                            {currentSlide + 1} / {slides.length}
                        </div>

                        <Button
                            size="sm"
                            onClick={nextSlide}
                            disabled={currentSlide === slides.length - 1}
                            className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/30"
                        >
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                    </div>

                    <div className="text-sm text-gray-500 font-mono">
                        Use ← → keys to navigate
                    </div>
                </div>
            </div>
        </div>
    )
}
