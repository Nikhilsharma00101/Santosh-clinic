"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Clock,
    User,
    ArrowLeft,
    Share2,
    Bookmark,
    Sparkles,
    CheckCircle2,
    Info,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const articleContent = {
    "child-vaccination-guide": {
        title: "Understanding Your Child&apos;s Vaccination Schedule",
        category: "Pediatrics",
        date: "Jan 15, 2026",
        readTime: "6 min read",
        author: "Dr. Priya Sharma",
        intro: "Vaccines are your child's best protection against serious diseases. Following a regular schedule ensures their immune system is ready when it matters most.",
        sections: [
            {
                title: "Why Vaccines Matter",
                content: "Vaccines safeguard children from life-threatening illnesses like polio, measles, and hepatitis. They work by training the body's natural defenses (immune system) to recognize and fight specific germs.",
                points: [
                    "Saves lives by preventing deadly diseases.",
                    "Protects other children in the community.",
                    "Saves you time and money compared to treating illnesses.",
                    "Provides long-term immunity."
                ]
            },
            {
                title: "The First Year Schedule",
                content: "The first 12 months are critical. Here is what a typical schedule looks like (always consult your pediatrician):",
                points: [
                    "At Birth: BCG, Hepatitis B, Oral Polio Vaccine (OPV).",
                    "6 Weeks: Rotavirus, PCV, and DTaP/Hepatitis B combinations.",
                    "10 Weeks: Second dose of early combinations.",
                    "14 Weeks: Third dose of early combinations.",
                    "9 Months: MMR (Measles, Mumps, Rubella) first dose.",
                    "12 Months: Hepatitis A and chickenpox boosters."
                ]
            },
            {
                title: "Managing After-Care",
                content: "It&apos;s normal for children to have mild reactions. Here&apos;s how to help them feel better:",
                points: [
                    "Use a cool, damp cloth to reduce redness at the injection site.",
                    "Give them extra fluids (breast milk or water) to stay hydrated.",
                    "Cuddling and comfort are the best medicine.",
                    "Consult your doctor if fever exceeds 101°F or lasts more than 24 hours."
                ]
            }
        ]
    },
    "joint-pain-winters": {
        title: "Managing Joint Pain in Winters",
        category: "Orthopaedics",
        date: "Jan 10, 2026",
        readTime: "4 min read",
        author: "Dr. Pravesh Mudgil",
        intro: "As the temperature drops, many people feel more stiffness and pain in their joints. Cold weather can affect blood circulation and joint sensitivity, but you don't have to suffer through it.",
        sections: [
            {
                title: "Why Does Pain Increase?",
                content: "The cold makes muscles tighter and can cause joints to feel stiffer. Low barometric pressure can also cause tissues to expand, putting pressure on nerves.",
                points: [
                    "Reduced blood flow to the limbs in cold weather.",
                    "Less physical activity during winter months.",
                    "Changes in pressure affecting sensitive joint nerves.",
                    "Vitamin D deficiency due to less sunlight."
                ]
            },
            {
                title: "Top 5 Tips for Relief",
                content: "You can keep your joints healthy and mobile with these simple daily habits:",
                points: [
                    "Stay Warm: Wear layers, especially on knees and hands.",
                    "Keep Moving: Indoor stretching or yoga keeps joints lubricated.",
                    "Dietary Care: Eat more Omega-3 (fish or walnuts) to reduce inflammation.",
                    "Stay Hydrated: Water is essential for joint cartilage health.",
                    "Sun Exposure: Try to get 15 minutes of midday sun for Vitamin D."
                ]
            },
            {
                title: "When to See a Specialist",
                content: "If simple home care isn't helping, it might be time for a professional checkup.",
                points: [
                    "Persistent swelling or redness around a joint.",
                    "Pain that prevents you from sleeping at night.",
                    "Difficulty performing basic daily activities.",
                    "Morning stiffness that lasts for more than an hour."
                ]
            }
        ]
    },
    "preventive-health-importance": {
        title: "Importance of Preventive Health Checkups",
        category: "General Health",
        date: "Jan 05, 2026",
        readTime: "5 min read",
        author: "Dr. Mahesh Mudgil",
        intro: "Don't wait for symptoms to appear. Preventive healthcare is about catching small issues before they become big problems, ensuring a longer and healthier life.",
        sections: [
            {
                title: "The Power of Early Detection",
                content: "Many conditions like high blood pressure and diabetes often have no symptoms in the early stages. Regular checkups are the only way to find them early.",
                points: [
                    "Increases chances for successful treatment or cure.",
                    "Reduces the risk of long-term complications.",
                    "Builds a strong relationship with your doctor.",
                    "Provides peace of mind for you and your family."
                ]
            },
            {
                title: "Essential Screenings to Track",
                content: "Based on your age and health history, certain tests are vital during your annual visit:",
                points: [
                    "Blood Pressure: The 'silent' heart health indicator.",
                    "Blood Sugar: To screen for early signs of diabetes.",
                    "Cholesterol: To monitor your heart and artery health.",
                    "BMI & Weight: To manage risks related to lifestyle habits.",
                    "Vitamin Levels: To ensure your body is functioning optimally."
                ]
            },
            {
                title: "Making Prevention a Lifestyle",
                content: "Checkups are just one part of the puzzle. Combine them with healthy habits for the best results.",
                points: [
                    "Aim for at least 30 minutes of walking daily.",
                    "Switch to a low-salt, high-fiber natural diet.",
                    "Ensure you get 7-8 hours of quality sleep.",
                    "Manage stress through regular meditation or hobby time."
                ]
            }
        ]
    },
    "nutrition-for-kids": {
        title: "Nutrition Tips for Growing Kids",
        category: "Nutrition",
        date: "Dec 28, 2025",
        readTime: "7 min read",
        author: "Dr. Priya Sharma",
        intro: "The food your child eats today builds their brain and body for tomorrow. Providing the right balance of nutrients is the foundation of lifelong health.",
        sections: [
            {
                title: "Key Growth Nutrients",
                content: "Developing bodies have specific needs that must be met every single day through a varied diet.",
                points: [
                    "Protein: Essential for muscle growth and brain repair.",
                    "Calcium & Vitamin D: The building blocks for strong bones.",
                    "Iron: Necessary for healthy blood and concentration in school.",
                    "Healthy Fats: Crucial for brain development in early years."
                ]
            },
            {
                title: "Creating a Balanced Plate",
                content: "You don't need complex recipes. Just follow this simple visual guide for every main meal:",
                points: [
                    "Half the plate should be colorful fruits and vegetables.",
                    "One-quarter should be a protein source (lentils, eggs, etc.).",
                    "One-quarter should be whole grains (chapati, brown rice).",
                    "Include a small serving of dairy or calcium-rich alternatives."
                ]
            },
            {
                title: "Healthy Habit Hacks",
                content: "Changing how kids eat can be a challenge. Try these gentle strategies to improve their habits:",
                points: [
                    "Be a Role Model: Kids eat what they see you eating.",
                    "Avoid 'Food Rewards': Don't use sweets as a bribe for eating veggies.",
                    "Involve Them: Let kids help pick vegetables at the market.",
                    "Keep it Fun: Cut fruits and veggies into interesting shapes."
                ]
            }
        ]
    }
};

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = articleContent[slug as keyof typeof articleContent];

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [slug]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 bg-[#FDFDFF]">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Article Not Found</h1>
                    <p className="text-slate-500 mb-8">The information you&apos;re looking for might have been moved.</p>
                    <Link href="/education" className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold">Back to Library</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFDFF] relative font-outfit pb-32">
            {/* Ambient System */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(20,184,166,0.06)_0%,transparent_60%)]" />
                <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-blue-200/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[30%] -left-[10%] w-[500px] h-[500px] bg-teal-200/10 blur-[130px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-[0.01]" />
            </div>

            {/* Sticky Navigation Bar */}
            <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 mb-8">
                <div className="container max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/education" className="group flex items-center gap-2 text-sm font-black text-slate-400 hover:text-teal-600 transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Library
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-teal-600 transition-all hover:shadow-sm">
                            <Bookmark className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-teal-600 transition-all hover:shadow-sm">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <article className="container relative z-10 max-w-3xl mx-auto px-6 pt-12">
                {/* Meta Header */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="px-4 py-1.5 bg-teal-50 text-teal-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-teal-100/50">
                            {article.category}
                        </span>
                        <div className="flex items-center gap-3 text-slate-300">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold"><Calendar className="w-3 h-3" /> {article.date}</div>
                            <div className="w-1 h-1 bg-slate-200 rounded-full" />
                            <div className="flex items-center gap-1.5 text-[10px] font-bold"><Clock className="w-3 h-3" /> {article.readTime}</div>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-10"
                    >
                        {article.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 p-4 bg-white/50 border border-white rounded-2xl mb-12"
                    >
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200 shadow-sm shrink-0">
                            <User className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Published By</div>
                            <div className="text-sm font-black text-slate-900">{article.author}</div>
                        </div>
                        <div className="ml-auto flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest rounded-md border border-emerald-100">
                            <ShieldCheck className="w-3 h-3" />
                            Medical Review Active
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-teal-500 pl-8 ml-2"
                    >
                        &ldquo;{article.intro}&rdquo;
                    </motion.p>
                </header>

                {/* Article Core Content */}
                <div className="space-y-24">
                    {article.sections.map((section, sIdx) => (
                        <motion.section
                            key={sIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex items-baseline gap-4 mb-2">
                                <span className="text-2xl font-black text-teal-100 -translate-y-1">0{sIdx + 1}</span>
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{section.title}</h2>
                            </div>
                            <div className="h-1 w-12 bg-teal-500/20 rounded-full mb-8 ml-12" />

                            <div className="ml-12">
                                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                                    {section.content}
                                </p>

                                <div className="grid grid-cols-1 gap-4">
                                    {section.points.map((point, pIdx) => (
                                        <div key={pIdx} className="flex items-start gap-4 p-5 bg-white border border-slate-50 shadow-sm rounded-2xl group hover:border-teal-200 transition-colors">
                                            <div className="mt-1 w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                                            </div>
                                            <span className="text-slate-700 font-bold leading-tight uppercase text-[11px] tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Medical Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 p-10 bg-blue-50/50 border border-blue-100 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center"
                >
                    <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl flex items-center justify-center shrink-0 border border-blue-50">
                        <Info className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-blue-900/60 mb-2">Medical Disclaimer</h4>
                        <p className="text-[12px] text-blue-800/80 font-bold leading-relaxed">
                            The information provided here is for educational purposes only and should not be treated as professional medical advice. Every patient is unique. Please consult with our specialists at Santosh Clinic for a personalized health assessment.
                        </p>
                    </div>
                </motion.div>

                {/* Bottom Navigation */}
                <div className="mt-32 pt-20 border-t border-slate-100 flex flex-col items-center text-center">
                    <Sparkles className="w-10 h-10 text-teal-600/20 mb-8" />
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-6">Found this helpful?</h3>
                    <p className="text-slate-500 font-medium mb-12 max-w-sm">Share this knowledge with your friends and family or book a visit for personal care.</p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <Link href="/book" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                            Book Appointment
                        </Link>
                        <Link href="/education" className="px-10 py-5 bg-white border border-slate-100 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 active:scale-95 transition-all">
                            More Articles
                        </Link>
                    </div>
                </div>
            </article>

            {/* Visual Continuity Decorative Elements */}
            <div className="fixed top-1/2 left-0 w-24 h-96 bg-gradient-to-b from-teal-500/5 to-transparent blur-3xl pointer-events-none -translate-x-12" />
        </div>
    );
}
