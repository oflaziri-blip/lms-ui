/**
 * Character Quote Component
 * Displays quotes from Chronos instructors with avatar and styling
 */

import React from 'react';
import { User, Wrench, LucideIcon } from 'lucide-react';

interface CharacterQuoteProps {
    character: 'aria' | 'kael';
    children: React.ReactNode;
    title?: string;
}

const characters = {
    aria: {
        name: 'Commander Aria',
        role: 'Mission Overseer',
        icon: User,
        borderColor: 'border-cyan-500',
        bgColor: 'bg-cyan-500/10',
        iconBg: 'bg-cyan-500/20',
        iconColor: 'text-cyan-400',
        nameColor: 'text-cyan-400'
    },
    kael: {
        name: 'Chief Engineer Kael',
        role: 'Protocol Architect',
        icon: Wrench,
        borderColor: 'border-[#53d22d]',
        bgColor: 'bg-[#53d22d]/10',
        iconBg: 'bg-[#53d22d]/20',
        iconColor: 'text-[#53d22d]',
        nameColor: 'text-[#53d22d]'
    }
};

export function CharacterQuote({ character, children, title }: CharacterQuoteProps) {
    const char = characters[character];
    const Icon = char.icon;

    return (
        <div className={`p-6 ${char.bgColor} border-l-4 ${char.borderColor} rounded-r-xl`}>
            <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-full ${char.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-7 h-7 ${char.iconColor}`} />
                </div>
                <div>
                    <h3 className={`${char.nameColor} font-bold text-lg`}>{char.name}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-wide">{char.role}</p>
                </div>
            </div>
            {title && (
                <h4 className={`${char.nameColor} font-bold text-xl mb-3`}>{title}</h4>
            )}
            <div className="text-gray-300 leading-relaxed">
                {children}
            </div>
        </div>
    );
}

/**
 * Pro Tip Component (Kael-specific shorthand)
 */
export function ProTip({ children }: { children: React.ReactNode }) {
    return (
        <CharacterQuote character="kael" title="💡 PRO TIP">
            {children}
        </CharacterQuote>
    );
}

/**
 * Real World Example (Aria-specific shorthand)
 */
export function RealWorldExample({ children }: { children: React.ReactNode }) {
    return (
        <CharacterQuote character="aria" title="🌍 REAL-WORLD APPLICATION">
            {children}
        </CharacterQuote>
    );
}
