"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CinematicDisplay({ className }: { className?: string }) {
    const [sceneIndex, setSceneIndex] = useState(0);

    const scenes = [
        {
            tag: "For Your Family",
            title: "Happy",
            subtitle: "Kids",
            description: "No more tears. Just good health and big smiles for your little ones.",
            image: "/hero-pediatrician.png",
            theme: "from-amber-50 to-orange-50",
            accent: "text-orange-500"
        },
        {
            tag: "World Class Tech",
            title: "Precise",
            subtitle: "Reports",
            description: "Fast, accurate test results. Because knowing the truth matters.",
            image: "/hero-futuristic-doctor.png",
            theme: "from-cyan-50 to-blue-100",
            accent: "text-blue-500"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSceneIndex((prev) => (prev + 1) % scenes.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [scenes.length]);

    const scene = scenes[sceneIndex];

    return (
        <div className={cn("relative overflow-hidden group isolate rounded-[2.5rem] ring-1 ring-white/20 shadow-2xl", className)}>

            {/* --- LAYOUT: PRISMATIC FLUX BORDER --- */}
            {/* 1. Rotating Chroma Gradient (The "Living" Border) */}
            <div className="absolute -inset-[3px] rounded-[2.6rem] bg-[conic-gradient(from_0deg_at_50%_50%,#ff0000_0deg,#00ff00_100deg,#0000ff_240deg,#ff0000_360deg)] opacity-40 blur-md animate-spin-slowest group-hover:opacity-70 transition-opacity duration-700" />

            {/* 2. Glass Bevel (Inner Hard Edge) */}
            <div className="absolute inset-[1px] rounded-[2.45rem] ring-1 ring-white/50 z-20 pointer-events-none" />

            {/* 3. Tech Corners (Futuristic Brackets) */}
            <svg className="absolute inset-0 z-30 w-full h-full pointer-events-none p-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Top Left */}
                <path d="M 4 20 V 4 A 4 4 90 0 1 8 0 H 24" fill="none" stroke="url(#corner-gradient)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                {/* Bottom Right */}
                <path d="M 96 80 V 96 A 4 4 90 0 1 92 100 H 76" fill="none" stroke="url(#corner-gradient)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                <defs>
                    <linearGradient id="corner-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* --- LAYOUT: BACKGROUND SCENE --- */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={sceneIndex}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 z-0"
                >
                    {/* Dynamic Gradient Base */}
                    <div className={cn("absolute inset-0 bg-gradient-to-br mix-blend-multiply opacity-40 transition-colors duration-1000", scene.theme)} />

                    <Image
                        src={scene.image}
                        alt="Hero Scene"
                        fill
                        className="object-cover md:object-contain object-right"
                        priority
                    />

                    {/* Cinematic Grain Overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* --- LAYOUT: HUD ELEMENTS (Tech Decor) --- */}
            <div className="absolute top-8 right-8 z-20 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
                <div className="h-2 w-2 rounded-full bg-gray-300" />
            </div>

            <div className="absolute bottom-8 right-8 z-20 hidden md:block">
                <div className="glass-panel px-4 py-2 rounded-lg border border-white/40 flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#1A1A2E]/60">
                    <span>SYS_READY</span>
                    <span className="w-[1px] h-3 bg-gray-400" />
                    <span>{scene.tag.toUpperCase()}</span>
                </div>
            </div>


            {/* --- LAYOUT: EDITORIAL CONTENT --- */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center p-8 md:p-12 lg:p-20">
                <motion.div
                    key={sceneIndex}
                    initial={{ x: -20, opacity: 0, filter: "blur(10px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    {/* Floating Tag Pill */}
                    <div className={cn("inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border bg-white/50 backdrop-blur-md w-fit shadow-sm", scene.accent)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            {scene.tag}
                        </span>
                    </div>

                    {/* The "Massive" Typography */}
                    <div className="relative mb-8 mix-blend-multiply">
                        <h1 className="text-[14vw] md:text-[9rem] font-black text-[#1A1A2E] leading-[0.75] tracking-tighter mix-blend-hard-light">
                            {scene.title}
                        </h1>
                        <h2 className={cn("text-[14vw] md:text-[9rem] font-serif italic font-light leading-[0.75] -mt-1 md:-mt-4 pl-2 opacity-80 backdrop-blur-sm", scene.accent)}>
                            {scene.subtitle}
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="max-w-md relative pl-2"
                    >
                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 border-l-2 border-[#1A1A2E]/20 pl-6">
                            {scene.description}
                        </p>

                        {/* High-End Button */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="relative overflow-hidden bg-[#1A1A2E] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:shadow-neon-cyan/50 transition-all flex items-center justify-center gap-3 group/btn hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12" />
                                Book Appointment
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Creative Progress/Timeline */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-100/50 backdrop-blur-sm">
                <motion.div
                    key={sceneIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className={cn("h-full bg-gradient-to-r", scene.theme.replace("from-", "from-").replace("to-", "to-"))}
                />
            </div>
        </div>
    );
}

