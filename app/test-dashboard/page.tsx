"use client"

import React from 'react';
import { Home, BookOpen, Trophy, Code, Settings, Flame, Zap, Clock, Play, Check, Lock, Terminal as TerminalIcon, Bug, Send } from 'lucide-react';

export default function TestDashboard() {
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
                            Cyberpunk<span className="text-[#53d22d]">Pro</span>
                        </span>
                    </div>

                    {/* Nav Items */}
                    <div className="flex w-full flex-col gap-2 px-3">
                        <a className="flex items-center gap-4 rounded-full bg-[#53d22d]/10 px-3 py-3 text-[#53d22d] transition-all hover:bg-[#53d22d]/20 hover:shadow-[0_0_15px_rgba(83,210,45,0.3)] group-hover/sidebar:px-4" href="#">
                            <Home className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Home</span>
                        </a>
                        <a className="flex items-center gap-4 rounded-full px-3 py-3 text-slate-400 transition-all hover:bg-white/5 hover:text-white group-hover/sidebar:px-4" href="#">
                            <BookOpen className="w-5 h-5" />
                            <span className="whitespace-nowrap font-medium opacity-0 transition-opacity duration-300 group-hover/sidebar:opacity-100">Courses</span>
                        </a>
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
                            Welcome back, <span className="text-[#53d22d]">Neo</span>
                        </h1>
                        <p className="text-xs text-slate-400 font-mono">System Status: <span className="text-green-400">Online</span></p>
                    </div>

                    {/* HUD */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        {/* Streak */}
                        <div className="hidden items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 md:flex">
                            <Flame className="w-5 h-5 text-orange-500 fill-current" />
                            <span className="font-mono text-sm font-bold text-orange-400">12 Days</span>
                        </div>

                        {/* XP */}
                        <div className="hidden items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 md:flex">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="font-mono text-sm font-bold text-yellow-400">2,450 XP</span>
                        </div>

                        {/* Profile */}
                        <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800 ring-2 ring-slate-700 transition-all hover:ring-[#53d22d]">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#53d22d] ring-2 ring-[#0f172a]" />
                        </div>
                    </div>
                </header>

                <div className="layout-content-container mx-auto flex w-full max-w-7xl flex-col gap-8 p-6 lg:p-10">
                    {/* Hero Section */}
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
                                        <span className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                                            <Clock className="w-3.5 h-3.5" /> 25m remaining
                                        </span>
                                    </div>

                                    <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                                        Control Flow: <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Loops & Logic</span>
                                    </h2>

                                    <p className="max-w-lg text-sm text-slate-300 md:text-base">
                                        Master the art of 'for' and 'while' loops to manipulate the flow of execution. Your code controls the outcome.
                                    </p>

                                    {/* Progress */}
                                    <div className="mt-2 flex w-full max-w-md flex-col gap-2">
                                        <div className="flex justify-between text-xs font-medium text-slate-400">
                                            <span className="font-mono">Progress</span>
                                            <span className="font-mono text-[#53d22d]">45%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700/50">
                                            <div className="h-full w-[45%] rounded-full bg-[#53d22d]" style={{ boxShadow: '0 0 10px #53d22d' }} />
                                        </div>
                                    </div>
                                </div>

                                <button className="relative flex h-12 w-full min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-[#53d22d] text-[#0f172a] font-bold transition-all hover:scale-105 md:w-auto" style={{ boxShadow: '0 0 20px rgba(83,210,45,0.4)' }}>
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Play className="w-5 h-5" />
                                        Continue Lesson 5
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Layout Grid */}
                    <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
                        {/* Left Column: Curriculum Map */}
                        <div className="xl:col-span-2 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Mission Map</h3>
                                <button className="text-xs font-mono text-slate-400 hover:text-[#53d22d] transition-colors">View Full Map →</button>
                            </div>

                            {/* Timeline Container */}
                            <div className="relative flex flex-col gap-8 rounded-2xl border border-white/5 bg-[#1e293b]/50 p-6 backdrop-blur-sm lg:flex-row lg:items-start lg:justify-between lg:gap-4 lg:py-12">
                                {/* Connecting Line (Desktop) */}
                                <div className="absolute left-6 top-12 hidden h-0.5 w-[90%] -translate-y-1/2 bg-slate-700 lg:block" />
                                <div className="absolute left-6 top-12 hidden h-0.5 w-[45%] -translate-y-1/2 bg-gradient-to-r from-[#53d22d] to-slate-700 lg:block" style={{ boxShadow: '0 0 10px rgba(83,210,45,0.3)' }} />

                                {/* Connecting Line (Mobile) */}
                                <div className="absolute left-[39px] top-6 bottom-6 block w-0.5 bg-slate-700 lg:hidden" />

                                {/* Module 1: Completed */}
                                <div className="relative z-10 flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-4 lg:w-1/3 group cursor-pointer">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#53d22d] text-[#0f172a] ring-4 ring-[#0f172a] transition-transform group-hover:scale-110" style={{ boxShadow: '0 0 15px rgba(83,210,45,0.4)' }}>
                                        <Check className="w-4 h-4 font-bold" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-mono text-[#53d22d] font-bold uppercase tracking-wider mb-1">Module 01</span>
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#53d22d] transition-colors">Introduction</h4>
                                        <p className="text-xs text-slate-400 mt-1">Variables & Basic Types</p>
                                    </div>
                                </div>

                                {/* Module 2: Active */}
                                <div className="relative z-10 flex flex-row items-center gap-4 lg:flex-col lg:items-center lg:text-center lg:gap-4 lg:w-1/3 group cursor-pointer">
                                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f172a] border-2 border-[#53d22d] text-[#53d22d] ring-4 ring-[#0f172a] animate-pulse" style={{ boxShadow: '0 0 20px rgba(83,210,45,0.6)' }}>
                                        <span className="h-2 w-2 rounded-full bg-[#53d22d]" />
                                    </div>
                                    <div className="flex flex-col lg:items-center">
                                        <span className="text-xs font-mono text-[#53d22d] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#53d22d] animate-ping" />
                                            Module 02
                                        </span>
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#53d22d] transition-colors">Control Flow</h4>
                                        <p className="text-xs text-slate-400 mt-1">Loops, If/Else, Logic</p>
                                    </div>
                                </div>

                                {/* Module 3: Locked */}
                                <div className="relative z-10 flex flex-row items-center gap-4 lg:flex-col lg:items-end lg:text-right lg:gap-4 lg:w-1/3 group opacity-50 hover:opacity-100 transition-opacity">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-slate-500 ring-4 ring-[#0f172a]">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col lg:items-end">
                                        <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider mb-1">Module 03</span>
                                        <h4 className="text-lg font-bold text-slate-300">Data Structures</h4>
                                        <p className="text-xs text-slate-500 mt-1">Lists, Dictionaries, Sets</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats / Grid Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-[#1e293b] border border-white/5 flex flex-col gap-3 hover:border-[#53d22d]/30 transition-colors group">
                                    <div className="flex justify-between items-start">
                                        <div className="h-10 w-10 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] group-hover:text-white group-hover:bg-[#8b5cf6] transition-colors">
                                            <Code className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Weekly Goal</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">1,240</div>
                                        <div className="text-xs text-slate-400">Lines of code written</div>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-[#1e293b] border border-white/5 flex flex-col gap-3 hover:border-[#53d22d]/30 transition-colors group">
                                    <div className="flex justify-between items-start">
                                        <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                                            <Bug className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Accuracy</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-white font-mono">94%</div>
                                        <div className="text-xs text-slate-400">Challenge success rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Daily Challenge */}
                        <div className="xl:col-span-1 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-bold text-white">Daily Challenge</h3>
                                <span className="text-xs font-mono rounded bg-[#8b5cf6]/20 text-[#8b5cf6] px-2 py-1">+50 XP</span>
                            </div>

                            <div className="flex flex-col h-full rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-lg">
                                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono ml-2">challenge_05.py</span>
                                </div>

                                <div className="p-4 flex-1 font-mono text-sm overflow-x-auto">
                                    <pre className="text-slate-300">
                                        <span className="text-[#8b5cf6]">def</span> <span className="text-blue-400">calculate_sum</span>(numbers):
                                        <span className="text-slate-500"># Fix the bug below</span>
                                        total = <span className="text-orange-400">0</span>
                                        <span className="text-[#8b5cf6]">for</span> n <span className="text-[#8b5cf6]">in</span> numbers:
                                        total -= n  <span className="text-red-400">&lt;-- Bug</span>
                                        <span className="text-[#8b5cf6]">return</span> total

                                        <span className="text-slate-500"># Input: [1, 2, 3]</span>
                                        <span className="text-slate-500"># Expected: 6</span>
                                    </pre>
                                </div>

                                <div className="p-4 bg-white/5 border-t border-white/5 flex gap-3">
                                    <input
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#53d22d] focus:ring-1 focus:ring-[#53d22d] placeholder-slate-600 font-mono"
                                        placeholder="Type correction..."
                                        type="text"
                                    />
                                    <button className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 flex items-center justify-center transition-colors">
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Mini Leaderboard Widget */}
                            <div className="rounded-2xl bg-[#1e293b] border border-white/5 p-5">
                                <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Top Students</h4>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xs font-bold text-yellow-500 w-4">01</div>
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#53d22d] to-cyan-500" />
                                            <span className="text-sm font-medium text-white">Alex_Code</span>
                                        </div>
                                        <span className="text-xs font-mono text-[#53d22d]">3,240 XP</span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xs font-bold text-slate-400 w-4">02</div>
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                                            <span className="text-sm font-medium text-white">Sarah.py</span>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400">3,100 XP</span>
                                    </div>

                                    <div className="flex items-center justify-between opacity-50">
                                        <div className="flex items-center gap-3">
                                            <div className="text-xs font-bold text-slate-500 w-4">03</div>
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                                            <span className="text-sm font-medium text-white">Ghost</span>
                                        </div>
                                        <span className="text-xs font-mono text-slate-400">2,850 XP</span>
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
    );
}
