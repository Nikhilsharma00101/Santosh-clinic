"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "dark" | "hover";
}

export function GlassCard({
    children,
    className,
    variant = "default",
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300",
                // Light Mode Styles
                variant === "default" && "bg-white/60 border-white/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:bg-white/80 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
                variant === "dark" && "bg-white/80 border-white/50 shadow-sm", // 'Dark' variant now means 'Solid/Opaque' in light theme context
                variant === "hover" && "glass-card-hover",
                className
            )}
            {...props}
        >
            {/* Inner sheen effect (Subtle highlight) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {children}
        </motion.div>
    );
}
