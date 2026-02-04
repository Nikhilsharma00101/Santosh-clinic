"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    animate?: boolean;
}

export function GradientText({
    children,
    className,
    as: Component = "span",
    animate = true,
}: GradientTextProps) {
    return (
        <Component
            className={cn(
                "font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-mint via-neon-cyan to-neon-blue pb-2", // pb-2 to prevent clip cutoff
                animate && "animate-gradient-x bg-[length:200%_auto]",
                className
            )}
        >
            {children}
        </Component>
    );
}
