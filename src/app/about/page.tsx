"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
    Heart,
    Stethoscope,
    Clock,
    ShieldCheck,
    Activity,
    Users,
    Sparkles
} from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { useMotionTemplate, useMotionValue } from "framer-motion";
import { articles } from "@/data/articles";
import Link from "next/link";

interface HolographicCardItem {
    id: string;
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    subtitle: string;
    desc: string;
    color: string;
    border: string;
    shadow: string;
}

function HolographicCard({ item }: { item: HolographicCardItem, index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative h-full min-h-[340px] rounded-[2rem] bg-neutral-900/40 border border-white/10 overflow-hidden flex flex-col p-8 transition-all duration-500 hover:bg-neutral-900/60"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Mouse Spotlight Background */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.06),
                            transparent 80%
                        )
                    `
                }}
            />

            {/* 2. Color Glow Blob */}
            <div className={`absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br ${item.color} rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none`} />

            {/* 3. Texture/Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

            {/* 4. Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">

                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 text-white/90 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                        <item.icon size={28} />
                    </div>

                    <span className="font-display text-4xl font-bold text-white/5 group-hover:text-white/20 transition-colors duration-500 select-none">
                        {item.id}
                    </span>
                </div>

                {/* Body */}
                <div className="space-y-4">
                    <div className="space-y-2">
                        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                            {item.subtitle}
                        </span>
                        <h3 className="font-display text-3xl text-white font-medium leading-tight group-hover:translate-x-1 transition-transform duration-300">
                            {item.title}
                        </h3>
                    </div>

                    <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[90%] group-hover:text-white/70 transition-colors">
                        {item.desc}
                    </p>
                </div>

                {/* Footer / Animated Line */}
                <div className="relative w-full h-px bg-white/10 mt-2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`} />
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // Smooth scroll physics
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const yHero = useTransform(smoothProgress, [0, 0.5], [0, 150]);
    const opacityHero = useTransform(smoothProgress, [0, 0.2], [1, 0]);

    const rotateAbstract = useTransform(smoothProgress, [0, 1], [0, 45]);

    return (
        <div ref={containerRef} className="min-h-screen bg-transparent text-black font-sans selection:bg-neon-mint/30 overflow-hidden">

            {/* BACKGROUND NOISE & GRADIENTS */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-neon-blue/5 to-transparent blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-to-t from-neon-purple/5 to-transparent blur-[120px]" />
            </div>

            {/* ---------------- SECTION 1: THE MAGAZINE COVER HERO ---------------- */}
            <section className="relative h-screen w-full flex flex-col items-center justify-center p-6 overflow-hidden">

                {/* Background Typography (The "Texture") */}
                <motion.div
                    style={{ y: yHero, opacity: opacityHero }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none select-none max-w-[100vw] overflow-hidden"
                >
                    <span className="font-display font-black text-[25vw] leading-none text-black/[0.03] text-center tracking-tighter whitespace-nowrap">
                        SANTOSH
                    </span>
                </motion.div>

                {/* Main Content Layer */}
                <div className="z-10 relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Editorial Title */}
                    <div className="lg:col-span-8 flex flex-col relative">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-px w-16 bg-gradient-to-r from-neon-blue to-neon-mint" />
                                <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-black/40">Est. 2026</span>
                            </div>

                            <h1 className="font-display font-medium text-5xl sm:text-7xl md:text-9xl tracking-tight leading-[0.9] md:leading-[0.85] text-black">
                                The <span className="italic font-light text-black/70">Future</span> of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink font-bold">Healing.</span>
                            </h1>

                            <div className="mt-12 max-w-md">
                                <p className="font-sans text-xl text-black/60 leading-relaxed">
                                    Born in the digital age. Rooted in timeless care. A new standard for Narela, starting now.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Abstract Graphic / Image */}
                    <div className="lg:col-span-4 relative h-[400px] hidden lg:block">
                        <motion.div
                            style={{ rotate: rotateAbstract }}
                            className="absolute inset-0 border border-black/5 rounded-full"
                        />
                        <motion.div
                            style={{ rotate: useTransform(smoothProgress, [0, 1], [0, -45]) }}
                            className="absolute inset-4 border border-black/5 rounded-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <GlassCard className="p-8 aspect-square flex flex-col items-center justify-center gap-4 rounded-full bg-white/40 backdrop-blur-xl border-white/60">
                                <Sparkles className="w-16 h-16 text-neon-mint animate-pulse-slow" />
                                <div className="text-center">
                                    <span className="block font-display text-2xl md:text-4xl font-bold">New</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-black/50">Era of Care</span>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="font-mono text-[10px] tracking-widest uppercase text-black/30">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent" />
                </motion.div>
            </section>

            {/* ---------------- SECTION 2: THE ARCHITECTURAL DOSSIER (PROFESSIONAL & CREATIVE) ---------------- */}
            <section className="py-32 relative bg-white overflow-hidden">
                {/* Subtle Grid Background for that 'Architectural' feel */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* LEFT: THE NARRATIVE (FULL TEXT) */}
                        <div className="lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <span className="inline-block px-3 py-1 mb-8 rounded-full bg-neon-blue/10 text-neon-blue text-xs font-bold uppercase tracking-widest border border-neon-blue/20">
                                    The Hub / Overview
                                </span>

                                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-12 leading-[1.1]">
                                    Narela&apos;s Trusted <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Healthcare Destination.</span>
                                </h2>

                                {/* The Full Content - Styled Creatively */}
                                <div className="prose prose-lg md:prose-xl text-black/70 font-sans leading-relaxed tracking-wide">
                                    <p className="mb-8">
                                        <span className="float-left text-7xl font-display font-bold text-black mr-4 mt-[-10px] leading-none">S</span>
                                        antosh Child Care and Multispeciality Clinic is a trusted healthcare center in Narela, Delhi, dedicated to providing <strong className="text-black font-medium">comprehensive medical care</strong> for patients of all ages. The clinic brings together experienced specialists including <strong className="text-neon-blue">Dr. Pravesh Mudgil</strong> (Orthopaedics), <strong className="text-neon-pink">Dr. Priya Sharma</strong> (Paediatrics), and <strong className="text-neon-mint">Dr. Mahesh Mudgil</strong> (General Physician & ICU Specialist), ensuring expert treatment across multiple disciplines.
                                    </p>
                                    <p className="mb-8 pl-6 border-l-2 border-black/10 italic text-black/60">
                                        From bone and joint problems, fractures, and orthopedic procedures to newborn and child healthcare, vaccinations, and growth monitoring, the clinic offers well-rounded family medical services.
                                    </p>
                                    <p>
                                        It also provides care for common and chronic conditions such as fever, infections, diabetes, blood pressure, stomach issues, and general illnesses. With a <strong className="text-black font-medium">patient-focused approach</strong>, modern treatment practices, and compassionate care, Santosh Clinic aims to be a dependable healthcare destination for the local community.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT: THE MEDICAL BOARD (SPECIALISTS) */}
                        <div className="lg:w-2/5">
                            <div className="sticky top-32 space-y-6">
                                <h3 className="font-mono text-xs font-bold text-black/30 uppercase tracking-[0.2em] mb-8">The Specialists</h3>

                                {/* Specialist 1 */}
                                <GlassCard className="p-6 border-l-4 border-l-neon-blue group hover:translate-x-2 transition-transform duration-300">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-display text-xl font-bold text-black">Dr. Pravesh Mudgil</h4>
                                            <p className="text-neon-blue font-mono text-[10px] uppercase tracking-wider mt-1">MBBS, MS (Orthopaedics)</p>
                                        </div>
                                        <Activity className="text-black/20 group-hover:text-neon-blue transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs font-bold text-black/80">हड्डी रोग विशेषज्ञ</p>
                                        <p className="text-xs text-black/50 leading-relaxed">
                                            Ex. Senior Resident PGIMS Rohtak • Fellowship Arthroplasty (Primus Hospital, New Delhi)
                                        </p>
                                        <div className="flex items-center gap-2 text-[10px] text-neon-blue font-bold uppercase tracking-tighter">
                                            <Clock size={10} />
                                            <span>Timing: 8 AM – 9:30 AM</span>
                                        </div>
                                    </div>
                                </GlassCard>

                                {/* Specialist 2 */}
                                <GlassCard className="p-6 border-l-4 border-l-neon-pink group hover:translate-x-2 transition-transform duration-300">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-display text-xl font-bold text-black">Dr. Priya Sharma</h4>
                                            <p className="text-neon-pink font-mono text-[10px] uppercase tracking-wider mt-1">MBBS, MD (Paediatrics) Gold Medalist</p>
                                        </div>
                                        <Heart className="text-black/20 group-hover:text-neon-pink transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs font-bold text-black/80">नवजात शिशु एवं बाल रोग विशेषज्ञ</p>
                                        <p className="text-xs text-black/50 leading-relaxed">
                                            Ex. Registrar PGIMS Rohtak • Ex. Registrar AIIMS Delhi
                                        </p>
                                        <div className="flex items-center gap-2 text-[10px] text-neon-pink font-bold uppercase tracking-tighter">
                                            <Clock size={10} />
                                            <span>Timing: 4 PM – 7 PM</span>
                                        </div>
                                    </div>
                                </GlassCard>

                                {/* Specialist 3 */}
                                <GlassCard className="p-6 border-l-4 border-l-neon-mint group hover:translate-x-2 transition-transform duration-300">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h4 className="font-display text-xl font-bold text-black">Dr. Mahesh Mudgil</h4>
                                            <p className="text-neon-mint font-mono text-[10px] uppercase tracking-wider mt-1">MBBS, MD</p>
                                        </div>
                                        <Stethoscope className="text-black/20 group-hover:text-neon-mint transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        <p className="text-xs font-bold text-black/80">जनरल फिजिशियन & ICU Specialist</p>
                                        <p className="text-xs text-black/50 leading-relaxed">
                                            Ex. Registrar PGIMS Rohtak
                                        </p>
                                        <div className="flex items-center gap-2 text-[10px] text-neon-mint font-bold uppercase tracking-tighter">
                                            <Clock size={10} />
                                            <span>Timing: 10 AM – 2 PM</span>
                                        </div>
                                    </div>
                                </GlassCard>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* ---------------- SECTION 3: THE "SEQUENCE" (DNA REIMAGINED) ---------------- */}
            <section className="py-32 relative bg-black text-white selection:bg-neon-cyan/30 overflow-hidden">
                {/* Tech Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

                <div className="container mx-auto px-6 relative z-10">

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 pb-8 border-b border-white/10">
                        <div>
                            <span className="font-mono text-neon-cyan text-sm tracking-[0.5em] uppercase mb-4 block animate-pulse">Our Core</span>
                            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold leading-none">
                                The <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-transparent">Values.</span>
                            </h2>
                        </div>
                        <div className="text-left md:text-right mt-8 md:mt-0">
                            <p className="font-mono text-xs text-white/40 mb-2">/ROOT/VALUES</p>
                            <div className="flex gap-2 justify-start md:justify-end">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className={`h-1 w-8 ${i === 1 ? 'bg-neon-cyan' : 'bg-white/10'}`} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 group/grid">
                        {[
                            {
                                id: "01",
                                icon: Users,
                                title: "Family Care",
                                subtitle: "All Ages",
                                desc: "Dedicated to providing comprehensive medical care for patients of all ages, from newborns to seniors. A complete healthcare destination for the whole family.",
                                color: "from-neon-pink to-purple-600",
                                border: "group-hover:border-neon-pink/50",
                                shadow: "group-hover:shadow-neon-pink/20"
                            },
                            {
                                id: "02",
                                icon: Stethoscope,
                                title: "Expert Team",
                                subtitle: "Multi-Disciplinary",
                                desc: "Bringing together experienced specialists in Orthopaedics, Paediatrics, and General Medicine to ensure expert treatment across multiple disciplines under one roof.",
                                color: "from-neon-blue to-cyan-500",
                                border: "group-hover:border-neon-blue/50",
                                shadow: "group-hover:shadow-neon-blue/20"
                            },
                            {
                                id: "03",
                                icon: Activity,
                                title: "Modern Aid",
                                subtitle: "Advanced Treatment",
                                desc: "Offering well-rounded services from bone and joint procedures to vaccinations and growth monitoring, utilizing modern treatment practices for optimal recovery.",
                                color: "from-neon-mint to-emerald-500",
                                border: "group-hover:border-neon-mint/50",
                                shadow: "group-hover:shadow-neon-mint/20"
                            },
                            {
                                id: "04",
                                icon: ShieldCheck,
                                title: "Trusted Care",
                                subtitle: "Narela's Choice",
                                desc: "A dependable healthcare destination for the local community, focusing on compassionate care and a patient-first approach for common and chronic conditions.",
                                color: "from-neon-purple to-indigo-600",
                                border: "group-hover:border-neon-purple/50",
                                shadow: "group-hover:shadow-neon-purple/20"
                            }
                        ].map((item, i) => (
                            <HolographicCard key={i} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </section >

            {/* ---------------- SECTION 4: THE TEAM (MINIMALIST) ---------------- */}
            < section className="py-32 overflow-hidden" >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-8">
                        <div className="relative">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-8xl font-black uppercase text-black/5 leading-none absolute -z-10 select-none left-0 top-0 origin-top-left scale-150 md:scale-100 transform -translate-y-8 md:translate-y-0">
                                Leadership
                            </h2>
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold ml-2 mt-8 md:mt-8">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Minds.</span>
                            </h2>
                        </div>
                        <p className="text-left lg:text-right text-black/50 font-sans max-w-sm">
                            Experienced hands. Calm voices. The experts guiding your family&apos;s health journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Dr. Pravesh Mudgil", role: "Orthopaedics", img: "/doctors/pravesh.png" },
                            { name: "Dr. Priya Sharma", role: "Paediatrics", img: "/doctor_priya.png" },
                            { name: "Dr. Mahesh Mudgil", role: "General Physician & ICU Specialist", img: "/doctor_mahesh.png" }
                        ].map((doc, idx) => (
                            <div key={idx} className="group relative">
                                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-100 relative">
                                    <Image
                                        src={doc.img}
                                        alt={doc.name}
                                        fill
                                        className="object-cover transition-all duration-700 md:grayscale group-hover:grayscale-0 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute bottom-0 left-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-white font-display text-2xl font-bold">{doc.name}</h3>
                                        <p className="text-white/80 font-mono text-xs uppercase tracking-widest">{doc.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:hidden"> {/* Mobile Label */}
                                    <h3 className="text-black font-display text-2xl font-bold">{doc.name}</h3>
                                    <p className="text-neon-blue font-mono text-xs uppercase tracking-widest">{doc.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* ---------------- SECTION 5: LATEST INSIGHTS (ARTICLES) ---------------- */}
            <section className="py-32 px-6 mb-24 relative overflow-hidden bg-black text-white rounded-t-[3rem]">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-neon-purple/20 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-neon-blue/20 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto relative z-10">
                    {/* Unique Header Layout */}
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                        <div>
                            <span className="font-mono text-neon-pink text-xs tracking-[0.3em] uppercase mb-4 block animate-pulse">Knowledge Base</span>
                            <h2 className="font-display text-5xl md:text-7xl font-bold leading-none">
                                Future <br />
                                <span className="italic font-light opacity-50">Insights.</span>
                            </h2>
                        </div>
                        <div className="hidden md:block w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
                        <p className="font-sans text-white/50 max-w-sm text-left md:text-right">
                            Decoding the future of medicine. Stories about innovation, care, and the science of healing.
                        </p>
                    </div>

                    {/* Staggered Creative Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {articles.map((article, idx) => (
                            <Link
                                key={article.id}
                                href={`/articles/${article.slug}`}
                                className={`group relative block ${idx === 0 ? 'lg:col-span-8 lg:row-span-2' : 'lg:col-span-4'}`}
                            >
                                <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10 h-full min-h-[300px] flex flex-col justify-end p-8`}>

                                    {/* Image Background for Main Article */}
                                    {idx === 0 && (
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                        </div>
                                    )}

                                    {/* Gradient Hover Effect for Small Articles */}
                                    {idx !== 0 && (
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${article.color} transition-opacity duration-500`} />
                                    )}

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 bg-black/20 backdrop-blur-md ${idx === 0 ? 'text-white' : 'text-white/70'}`}>
                                                {article.category}
                                            </span>
                                            <span className="text-white/40 text-[10px] font-mono">{article.readTime}</span>
                                        </div>

                                        <h3 className={`font-display font-bold leading-tight mb-2 group-hover:text-neon-cyan transition-colors ${idx === 0 ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-2xl'}`}>
                                            {article.title}
                                        </h3>

                                        <p className={`line-clamp-2 text-white/60 font-sans ${idx === 0 ? 'text-lg max-w-xl' : 'text-sm'}`}>
                                            {article.excerpt}
                                        </p>

                                        {/* Creative "Read" Indicator */}
                                        <div className="mt-6 flex items-center gap-2 text-white/40 text-xs font-mono uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                            <span>Read Entry</span>
                                            <div className="h-px w-8 bg-white/20 group-hover:w-12 group-hover:bg-neon-cyan transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
}
