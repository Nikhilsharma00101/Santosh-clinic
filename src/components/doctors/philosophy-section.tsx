"use client";

import { motion } from "framer-motion";
import { Heart, Microscope, Infinity as InfinityIcon, Target, Sparkles } from "lucide-react";
import { memo } from "react";

const NoiseOverlay = memo(() => (
    <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none select-none z-0"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            transform: "translateZ(0)" // Force GPU layer
        }}
    />
));
NoiseOverlay.displayName = "NoiseOverlay";

export function PhilosophySection() {
    return (
        <section className="relative min-h-screen py-32 bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-center">
            {/* Section Header - Floating */}
            <div className="container mx-auto px-4 mb-24 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <span className="text-neon-cyan font-mono text-sm tracking-[0.5em] uppercase mb-4 block pl-1">Core Philosophy</span>
                        <h3 className="text-6xl md:text-9xl font-display font-medium leading-[0.8] tracking-tighter text-white">
                            UNBROKEN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-transparent opacity-50">PROMISES.</span>
                        </h3>
                    </div>
                    <p className="max-w-md text-gray-500 text-lg md:text-xl font-light leading-relaxed border-l-2 border-white/10 pl-6">
                        Healthcare isn&apos;t just a service; it&apos;s a sacred pact.
                        <span className="text-white block mt-2">Here is what we stand for.</span>
                    </p>
                </motion.div>
            </div>

            {/* The Shard Accordion - Performance Optimized */}
            <div className="w-full h-auto md:h-[700px] relative z-20 px-4 md:px-0 transform-gpu">
                {/* Single shared noise overlay for all shards to save LCP/CPU */}
                <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
                    <NoiseOverlay />
                </div>

                {/* Desktop: Skewed Accordion */}
                <div className="hidden md:flex w-full h-full gap-2 px-12 transition-all duration-500 ease-out">
                    {[
                        {
                            id: "01",
                            label: "FAMILY",
                            desc: "We listen to you and care for you like our own kin. No rushing, just genuine care.",
                            sub: "Patients First",
                            stat: "15k+ Families",
                            icon: Heart,
                            grad: "from-neon-pink/80 to-purple-900/80"
                        },
                        {
                            id: "02",
                            label: "TRUST",
                            desc: "We use the best tools to find the real problem and fix it correctly the first time.",
                            sub: "Right Diagnosis",
                            stat: "99% Success",
                            icon: Microscope,
                            grad: "from-neon-blue/80 to-blue-900/80"
                        },
                        {
                            id: "03",
                            label: "SUPPORT",
                            desc: "Day or night, we are here. From checkups to emergencies, we never leave your side.",
                            sub: "Always Open",
                            stat: "24/7 Avail.",
                            icon: InfinityIcon,
                            grad: "from-neon-mint/80 to-teal-900/80"
                        },
                        {
                            id: "04",
                            label: "SKILL",
                            desc: "Our unmatched team of experts gives their absolute best for your health.",
                            sub: "Top Experts",
                            stat: "25+ Yrs Exp.",
                            icon: Target,
                            grad: "from-amber-400/80 to-orange-900/80"
                        }
                    ].map((item) => (
                        <div
                            key={item.id}
                            className="relative flex-1 group hover:flex-[3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-3xl will-change-[flex-grow] border-r border-white/5 last:border-r-0"
                        >
                            {/* The Glass Panel */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.grad} opacity-30 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity`} />
                            <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 rounded-3xl" />

                            {/* Content Container */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                {/* Top Metadata */}
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-6xl font-display font-bold text-white/10 group-hover:text-white/30 transition-colors duration-500">
                                            {item.id}
                                        </span>
                                        {/* Logo/Design Element */}
                                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 -translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1 inline-flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                                <span className="text-xs font-bold tracking-widest uppercase">{item.sub}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-16 h-16 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/20 transition-all duration-500 rotate-12 group-hover:rotate-0 shadow-2xl">
                                        <item.icon size={28} />
                                    </div>
                                </div>

                                {/* Bottom Content - Rotate/Reveal */}
                                <div className="relative transform-gpu">
                                    <h4 className="text-5xl font-bold text-white mb-6 origin-bottom-left group-hover:scale-105 transition-transform duration-700 leading-none">
                                        {item.label}
                                    </h4>

                                    <div className="overflow-hidden">
                                        <p className="text-xl text-gray-200 opacity-80 font-light leading-relaxed max-w-sm mb-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Stat Badge Design */}
                                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 translate-y-4 group-hover:translate-y-0">
                                        <div className="h-px w-12 bg-white/40" />
                                        <div className="flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-neon-cyan" />
                                            <span className="text-lg font-bold text-white tracking-wide">{item.stat}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile: Stacked Glass Deck */}
                <div className="md:hidden space-y-4">
                    {[
                        { id: "01", label: "FAMILY", desc: "We listen and care like kin. Genuine care always.", stat: "15k+ Families", icon: Heart, color: "text-neon-pink" },
                        { id: "02", label: "TRUST", desc: "Right diagnosis, fixed correctly, first time.", stat: "99% Success", icon: Microscope, color: "text-neon-blue" },
                        { id: "03", label: "SUPPORT", desc: "Here for you 24/7. Never leaving your side.", stat: "24/7 Support", icon: InfinityIcon, color: "text-neon-mint" },
                        { id: "04", label: "SKILL", desc: "Top experts giving their best for your health.", stat: "25+ Yrs Exp", icon: Target, color: "text-amber-400" }
                    ].map((item, i) => (
                        <div key={i} className="relative h-48 overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className={`text-4xl font-black text-white/10`}>
                                            {item.id}
                                        </span>
                                        <div>
                                            <h4 className="text-2xl font-black text-white tracking-tight">{item.label}</h4>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.stat}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color}`}>
                                        <item.icon size={24} />
                                    </div>
                                </div>

                                <p className="text-lg text-gray-300 font-light leading-snug border-l-2 border-white/20 pl-4">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
