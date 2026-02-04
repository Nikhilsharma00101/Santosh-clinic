"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Share2, Lock, UserCheck, AlertCircle, Phone, Fingerprint } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export default function PrivacyPage() {
    const sections = [
        {
            icon: Eye,
            title: "What we collect",
            desc: "We only ask for things that help us take better care of you. This includes your name, phone number, and your health history so our doctors know how to help.",
            points: ["Basic contact details", "Your medical history", "Date of birth for records", "Insurance info (if needed)"]
        },
        {
            icon: UserCheck,
            title: "Why we need it",
            desc: "We use your information to book your visits, keep your health records accurate, and call you if there's a change in your appointment schedule.",
            points: ["Setting up appointments", "Doctor consultations", "Sending health reminders", "Emergency contact"]
        },
        {
            icon: Lock,
            title: "How we keep it safe",
            desc: "Your health is personal, and we keep it that way. We use secure computer systems and strict rules so only your treating doctor can see your records.",
            points: ["Encrypted digital files", "Locked physical records", "Staff training on privacy", "Zero selling of data"]
        },
        {
            icon: Share2,
            title: "Sharing your data",
            desc: "We never sell your data to strangers. We only share it when it's needed for your health—like sending a report to a specialist or for billing insurance.",
            points: ["With your other doctors", "For legal medical reasons", "Insurance processing", "With your permission"]
        },
        {
            icon: Fingerprint,
            title: "Your control",
            desc: "You have the right to see your records anytime. If something is wrong, just tell us and we will fix it immediately. You are in charge of your health info.",
            points: ["Ask for your records", "Correct any mistakes", "Update your details", "Stop receiving SMS/Calls"]
        },
        {
            icon: AlertCircle,
            title: "Cookie policy",
            desc: "Our website uses 'cookies'—small bits of data that help our site remember you. It makes the website faster and easier for you to use every time you visit.",
            points: ["Remembering your name", "Faster page loading", "Showing relevant services", "Website analytics"]
        }
    ];

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24 overflow-hidden relative">
            {/* Background Kinetic Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[100px]" />
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(#1A1A2E 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-gray-100 shadow-sm mb-8"
                    >
                        <ShieldCheck size={16} className="text-neon-blue" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Secure Healthcare</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-outfit font-black text-[#1A1A2E] leading-none tracking-tighter mb-8"
                    >
                        PRIVACY <br />
                        <GradientText className="italic">PROTECTION.</GradientText>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row md:items-center gap-6"
                    >
                        <p className="text-xl text-gray-500 font-outfit font-light max-w-xl">
                            We believe your medical data belongs to you. Here is our promise to keep your information private and secure, explained in simple words.
                        </p>
                        <div className="h-px md:h-20 w-20 md:w-px bg-gray-200" />
                        <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                            Official Document <br />
                            Last updated: <span className="text-neon-blue" suppressHydrationWarning>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-10 rounded-[2.5rem] bg-white border-2 border-gray-50 hover:border-neon-blue/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-bl-[4rem] -z-10 group-hover:bg-blue-50/50 transition-colors" />

                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1A1A2E] mb-8 group-hover:scale-110 group-hover:bg-neon-blue group-hover:text-white transition-all duration-500 shadow-inner">
                                <section.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-outfit font-black text-[#1A1A2E] mb-4 uppercase tracking-tight italic">
                                {section.title}
                            </h3>

                            <p className="text-gray-500 mb-8 font-outfit leading-relaxed font-light">
                                {section.desc}
                            </p>

                            <ul className="space-y-3">
                                {section.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#1A1A2E]/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 rounded-[3.5rem] bg-[#1A1A2E] text-white overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px]" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-outfit font-black mb-4">Any Privacy Questions?</h2>
                            <p className="text-white/60 font-outfit font-light text-lg">Our team is always here to explain how your data stays safe.</p>
                        </div>

                        <div className="flex gap-4">
                            <a href="tel:+918700857282" className="px-8 py-4 rounded-full bg-white text-[#1A1A2E] font-black text-xs uppercase tracking-widest hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center gap-2">
                                <Phone size={14} />
                                Call Clinician
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
