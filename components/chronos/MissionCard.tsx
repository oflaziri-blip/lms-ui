"use client"

import * as React from "react"
import Link from "next/link"
import { Lock, CheckCircle, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Mission {
    id: string
    external_id: string
    title: string
    description: string | null
    order_index: number
    isLocked?: boolean
    isCompleted?: boolean
    score?: number
    missionId?: string
    era?: {
        id: number
        title: string
        badge: string
    }
}

interface MissionCardProps {
    mission: Mission
    href?: string
    xpReward?: number
    techSpec?: string
}

export function MissionCard({ mission, href, xpReward = 120, techSpec }: MissionCardProps) {
    const isLocked = mission.isLocked ?? false
    const isCompleted = mission.isCompleted ?? false
    const isActive = !isLocked && !isCompleted

    const StatusIcon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle

    const cardContent = (
        <div
            className={cn(
                "group relative rounded-lg border transition-all duration-300 overflow-hidden",
                isLocked && "opacity-60 cursor-not-allowed",
                !isLocked && "cursor-pointer hover:scale-[1.02]"
            )}
            style={{
                backgroundColor: isLocked
                    ? 'rgba(18, 23, 43, 0.3)'
                    : 'rgba(18, 23, 43,0.6)',
                backdropFilter: 'blur(12px)',
                borderColor: isActive
                    ? 'var(--chronos-accent-time)'
                    : isCompleted
                        ? 'var(--chronos-accent-success)'
                        : 'rgba(160, 174, 192, 0.2)',
                boxShadow: isActive && !isLocked
                    ? '0 0 20px var(--chronos-accent-time-glow)'
                    : 'none'
            }}
        >
            <div className="p-4">
                {/* Top Row: Status + Mission ID */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div
                            className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
                            style={{
                                backgroundColor: isLocked
                                    ? 'rgba(255, 51, 102, 0.1)'
                                    : isCompleted
                                        ? 'rgba(0, 255, 136, 0.1)'
                                        : 'rgba(0, 217, 255, 0.1)',
                                color: isLocked
                                    ? 'var(--chronos-alert-danger)'
                                    : isCompleted
                                        ? 'var(--chronos-accent-success)'
                                        : 'var(--chronos-accent-time)'
                            }}
                        >
                            <StatusIcon className="h-4 w-4" strokeWidth={2.5} />
                        </div>

                        {mission.missionId && (
                            <span
                                className="text-xs font-bold uppercase tracking-wider"
                                style={{
                                    fontFamily: 'var(--font-jetbrains-mono)',
                                    color: 'var(--chronos-text-secondary)'
                                }}
                            >
                                {mission.missionId}
                            </span>
                        )}
                    </div>

                    {/* XP Badge */}
                    <div
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                            backgroundColor: 'rgba(57, 255, 20, 0.1)',
                            color: 'var(--chronos-accent-energy)',
                            fontFamily: 'var(--font-jetbrains-mono)'
                        }}
                    >
                        +{xpReward} XP
                    </div>
                </div>

                {/* Mission Title */}
                <h3
                    className="text-lg font-bold mb-1 transition-colors duration-300"
                    style={{
                        fontFamily: 'var(--font-orbitron)',
                        color: isLocked
                            ? 'var(--chronos-text-muted)'
                            : 'var(--chronos-text-primary)'
                    }}
                >
                    {mission.title}
                </h3>

                {/* Tech Spec */}
                {(techSpec || mission.description) && (
                    <p
                        className="text-sm line-clamp-1"
                        style={{
                            fontFamily: 'var(--font-jetbrains-mono)',
                            color: 'var(--chronos-text-secondary)'
                        }}
                    >
                        {techSpec || mission.description}
                    </p>
                )}

                {/* Locked State Message */}
                {isLocked && (
                    <div
                        className="mt-2 text-xs"
                        style={{
                            color: 'var(--chronos-alert-danger)',
                            fontFamily: 'var(--font-jetbrains-mono)'
                        }}
                    >
                        🔒 ENCRYPTED - Complete previous mission
                    </div>
                )}

                {/* Completed State */}
                {isCompleted && mission.score !== undefined && (
                    <div
                        className="mt-2 text-xs font-bold"
                        style={{
                            color: 'var(--chronos-accent-success)',
                            fontFamily: 'var(--font-jetbrains-mono)'
                        }}
                    >
                        ✓ MISSION COMPLETE - Score: {mission.score}%
                    </div>
                )}
            </div>

            {/* Corner accent (active only) */}
            {isActive && !isLocked && (
                <div
                    className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(circle at top right, var(--chronos-accent-time), transparent)`
                    }}
                />
            )}
        </div>
    )

    if (href && !isLocked) {
        return <Link href={href}>{cardContent}</Link>
    }

    return cardContent
}
