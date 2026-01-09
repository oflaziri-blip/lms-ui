"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HUDHeaderProps {
    rank: string
    xp: number
    maxXp: number
    timelineStability: number
}

export function HUDHeader({ rank, xp, maxXp, timelineStability }: HUDHeaderProps) {
    const xpPercentage = (xp / maxXp) * 100
    const stabilityPercentage = timelineStability

    return (
        <div className="sticky top-0 z-50 border-b" style={{
            backgroundColor: 'var(--chronos-bg-void)',
            borderColor: 'var(--chronos-accent-time-glow)'
        }}>
            <div className="max-w-7xl mx-auto px-4 py-3">
                {/* Top Row: Logo + Stats */}
                <div className="flex items-center justify-between mb-2">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                            background: `linear-gradient(135deg, var(--chronos-accent-time), var(--chronos-accent-success))`
                        }}>
                            <span className="text-white font-bold text-sm">⏱️</span>
                        </div>
                        <h1
                            className="text-xl font-bold tracking-wider uppercase"
                            style={{
                                fontFamily: 'var(--font-orbitron)',
                                color: 'var(--chronos-text-primary)'
                            }}
                        >
                            CHRONOS COMMAND
                        </h1>
                    </div>

                    {/* Right: Rank + XP */}
                    <div className="flex items-center gap-4">
                        {/* Rank Badge */}
                        <div
                            className="px-4 py-1.5 rounded-full border"
                            style={{
                                backgroundColor: 'rgba(0, 217, 255, 0.1)',
                                borderColor: 'var(--chronos-accent-time)',
                                color: 'var(--chronos-accent-time)'
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">🏅</span>
                                <span className="font-semibold text-sm" style={{ fontFamily: 'var(--font-orbitron)' }}>
                                    {rank}
                                </span>
                            </div>
                        </div>

                        {/* XP Counter */}
                        <div
                            className="px-4 py-1.5 rounded-full border"
                            style={{
                                backgroundColor: 'rgba(57, 255, 20, 0.1)',
                                borderColor: 'var(--chronos-accent-energy)',
                                color: 'var(--chronos-accent-energy)'
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">⚡</span>
                                <span className="font-mono font-semibold text-sm">
                                    XP: {xp} / {maxXp}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Timeline Stability Meter */}
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span
                            className="text-xs font-semibold uppercase tracking-wide"
                            style={{
                                color: 'var(--chronos-text-secondary)',
                                fontFamily: 'var(--font-jetbrains-mono)'
                            }}
                        >
                            Timeline Stability
                        </span>
                        <span
                            className="text-xs font-bold"
                            style={{ color: 'var(--chronos-accent-success)' }}
                        >
                            {stabilityPercentage}%
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 rounded-full overflow-hidden" style={{
                        backgroundColor: 'var(--chronos-bg-nebula)'
                    }}>
                        <div
                            className="absolute top-0 left-0 h-full transition-all duration-500 rounded-full"
                            style={{
                                width: `${stabilityPercentage}%`,
                                background: `linear-gradient(90deg, var(--chronos-accent-time), var(--chronos-accent-success))`,
                                boxShadow: '0 0 10px var(--chronos-accent-time-glow)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
