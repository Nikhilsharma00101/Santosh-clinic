"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, MessageCircle, Activity, ArrowUpRight, Zap, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

export function ActionSidebar({ className }: { className?: string }) {
    const [time, setTime] = useState<Date | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const mountTimer = setTimeout(() => {
            setMounted(true);
            setTime(new Date());
        }, 0);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => {
            clearTimeout(mountTimer);
            clearInterval(timer);
        };
    }, []);

    const actions = [
        {
            icon: Phone,
            label: "SOS",
            sub: "Emergency",
            href: `tel:${SITE_CONFIG.phoneValue}`,
            color: "text-rose-400",
            glow: "shadow-rose-500/40",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        },
        {
            icon: MessageCircle,
            label: "CHAT",
            sub: "WhatsApp",
            href: SITE_CONFIG.whatsappUrl,
            color: "text-emerald-400",
            glow: "shadow-emerald-500/40",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            icon: MapPin,
            label: "GPS",
            sub: "Navigation",
            href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`,
            color: "text-blue-400",
            glow: "shadow-blue-500/40",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
    ];

    return (
        <>
            {/* --- DESKTOP VIEWPORT: VERTICAL SIDEBAR --- */}
            <div className={cn(
                "hidden lg:flex relative overflow-hidden flex-col justify-between p-2 rounded-[2.5rem] shadow-2xl transition-all duration-700",
                className
            )}>
                {/* Dark Glass Base Layer with Noise */}
                <div className="absolute inset-0 bg-[#0A0A12]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

                {/* --- TOP: LIVE CHRONOMETER --- */}
                <div className="relative z-10 p-3">
                    <div className="relative bg-black/60 rounded-[2rem] p-4 border border-white/5 shadow-inner group overflow-hidden">
                        <div className="flex items-center justify-between mb-2 opacity-60">
                            <Zap size={10} className="text-neon-cyan animate-pulse" />
                            <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-white/40">Temporal Sync</span>
                        </div>

                        {mounted && time && (
                            <div className="font-mono text-2xl font-black text-white tracking-[0.15em] leading-none">
                                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                                <span className="text-[10px] opacity-40 ml-1 font-bold text-neon-cyan">
                                    {time.getSeconds().toString().padStart(2, '0')}
                                </span>
                            </div>
                        )}

                        <div className="mt-3 flex gap-1 items-center">
                            <div className="h-[2px] flex-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    className="h-full bg-neon-cyan/60"
                                />
                            </div>
                            <span className="text-[8px] font-bold text-white/20 font-mono">LIVE</span>
                        </div>
                    </div>
                </div>

                {/* --- MIDDLE: STATUS BIOMETRICS --- */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4 flex-1">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[0.5px] border-dashed border-white/10 rounded-full"
                        />

                        <div className="relative w-14 h-14 bg-gradient-to-br from-[#12141F] to-[#0A0A12] rounded-full border border-green-500/30 flex items-center justify-center">
                            <Activity size={24} className="text-green-400" />
                        </div>
                    </div>

                    <div className="mt-3">
                        <div className="flex items-center gap-2 bg-green-950/20 px-4 py-1.5 rounded-full border border-green-500/20 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-black text-green-300 uppercase tracking-[0.2em]">OPD Online</span>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM: COMMAND INTERFACE --- */}
                <div className="relative z-10 p-3 flex flex-col gap-2.5">
                    {actions.map((action, idx) => (
                        <motion.a
                            key={idx}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 6 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                "group relative w-full p-4 rounded-[1.5rem] bg-black/40 border border-white/10 flex items-center gap-4 transition-all duration-500 overflow-hidden"
                            )}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/[0.03] pointer-events-none" />
                            <div className={cn("p-2.5 rounded-2xl bg-black/40 border border-white/5 shadow-inner", action.color)}>
                                <action.icon size={20} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col items-start gap-0.5">
                                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">{action.label}</span>
                                <span className="text-xs font-black text-white tracking-widest">{action.sub}</span>
                            </div>
                            <ArrowUpRight size={14} className="ml-auto opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </motion.a>
                    ))}

                    <div className="mt-2 flex items-center justify-between px-2 py-2 border-t border-white/5 opacity-40">
                        <ShieldCheck size={12} className="text-neon-cyan" />
                        <span className="text-[8px] font-mono tracking-widest uppercase">Secured v2.1</span>
                    </div>
                </div>
            </div>

            {/* --- MOBILE VIEWPORT: CORNER BIOMETRIC HUD --- */}
            <div className="fixed bottom-6 right-6 z-[150] lg:hidden flex flex-col items-end">

                {/* Expanded HUD Blade */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20, filter: "blur(10px)" }}
                            className="mb-4 flex flex-col items-end gap-3"
                        >
                            {/* Technical Metadata Header */}
                            <div className="px-4 py-1.5 bg-[#0A0A12]/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3 mb-1">
                                <span className="text-[9px] font-mono font-bold text-white/40 tracking-widest">SECURED_LINK</span>
                                <span className="text-[9px] font-mono font-black text-neon-cyan">256_AES</span>
                            </div>

                            {actions.map((action, idx) => (
                                <motion.a
                                    key={idx}
                                    href={action.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={cn(
                                        "flex items-center gap-4 p-4 pr-6 bg-[#0A0A12]/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl",
                                        "min-w-[200px]"
                                    )}
                                >
                                    <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/5", action.color)}>
                                        <action.icon size={22} />
                                    </div>
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">{action.label}</span>
                                        <span className="text-xs font-black text-white tracking-widest leading-none">{action.sub}</span>
                                    </div>
                                    <ArrowUpRight size={14} className="ml-auto opacity-25" />
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* The "Biometric Sensor" Orb Trigger */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden group shadow-2xl"
                >
                    {/* Glass Core */}
                    <div className="absolute inset-0 bg-[#0A0A12] border border-white/20 rounded-full z-10" />

                    {/* Pulsing Bio-Ring */}
                    {!isOpen && (
                        <div className="absolute inset-0 z-0">
                            <motion.div
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute inset-0 bg-neon-cyan/20 rounded-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                                className="absolute inset-0 bg-neon-blue/20 rounded-full border border-white/10"
                            />
                        </div>
                    )}

                    {/* Sensor Icon / Close Cross */}
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X className="text-white relative z-20" size={24} />
                            </motion.div>
                        ) : (
                            <motion.div key="sensor" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="relative z-20 flex flex-col items-center">
                                <Activity className="text-green-400 mb-0.5" size={24} />
                                <span className="text-[8px] font-mono font-black text-green-400">HELP</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Scanner Beam */}
                    {!isOpen && (
                        <motion.div
                            animate={{ y: [-30, 30] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                            className="absolute inset-x-0 h-4 bg-neon-cyan/10 blur-xl pointer-events-none z-15"
                        />
                    )}
                </motion.button>
            </div>
        </>
    );
}
