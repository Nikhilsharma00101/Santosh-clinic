"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Mail,
    Clock,
    MessageCircle,
    ChevronRight,
    Sparkles,
    ArrowUpRight,
    ShieldCheck,
    Navigation,
    CalendarCheck,
    PhoneCall
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFF] relative overflow-hidden font-outfit">
            {/* Ultra-Premium Ambient Background System */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.08)_0%,transparent_70%)]" />

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
                    className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-200/10 blur-[130px] rounded-full"
                />

                {/* Micro-Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.015] mix-blend-overlay" />

                {/* Neural Mesh Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `radial-gradient(#14B8A6 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}
                />
            </div>

            <div className="container relative z-10 max-w-6xl mx-auto pt-44 pb-32 px-6">
                {/* Header Information */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                    >
                        <Sparkles className="w-3 h-3 text-teal-500" />
                        Available for you 24/7
                    </motion.div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
                            >
                                Let&apos;s Start a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">Conversation.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
                            >
                                We&apos;re here to answer your questions and help you book your visit. Reach out via WhatsApp, call, or visit us in person.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="hidden lg:block pb-2"
                        >
                            <div className="flex items-center gap-4 px-6 py-4 bg-white/50 backdrop-blur-xl border border-white rounded-[2rem] shadow-sm">
                                <div className="animate-pulse w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">Clinic is Open</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Side: Contact Console */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/70 backdrop-blur-3xl border border-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]"
                        >
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-teal-600 mb-10">Contact Details</h2>

                            <div className="space-y-10">
                                {[
                                    {
                                        icon: PhoneCall,
                                        label: "Call Us Anytime",
                                        value: SITE_CONFIG.phoneDisplay,
                                        href: `tel:${SITE_CONFIG.phoneValue}`,
                                        color: "text-blue-500",
                                        bg: "bg-blue-50"
                                    },
                                    {
                                        icon: MessageCircle,
                                        label: "WhatsApp Support",
                                        value: "Fast Response",
                                        href: SITE_CONFIG.whatsappUrl,
                                        color: "text-teal-500",
                                        bg: "bg-teal-50"
                                    },
                                    {
                                        icon: Mail,
                                        label: "Email Address",
                                        value: SITE_CONFIG.email,
                                        href: `mailto:${SITE_CONFIG.email}`,
                                        color: "text-indigo-500",
                                        bg: "bg-indigo-50"
                                    }
                                ].map((item, i) => (
                                    <a key={i} href={item.href} className="group flex items-center gap-6">
                                        <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</div>
                                            <div className={cn(
                                                "font-bold text-slate-900 group-hover:text-teal-600 transition-colors",
                                                item.label === "Email Address" ? "text-[11px] md:text-lg" : "text-sm md:text-lg"
                                            )}>
                                                {item.value}
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 group-hover:text-teal-500 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <Clock className="w-5 h-5 text-teal-400" />
                                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-teal-400">Clinic Hours</h2>
                                </div>

                                <div className="space-y-4 mt-8">
                                    <div className="pb-6 border-b border-white/10">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-slate-400 font-bold">Monday — Saturday</span>
                                            <span className="bg-teal-500/20 text-teal-400 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Active</span>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">Morning Session</span>
                                                <span className="text-white font-black text-sm">08:00 AM — 02:00 PM</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-xs font-medium uppercase tracking-widest">Evening Session</span>
                                                <span className="text-white font-black text-sm">04:00 PM — 07:00 PM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-slate-400 font-bold">Sunday</span>
                                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Emergency & Basic Care</span>
                                        </div>
                                        <span className="text-white font-black text-sm">{SITE_CONFIG.timings.sunday}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <Link
                            href="/book"
                            className="flex items-center justify-between p-7 rounded-[2.5rem] bg-teal-600 hover:bg-teal-500 text-white shadow-xl shadow-teal-500/20 transition-all group"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <CalendarCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/60 mb-1">Get Started</div>
                                    <div className="text-lg font-bold">Book Appointment</div>
                                </div>
                            </div>
                            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Side: Map & Location Identity */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative group h-full flex flex-col"
                        >
                            {/* Visual Map Container */}
                            <div className="relative flex-grow min-h-[500px] h-full bg-white/50 backdrop-blur-3xl border border-white rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] group-hover:shadow-2xl transition-all duration-700">
                                <iframe
                                    src={SITE_CONFIG.googleMapsUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="absolute inset-0 transition-all duration-1000"
                                ></iframe>

                                {/* Overlay Identity Dock */}
                                <div className="absolute top-8 left-8 right-8 z-20 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between pointer-events-none">
                                    <div className="px-6 py-3 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-xl flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center shrink-0">
                                            <Navigation className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinic Location</div>
                                            <div className="text-sm font-bold text-slate-800">Swatantra Nagar, Narela</div>
                                        </div>
                                    </div>
                                    <div className="px-6 py-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
                                        <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Live Tracking Active</span>
                                    </div>
                                </div>

                                {/* Address Float */}
                                <div className="absolute bottom-8 left-8 right-8 z-20">
                                    <div className="p-8 bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-white shadow-2xl flex flex-col md:flex-row items-center gap-8 group/addr">
                                        <div className="w-20 h-20 rounded-[2rem] bg-indigo-50 flex items-center justify-center shrink-0 group-hover/addr:scale-110 transition-transform">
                                            <MapPin className="w-10 h-10 text-indigo-600" />
                                        </div>
                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                                                {SITE_CONFIG.address}
                                            </h3>
                                            <p className="text-slate-500 font-medium">
                                                Opposite State Bank of India, Main Road, Narela.
                                            </p>
                                        </div>
                                        <div className="h-12 w-px bg-slate-200 hidden md:block" />
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONFIG.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pointer-auto shrink-0 px-8 py-4 bg-slate-900 hover:bg-teal-600 text-white rounded-2xl font-bold flex items-center gap-3 transition-colors pointer-events-auto shadow-lg"
                                        >
                                            Get Directions
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer Badges */}
                <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    {[
                        { icon: ShieldCheck, label: "Private & Secure" },
                        { icon: Sparkles, label: "Verified Clinic" },
                        { icon: MessageCircle, label: "Instant Connection" }
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <badge.icon className="w-5 h-5 text-slate-900" />
                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
