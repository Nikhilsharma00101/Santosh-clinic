"use client";

import { useParams, useRouter } from "next/navigation";
import { articles, ContentBlock } from "@/data/articles";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Clock, Share2, Bookmark, ArrowRight, CheckCircle } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

function BlockRenderer({ block, accentColor }: { block: ContentBlock; accentColor: string }) {
    switch (block.type) {
        case 'heading':
            return (
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-12 mb-6 text-black leading-tight">
                    {block.content}
                </h2>
            );
        case 'text':
            return (
                <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed mb-8 tracking-wide">
                    {block.content}
                </p>
            );
        case 'quote':
            return (
                <blockquote className={`relative p-8 md:p-12 my-12 rounded-[2rem] bg-gray-50 overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${accentColor}`} />
                    <p className="relative z-10 font-display font-medium text-2xl md:text-4xl text-black leading-snug italic">
                        &ldquo;{block.content}&rdquo;
                    </p>
                    {block.author && (
                        <footer className="mt-6 font-mono text-sm text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-px bg-gray-300" />
                            {block.author}
                        </footer>
                    )}
                </blockquote>
            );
        case 'stat-box':
            return (
                <div className="my-12 p-8 rounded-[2rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 group hover:scale-[1.02] transition-transform duration-500">
                    <div>
                        <span className={`font-mono text-xs uppercase tracking-[0.2em] mb-2 block text-white/50`}>{block.label}</span>
                        <div className={`font-display font-bold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r ${accentColor}`}>
                            {block.value}
                        </div>
                    </div>
                    {block.subtext && (
                        <p className="text-white/60 font-sans text-sm max-w-xs text-center md:text-right border-l md:border-l-0 md:border-r border-white/20 pl-4 md:pl-0 md:pr-4">
                            {block.subtext}
                        </p>
                    )}
                </div>
            );
        case 'image-row':
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
                    {block.images.map((img, idx) => (
                        <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden group">
                            <Image
                                src={img}
                                alt="Article visual"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    ))}
                    {block.caption && (
                        <p className="col-span-full text-center font-mono text-xs text-gray-400 mt-2 uppercase tracking-wider">
                            {block.caption}
                        </p>
                    )}
                </div>
            );
        case 'highlight':
            return (
                <div className="my-12 p-8 rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-gray-100/50">
                    <h4 className="font-display font-bold text-xl mb-6 flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full bg-black`} />
                        {block.title}
                    </h4>
                    <ul className="space-y-4">
                        {block.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-600 font-sans">
                                <CheckCircle className="w-5 h-5 text-neon-mint shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        default:
            return null;
    }
}

export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug;
    const article = articles.find((a) => a.slug === slug);

    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    const yHero = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
    const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);
    const progressBar = useTransform(scrollY, [0, 2000], [0, 1]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
                        404
                    </h1>
                    <p className="text-white/50 mt-4 font-mono">Article Data Corrupted.</p>
                    <button
                        onClick={() => router.back()}
                        className="mt-8 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors uppercase tracking-widest text-xs"
                    >
                        Return to Base
                    </button>
                </div>
            </div>
        );
    }

    const accentColor = article.color || "from-neon-blue to-neon-cyan";

    return (
        <div ref={containerRef} className="min-h-screen bg-white selection:bg-black/10 selection:text-black">

            <motion.div
                className={`fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${article.color} origin-left z-[6000]`}
                style={{ scaleX: progressBar }}
            />

            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <motion.div
                    style={{ y: yHero, scale: scaleHero, opacity: opacityHero }}
                    className="absolute inset-0"
                >
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
                </motion.div>

                <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 container mx-auto z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className={`px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-mono text-xs uppercase tracking-widest`}>
                                {article.category}
                            </span>
                            <span className="flex items-center gap-2 text-white/80 font-mono text-xs">
                                <Clock size={14} /> {article.readTime}
                            </span>
                        </div>

                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-4 text-white/90">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                <Image
                                    src={article.authorImage}
                                    alt={article.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-display text-lg font-bold leading-none">{article.author}</p>
                                <p className="font-mono text-xs uppercase tracking-wider opacity-70 mt-1">{article.role}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Back Button (Floating) */}
                <Link href="/about" className="fixed top-28 md:top-36 left-4 md:left-8 z-50 p-3 md:p-4 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-500 group shadow-2xl">
                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="relative z-20 -mt-12 bg-white rounded-t-[3rem] min-h-screen">
                <div className="container mx-auto px-6 pt-24 md:pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Sidebar / Metadata (Desktop) */}
                    <div className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-8">
                        <div>
                            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">Sharing</span>
                            <div className="flex gap-4">
                                <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest font-mono font-bold">
                                    <Share2 size={20} />
                                </button>
                                <button className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest font-mono font-bold">
                                    <Bookmark size={20} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">Tags</span>
                            <div className="flex flex-wrap gap-2">
                                {article.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 rounded-md bg-gray-50 text-xs font-bold text-gray-500 uppercase">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-1 lg:col-span-7">
                        <div className="article-content">
                            {article.content.map((block, idx) => (
                                <BlockRenderer key={idx} block={block} accentColor={accentColor} />
                            ))}
                        </div>

                        {/* Mobile Tags & Share */}
                        <div className="lg:hidden mt-12 pt-12 border-t border-gray-100 space-y-8">
                            <div>
                                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">Tags</span>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-md bg-gray-50 text-xs font-bold text-gray-500 uppercase">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-4">Sharing</span>
                                <div className="flex gap-4">
                                    <button className="flex-1 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest">
                                        <Share2 size={16} /> Share
                                    </button>
                                    <button className="flex-1 py-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest">
                                        <Bookmark size={16} /> Save
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="my-12 md:my-16 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-gray-200">
                                <Image
                                    src={article.authorImage}
                                    alt={article.author}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-xl">Written by {article.author}</h4>
                                <p className="text-gray-500 font-sans text-sm mt-1">
                                    Leading the way in modern medical practices. Innovating for a better tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-2"></div>
                </div>
            </div>

            <section className="bg-black text-white py-24 mt-24">
                <div className="container mx-auto px-6">
                    <span className="font-mono text-xs text-neon-blue uppercase tracking-widest mb-8 block">Read Next</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.filter(a => a.id !== article.id).slice(0, 2).map((nextArticle) => (
                            <Link key={nextArticle.id} href={`/articles/${nextArticle.slug}`} className="group block">
                                <div className="aspect-video relative rounded-2xl overflow-hidden mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <Image src={nextArticle.image} alt={nextArticle.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                                    {nextArticle.title}
                                </h3>
                                <div className="flex items-center gap-2 text-white/50 font-mono text-xs uppercase">
                                    <span>Read Article</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
