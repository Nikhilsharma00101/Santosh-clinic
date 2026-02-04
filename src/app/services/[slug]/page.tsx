import { notFound } from "next/navigation";
import { SERVICE_DETAILS } from "@/lib/service-data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return Object.keys(SERVICE_DETAILS).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICE_DETAILS[slug];

    if (!service) {
        notFound();
    }

    return (
        <article className="min-h-screen pb-24 font-sans relative overflow-hidden">

            {/* Background Ambience tailored to service pages */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header / Hero */}
            <div className="relative pt-40 pb-20 px-4 text-center z-10">
                <Link href="/services" className="inline-flex items-center text-neon-cyan hover:text-white transition-colors mb-8 text-sm font-mono tracking-widest uppercase">
                    <ArrowLeft size={16} className="mr-2" /> Back to Services
                </Link>

                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                    {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
                    {service.description}
                </p>
            </div>

            <div className="container mx-auto px-4 mt-8 max-w-5xl relative z-10 space-y-16">
                {/* Long Description */}
                <GlassCard variant="dark" className="p-8 md:p-12 border-white/5">
                    <div className="prose prose-lg prose-invert max-w-none text-white/80 leading-8 font-light">
                        <p>{service.longDescription}</p>
                    </div>
                </GlassCard>

                {/* FAQs */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
                        Common <span className="text-neon-mint">Questions</span>
                    </h2>

                    <div className="grid gap-6">
                        {service.faqs.map((faq, index) => (
                            <GlassCard key={index} variant="default" className="p-8 border-white/5 hover:border-white/20 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
                                    <span className="text-neon-cyan font-mono text-sm mt-1">0{index + 1}</span>
                                    {faq.question}
                                </h3>
                                <p className="text-white/60 leading-relaxed pl-8 border-l border-white/10 ml-1.5">
                                    {faq.answer}
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center py-20 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-neon-blue to-neon-mint opacity-20 blur-[100px] rounded-full pointer-events-none" />

                    <h3 className="text-4xl font-display font-bold text-white mb-8 relative z-10">
                        Prioritize your health today.
                    </h3>
                    <div className="relative z-10">
                        <Link href="/book">
                            <MagneticButton className="bg-white text-black hover:bg-neon-cyan hover:text-black hover:border-transparent px-12 py-6 text-xl">
                                Book Appointment
                            </MagneticButton>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
