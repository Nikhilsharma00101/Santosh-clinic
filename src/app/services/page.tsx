"use client";

import { motion } from "framer-motion";
import {
    Bone,
    Baby,
    Stethoscope,
    Sparkles,
    ChevronRight
} from "lucide-react";
import Link from "next/link";

const serviceSections = [
    {
        title: "Orthopedic Care",
        icon: Bone,
        color: "teal",
        bgGradient: "from-teal-50 to-white",
        headerBg: "bg-teal-600",
        iconColor: "text-teal-600",
        items: [
            "Bone & Joint Pain (Back, Knee, Neck)",
            "Fracture & Sprain Treatments",
            "Bone Deformity Correction",
            "Joint Replacement (Knee & Hip)",
            "Plaster & Joint Injections",
            "Sports Injury recovery"
        ]
    },
    {
        title: "Child & Pediatric Care",
        icon: Baby,
        color: "rose",
        bgGradient: "from-rose-50 to-white",
        headerBg: "bg-rose-500",
        iconColor: "text-rose-500",
        items: [
            "Complete Child Healthcare",
            "Newborn Baby Special Care",
            "Nutrition & Diet Counseling",
            "Growth & Milestone Tracking",
            "Full Vaccination Services",
            "Adolescent & Teenage Care"
        ]
    },
    {
        title: "General Physician Care",
        icon: Stethoscope,
        color: "emerald",
        bgGradient: "from-emerald-50 to-white",
        headerBg: "bg-emerald-500",
        iconColor: "text-emerald-500",
        items: [
            "Fever, Cough, and Common Cold",
            "Diabetes & Blood Pressure Management",
            "Thyroid Disorder Treatment",
            "Stomach, Gas, and Acidity Relief",
            "Infection & Viral Care",
            "Headache & Dizziness Consult"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFF] relative overflow-hidden font-outfit">
            {/* Ultra-Premium Ambient Background System */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary Ambient Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.08)_0%,transparent_70%)]" />

                {/* Identity Color Orbs (Subtle Breathing Effect) */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.4, 0.3],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-teal-200/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.3, 0.2],
                        x: [0, -30, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] bg-rose-200/10 blur-[130px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.25, 0.2],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] left-[20%] w-[700px] h-[700px] bg-emerald-200/15 blur-[140px] rounded-full"
                />

                {/* Micro-Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.015] mix-blend-overlay" />

                {/* Neural Mesh Pattern (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `radial-gradient(#14B8A6 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}
                />
            </div>

            {/* Simple Premium Hero */}
            <section className="pt-44 pb-20 px-6 relative">
                <div className="container max-w-6xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                    >
                        <Sparkles className="w-3 h-3 text-teal-500" />
                        Professional Healthcare
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
                    >
                        Our Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Expertise.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Specialized care designed for your family&apos;s well-being. From newborn care to advanced orthopedic solutions.
                    </motion.p>
                </div>
            </section>

            {/* Color-Segmented Services Section */}
            <section className="pb-32 px-6 relative z-10">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {serviceSections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className={`relative group overflow-hidden bg-white/70 backdrop-blur-3xl rounded-[3rem] border border-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                            >
                                {/* Subtle inner gradient that matches the theme */}
                                <div className={`absolute inset-0 bg-gradient-to-b ${section.bgGradient} opacity-30`} />

                                {/* Section Header Bar */}
                                <div className={`relative z-10 h-2 w-full ${section.headerBg}`} />

                                <div className="relative z-10 p-10 pt-12">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-500`}>
                                            <section.icon className={`w-8 h-8 ${section.iconColor}`} />
                                        </div>
                                        <div className="h-0.5 w-12 bg-slate-200/50 rounded-full" />
                                    </div>

                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
                                        {section.title}
                                    </h2>

                                    <div className="space-y-4 mb-12">
                                        {section.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="flex items-start gap-4 group/item">
                                                <div className={`mt-1 h-1.5 w-1.5 rounded-full ${section.headerBg} opacity-40 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all`} />
                                                <span className="text-slate-600 font-medium leading-tight group-hover/item:text-slate-900 transition-colors">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="/book"
                                        className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest ${section.iconColor} hover:gap-4 transition-all`}
                                    >
                                        Book Consultation <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Abstract decorative element */}
                                <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${section.headerBg} opacity-[0.03]`} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="pb-32 px-6 relative z-10">
                <div className="container max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.15)_0%,transparent_70%)] opacity-50" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                                Same-Day Appointment <br />
                                Available for All Services.
                            </h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">
                                Fast-track your recovery. Book your consultation on WhatsApp and get instant confirmation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/book" className="h-16 px-10 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-teal-500/20">
                                    Book Your Visit
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                                <Link href="/contact" className="h-16 px-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center gap-3 transition-all">
                                    Contact Clinic
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
