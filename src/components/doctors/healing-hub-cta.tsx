"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";
import { Stethoscope, ShieldCheck } from "lucide-react";

export function HealingHubCTA() {
    return (
        <section className="py-48 px-4 relative overflow-hidden">
            {/* Complex Bio-Fluid Gradient Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#FAFAFA]" />

                {/* Animated Bio-Shapes - Optimized for performance */}
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, 80, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 blur-[80px] rounded-full mix-blend-multiply transform-gpu will-change-transform"
                />
                <motion.div
                    animate={{
                        scale: [1.4, 1, 1.4],
                        x: [0, -80, 0],
                        y: [0, -40, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-gradient-to-tr from-neon-cyan/15 to-neon-mint/15 blur-[80px] rounded-full mix-blend-multiply transform-gpu will-change-transform"
                />

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

                {/* Grain Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left: Simplified Message */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* ECG Animation Decor */}
                        <div className="absolute -top-16 -left-10 w-48 h-48 opacity-[0.07] pointer-events-none">
                            <motion.svg
                                viewBox="0 0 100 100"
                                className="w-full h-full text-neon-blue fill-none"
                            >
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                    d="M0 50 L20 50 L25 40 L30 60 L35 20 L40 80 L45 45 L50 55 L55 50 L100 50"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                />
                            </motion.svg>
                        </div>

                        <div className="space-y-10 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                                            {i === 1 ? '❤' : i === 2 ? '★' : '✔'}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A1A2E]">Loved by families</span>
                            </motion.div>

                            <h2 className="text-7xl md:text-[7.5rem] font-black text-[#1A1A2E] leading-[0.8] tracking-tighter">
                                READY TO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple italic font-display">FEEL GOOD?</span>
                            </h2>

                            <div className="space-y-8">
                                <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-lg leading-snug">
                                    We make it <span className="text-[#1A1A2E] font-medium">really easy</span> to stay healthy.
                                    No stress, <span className="text-neon-blue font-medium underline decoration-2 underline-offset-8">just simple care.</span>
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {[
                                        { label: "Bones & Joints", icon: "🦴" },
                                        { label: "Child Care", icon: "🍼" },
                                        { label: "Health Check", icon: "✨" },
                                        { label: "Quick Advice", icon: "🗨" }
                                    ].map((item) => (
                                        <motion.span
                                            key={item.label}
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="px-6 py-4 rounded-[2.5rem] bg-white border border-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] text-sm font-black text-[#1A1A2E]/60 hover:text-neon-blue hover:border-neon-blue/20 transition-all flex items-center gap-3 group"
                                        >
                                            <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                                            {item.label}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Holographic Booking Orb */}
                    <div className="w-full lg:w-5/12 relative flex justify-center items-center py-20">
                        <div className="relative w-80 h-80 md:w-[480px] md:h-[480px] flex items-center justify-center">

                            {/* The Glass Orb Background */}
                            <div className="absolute inset-0 rounded-full border-[1.5rem] border-white/60 backdrop-blur-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05),inset_0_0_80px_rgba(255,255,255,0.8)]" />

                            {/* Kinetic Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[3rem] border-2 border-dashed border-neon-blue/10 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[5rem] border border-neon-cyan/10 rounded-full"
                            />

                            {/* Magnetic Core */}
                            <Link href="/book" className="relative z-20 group">
                                <div className="absolute -inset-20 bg-neon-blue/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                                <MagneticButton className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#1A1A2E] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(26,26,46,0.3)] transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)] group-hover:scale-105">
                                    <motion.div
                                        animate={{ left: ["-100%", "200%"], opacity: [0, 1, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-0 bottom-0 w-32 bg-white/10 skew-x-[45deg] blur-2xl z-10"
                                    />

                                    <div className="relative z-20 flex flex-col items-center text-center">
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center mb-8 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform"
                                        >
                                            <Stethoscope className="text-white" size={36} />
                                        </motion.div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.6em] mb-4 opacity-30">100% Secure</span>
                                        <h3 className="text-5xl md:text-7xl font-black leading-none mb-6 tracking-tighter">BOOK<br />NOW</h3>
                                        <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-neon-cyan text-[10px] font-black uppercase tracking-widest shadow-inner">
                                            Next: 10:00 AM
                                        </div>
                                    </div>
                                </MagneticButton>
                            </Link>

                            {/* Floating HUD Elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-5 -right-5 p-6 border border-white bg-white/50 backdrop-blur-xl rounded-[3rem] shadow-2xl hidden md:flex items-center gap-4 transition-transform hover:scale-105"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-600 shadow-inner">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Official</p>
                                    <p className="text-sm font-black text-[#1A1A2E] leading-none">VERIFIED</p>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-5 -left-5 p-6 border border-white bg-white/50 backdrop-blur-xl rounded-[3rem] shadow-2xl hidden md:flex items-center gap-4 transition-transform hover:scale-105"
                            >
                                <div className="relative">
                                    <div className="w-3.5 h-3.5 rounded-full bg-neon-blue shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                                    <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-neon-blue animate-ping opacity-40" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Available</p>
                                    <p className="text-sm font-black text-[#1A1A2E] leading-none">3 DOCS ON</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
