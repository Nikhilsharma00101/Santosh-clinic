"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Calendar,
    Tag,
    ArrowRight,
    Search,
    BookOpen,
    Sparkles,
    TrendingUp,
    Clock,
    User
} from "lucide-react";
import { useEffect } from "react";

const categories = ["All", "Pediatrics", "Orthopaedics", "General Health", "Nutrition"];

const articles = [
    {
        title: "Understanding Your Child's Vaccination Schedule",
        excerpt: "A complete guide to why vaccines are important and what to expect during your child's first year.",
        category: "Pediatrics",
        date: "Jan 15, 2026",
        readTime: "6 min read",
        slug: "child-vaccination-guide",
        gradient: "from-rose-500/10 to-rose-500/5",
        iconColor: "text-rose-500"
    },
    {
        title: "Managing Joint Pain in Winters",
        excerpt: "Cold weather can aggravate arthritis. Here are 5 tips to keep your joints healthy and pain-free this winter.",
        category: "Orthopaedics",
        date: "Jan 10, 2026",
        readTime: "4 min read",
        slug: "joint-pain-winters",
        gradient: "from-teal-500/10 to-teal-500/5",
        iconColor: "text-teal-500"
    },
    {
        title: "Importance of Preventive Health Checkups",
        excerpt: "Why you shouldn't wait for symptoms to appear before visiting a doctor. Early detection saves lives.",
        category: "General Health",
        date: "Jan 05, 2026",
        readTime: "5 min read",
        slug: "preventive-health-importance",
        gradient: "from-blue-500/10 to-blue-500/5",
        iconColor: "text-blue-500"
    },
    {
        title: "Nutrition Tips for Growing Kids",
        excerpt: "Essential nutrients your child needs for optimal growth and development.",
        category: "Nutrition",
        date: "Dec 28, 2025",
        readTime: "7 min read",
        slug: "nutrition-for-kids",
        gradient: "from-emerald-500/10 to-emerald-500/5",
        iconColor: "text-emerald-500"
    }
];

export default function EducationPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFDFF] relative overflow-hidden font-outfit">
            {/* Ambient Background System */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.05)_0%,transparent_70%)]" />
                <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-200/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-teal-200/10 blur-[130px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.01] mix-blend-overlay" />
            </div>

            <div className="container relative z-10 max-w-7xl mx-auto pt-44 pb-32 px-6">
                {/* Header Section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-slate-100 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                    >
                        <BookOpen className="w-3 h-3 text-teal-500" />
                        Patient Library
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8"
                    >
                        Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 italic">Insights.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl"
                    >
                        Reliable healthcare knowledge curated by our specialists to help you and your family lead healthier lives.
                    </motion.p>
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-16 px-2">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={cat}
                                className={`px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.1em] transition-all
                                    ${i === 0
                                        ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                                        : "bg-white text-slate-400 border border-slate-100 hover:border-teal-200 hover:text-teal-600"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full lg:w-96 group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search medical topics..."
                            className="w-full bg-white border border-slate-100 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500/50 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Featured Header */}
                <div className="flex items-center gap-4 mb-10 px-2 opacity-40">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900">Latest Articles</span>
                    <div className="h-px bg-slate-200 flex-grow" />
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/education/${article.slug}`} className="block relative">
                                <div className="relative overflow-hidden bg-white rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 group-hover:border-teal-100 p-10 lg:p-12">
                                    {/* Accent Gradient */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${article.gradient} opacity-40 blur-3xl translate-x-32 -translate-y-32 transition-transform duration-700 group-hover:scale-110`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-transform group-hover:scale-110`}>
                                                    <Tag className={`w-4 h-4 ${article.iconColor}`} />
                                                </div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${article.iconColor}`}>{article.category}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-[10px] font-bold text-slate-300">
                                                <div className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</div>
                                                <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                                <div className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</div>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-6 group-hover:text-teal-600 transition-colors">
                                            {article.title}
                                        </h2>

                                        <p className="text-slate-500 font-medium leading-relaxed mb-10 group-hover:text-slate-600 transition-colors">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-50">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                    <User className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                                                    {article.category === "Pediatrics" || article.category === "Nutrition" ? "Dr. Priya Sharma" :
                                                        article.category === "Orthopaedics" ? "Dr. Pravesh Mudgil" : "Dr. Mahesh Mudgil"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-600 group-hover:gap-4 transition-all">
                                                Read Article <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-32 p-12 lg:p-20 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden text-center group"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.3)_0%,transparent_70%)] opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-10"
                        >
                            <Sparkles className="w-3 h-3 text-teal-400" />
                            Never Miss an Update
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-[0.9]">
                            Stay Informed on Your <br />
                            Family&apos;s <span className="text-teal-400 italic">Wellbeing.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/book" className="w-full sm:w-auto px-10 py-5 bg-teal-600 hover:bg-teal-500 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-teal-500/20">
                                Book Now
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-xs transition-all border border-white/10">
                                Ask a Question
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
