"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, Activity, Stethoscope, HeartPulse, Baby, ShieldCheck, Zap, Plus, Infinity } from "lucide-react";
import { useRef } from "react";

const doctors = [
    {
        name: "Dr. Pravesh Mudgil",
        specialty: "Orthopaedics",
        experience: "Ex. SR PGIMS Rohtak",
        image: "/doctors/pravesh.png",
        stats: "2k+ Surgeries",
        accent: "neon-blue",
        pos: "lg:top-0 lg:left-[2%]",
        delay: 0,
        yOffset: -40
    },
    {
        name: "Dr. Priya Sharma",
        specialty: "Paediatrics",
        experience: "Ex. Registrar AIIMS Delhi",
        image: "/doctor_priya.png",
        stats: "5k+ Kids",
        accent: "neon-pink",
        pos: "lg:top-[120px] lg:left-[36%]",
        delay: 0.2,
        yOffset: 40
    },
    {
        name: "Dr. Mahesh Mudgil",
        specialty: "General Physician",
        experience: "Ex. Registrar PGIMS Rohtak",
        image: "/doctor_mahesh.png",
        stats: "10k+ Treated",
        accent: "neon-mint",
        pos: "lg:top-[0px] lg:left-[70%]",
        delay: 0.4,
        yOffset: -20
    }
];

export function DoctorsPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section ref={containerRef} className="-mt-32 md:mt-0 pt-12 pb-16 md:pt-32 md:pb-24 relative z-10 bg-gradient-to-tr from-[#F4F9F9] via-[#FAFDFD] to-[#F1F5F9] overflow-hidden">
            {/* Top Design: The Prism Horizon */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
            <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-neon-blue to-transparent blur-[1px] opacity-30" />

            {/* Asymmetric Chromatic "Light Leaks" - bleeding from the top boundary */}
            <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[40%] h-[200px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 -translate-y-1/2 w-[30%] h-[150px] bg-neon-mint/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[100px] bg-neon-pink/10 rounded-full blur-[60px] pointer-events-none" />

            {/* Architectural Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ x: textX }}
                    className="absolute top-[15%] left-0 text-[18vw] font-outfit font-black text-gray-200/20 whitespace-nowrap select-none italic will-change-transform"
                >
                    ELITE SPECIALISTS • ELITE SPECIALISTS
                </motion.div>

                {/* Floating Geometric Orbs */}
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-neon-mint/5 rounded-full blur-[120px]" />

                {/* Kinetic Path */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-neon-blue" />
                    <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-neon-mint" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header with Float Effect */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-end justify-between mb-20 lg:mb-64 relative">
                    <div className="space-y-6 lg:space-y-8 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100"
                        >
                            <Zap size={16} className="text-neon-blue fill-neon-blue/20" />
                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A2E]">Trusted Specialists</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-outfit font-black text-[#1A1A2E] leading-[0.9] lg:leading-[0.85] tracking-tighter">
                            OUR EXPERT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-mint italic font-display pr-6 uppercase">
                                DOCTORS.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xs lg:mb-8">
                        <div className="space-y-4 lg:space-y-6 lg:border-l-2 lg:pl-10 border-gray-100">
                            <p className="text-base md:text-xl text-gray-500 font-outfit font-light leading-[1.6]">
                                You’re in <span className="text-gray-900 font-medium">safe hands.</span> Meet the board-certified experts who bring <span className="underline decoration-neon-blue decoration-2 underline-offset-4 font-bold text-[#1A1A2E]">years of experience</span> to your care.
                            </p>
                            <div className="flex items-center gap-3">
                                <Activity size={18} className="text-neon-blue" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    Quality Healthcare Guaranteed
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Kinetic Cluster: Breaking the Grid */}
                <div className="relative h-auto md:h-[900px] lg:h-[880px]">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10% " }}
                            transition={{ duration: 1, delay: doctor.delay, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative lg:absolute w-full lg:w-[30%] ${doctor.pos} h-fit group mb-20 lg:mb-0 will-change-transform`}
                        >
                            {/* The Floating Card Sculpt */}
                            <div className="relative isolate">
                                {/* Decorative "Shadow" Card behind */}
                                <div className={`absolute inset-0 bg-white/40 blur-2xl -z-10 translate-x-4 translate-y-4 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700 rounded-[4rem] will-change-transform`} />

                                <div className="relative overflow-hidden bg-white border border-gray-100 rounded-[3rem] lg:rounded-[4.5rem] p-4 group-hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.15)] transition-all duration-700">
                                    {/* Image Container with Unique Clip */}
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] mb-8 lg:mb-10">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Abstract Accent Shape */}
                                        <div className={`absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white scale-0 group-hover:scale-100 rotate-45 group-hover:rotate-0 transition-all duration-700`}>
                                            <Infinity size={24} className={`text-${doctor.accent}`} />
                                        </div>
                                    </div>

                                    {/* Minimalist Pro Info */}
                                    <div className="px-6 pb-10 space-y-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className={`w-2 h-2 rounded-full bg-${doctor.accent} animate-pulse`} />
                                                <span className={`text-[10px] font-black tracking-[0.4em] uppercase text-${doctor.accent}`}>
                                                    {doctor.specialty}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-outfit font-black text-[#1A1A2E] leading-none mb-4">
                                                {doctor.name}
                                            </h3>
                                            <p className="text-sm font-outfit font-light text-gray-400">
                                                Certified expert with over {doctor.experience} in clinical excellence.
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full bg-${doctor.accent}/10 flex items-center justify-center text-${doctor.accent}`}>
                                                    <Activity size={18} />
                                                </div>
                                                <span className="text-xs font-black text-[#1A1A2E] tracking-tighter">{doctor.stats}</span>
                                            </div>

                                            <Link href={{ pathname: "/book", query: { doctor: doctor.name } }}>
                                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A2E] hover:text-neon-blue transition-colors group/btn">
                                                    BOOK <ArrowUpRight size={14} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Decorative Bottom "Deck" */}
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 overflow-hidden">
                                        <div className={`w-full h-full bg-gradient-to-r from-transparent via-${doctor.accent}/40 to-transparent transform -translate-x-full lg:group-hover:translate-x-full transition-transform duration-1000 ease-in-out`} />
                                    </div>
                                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-${doctor.accent} rounded-t-full scale-x-50 lg:scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center`} />

                                    {/* Medical Ghost Watermark */}
                                    <div className="absolute -bottom-8 -right-8 opacity-[0.02] lg:opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none rotate-12">
                                        <Plus size={160} className={`text-${doctor.accent} w-32 h-32 md:w-40 md:h-40`} />
                                    </div>
                                </div>

                                {/* Floating Experience Badge */}
                                <div className="absolute -top-6 -left-6 lg:top-12 lg:-left-12 rotate-[-12deg] group-hover:rotate-0 transition-transform duration-700 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-neon-blue">
                                            <Award size={16} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A2E]">{doctor.experience}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Collective Signature */}
                <div className="mt-24 lg:mt-24 relative">
                    <div className="flex flex-col items-center text-center space-y-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-4 md:pr-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl shadow-gray-200/40"
                        >
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                                    <Stethoscope size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-neon-pink/10 flex items-center justify-center text-neon-pink">
                                    <HeartPulse size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-neon-mint/10 flex items-center justify-center text-neon-mint">
                                    <Baby size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                    <ShieldCheck size={20} />
                                </div>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-base md:text-lg font-outfit text-gray-500 leading-tight">
                                    Our experts are always here to <span className="text-[#1A1A2E] font-black md:block">help you and your family.</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
