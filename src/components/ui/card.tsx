import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-2xl border border-white/50 bg-white/70 text-sage-900 shadow-soft backdrop-blur-md transition-all duration-500 hover:shadow-glass hover:bg-white/80",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }
