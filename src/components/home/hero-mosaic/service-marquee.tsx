"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
    Stethoscope, Syringe, Wind, Activity,
    Pill, FlaskConical, Apple, Thermometer, HeartPulse,
    Microscope, Brain, Baby
} from "lucide-react";

export function ServiceMarquee({ className }: { className?: string }) {
    const services = [
        { icon: Stethoscope, label: "Pediatric Care", id: "01", tag: "Expert" },
        { icon: Syringe, label: "Vaccination", id: "02", tag: "Safe" },
        { icon: Wind, label: "Nebulization", id: "03", tag: "Quick" },
        { icon: Activity, label: "Growth Monitor", id: "04", tag: "Tech" },
        { icon: HeartPulse, label: "Medicine", id: "05", tag: "Core" },
        { icon: FlaskConical, label: "Laboratory", id: "06", tag: "Precision" },
        { icon: Pill, label: "Pharmacy", id: "07", tag: "Direct" },
        { icon: Apple, label: "Diet Counseling", id: "08", tag: "Health" },
        { icon: Thermometer, label: "Viral Treatment", id: "09", tag: "Care" },
        { icon: Microscope, label: "Diagnostics", id: "10", tag: "Advanced" },
        { icon: Brain, label: "Neurology", id: "11", tag: "Expert" },
        { icon: Baby, label: "Child Health", id: "12", tag: "Primary" }
    ];

    return (
        <div className={cn("relative overflow-hidden flex items-center h-28 group/section", className)}>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />

            {/* Technical Track Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

            {/* Header/Footer Technical Borders */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            {/* Animated Dash Track */}
            <div className="absolute inset-x-12 top-0 h-[1px] bg-[radial-gradient(circle,var(--color-neon-cyan)_1px,transparent_1px)] bg-[size:16px_1px] opacity-20" />
            <div className="absolute inset-x-12 bottom-0 h-[1px] bg-[radial-gradient(circle,var(--color-neon-cyan)_1px,transparent_1px)] bg-[size:16px_1px] opacity-20" />

            {/* Corner 'Optical' Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-cyan to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-neon-cyan to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none opacity-40 rotate-180">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue to-transparent" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-neon-blue to-transparent" />
            </div>

            {/* Side Calibration Markers */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 flex flex-col gap-1.5 opacity-30 z-30">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={cn("w-1 h-[2px] bg-foreground transition-all duration-500", i === 2 && "w-3 bg-neon-cyan")} />
                ))}
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col gap-1.5 opacity-30 z-30 items-end">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className={cn("w-1 h-[2px] bg-foreground transition-all duration-500", i === 2 && "w-3 bg-neon-blue")} />
                ))}
            </div>

            {/* Scrolling Ticker */}
            <div className="relative z-10 flex gap-6 whitespace-nowrap animate-marquee py-6 hover:[animation-play-state:paused] transition-all">
                {[...services, ...services, ...services].map((item, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "group/item relative flex items-center gap-4 px-6 py-3",
                            "bg-white/60 backdrop-blur-xl rounded-full",
                            "ring-1 ring-white/80 shadow-sm",
                            "hover:shadow-2xl hover:shadow-neon-cyan/10 hover:-translate-y-1 hover:bg-white/90",
                            "transition-all duration-500 ease-out cursor-default"
                        )}
                    >
                        {/* Technical ID Badge */}
                        <span className="absolute -top-1 -left-1 w-5 h-5 flex items-center justify-center bg-foreground text-[8px] font-bold text-white rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300">
                            {item.id}
                        </span>

                        {/* Icon Graphics */}
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan/10 to-neon-blue/10 text-neon-cyan group-hover/item:text-neon-blue transition-colors">
                            <item.icon size={18} strokeWidth={2.5} className="relative z-10" />
                            <div className="absolute inset-0 rounded-full bg-neon-cyan/20 animate-pulse opacity-0 group-hover/item:opacity-100" />
                        </div>

                        {/* Text Metadata */}
                        <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40 group-hover/item:text-neon-cyan transition-colors">
                                {item.tag}
                            </span>
                            <span className="text-xs font-black text-foreground tracking-wide uppercase"
                                style={{
                                    WebkitTextStroke: "1px rgba(0,0,0,0.08)"
                                } as React.CSSProperties}
                            >
                                {item.label}
                            </span>
                        </div>

                        {/* Hover Scanner Line */}
                        <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500" />
                    </div>
                ))}
            </div>

            {/* Edge Fades: Ultra-Long Graduated Fades */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

            {/* Visual Accents in margins */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-20 pointer-events-none z-30">
                <div className="w-1 h-1 bg-foreground rounded-full" />
                <div className="w-1 h-3 bg-foreground rounded-full" />
                <div className="w-1 h-1 bg-foreground rounded-full" />
            </div>
        </div>
    );
}
