"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
            {/* Optimized Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Optimized Gradient Orbs - Static or simple fade for performance */}
            <div
                className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-neon-cyan/10 blur-[120px]"
            />

            <div
                className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-neon-blue/5 blur-[140px]"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute bottom-[-5%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-neon-mint/5 blur-[100px]"
            />

            {/* Static Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        </div>
    );
}
