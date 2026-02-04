"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Clock, Activity } from "lucide-react";

const principles = [
    {
        icon: Heart,
        label: "Kindness",
        title: "Family First.",
        desc: "We treat you like our own. No rushing through appointments—just warm, personal care that listens to your story.",
        color: "bg-neon-pink",
    },
    {
        icon: ShieldCheck,
        label: "Safety",
        title: "In Safe Hands.",
        desc: "Trust is earned. Our specialists combine decades of experience with the latest tech to ensure your health always comes first.",
        color: "bg-neon-blue",
    },
    {
        icon: Clock,
        label: "Speed",
        title: "Zero Waiting.",
        desc: "Your time matters. From instant booking to on-time consultations, we’ve removed the stress of traditional clinics.",
        color: "bg-neon-mint",
    }
];

export function Philosophy() {
    return (
        <section className="-mt-32 md:mt-0 pt-40 pb-0 md:pb-24 relative z-0 bg-gradient-to-b from-[#EFFAF6] via-[#F8FAFA] to-[#FAFAFA]">
            {/* Top Boundary Distinction */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-neon-mint/20 to-transparent" />

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-neon-blue/5 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[40%] h-[40%] rounded-full bg-neon-mint/5 blur-[120px]" />
            </div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between mb-24 lg:mb-32 relative">
                    <div className="space-y-8 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <span className="px-4 py-1.5 rounded-full bg-neon-mint/10 border border-neon-mint/20 text-neon-mint font-outfit text-[10px] font-black tracking-[0.3em] uppercase">
                                Our Values
                            </span>
                            <div className="h-px w-12 bg-gray-200" />
                        </motion.div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black text-[#1A1A2E] leading-[0.9] tracking-tighter">
                            A BETTER WAY <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-mint italic font-display pr-4 uppercase">
                                TO FEEL BETTER.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xs lg:mb-4">
                        <div className="space-y-6 lg:border-l-2 lg:pl-10 border-gray-100">
                            <p className="text-lg md:text-xl text-gray-500 font-outfit font-light leading-[1.6]">
                                Healthcare should be <span className="text-gray-900 font-medium">friendly.</span> We’ve made everything easier so you can focus on what matters— <span className="underline decoration-neon-mint decoration-2 underline-offset-4 font-bold text-[#1A1A2E]">your health.</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <Activity size={18} className="text-neon-blue" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    Care That Focuses On You
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 opacity-10 blur-sm pointer-events-none hidden lg:block">
                        <Heart size={200} strokeWidth={0.5} className="text-neon-pink" />
                    </div>
                </div>

                {/* Descending Card Layout with Submerged Effect */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-end lg:-mb-32 relative z-[1]">
                    {principles.map((p, i) => (
                        <div
                            key={i}
                            style={{
                                top: `calc(120px + ${i * 30}px)`,
                                zIndex: i + 1,
                            }}
                            className="sticky lg:relative lg:!top-0 w-full lg:flex-1 mb-[30vh] lg:mb-0"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className={`
                                    w-full 
                                    ${i === 0 ? 'lg:h-[550px]' : i === 1 ? 'lg:h-[480px]' : 'lg:h-[410px]'}
                                `}
                            >
                                <div className="relative p-8 md:p-10 rounded-t-[3.5rem] rounded-b-[1.5rem] bg-white border border-gray-100 h-full flex flex-col group transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-3 will-change-transform overflow-hidden">
                                    {/* Decorative Background Number */}
                                    <span className="absolute -top-4 -right-2 text-[10rem] font-display font-black text-gray-50/50 select-none pointer-events-none group-hover:text-gray-100/50 transition-colors duration-700 leading-none">
                                        0{i + 1}
                                    </span>

                                    {/* Color Accent Top Bar */}
                                    <div className={`absolute top-0 left-12 right-12 h-1.5 rounded-b-full opacity-20 group-hover:opacity-100 transition-opacity duration-700 ${p.color}`} />

                                    {/* Glassy Icon Container */}
                                    <div className="relative mb-10">
                                        <div className={`w-16 h-16 rounded-2xl ${p.color} flex items-center justify-center text-white shadow-2xl shadow-current/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 relative z-10`}>
                                            <p.icon size={30} strokeWidth={1.5} />
                                        </div>
                                        {/* Glow effect under icon */}
                                        <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-0 ${p.color}`} />
                                    </div>

                                    <div className="mb-6 relative z-10 focus-visible:outline-none">
                                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-neon-blue/60 mb-3 block">
                                            {p.label}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-outfit font-black text-[#1A1A2E] leading-[1.15] tracking-tight">
                                            {p.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500/80 font-outfit font-light leading-relaxed mb-10 text-base md:text-lg relative z-10">
                                        {p.desc}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50 relative z-10 transition-colors duration-500">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1A1A2E]/5 group-hover:bg-[#1A1A2E] group-hover:text-white transition-all duration-500">
                                            <div className="w-1 h-1 rounded-full bg-current" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#1A1A2E] transition-colors duration-500">
                                            Our Quality Promise
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
