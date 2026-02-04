"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Star, ShieldCheck, User } from "lucide-react";

export function TrustCluster({ className }: { className?: string }) {
    return (
        <div className={cn("relative overflow-hidden flex flex-col items-center justify-center p-4 text-white ring-1 ring-white/10 shadow-2xl rounded-[2rem]", className)}>

            {/* Dark Glass Base Layer with Noise */}
            <div className="absolute inset-0 bg-[#0A0A12]/95 backdrop-blur-md" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent animate-spin-slow pointer-events-none" />

            {/* Background Watermark Icon */}
            <ShieldCheck className="absolute -bottom-4 -right-4 text-white/5 rotate-[-15deg]" size={120} strokeWidth={1} />

            <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A1A2E] bg-gradient-to-br from-gray-700 to-gray-600 relative overflow-hidden shadow-lg flex items-center justify-center">
                            <User size={12} className="text-white/40" />
                        </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-[#1A1A2E] bg-neon-cyan/20 backdrop-blur-sm flex items-center justify-center text-[8px] font-black text-neon-cyan">
                        +2K
                    </div>
                </div>

                <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                        <span className="text-xl font-black tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">5.0</span>
                        <div className="flex text-amber-400 gap-0.5">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={10} fill="currentColor" className="text-amber-400" />)}
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 opacity-60">
                        <ShieldCheck size={10} className="text-neon-green" />
                        <p className="text-[9px] text-white uppercase tracking-[0.2em] font-medium">Trusted by Families</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
