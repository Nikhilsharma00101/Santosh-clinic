"use client";

import React, { useState } from "react";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CinematicDisplay({ className }: { className?: string }) {
    // Removed auto-rotation interval for performance
    const [sceneIndex] = useState(0);

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
        // Kept data structure in case we want to add manual controls later, but currently showing only index 0
    ];

    const scene = scenes[sceneIndex];

    return (
        <div className={cn("relative overflow-hidden group isolate rounded-[2.5rem] ring-1 ring-white/20 shadow-xl bg-white", className)}>

            {/* --- LAYOUT: PRISMATIC FLUX BORDER --- */}
            {/* 1. Static Gradient Border instead of spinning conic gradient */}
            <div className="absolute -inset-[3px] rounded-[2.6rem] bg-gradient-to-br from-neon-blue/20 via-purple-500/20 to-neon-cyan/20 opacity-40 blur-sm" />

            {/* 2. Glass Bevel (Inner Hard Edge) */}
            <div className="absolute inset-[1px] rounded-[2.45rem] ring-1 ring-white/50 z-20 pointer-events-none" />

            {/* 3. Tech Corners (Futuristic Brackets) */}
            <svg className="absolute inset-0 z-30 w-full h-full pointer-events-none p-6" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 4 20 V 4 A 4 4 90 0 1 8 0 H 24" fill="none" stroke="black" strokeOpacity="0.1" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
                <path d="M 96 80 V 96 A 4 4 90 0 1 92 100 H 76" fill="none" stroke="black" strokeOpacity="0.1" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* --- LAYOUT: BACKGROUND SCENE --- */}
            <div className="absolute inset-0 z-0">
                {/* Static Background Base */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-30", scene.theme)} />

                <Image
                    src={scene.image}
                    alt="Hero Scene"
                    fill
                    className="object-cover md:object-contain object-right"
                    priority
                />

                {/* Simplified Overlay - Removed expensive noise/mix-blend-overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
            </div>

            {/* --- LAYOUT: HUD ELEMENTS (Tech Decor) --- */}
            <div className="absolute top-8 right-8 z-20 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-neon-cyan" />
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
                {/* Floating Tag Pill */}
                <div className={cn("inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border bg-white/50 backdrop-blur-sm w-fit shadow-sm", scene.accent)}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                        {scene.tag}
                    </span>
                </div>

                {/* Typography - Removed mix-blend-mode for performance */}
                <div className="relative mb-8">
                    <h1 className="text-[14vw] md:text-[9rem] font-black text-[#1A1A2E] leading-[0.75] tracking-tighter opacity-90">
                        {scene.title}
                    </h1>
                    <h2 className={cn("text-[14vw] md:text-[9rem] font-serif italic font-light leading-[0.75] -mt-1 md:-mt-4 pl-2 opacity-60", scene.accent)}>
                        {scene.subtitle}
                    </h2>
                </div>

                <div className="max-w-md relative pl-2">
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 border-l-2 border-[#1A1A2E]/20 pl-6">
                        {scene.description}
                    </p>

                    {/* High-End Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="relative overflow-hidden bg-[#1A1A2E] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group/btn hover:scale-105 active:scale-95">
                            Book Appointment
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

