"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DoctorsHeroProps {
    headerRef: React.RefObject<HTMLElement | null>;
}

export function DoctorsHero({ headerRef }: DoctorsHeroProps) {
    return (
        <section ref={headerRef} className="relative min-h-[95vh] flex items-center bg-[#FAFAFA] overflow-hidden pt-20">

            {/* Elegant Background Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(#E5E7EB 1px, transparent 1px), linear-gradient(90deg, #E5E7EB 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#FAFAFA] z-0" />

            <div className="container mx-auto px-6 relative z-10 w-full h-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Left Content Column - Precision Typography */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mt-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Top Doctors Team</span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-[#1A1A2E] leading-[0.9] tracking-tight"
                            >
                                Your Health, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Made Simple.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl text-gray-500 font-light max-w-lg leading-relaxed ml-2 border-l-2 border-gray-200 pl-6"
                            >
                                Expert doctors who explain things simply. We listen to you and help you feel better, without the confusion.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-6 pt-4"
                        >
                            <Link href="/book">
                                <button className="group relative px-8 py-4 bg-[#1A1A2E] text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative z-10 font-bold tracking-wide flex items-center gap-2">
                                        Book Appointment <ArrowRight size={18} />
                                    </span>
                                </button>
                            </Link>

                            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-[#FAFAFA] bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Activity size={14} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#FAFAFA] bg-purple-100 flex items-center justify-center text-purple-600">
                                        <Sparkles size={14} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-[#FAFAFA] bg-green-100 flex items-center justify-center text-green-600">
                                        <ShieldCheck size={14} />
                                    </div>
                                </div>
                                <span>Trusted Medical Experts</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - The Premium Visual */}
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center">
                        <motion.div
                            className="relative z-20 w-full h-full"
                        >
                            {/* Creative Medical Border Structure */}
                            <div className="absolute inset-0 border border-gray-100 rounded-[3.2rem]" />
                            <div className="absolute inset-2 border border-white/50 rounded-[3.1rem]" />

                            {/* Corner Accents */}
                            <svg className="absolute inset-0 w-full h-full p-2 pointer-events-none z-30" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
                                <path d="M40 10 H20 A 10 10 0 0 0 10 20 V 40" stroke="url(#gradient-border)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <path d="M360 10 H380 A 10 10 0 0 1 390 20 V 40" stroke="url(#gradient-border)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <path d="M40 590 H20 A 10 10 0 0 1 10 580 V 560" stroke="url(#gradient-border)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                                <path d="M360 590 H380 A 10 10 0 0 0 390 580 V 560" stroke="url(#gradient-border)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />

                                {/* Tech Crosshairs */}
                                <line x1="20" y1="300" x2="10" y2="300" stroke="#CBD5E1" strokeWidth="1" />
                                <line x1="380" y1="300" x2="390" y2="300" stroke="#CBD5E1" strokeWidth="1" />
                                <line x1="200" y1="10" x2="200" y2="20" stroke="#CBD5E1" strokeWidth="1" />
                                <line x1="200" y1="580" x2="200" y2="590" stroke="#CBD5E1" strokeWidth="1" />

                                <defs>
                                    <linearGradient id="gradient-border" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#3B82F6" />
                                        <stop offset="100%" stopColor="#A855F7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Glass Container Effect */}
                            <div className="absolute inset-6 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/5 to-transparent opacity-50" />

                                {/* New Generated Image */}
                                <div className="relative w-[110%] h-[110%] -translate-x-4 -translate-y-4 group-hover:scale-105 transition-transform duration-1000 ease-out">
                                    <Image
                                        src="/premium-doctors-hero-v2.png"
                                        alt="Futuristic Medical Precision"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        quality={100}
                                        priority
                                    />
                                </div>

                                {/* Advanced Technical Overlay */}
                                <div className="absolute inset-0 z-20 pointer-events-none">
                                    {/* Scanning Beam */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                                    />

                                    {/* Rotating Radar Rings */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/10 rounded-full border-dashed"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/5 rounded-full"
                                    />
                                </div>

                                {/* Floating UI Card 1 */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white shadow-xl max-w-[200px]"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                            <Activity size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Status</div>
                                            <div className="text-sm font-black text-[#1A1A2E]">Good Health</div>
                                            <div className="text-[10px] text-green-600 font-bold mt-1">Always Open</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Floating Elements behind */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-neon-blue/20 to-purple-500/20 blur-3xl rounded-full -z-10"
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-neon-mint/20 to-blue-500/20 blur-3xl rounded-full -z-10"
                            />
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 -left-4 z-30 hidden lg:flex items-center gap-3 px-5 py-3 bg-[#1A1A2E] text-white rounded-2xl shadow-2xl"
                        >
                            <ShieldCheck className="text-neon-blue" size={20} />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Certified</span>
                                <span className="text-xs font-bold">100% Verified Experts</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
