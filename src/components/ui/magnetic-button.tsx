"use client";

import { motion, useMotionValue, HTMLMotionProps } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export function MagneticButton({
    children,
    className,
    variant = "primary",
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX / 5); // Magnetic strength divisor
        y.set(middleY / 5);
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={cn(
                "relative rounded-full px-8 py-4 font-bold text-lg uppercase tracking-wider transition-colors duration-300",
                variant === "primary" && "bg-[var(--background)] text-[var(--foreground)] border border-white/20 hover:border-neon-cyan shadow-[0_0_20px_-5px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)]",
                variant === "secondary" && "bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20",
                variant === "outline" && "bg-transparent border border-white/30 text-white hover:border-white",
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Glow Effect */}
            {variant === "primary" && (
                <motion.div
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-mint opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                />
            )}
        </motion.button>
    );
}
