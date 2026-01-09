"use client"

import { cn } from "@/lib/utils"

interface LessonContentProps {
  content: string
  className?: string
}

export function LessonContent({ content, className }: LessonContentProps) {
  return (
    <div className={cn("prose prose-slate dark:prose-invert max-w-none", className)}>
      <div
        className="prose-headings:font-semibold prose-p:text-foreground/90 prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#1e1e1e] prose-pre:text-green-400"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
