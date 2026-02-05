"use client";

import { motion } from "framer-motion";
import { Quote, CheckCircle2, Heart, Fingerprint } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

const reviews = [
    {
        name: "Amit Verma",
        role: "Cardiac Patient",
        text: "Dr. Pravesh Mudgil is an exceptional doctor. He treated my father's knee pain with such care. The clinic feels more like a hotel than a hospital.",
        tags: ["Orthopedics", "Senior Care"],
        color: "from-blue-500 to-cyan-400",
        id: "CF-8821",
        date: "24 JAN 2024",
        performance: 98
    },
    {
        name: "Sneha Gupta",
        role: "Mother of 2",
        text: "Best child care clinic in Narela. Dr. Priya is so patient with kids. My daughter actually likes visiting the doctor now!",
        tags: ["Pediatrics", "Wellness"],
        color: "from-pink-500 to-purple-400",
        id: "CF-9102",
        date: "12 FEB 2024",
        performance: 99
    },
    {
        name: "Rahul Singh",
        role: "Pro Athlete",
        text: "Very professional and hygienic. The staff is polite and the appointments are managed well. Highly recommended for sports injuries.",
        tags: ["Sports Medicine", "Physio"],
        color: "from-emerald-500 to-teal-400",
        id: "CF-7723",
        date: "05 DEC 2023",
        performance: 97
    },
    {
        name: "Vikram Malhotra",
        role: "Senior Educator",
        text: "Dr. Mahesh Mudgil is a pillar of health in Narela. His diagnostic precision and 25+ years of experience are evident in every consultation. He has been our family's most trusted advisor for decades.",
        tags: ["General Physician", "Family Trust"],
        color: "from-amber-400 to-orange-500",
        id: "CF-5521",
        date: "14 APR 2024",
        performance: 100
    }
];

function CaseFileCard({ review, index }: { review: typeof reviews[0], index: number }) {
    return (
        <div
            className="sticky top-32 mb-8 w-full"
            style={{
                zIndex: index + 1,
            }}
        >
            <div className="relative w-full max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden flex flex-col md:flex-row min-h-[450px] md:min-h-0">
                {/* Folder Tab Aesthetic */}
                <div className="absolute top-0 left-0 px-4 md:px-6 py-1.5 md:py-2 bg-black/[0.03] border-b border-r border-black/5 rounded-br-xl md:rounded-br-2xl font-mono text-[8px] md:text-[9px] tracking-widest text-black/40">
                    CASE_FILE // {review.id}
                </div>

                {/* Left Sidebar - Clinical Data */}
                <div className="w-full md:w-1/3 bg-black/[0.01] border-b md:border-b-0 md:border-r border-black/5 p-6 md:p-8 flex flex-row md:flex-col justify-between items-center md:items-start order-2 md:order-1">
                    <div className="space-y-3 md:space-y-6 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-xl md:text-3xl shadow-lg ring-2 md:ring-4 ring-white`}>
                            {review.name[0]}
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-base md:text-xl text-black leading-tight">{review.name}</h4>
                            <p className="text-[8px] md:text-[10px] text-black/40 uppercase tracking-widest font-mono mt-0.5 md:mt-1">{review.role}</p>
                        </div>
                    </div>

                    <div className="hidden md:block w-full space-y-4 pt-6 border-t border-black/5">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono text-black/30 uppercase">Recovery Rate</span>
                            <span className="text-[10px] font-mono font-bold text-emerald-600">{review.performance}%</span>
                        </div>
                        <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${review.performance}%` }}
                                className={`h-full bg-gradient-to-r ${review.color}`}
                            />
                        </div>
                        <div className="text-[9px] font-mono text-black/20 uppercase text-center tracking-[0.2em] pt-2">
                            Validated Archive
                        </div>
                    </div>

                    <div className="md:hidden flex flex-col items-end">
                        <span className="text-[10px] font-mono font-bold text-emerald-600">{review.performance}%</span>
                        <span className="text-[7px] font-mono text-black/20 uppercase tracking-widest">Score</span>
                    </div>
                </div>

                {/* Right Side - Testimonial Content */}
                <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center order-1 md:order-2">
                    <div className="flex justify-between items-start mb-4 md:mb-8">
                        <Quote size={32} className="text-black/[0.03] md:hidden" />
                        <Quote size={48} className="text-black/[0.03] hidden md:block" />
                        <div className="flex items-center gap-2 px-2 md:px-3 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10">
                            <CheckCircle2 size={10} className="text-emerald-500" />
                            <span className="text-[7px] md:text-[9px] font-mono font-bold text-emerald-600 tracking-widest uppercase">VERIFIED CASE</span>
                        </div>
                    </div>

                    <p className="text-lg md:text-2xl text-black/80 font-light leading-relaxed mb-6 md:mb-10 italic">
                        &ldquo;{review.text}&rdquo;
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {review.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl bg-black/[0.03] border border-black/5 text-[8px] md:text-[10px] font-mono uppercase text-black/40 tracking-tighter">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="absolute bottom-6 right-8 md:bottom-8 md:right-10 opacity-[0.03] md:opacity-[0.05]">
                        <Fingerprint size={40} className="md:w-16 md:h-16" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Testimonials() {
    return (
        <section
            className="relative py-32 bg-[#f8fafc]"
            id="testimonials"
        >
            <div className="w-full flex flex-col items-center justify-center">
                {/* Background Atmosphere - Simplified (No Heavy Animations) */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Base Clinical Layer */}
                    <div className="absolute inset-0 bg-[#f8fafc]" />

                    {/* Static Ambient Orbs */}
                    <div className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] rounded-full bg-neon-cyan/5 blur-[120px]" />
                    <div className="absolute -bottom-[10%] -right-[5%] w-[80%] h-[80%] rounded-full bg-neon-blue/5 blur-[140px]" />

                    {/* Technical Foundations */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:30px_30px]" />

                    {/* Fine Texture Grain */}
                    <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

                    {/* Static Tech Elements */}
                    <div className="absolute top-[18%] md:top-[15%] right-[5%] md:right-[10%] text-[15vw] md:text-[10vw] font-display font-black text-black/[0.01] uppercase">
                        Trust
                    </div>
                    <div className="absolute bottom-[18%] md:bottom-[15%] left-[5%] md:left-[10%] text-[15vw] md:text-[10vw] font-display font-black text-black/[0.01] uppercase">
                        Care
                    </div>
                </div>

                {/* Section Header */}
                <div className="relative w-full px-4 md:px-12 z-20 mb-20">
                    <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between max-w-[1600px] mx-auto">
                        <div className="space-y-4 md:space-y-6 max-w-4xl text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100"
                            >
                                <Heart size={16} className="text-neon-blue fill-neon-blue/20" />
                                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A2E]">Patient Stories</span>
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-outfit font-black text-[#1A1A2E] leading-[0.9] tracking-tighter uppercase">
                                WHAT OUR <br />
                                <GradientText className="italic pr-6">PATIENTS SAY.</GradientText>
                            </h2>
                        </div>

                        <div className="hidden lg:grid grid-cols-2 gap-10 border-l border-gray-200 pl-10 mb-2">
                            <div>
                                <p className="text-3xl font-outfit font-black text-[#1A1A2E]">4.9/5</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Average Score</p>
                            </div>
                            <div>
                                <p className="text-3xl font-outfit font-black text-[#1A1A2E]">25k+</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Cases Solved</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Stacked Cards */}
                <div className="w-full px-4 md:px-0 max-w-5xl mx-auto z-10 pb-20">
                    {reviews.map((review, index) => (
                        <CaseFileCard
                            key={index}
                            review={review}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Navigation Prompt */}
                <div className="flex flex-col items-center gap-2 md:gap-3 z-20">
                    <div className="w-px h-8 md:h-12 bg-gradient-to-b from-black/5 via-black/20 to-transparent relative overflow-hidden">
                        {/* Simple CSS animation instead of Framer Motion loop ideally, or just static */}
                        <div className="absolute top-0 left-0 w-full h-4 bg-neon-cyan animate-bounce" />
                    </div>
                    <span className="text-[7px] md:text-[9px] font-mono tracking-[0.2em] text-black/30 uppercase">Scroll for more</span>
                </div>
            </div>
        </section>
    );
}
