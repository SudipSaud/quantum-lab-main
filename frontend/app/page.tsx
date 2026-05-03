'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Bot, CircuitBoard, ArrowRight, AlertCircle, Atom, Zap, BookMarked, Terminal } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import QuantumBackdrop from '@/components/QuantumBackdrop';
import { useBackendHealth } from '@/hooks/useBackendHealth';

const spring = { type: 'spring' as const, stiffness: 300, damping: 26 };

const tiles = [
    {
        href: '/ai-helper',
        title: 'Q-Matrix AI',
        subtitle: 'Quantum Intelligence',
        body: 'Interface with the neural network. Query our advanced 70B parameter LLM for deep insights into quantum algorithms, state vectors, and VQE optimizations.',
        icon: Bot,
        accentFrom: '#22c55e',
        accentTo: '#15803d',
        glowColor: 'rgba(34, 197, 94, 0.25)',
        chipColor: 'rgba(34, 197, 94, 0.1)',
        chipText: '#22c55e',
        stat: 'Online',
        statIcon: Terminal,
    },
    {
        href: '/study',
        title: 'Archives',
        subtitle: 'Knowledge Base',
        body: 'Access the classified curriculum. From fundamental superposition mechanics to advanced error correction protocols. Learn the secrets of the Matrix.',
        icon: BookOpen,
        accentFrom: '#10b981',
        accentTo: '#047857',
        glowColor: 'rgba(16, 185, 129, 0.25)',
        chipColor: 'rgba(16, 185, 129, 0.1)',
        chipText: '#10b981',
        stat: '5 Modules',
        statIcon: BookMarked,
    },
    {
        href: '/ai-playground',
        title: 'Simulation Grid',
        subtitle: 'Logic Composer',
        body: 'Construct and simulate quantum circuits in real-time. Drag and drop gates onto the virtual PCB and execute the Statevector engine.',
        icon: CircuitBoard,
        accentFrom: '#14b8a6',
        accentTo: '#0f766e',
        glowColor: 'rgba(20, 184, 166, 0.25)',
        chipColor: 'rgba(20, 184, 166, 0.1)',
        chipText: '#14b8a6',
        stat: 'Active',
        statIcon: Zap,
    },
] as const;

export default function HomePage() {
    const backendStatus = useBackendHealth();
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="flex h-screen overflow-hidden font-sans bg-[#050505] text-white selection:bg-[#22c55e]/30">
            <Sidebar
                collapsed={sidebarCollapsed}
                onMouseEnter={() => setSidebarCollapsed(false)}
                onMouseLeave={() => setSidebarCollapsed(true)}
                backendStatus={backendStatus}
            />

            <main
                className="relative flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300"
                style={{ marginLeft: sidebarCollapsed ? '64px' : '232px' }}
            >
                <QuantumBackdrop />
                
                {/* Floating animated elements */}
                <motion.div 
                    style={{ y: y1, opacity: opacity1 }}
                    className="absolute right-0 top-0 -z-10 pointer-events-none"
                >
                    <div className="w-[600px] h-[600px] rounded-full blur-[120px] bg-[#22c55e]/10 translate-x-1/2 -translate-y-1/4" />
                </motion.div>
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute left-1/4 top-1/4 -z-10 pointer-events-none opacity-20"
                >
                    <div className="w-96 h-96 border border-[#22c55e]/20 rounded-full border-dashed" />
                </motion.div>

                <div className="relative z-10 min-h-full flex flex-col">
                    <Header backendStatus={backendStatus} activeLabel="SYSTEM / HOME" />

                    <div className="flex-1 mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-20 flex flex-col justify-center">
                        {backendStatus === 'offline' ? (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-12 flex items-center gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 px-5 py-4 text-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)] backdrop-blur-md"
                            >
                                <AlertCircle className="shrink-0" size={18} />
                                <p className="text-sm">
                                    <span className="font-bold tracking-widest uppercase text-xs mr-2">System Alert:</span>
                                    Simulation engine offline. Check connection to the mainframe.
                                </p>
                            </motion.div>
                        ) : null}

                        {/* Hero */}
                        <motion.header 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ ...spring, duration: 1.2 }} 
                            className="mb-20 text-center sm:text-left relative"
                        >
                            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <Atom size={16} className="text-[#22c55e] animate-spin-slow" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#22c55e]">
                                    Terminal Accessed
                                </span>
                            </div>
                            
                            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
                                ENTER THE <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] via-[#22c55e] to-[#059669] drop-shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                                    Q-MATRIX
                                </span>
                            </h1>
                            
                            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-zinc-400 font-light border-l-2 border-[#22c55e]/50 pl-6 mx-auto sm:mx-0">
                                Connect to the quantum simulation grid. Harness the power of entanglement, superposition, and machine learning to construct reality at the subatomic level.
                            </p>
                            
                            <div className="mt-10 flex flex-wrap gap-4 justify-center sm:justify-start">
                                <Link href="/ai-playground">
                                    <button className="relative group px-8 py-4 bg-[#22c55e]/10 border border-[#22c55e]/40 rounded-lg text-[#22c55e] font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#22c55e]/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden">
                                        <span className="relative z-10">Initialize Grid</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                    </button>
                                </Link>
                                <Link href="/study">
                                    <button className="px-8 py-4 bg-transparent border border-zinc-700 rounded-lg text-zinc-300 font-bold uppercase tracking-widest text-xs transition-all hover:border-zinc-500 hover:text-white">
                                        Access Archives
                                    </button>
                                </Link>
                            </div>
                        </motion.header>

                        {/* Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                            {tiles.map((tile, i) => (
                                <motion.div
                                    key={tile.href}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ ...spring, delay: 0.1 * (i + 1) }}
                                >
                                    <Link href={tile.href} className="group block h-full">
                                        <article
                                            className="relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 bg-[#0a0a0a] border border-zinc-800/50 hover:border-[#22c55e]/50"
                                            style={{
                                                boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.05)'
                                            }}
                                        >
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent group-hover:via-[#22c55e] transition-colors duration-500" />
                                            
                                            <div
                                                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                                                style={{ background: `radial-gradient(circle, ${tile.accentFrom}, transparent)` }}
                                            />

                                            <div
                                                className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg border border-white/10 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                                style={{ background: `linear-gradient(135deg, ${tile.accentFrom} 0%, ${tile.accentTo} 100%)` }}
                                            />
                                                <tile.icon size={26} className="absolute ml-4 mt-4 text-white z-20 pointer-events-none" />

                                            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 w-fit border border-white/5"
                                                style={{ background: tile.chipColor }}>
                                                <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: tile.chipText }} />
                                                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: tile.chipText }}>
                                                    {tile.subtitle}
                                                </span>
                                            </div>

                                            <h2 className="mb-3 text-2xl font-bold tracking-tight text-white relative z-10">
                                                {tile.title}
                                            </h2>
                                            <p className="flex-1 text-sm leading-relaxed text-zinc-400 relative z-10 group-hover:text-zinc-300 transition-colors">
                                                {tile.body}
                                            </p>

                                            <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 relative z-10">
                                                <div className="flex items-center gap-2">
                                                    <tile.statIcon size={14} style={{ color: tile.chipText }} />
                                                    <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: tile.chipText, opacity: 0.8 }}>
                                                        {tile.stat}
                                                    </span>
                                                </div>
                                                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all group-hover:gap-3"
                                                    style={{ color: tile.chipText }}>
                                                    Execute <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom info row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-16 flex flex-wrap items-center justify-center sm:justify-start gap-8 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-5 backdrop-blur-md"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
                                Tech Stack
                            </span>
                            <div className="w-px h-4 bg-white/10 hidden sm:block" />
                            {[
                                { label: 'Qiskit Engine', color: '#22c55e' },
                                { label: 'Llama 3.3', color: '#10b981' },
                                { label: 'Next.js 15', color: '#14b8a6' },
                                { label: 'FastAPI', color: '#059669' },
                            ].map((badge) => (
                                <div key={badge.label} className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full" style={{ background: badge.color, boxShadow: `0 0 8px ${badge.color}` }} />
                                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                        {badge.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </main>
        </div>
    );
}
