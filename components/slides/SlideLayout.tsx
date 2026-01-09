/**
 * Base Slide Layout Component
 * Provides consistent styling and structure for all lesson slides
 */

import React from 'react';

interface SlideLayoutProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    variant?: 'default' | 'title' | 'concept' | 'code' | 'challenge';
    background?: string;
}

export function SlideLayout({
    title,
    subtitle,
    children,
    variant = 'default',
    background = 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900'
}: SlideLayoutProps) {
    return (
        <div className={`min-h-screen w-full ${background} text-white p-12 flex flex-col`}>
            {/* Header */}
            {(title || subtitle) && (
                <div className="mb-8">
                    {title && (
                        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {title}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="text-xl text-gray-400 font-light">{subtitle}</p>
                    )}
                </div>
            )}

            {/* Content */}
            <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-5xl">
                    {children}
                </div>
            </div>

            {/* Footer - Slide metadata can go here */}
            <div className="mt-auto pt-8 text-center text-gray-500 text-sm">
                <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span>CHRONOS COMMAND INTERFACE</span>
                </div>
            </div>
        </div>
    );
}

// Variants for different slide types
export function TitleSlide({ children }: { children: React.ReactNode }) {
    return (
        <SlideLayout background="bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950">
            <div className="text-center space-y-6">
                {children}
            </div>
        </SlideLayout>
    );
}

export function ConceptSlide({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <SlideLayout title={title} background="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950">
            {children}
        </SlideLayout>
    );
}

export function CodeSlide({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <SlideLayout title={title} background="bg-gradient-to-br from-gray-950 via-slate-950 to-black">
            {children}
        </SlideLayout>
    );
}
