"use client";

import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight, Activity, Zap, Fingerprint, ShieldCheck, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";

export function Footer() {
    const [currentTime, setCurrentTime] = useState("");
    const [isClinicOpen, setIsClinicOpen] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const hour = now.getHours();
            // Clinic is open during doctor timings: 8 AM - 2 PM and 4 PM - 7 PM
            const isMorningShift = (hour >= 8 && hour < 14);
            const isEveningShift = (hour >= 16 && hour < 19);
            setIsClinicOpen(isMorningShift || isEveningShift);
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };

        updateStatus();
        const timer = setInterval(updateStatus, 1000);
        return () => clearInterval(timer);
    }, []);

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [300, -100]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <footer ref={footerRef} className="relative bg-white pt-20 pb-12 overflow-hidden border-t border-gray-100">
            {/* Background Layer: "The Technical Vellum" */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.03)_1px,transparent_0)] bg-[size:40px_40px]" />

                {/* Floating Massive Signature - Transparent Outline Effect */}
                <motion.div
                    style={{
                        y: y1,
                        WebkitTextStroke: "1px rgba(0,0,0,0.08)"
                    } as Record<string, unknown>}
                    className="absolute top-[5%] left-[-5%] text-[35vw] font-display font-black leading-none uppercase select-none tracking-tighter text-transparent z-[40] pointer-events-none opacity-[0.1]"
                >
                    SANTOSH
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section 1: The Dark Command Hub (Floating Island) */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative bg-[#0A0A0B] rounded-[3rem] p-8 md:p-16 mb-24 overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-30"
                >
                    {/* Interior Background Decor */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-20">
                        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-neon-blue/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[100px] rounded-full" />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12 xl:col-span-7">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="relative w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center p-2 group hover:rotate-3 transition-transform">
                                    <Image src="/logo.png" alt="Santosh Clinic" width={48} height={48} className="object-contain" />
                                </div>
                                <div className="space-y-1">
                                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-mono text-white/50 uppercase tracking-[0.3em]">Clinic Online</span>
                                    </div>
                                    <p className="text-[10px] font-mono text-neon-cyan/80 uppercase tracking-widest pl-1">Narela Branch</p>
                                </div>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8">
                                READY TO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-blue italic font-light">IMPROVE</span> YOUR HEALTH?
                            </h2>
                            <p className="text-lg text-white/40 font-light leading-relaxed max-w-lg mb-12">
                                Book an appointment today and experience the best medical care in Narela. Our doctors are here to help you live better.
                            </p>

                            <div className="flex flex-wrap gap-x-12 gap-y-8">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest block font-bold">Call for Emergency</span>
                                    <a href={`tel:${SITE_CONFIG.phoneValue}`} className="block text-3xl font-bold text-white hover:text-neon-cyan transition-colors tracking-tighter">
                                        {SITE_CONFIG.phoneDisplay}
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest block font-bold">Send an Email</span>
                                    <a href={`mailto:${SITE_CONFIG.email}`} className="block text-[13px] md:text-2xl font-bold text-white/80 hover:text-white transition-colors underline underline-offset-8 decoration-white/10 whitespace-nowrap">
                                        {SITE_CONFIG.email}
                                    </a>
                                </div>
                                <div className="space-y-4 max-w-xs">
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">Physical Terminal</span>
                                    <div className="flex gap-3 text-sm font-medium text-white/60 leading-relaxed">
                                        <MapPin size={16} className="text-neon-cyan shrink-0" />
                                        <span>{SITE_CONFIG.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-5 relative z-20">
                            <div className="grid grid-cols-2 gap-4">
                                <Link href="/book" className="group relative aspect-square bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-white transition-all duration-500 shadow-2xl">
                                    <Zap size={32} className="text-neon-cyan group-hover:text-black transition-colors" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors">Book Now</span>
                                    <ArrowUpRight size={16} className="absolute top-6 right-6 opacity-20 group-hover:text-black group-hover:opacity-100 transition-all" />
                                </Link>
                                <Link href="/contact" className="group relative aspect-square bg-white overflow-hidden rounded-3xl flex flex-col items-center justify-center gap-4 hover:scale-[1.02] transition-all shadow-2xl">
                                    <Activity size={32} className="text-black" />
                                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/60">Contact Us</span>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Section 2: The Ethereal Navigation (Light Architecture) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start italic relative z-10">
                    <div className="md:col-span-4 space-y-12">
                        <div>
                            <span className="text-[10px] font-mono text-black/30 uppercase tracking-[0.4em] mb-8 block font-black">Our Brand</span>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center -rotate-12 shadow-xl p-3 border border-black/5 group-hover:rotate-0 transition-transform duration-500">
                                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-display font-black tracking-tighter leading-none mb-1">SANTOSH CLINIC</h4>
                                    <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Expert Healthcare</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 border border-black/5 rounded-[2.5rem] relative group overflow-hidden shadow-sm">
                            <div className="relative z-10">
                                <span className="text-[9px] font-mono text-black/20 uppercase tracking-[0.3em] block mb-4">Clinic Clock</span>
                                <p className="text-4xl font-mono font-black text-black tracking-tighter mb-4">{currentTime || "00:00:00"}</p>
                                <div className="flex items-center gap-2">
                                    <div className={cn(
                                        "w-2 h-2 rounded-full animate-pulse",
                                        isClinicOpen ? "bg-emerald-500" : "bg-red-500"
                                    )} />
                                    <span className={cn(
                                        "text-[9px] font-mono font-bold uppercase",
                                        isClinicOpen ? "text-emerald-600" : "text-red-600"
                                    )}>
                                        {isClinicOpen ? "Open for Patients" : "Closed for Patients"}
                                    </span>
                                </div>
                            </div>
                            <Fingerprint size={120} className="absolute bottom-[-20%] right-[-10%] text-black/[0.02] group-hover:text-black/[0.05] transition-colors rotate-12" />
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <span className="text-[10px] font-mono text-black/30 uppercase tracking-[0.4em] mb-10 block font-black">Navigation</span>
                        <ul className="space-y-6">
                            {FOOTER_LINKS.map((link, i) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="group relative inline-flex items-center gap-4 text-2xl font-display font-light text-black/40 hover:text-black transition-all">
                                        <span className="text-[10px] font-mono text-black/20 group-hover:text-neon-blue">{String(i + 1).padStart(2, '0')}</span>
                                        {link.name}
                                        <div className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-500" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-5">
                        <span className="text-[10px] font-mono text-black/30 uppercase tracking-[0.4em] mb-10 block font-black">Social Media</span>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { name: 'INSTAGRAM', icon: Instagram, id: 'IG', color: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' },
                                { name: 'FACEBOOK', icon: Facebook, id: 'FB', color: 'bg-gradient-to-br from-blue-500/10 to-sky-500/10' },
                                { name: 'TWITTER', icon: Twitter, id: 'TW', color: 'bg-gradient-to-br from-slate-500/10 to-black/10' },
                                { name: 'YOUTUBE', icon: Youtube, id: 'YT', color: 'bg-gradient-to-br from-red-500/10 to-orange-500/10' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className={`relative p-6 rounded-[2rem] border border-black/5 ${social.color} group hover:border-black/20 transition-all duration-500 overflow-hidden shadow-sm`}
                                >
                                    <div className="relative z-10 flex flex-col gap-6">
                                        <div className="flex justify-between items-start">
                                            <social.icon size={20} className="text-black/30 group-hover:text-black transition-colors" />
                                            <span className="text-[8px] font-mono text-black/20">{social.id}</span>
                                        </div>
                                        <span className="text-xs font-mono font-bold tracking-widest text-black/40 group-hover:text-black transition-colors">{social.name}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Section 3: The Identity Dock (Legacy & Studio Credit) */}
                <div className="mt-12 pt-8 lg:mt-20 lg:pt-16 border-t border-black/5 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-8">

                        {/* Left: Enhanced Clinical Governance lockup */}
                        <div className="flex flex-col gap-6 order-1 lg:order-1 items-center lg:items-start">
                            <div className="flex items-center gap-3 px-3 py-1.5 bg-black/[0.02] border border-black/5 rounded-xl">
                                <ShieldCheck size={12} className="text-emerald-500" />
                                <span className="text-[8px] font-mono text-black/40 uppercase tracking-[0.2em] font-bold">Verified Clinic Hub</span>
                            </div>
                            <div className="flex flex-col gap-3 text-center lg:text-left">
                                <p className="text-[11px] font-mono text-black font-black uppercase tracking-[0.3em]" suppressHydrationWarning>
                                    © {new Date().getFullYear()} Santosh Clinic Archive
                                </p>
                                <div className="flex items-start justify-center lg:justify-start gap-2 text-black/80 font-mono text-[10px] font-bold uppercase tracking-wide max-w-[400px]">
                                    <MapPin size={12} className="text-neon-blue shrink-0 mt-0.5" />
                                    <span className="leading-relaxed text-left">{SITE_CONFIG.address}</span>
                                </div>
                            </div>
                            <div className="flex gap-8 border-t border-black/5 pt-4 w-full md:w-auto justify-center lg:justify-start">
                                <Link href="/privacy" className="group flex items-center gap-2 text-[9px] font-mono font-bold text-black/30 hover:text-neon-blue transition-all uppercase tracking-widest">
                                    <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-neon-blue transition-colors" />
                                    Privacy_Protocol
                                </Link>
                                <Link href="/terms" className="group flex items-center gap-2 text-[9px] font-mono font-bold text-black/30 hover:text-neon-blue transition-all uppercase tracking-widest">
                                    <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-neon-blue transition-colors" />
                                    Usage_Terms
                                </Link>
                            </div>
                        </div>

                        {/* Center: THE MAIN ATTRACTION - BroCodeStudio Identity Card */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative order-2 lg:order-2 group mb-8 lg:mb-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-blue/20 to-neon-cyan/20 blur-2xl group-hover:opacity-100 opacity-40 transition-opacity rounded-full" />
                            <a
                                href="https://www.brocodestudio.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex items-center gap-6 px-8 py-5 bg-white border border-black/[0.08] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] rounded-[2.5rem] backdrop-blur-xl group-hover:border-black/20 transition-all duration-500 overflow-hidden"
                            >
                                <div className="flex items-center gap-4 border-r border-black/5 pr-6">
                                    <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center overflow-hidden rotate-[-8deg] group-hover:rotate-0 transition-transform">
                                        <Image
                                            src="/brocode_logo.png"
                                            alt="BroCode Studio"
                                            width={32}
                                            height={32}
                                            className="object-contain p-1"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[8px] font-mono text-black/30 uppercase tracking-[0.3em] font-bold">Powered By</span>
                                        <span className="text-sm font-display font-black tracking-tight text-black">BROCODE STUDIO</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-[9px] font-mono text-black/50 leading-tight uppercase tracking-widest">
                                        Next-Gen <br />
                                        <span className="text-black font-black">Digital Architecture</span>
                                    </p>
                                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-black/5 group-hover:bg-black group-hover:text-white transition-all">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>

                                {/* Studio pulse bar */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-100 overflow-hidden">
                                    <motion.div
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="w-[30%] h-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-40"
                                    />
                                </div>
                            </a>
                        </motion.div>

                        {/* Right: Technical Region Data */}
                        <div className="hidden lg:flex flex-col gap-2 items-end order-3">
                            <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 border border-black/[0.03] rounded-2xl">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest font-bold">Region: Asia/Delhi</span>
                            </div>
                            <span className="text-[8px] font-mono text-black/20 uppercase tracking-[0.5em] pr-2">Secure // Encrypted</span>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}
