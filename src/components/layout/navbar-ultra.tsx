"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconHome, IconUser, IconMessage, IconStethoscope, IconMenu2, IconX, IconPhone, IconChevronRight, IconBook, IconLayoutGrid } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function PremiumCTA() {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX / 8);
        y.set(middleY / 8);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-0 overflow-visible"
        >
            {/* 1. THE "STATUS BEACON" - Pulsing indicator outside the button */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_12px_rgba(0,131,143,1)]" />
                <div className="w-[1.5px] h-6 bg-gradient-to-b from-neon-cyan/60 to-transparent" />
            </div>

            {/* 2. ASYMMETRIC MAIN BODY - High-design shape */}
            <div className="relative px-8 py-3.5 bg-[#1A1A2E] rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-sm rounded-br-sm border-l border-t border-neon-cyan/40 overflow-hidden transition-all duration-500 group-hover:border-neon-cyan shadow-[10px_10px_30px_rgba(0,0,0,0.15)] group-hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]">

                {/* 3. KINETIC GRID - Micro background pattern */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{ backgroundImage: 'radial-gradient(circle, #22D3EE 1px, transparent 1px)', backgroundSize: '10px 10px' }}
                />

                {/* 4. THE LIVE ECG HEARTBEAT LINE */}
                <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:opacity-100 transition-opacity duration-700" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <motion.path
                        d="M0 20 L35 20 L40 10 L45 30 L50 20 L100 20"
                        fill="none"
                        stroke="url(#ecg-gradient-main)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0.3, pathOffset: 0 }}
                        animate={{ pathOffset: [0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                        <linearGradient id="ecg-gradient-main" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#22D3EE" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* 5. GLASS REFRACTION LAYER */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                {/* 6. CONTENT HIERARCHY */}
                <div className="relative z-10 flex items-center gap-4">
                    <div className="flex flex-col items-start">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-neon-cyan/80 leading-none mb-1.5 flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-neon-cyan rounded-full animate-ping" />
                            Priority
                        </span>
                        <div className="flex items-center gap-2">
                            <IconStethoscope size={18} className="text-white group-hover:text-neon-cyan group-hover:rotate-12 transition-all duration-500" />
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">Book Visit</span>
                        </div>
                    </div>
                    <div className="h-8 w-[1px] bg-white/20 mx-1" />
                    <IconChevronRight size={20} className="text-neon-cyan group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>

                {/* 7. HYPER SCANNER SWEEP (Diagonal) */}
                <div className="absolute inset-0 w-32 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-[45deg] translate-x-[-300%] group-hover:translate-x-[400%] transition-transform duration-[1200ms] ease-in-out" />
            </div>

            {/* 8. ATMOSPHERIC AURA */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-blue rounded-full" />
            </div>
        </motion.button>
    );
}

export function NavbarUltra() {
    const { scrollY, scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navItems = [
        { name: "Home", link: "/", icon: <IconHome className="w-4 h-4" /> },
        { name: "About", link: "/about", icon: <IconUser className="w-4 h-4" /> },
        { name: "Doctors", link: "/doctors", icon: <IconStethoscope className="w-4 h-4" /> },
        { name: "Services", link: "/services", icon: <IconLayoutGrid className="w-4 h-4" /> },
        { name: "Contact", link: "/contact", icon: <IconMessage className="w-4 h-4" /> },
        { name: "Education", link: "/education", icon: <IconBook className="w-4 h-4" /> },
    ];

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 inset-x-0 z-[5000] mx-auto transition-all duration-500 ease-in-out flex justify-center pt-6 px-4",
                    scrolled ? "pt-4" : "pt-8"
                )}
            >
                {/* --- UNIFIED "COMMAND DECK" CONTAINER --- */}
                <div className={cn(
                    "relative w-full max-w-7xl rounded-[2rem] border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-xl bg-white/70 transition-all duration-500 flex items-center justify-between p-3 pl-6 md:p-4 md:pl-8",
                    scrolled ? "w-[95%] md:w-[90%] bg-white/80 shadow-2xl" : "w-full bg-white/60"
                )}>

                    {/* 1. BRAND IDENTITY CORE */}
                    <Link href="/" className="flex items-center gap-5 group">
                        {/* Logo with "Breathing" Effect */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-neon-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center shadow-inner border border-white/50 group-hover:rotate-12 transition-transform duration-500 ease-out">
                                <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                            </div>
                        </div>

                        {/* Typed Layout for Brand Name */}
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-2">
                                <h1 className="text-base md:text-2xl font-black tracking-tight text-[#1A1A2E] leading-none group-hover:tracking-wide transition-all duration-300">
                                    SANTOSH
                                </h1>
                                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse" />
                            </div>
                            <p className="text-[8px] md:text-xs font-bold uppercase tracking-[0.1em] text-gray-500 group-hover:text-neon-blue transition-colors">
                                Child Care & Multispeciality Clinic
                            </p>
                        </div>
                    </Link>

                    {/* 2. NAVIGATION LINKS (Desktop) */}
                    <div className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-white/50">
                        {navItems.filter(item => item.name !== "Education").map((item) => (
                            <Link key={item.name} href={item.link}>
                                <div className={cn(
                                    "relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group overflow-hidden",
                                    pathname === item.link ? "text-white shadow-lg" : "text-gray-500 hover:text-[#1A1A2E]"
                                )}>
                                    {/* Active Liquid Background */}
                                    {pathname === item.link && (
                                        <motion.div
                                            layoutId="nav-liquid"
                                            className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E] to-gray-900 rounded-full z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    <span className="relative z-10 flex items-center gap-2">
                                        {item.name}
                                        {/* Dot indicator for active state */}
                                        {pathname === item.link && <span className="w-1 h-1 bg-neon-cyan rounded-full" />}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* 3. RIGHT ACTION AREA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full border border-gray-200 bg-white/50 hover:bg-white transition-all duration-300 group/phone cursor-default">
                            <div className="w-8 h-8 rounded-full bg-neon-mint/10 flex items-center justify-center text-neon-mint group-hover/phone:scale-110 group-hover/phone:bg-neon-mint group-hover/phone:text-white transition-all duration-500">
                                <IconPhone size={14} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase font-black text-gray-400 leading-none tracking-widest">Emergency</span>
                                <span className="text-[10px] font-black text-[#1A1A2E] leading-none mt-1 whitespace-nowrap">87008 57282</span>
                            </div>
                        </div>

                        <div className="w-[1px] h-8 bg-gray-200 hidden md:block" />

                        <Link href="/book" className="hidden md:block">
                            <PremiumCTA />
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#1A1A2E] transition-colors"
                        >
                            <IconMenu2 className="w-6 h-6" />
                        </button>
                    </div>

                    {/* --- PROGRESS BAR: INTEGRATED FLUID INDICATOR --- */}
                    <div className="absolute bottom-1 md:bottom-1.5 left-6 md:left-8 right-6 md:right-8 h-[1px]">
                        <div className="relative w-full h-full bg-slate-200/40 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-mint origin-left shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                                style={{ scaleX }}
                            />
                        </div>
                    </div>
                </div>
            </motion.nav>


            {/* --- MOBILE FULLSCREEN MENU (ULTRA PREMIUM) --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[6000] bg-white flex flex-col overflow-hidden"
                    >
                        {/* Dynamic Background Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-neon-cyan/5 rounded-full blur-[120px]" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-neon-blue/5 rounded-full blur-[120px]" />
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
                        </div>

                        {/* Top Header */}
                        <div className="relative z-10 flex justify-between items-center p-6 md:p-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center">
                                    <Image src="/logo.png" alt="Logo" width={24} height={24} className="object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-lg text-[#1A1A2E] leading-none tracking-tighter">SANTOSH</span>
                                    <span className="text-[7px] font-bold text-gray-500 uppercase tracking-widest mt-1">Child Care & Multispeciality Clinic</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#1A1A2E]/5 text-[#1A1A2E] active:scale-95 transition-all"
                            >
                                <IconX className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div
                            className="relative z-10 flex-1 overflow-y-auto px-6 pb-40 overscroll-contain touch-pan-y"
                            data-lenis-prevent
                        >
                            <div className="space-y-3 mt-4">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-2">Navigation</p>
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.link}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group block"
                                        >
                                            <div className={cn(
                                                "flex items-center justify-between p-5 rounded-[1.5rem] transition-all duration-300",
                                                pathname === item.link
                                                    ? "bg-[#1A1A2E] text-white shadow-xl"
                                                    : "bg-gray-50/80 hover:bg-gray-100 border border-gray-100/50"
                                            )}>
                                                <div className="flex items-center gap-5">
                                                    <div className={cn(
                                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                                                        pathname === item.link ? "bg-white/10 text-white" : "bg-white text-[#1A1A2E] shadow-sm"
                                                    )}>
                                                        {React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement<{ size?: number }>, { size: 20 })}
                                                    </div>
                                                    <span className="text-xl font-bold tracking-tight">{item.name}</span>
                                                </div>
                                                <IconChevronRight
                                                    size={18}
                                                    className={cn(
                                                        "transition-transform",
                                                        pathname === item.link ? "text-neon-cyan opacity-100" : "text-gray-300 group-hover:translate-x-1"
                                                    )}
                                                />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Info Cards */}
                            <div className="mt-12 space-y-4">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-2">Support</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="tel:8700857282" className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-rose-50 border border-rose-100 text-rose-600 active:scale-95 transition-all">
                                        <IconPhone size={24} className="mb-2" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Help Line</span>
                                    </a>
                                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-neon-cyan/5 border border-neon-cyan/10 text-neon-cyan active:scale-95 transition-all">
                                        <IconMessage size={24} className="mb-2" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">Location</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-white/80 backdrop-blur-md border-t border-gray-100 z-20">
                            <div className="flex justify-center">
                                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="w-full">
                                    <div className="relative flex justify-center scale-110">
                                        <PremiumCTA />
                                    </div>
                                </Link>
                            </div>
                            <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mt-6 mb-2">
                                Santosh Clinic • Est. 2026
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
