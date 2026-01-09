/**
 * Styled Terminal Component for Lesson Slides
 * Displays code with syntax highlighting and terminal aesthetics
 */

import React from 'react';

interface TerminalProps {
    title?: string;
    children: React.ReactNode;
    variant?: 'default' | 'error' | 'success';
    className?: string;
}

export function Terminal({
    title = 'Python Terminal',
    children,
    variant = 'default',
    className = ''
}: TerminalProps) {
    const variantStyles = {
        default: 'border-green-500/30 bg-black/90',
        error: 'border-red-500/30 bg-red-950/20',
        success: 'border-emerald-500/30 bg-emerald-950/20'
    };

    return (
        <div className={`rounded-lg border-2 overflow-hidden ${variantStyles[variant]} ${className}`}>
            {/* Terminal Header */}
            <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-700/50 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-400 text-sm font-mono ml-2">{title}</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-green-400">
                {children}
            </div>
        </div>
    );
}

interface CodeLineProps {
    prompt?: string;
    children: React.ReactNode;
    output?: boolean;
}

export function CodeLine({ prompt = '>>>', children, output = false }: CodeLineProps) {
    if (output) {
        return <div className="text-gray-300 ml-4">{children}</div>;
    }

    return (
        <div className="flex gap-2">
            <span className="text-cyan-400">{prompt}</span>
            <span className="text-green-400">{children}</span>
        </div>
    );
}

interface TerminalErrorProps {
    type?: string;
    message: string;
}

export function TerminalError({ type = 'SyntaxError', message }: TerminalErrorProps) {
    return (
        <div className="text-red-400">
            <div className="font-bold">{type}:</div>
            <div className="ml-4">{message}</div>
        </div>
    );
}
