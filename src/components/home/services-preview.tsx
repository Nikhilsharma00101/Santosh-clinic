"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Baby, Bone, Stethoscope, Sparkles, HeartPulse, ShieldCheck, Plus, Zap, Activity, ArrowUpRight, PhoneCall } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        icon: Bone,
        color: "from-teal-500 to-emerald-500",
        glow: "bg-teal-500/20",
        border: "border-teal-500/30",
        title: "Orthopedic Care",
        short: "Bone & Joint",
        desc: "Advanced care for all joint, spine, and bone issues helping you move freely.",
        features: ["Joint Pain Relief", "Fracture Care", "Spine Health", "Sports Injury"],
        href: "/services",
        size: "lg:col-span-2 lg:row-span-1",
    },
    {
        id: "02",
        icon: Baby,
        color: "from-rose-500 to-pink-500",
        glow: "bg-rose-500/20",
        border: "border-rose-500/30",
        title: "Child Care",
        short: "Pediatrics",
        desc: "Complete healthcare for infants and children in a friendly environment.",
        features: ["Newborn Care", "Vaccination", "Growth Tracking", "Nutrition Counsel"],
        href: "/services",
        size: "lg:col-span-2 lg:row-span-1",
    },
    {
        id: "03",
        icon: Stethoscope,
        color: "from-blue-500 to-indigo-500",
        glow: "bg-blue-500/20",
        border: "border-blue-500/30",
        title: "General Medicine",
        short: "Family Health",
        desc: "Primary healthcare for adults focusing on diabetes, fever, and BP management.",
        features: ["Fever & Cold", "Diabetes Care", "BP Management", "Infection Care"],
        href: "/services",
        size: "lg:col-span-1 lg:row-span-1",
    },
    {
        id: "04",
        icon: ShieldCheck,
        color: "from-slate-700 to-slate-900",
        glow: "bg-slate-500/20",
        border: "border-slate-500/30",
        title: "Safe & Secure",
        short: "Our Promise",
        desc: "Direct and private booking system ensuring you get medical help instantly.",
        features: ["Private Booking", "Expert Doctors", "Direct Contact", "Safe Records"],
        href: "/book",
        size: "lg:col-span-1 lg:row-span-1",
    }
];

export function ServicesPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 relative z-10 bg-white overflow-hidden">
            {/* Background Kinetic Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-neon-mint/5 rounded-full blur-[120px]" />

                {/* Floating Decorative Icons */}
                <div className="absolute top-[20%] right-[10%] opacity-[0.03] rotate-12 text-gray-400">
                    <Plus size={300} strokeWidth={1} />
                </div>
                <div className="absolute bottom-[20%] left-[5%] opacity-[0.02] -rotate-12 text-gray-400">
                    <Plus size={400} strokeWidth={1} />
                </div>

                {/* Floating Large Text */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-20 right-0 text-[15vw] font-outfit font-black text-gray-50 select-none pointer-events-none leading-none -z-10 will-change-transform"
                >
                    EXPERTISE
                </motion.div>
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-20 left-0 text-[15vw] font-outfit font-black text-gray-50 select-none pointer-events-none leading-none -z-10 will-change-transform"
                >
                    CARE
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Editorial Header */}
                <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between mb-32">
                    <div className="space-y-8 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm"
                        >
                            <Sparkles size={16} className="text-neon-blue" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">World-Class Treatments</span>
                        </motion.div>
                        <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-outfit font-black text-[#1A1A2E] leading-[0.85] tracking-tighter">
                            OUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-mint italic font-display pr-6 uppercase underline decoration-neon-blue/20 decoration-8 underline-offset-[-10px]">
                                EXPERTISE.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xs lg:mb-8">
                        <div className="space-y-6 lg:border-l-2 lg:pl-10 border-gray-100">
                            <p className="text-lg md:text-xl text-gray-500 font-outfit font-light leading-[1.6]">
                                Healthcare should be <span className="text-gray-900 font-medium">simple.</span> We’ve designed our services to be as <span className="text-[#1A1A2E] font-bold">accessible as they are advanced.</span>
                            </p>
                            <div className="flex items-center gap-3">
                                <HeartPulse size={18} className="text-neon-pink" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                    Trusted by 50,000+ Patients
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Kinetic Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-[350px] lg:auto-rows-[400px]">
                    {([
                        services[0], // Ortho (2x1) 
                        services[1], // Child (2x1)
                        { id: 'HELP' }, // Experimental Help (2x1)
                        services[2], // General Medicine (1x1)
                        services[3]  // Safe & Secure (1x1)
                    ]).map((item, index) => {
                        if ('id' in item && item.id === 'HELP') {
                            return (
                                <motion.div
                                    key="help-node"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="lg:col-span-2 lg:row-span-1 p-10 rounded-[3.5rem] bg-[#1A1A2E] text-white flex flex-col justify-between overflow-hidden relative group shadow-2xl shadow-blue-900/20 border border-white/5 transition-all duration-700 hover:-translate-y-2"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                                    <div className="relative z-10 space-y-4">
                                        <Activity size={32} className="text-neon-cyan" />
                                        <h3 className="text-3xl lg:text-5xl font-outfit font-black leading-none">Need Immediate <br /> Assistance?</h3>
                                    </div>
                                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <Link href="/book" className="px-8 py-4 rounded-full bg-white text-[#1A1A2E] font-black text-xs uppercase tracking-widest hover:bg-neon-cyan hover:text-[#1A1A2E] transition-all duration-300 shadow-xl flex items-center gap-2">
                                            <PhoneCall size={14} /> Book Now
                                        </Link>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Response: <span className="text-neon-mint">under 5 mins</span></p>
                                    </div>
                                    <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[8rem] lg:text-[10rem] font-black text-white/5 pointer-events-none select-none italic font-display whitespace-nowrap">HELP</div>
                                </motion.div>
                            );
                        }
                        const service = item as typeof services[0];
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={cn("group relative rounded-[3.5rem] overflow-hidden border-2 border-gray-100 bg-white/80 backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 will-change-transform", service.size)}
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${service.color} opacity-40 group-hover:opacity-100 transition-all duration-700`} />
                                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-100 transition-all duration-700 rounded-b-full`} />
                                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-100 transition-all duration-700 rounded-t-full`} />
                                <div className={`absolute inset-0 rounded-[3.5rem] border border-transparent bg-gradient-to-br ${service.color} opacity-[0.08] group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} style={{ maskImage: 'linear-gradient(white, white) padding-box, linear-gradient(white, white)', maskComposite: 'exclude', WebkitMaskComposite: 'xor', padding: '1px' }} />
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #1A1A2E 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br ${service.color} blur-[120px] -z-10`} />
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 -translate-y-full group-hover:animate-scanner pointer-events-none" />
                                <Link href={{ pathname: "/book", query: { service: service.short } }} className="flex flex-col h-full p-12 justify-between relative z-10">
                                    <div className="space-y-10">
                                        <div className="flex items-start justify-between">
                                            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-tr ${service.color} shadow-2xl shadow-gray-200 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[15deg] group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]`}>
                                                <service.icon size={30} className="text-white drop-shadow-md" />
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-1">
                                                <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] group-hover:text-gray-400 transition-colors">ACC-ID: {service.id}</span>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-mint animate-pulse" />
                                                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tighter">Loc: {index < 2 ? 'UNIT-A' : 'UNIT-B'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="h-px w-8 bg-gray-100 group-hover:w-16 group-hover:bg-gray-200 transition-all duration-700" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 group-hover:text-[#1A1A2E] transition-colors">{service.short}</span>
                                            </div>
                                            <h3 className="text-4xl lg:text-5xl font-outfit font-black text-[#1A1A2E] leading-[0.9] mb-6 group-hover:translate-x-3 transition-transform duration-700 tracking-tighter">{service.title}</h3>
                                            <p className="text-sm font-outfit font-light text-gray-400 leading-relaxed max-w-[240px] group-hover:text-gray-600 transition-colors">{service.desc}</p>
                                            {service.features && (
                                                <div className={cn("grid gap-4 pt-12 border-t border-gray-50 mt-12", service.size.includes('lg:col-span-2') ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1")}>
                                                    {service.features.map((feature, fIdx) => (
                                                        <div key={fIdx} className="group/feat flex items-center gap-4 p-4 pr-6 rounded-[2rem] bg-gray-50/50 border border-gray-100 hover:border-neon-pink/30 hover:bg-white hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-700">
                                                            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-xl shadow-pink-500/20 group-hover/feat:scale-110 group-hover/feat:rotate-12 transition-transform duration-500`}><Zap size={16} /></div>
                                                            <div className="flex flex-col">
                                                                <span className="text-[11px] font-black tracking-widest text-[#1A1A2E] opacity-90 group-hover/feat:opacity-100 transition-opacity uppercase">{feature}</span>
                                                                <span className="text-[9px] font-bold text-gray-400 uppercase">Active</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-10 border-t border-gray-50/50 mt-auto">
                                        <div className="flex flex-col gap-3">
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Care Coverage</span>
                                            <div className="flex -space-x-2">
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-neon-blue/10 flex items-center justify-center text-neon-blue shadow-lg"><Activity size={14} /></div>
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-neon-pink/10 flex items-center justify-center text-neon-pink shadow-lg"><HeartPulse size={14} /></div>
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-neon-mint/10 flex items-center justify-center text-neon-mint shadow-lg"><ShieldCheck size={14} /></div>
                                                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#1A1A2E] flex items-center justify-center text-[10px] text-white font-black shadow-lg">+12k</div>
                                            </div>
                                        </div>
                                        <div className="w-16 h-16 rounded-[2rem] bg-gray-50 flex items-center justify-center transition-all duration-700 group-hover:bg-[#1A1A2E] group-hover:text-white group-hover:rotate-[225deg] shadow-xl shadow-gray-200 group-hover:shadow-gray-400/20"><ArrowUpRight size={24} className="rotate-[45deg]" /></div>
                                    </div>
                                </Link>
                                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none"><div className="absolute top-[-50%] right-[-50%] w-full h-full border border-gray-100/50 rounded-full group-hover:scale-150 transition-transform duration-1000" /></div>
                            </motion.div>
                        );
                    })}


                </div>
            </div>
        </section>
    );
}
