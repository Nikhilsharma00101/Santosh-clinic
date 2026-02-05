"use client";


import Link from "next/link";
import { Baby, Bone, Stethoscope, Sparkles, HeartPulse, ShieldCheck, Activity, ArrowUpRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "01",
        icon: Bone,
        color: "from-teal-500 to-emerald-500",
        // Removed glow/border props as they caused heavy rendering
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
        title: "Safe & Secure",
        short: "Our Promise",
        desc: "Direct and private booking system ensuring you get medical help instantly.",
        features: ["Private Booking", "Expert Doctors", "Direct Contact", "Safe Records"],
        href: "/book",
        size: "lg:col-span-1 lg:row-span-1",
    }
];

export function ServicesPreview() {
    return (
        <section className="py-24 md:py-32 relative z-10 bg-white overflow-hidden">
            {/* Background - STATIC only, no animations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
                {/* Static blurry blobs - reduced count and no animation */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[80px]" />

                {/* Static Text Decor */}
                <div className="absolute top-10 right-0 text-[10vw] font-outfit font-black text-gray-50/80 leading-none -z-10">
                    EXPERTISE
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Editorial Header */}
                <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-20">
                    <div className="space-y-6 max-w-3xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                            <Sparkles size={16} className="text-neon-blue" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">World-Class Treatments</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-outfit font-black text-[#1A1A2E] leading-[0.9] tracking-tighter">
                            OUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-mint italic font-display pr-6 uppercase underline decoration-neon-blue/20 decoration-8 underline-offset-[-5px]">
                                EXPERTISE.
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-xs lg:mb-4">
                        <div className="space-y-4 lg:border-l-2 lg:pl-10 border-gray-100">
                            <p className="text-base md:text-lg text-gray-500 font-outfit font-light leading-[1.6]">
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

                {/* The Static Grid - Performance First */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
                    {([
                        services[0], // Ortho
                        services[1], // Child
                        { id: 'HELP' }, // Help
                        services[2], // General
                        services[3]  // Safe
                    ]).map((item) => {
                        if ('id' in item && item.id === 'HELP') {
                            return (
                                <div
                                    key="help-node"
                                    className="lg:col-span-2 lg:row-span-1 p-8 rounded-[2.5rem] bg-[#1A1A2E] text-white flex flex-col justify-between overflow-hidden relative group hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* Static bg decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

                                    <div className="relative z-10 space-y-4">
                                        <Activity size={32} className="text-neon-cyan" />
                                        <h3 className="text-3xl lg:text-4xl font-outfit font-black leading-none">Need Immediate <br /> Assistance?</h3>
                                    </div>
                                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <Link href="/book" className="px-8 py-3 rounded-full bg-white text-[#1A1A2E] font-black text-xs uppercase tracking-widest hover:bg-neon-cyan hover:text-[#1A1A2E] transition-colors duration-200 shadow-lg flex items-center gap-2">
                                            <PhoneCall size={14} /> Book Now
                                        </Link>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Response: <span className="text-neon-mint">under 5 mins</span></p>
                                    </div>
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[6rem] lg:text-[8rem] font-black text-white/5 pointer-events-none select-none italic font-display whitespace-nowrap">HELP</div>
                                </div>
                            );
                        }
                        const service = item as typeof services[0];
                        return (
                            <Link
                                key={service.id}
                                href={{ pathname: "/book", query: { service: service.short } }}
                                className={cn(
                                    "group relative rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300",
                                    service.size
                                )}
                            >
                                {/* Simple colored fade on top instead of blur/gradients */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-40`} />

                                <div className="flex flex-col h-full p-8 justify-between relative z-10">
                                    <div className="space-y-8">
                                        <div className="flex items-start justify-between">
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} shadow-lg flex items-center justify-center text-white`}>
                                                <service.icon size={26} />
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em]">ACC-ID: {service.id}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="h-px w-6 bg-gray-200" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{service.short}</span>
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-outfit font-black text-[#1A1A2E] leading-[0.9] mb-4 tracking-tighter group-hover:text-blue-900 transition-colors">{service.title}</h3>
                                            <p className="text-sm font-outfit font-light text-gray-400 leading-relaxed max-w-[240px]">{service.desc}</p>

                                            {/* Simplified Features List */}
                                            {service.features && service.size.includes('lg:col-span-2') && (
                                                <div className="grid grid-cols-2 gap-3 pt-8 mt-6 border-t border-gray-50">
                                                    {service.features.map((feature, fIdx) => (
                                                        <div key={fIdx} className="flex items-center gap-2">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Bottom Action Area */}
                                    <div className="flex items-center justify-between pt-6 mt-auto">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-blue-500 transition-colors">Explorer Details</span>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#1A1A2E] group-hover:text-white transition-all duration-300">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
