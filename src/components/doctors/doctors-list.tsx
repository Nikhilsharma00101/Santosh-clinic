"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { useRef, memo } from "react";

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    role: string;
    education: string;
    experience: string;
    schedule: string;
    bio: string;
    image: string;
    stats: { patients: string; rating: string; surgeries?: string; vaccinations?: string; families?: string; };
    color: string;
    bg: string;
    gradient: string;
    icon: React.ComponentType<{ size?: number }>;
    tags: string[];
    focus: string;
    languages: string;
}

const DoctorCardLarge = memo(({ doctor, index }: { doctor: Doctor, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const isEven = index % 2 === 0;

    // Enhanced Tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left - width / 2);
        mouseY.set(e.clientY - top - height / 2);
    };

    const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
    const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`min-h-[90vh] flex items-center justify-center sticky top-0 py-20 ${index !== 0 ? '-mt-20' : ''}`}
        >
            <div
                ref={cardRef}
                className="container mx-auto px-4 relative"
            >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

                    {/* Visual Side */}
                    <div className="w-full lg:w-1/2 relative group perspective-1000">
                        <motion.div
                            style={{ rotateX, rotateY }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
                            className="relative z-10 aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-zinc-900 border border-white/20 shadow-2xl transition-all duration-300"
                        >
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                priority={index === 0}
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${doctor.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

                            {/* Floating Stats */}
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-wider opacity-80">{doctor.role}</p>
                                    <p className="text-3xl font-bold font-display">{doctor.name}</p>
                                </div>
                                <div className={`w-12 h-12 rounded-full ${doctor.bg} flex items-center justify-center text-white shadow-lg shadow-${doctor.color}/50`}>
                                    <doctor.icon size={24} />
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Decor */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${doctor.gradient} opacity-30 blur-3xl -z-10 rounded-[3rem]`} />

                        {/* Interactive Tags */}
                        <div className="absolute -right-12 top-24 hidden lg:flex flex-col gap-4 z-20">
                            {doctor.tags.map((tag, i) => (
                                <motion.div
                                    key={tag}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/50 shadow-lg text-sm font-bold text-gray-800 whitespace-nowrap"
                                >
                                    {tag}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm"
                            >
                                <span className={`w-2 h-2 rounded-full ${doctor.bg} animate-pulse`} />
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{doctor.specialty}</span>
                            </motion.div>

                            <h2 className="text-5xl md:text-7xl font-black text-[#1A1A2E] leading-[0.9] tracking-tighter">
                                <span className="block opacity-20 text-3xl mb-2 font-display italic">Meet</span>
                                {doctor.name}
                            </h2>

                            <div className="relative pl-6 border-l-4 border-gray-200 py-1">
                                <p className="text-lg text-gray-600 font-light leading-relaxed">
                                    {doctor.bio}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Education</p>
                                    <p className="font-semibold text-gray-900">{doctor.education}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Experience</p>
                                    <p className="font-semibold text-gray-900">{doctor.experience}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Key Focus</p>
                                    <p className="font-semibold text-gray-900 leading-tight">{doctor.focus}</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Languages</p>
                                    <p className="font-semibold text-gray-900">{doctor.languages}</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Availability</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-100">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        {doctor.schedule}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 pt-6">
                                <Link href={`/book?doctor=${encodeURIComponent(doctor.name)}`}>
                                    <div className="relative group cursor-pointer inline-flex">
                                        <div className={`absolute -inset-1 bg-gradient-to-r ${doctor.gradient} rounded-full opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500`} />
                                        <div className="relative bg-white dark:bg-[#1A1A2E] rounded-full px-8 py-4 flex items-center gap-3 border border-white/50 shadow-2xl overflow-hidden">
                                            {/* Hover Fill Effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${doctor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                            <span className="relative z-10 text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white group-hover:text-white transition-colors duration-300">
                                                Book Appointment
                                            </span>

                                            <div className="relative z-10 w-8 h-8 rounded-full border border-gray-200 dark:border-white/20 group-hover:border-white/30 flex items-center justify-center transition-colors duration-300">
                                                <ArrowUpRight size={14} className="text-slate-900 dark:text-white group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-black text-[#1A1A2E]">{doctor.stats.rating}</span>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide flex items-center gap-1">
                                        Patient Rating <Star size={10} className="fill-yellow-400 text-yellow-400" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
});
DoctorCardLarge.displayName = "DoctorCardLarge";

export function DoctorsList({ doctors }: { doctors: Doctor[] }) {
    return (
        <div className="relative z-10 pb-32">
            {doctors.map((doctor, index) => (
                <DoctorCardLarge key={doctor.id} doctor={doctor} index={index} />
            ))}
        </div>
    );
}
