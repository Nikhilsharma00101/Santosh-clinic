"use client";

import { motion } from "framer-motion";
import { FileText, Stethoscope, Calendar, Users, CreditCard, AlertTriangle, Phone, Globe } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";

export default function TermsPage() {
    const rules = [
        {
            icon: Stethoscope,
            title: "Medical advice",
            desc: "The information on this website is for general knowledge only. It is not a doctor's diagnosis. Always talk to our doctors person-to-person before starting any treatment.",
            points: ["General info only", "Consult a doctor", "No virtual diagnosis", "Reliable source"]
        },
        {
            icon: Calendar,
            title: "Appointments",
            desc: "We try our best to see you on time. However, emergency cases are always our first priority. Sometimes your wait might be longer; we thank you for your patience.",
            points: ["Emergency priority", "Be on time", "Cancellations ok", "Wait time flexibility"]
        },
        {
            icon: AlertTriangle,
            title: "Emergencies",
            desc: "If someone is in a life-threatening situation (like a heart attack or severe injury), do not wait for an online reply. Please go to the nearest hospital's Emergency Room immediately.",
            points: ["Call 102/112", "Go to ER", "Don't wait online", "Serious injury care"]
        },
        {
            icon: Users,
            title: "Respect for all",
            desc: "Our clinic is a place of healing. We expect everyone to be kind. We have zero tolerance for any shouting, abuse, or harassment towards our staff or other patients.",
            points: ["Be kind to staff", "Respect privacy", "Quiet environment", "Safe space for all"]
        },
        {
            icon: CreditCard,
            title: "Payment terms",
            desc: "All fees must be paid at the time of your visit. We accept cash, cards, and UPI. Please keep your receipts safe for any insurance or future medical records.",
            points: ["Pay on visit", "Cash/UPI/Cards", "Keep receipts", "Transparent pricing"]
        },
        {
            icon: Globe,
            title: "Website usage",
            desc: "You are welcome to browse our site and learn. Please do not copy our text or photos for your own use without asking us. We work hard to keep this info accurate.",
            points: ["Intellectual property", "Personal use only", "Accuracy check", "Safety updates"]
        }
    ];

    return (
        <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24 overflow-hidden relative">
            {/* Background Kinetic Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-neon-mint/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[100px]" />
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
                        <FileText size={16} className="text-neon-mint" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Usage Guidelines</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-outfit font-black text-[#1A1A2E] leading-none tracking-tighter mb-8 uppercase"
                    >
                        TERMS OF <br />
                        <GradientText className="italic pr-6">SERVICE.</GradientText>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col md:flex-row md:items-center gap-6"
                    >
                        <p className="text-xl text-gray-500 font-outfit font-light max-w-xl">
                            Welcome to Santosh Clinic. By visiting us, you agree to these simple rules that help us provide the best care for everyone.
                        </p>
                        <div className="h-px md:h-20 w-20 md:w-px bg-gray-200" />
                        <div className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest text-[#1A1A2E]/60">
                            Usage Agreement <br />
                            Last updated: <span className="text-neon-mint" suppressHydrationWarning>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-10 rounded-[2.5rem] bg-white border-2 border-gray-50 hover:border-neon-mint/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-mint-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-bl-[4rem] -z-10 group-hover:bg-emerald-50/50 transition-colors" />

                            <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1A1A2E] mb-8 group-hover:scale-110 group-hover:bg-neon-mint group-hover:text-white transition-all duration-500 shadow-inner`}>
                                <rule.icon size={24} />
                            </div>

                            <h3 className="text-2xl font-outfit font-black text-[#1A1A2E] mb-4 uppercase tracking-tight italic">
                                {rule.title}
                            </h3>

                            <p className="text-gray-500 mb-8 font-outfit leading-relaxed font-light">
                                {rule.desc}
                            </p>

                            <ul className="space-y-3">
                                {rule.points.map((point, pIndex) => (
                                    <li key={pIndex} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-[#1A1A2E]/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-mint" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Important Disclaimer Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-24 p-12 rounded-[3.5rem] bg-rose-50 border-2 border-rose-100 overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/50 rounded-full blur-[80px]" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-20 h-20 shrink-0 rounded-[2rem] bg-rose-500 flex items-center justify-center text-white shadow-xl shadow-rose-500/20">
                            <AlertTriangle size={32} />
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-outfit font-black text-rose-900 uppercase italic">Non-Emergency Disclaimer</h2>
                            <p className="text-rose-700 font-outfit font-light text-lg leading-relaxed max-w-3xl">
                                This website is for informational use only. If you are experiencing a medical emergency, do not wait. **Call for an ambulance or visit the nearest Emergency department immediately.**
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Help Section */}
                <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-12 bg-[#1A1A2E] p-12 rounded-[3.5rem] text-white">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-outfit font-black mb-2 italic">Still Confused about Terms?</h3>
                        <p className="text-white/50 font-outfit font-light">We can explain them to you in person at the clinic.</p>
                    </div>
                    <a href="tel:+918700857282" className="px-10 py-5 rounded-full bg-neon-mint text-[#1A1A2E] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-neon-mint/20 flex items-center gap-3">
                        <Phone size={16} />
                        Call Support
                    </a>
                </div>
            </div>
        </main>
    );
}
