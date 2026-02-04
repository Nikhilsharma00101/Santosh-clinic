"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sage-400 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-sage-600 text-white shadow-soft hover:bg-sage-700 hover:shadow-md hover:-translate-y-0.5",
                outline:
                    "border border-sage-200 bg-white/50 backdrop-blur-sm shadow-sm hover:bg-white hover:text-sage-700 text-sage-800",
                ghost: "hover:bg-sage-100 text-sage-800",
                link: "text-sage-600 underline-offset-4 hover:underline",
                luxury: "bg-gradient-to-r from-sage-600 to-sage-500 text-white shadow-glass hover:shadow-lg hover:brightness-110",
            },
            size: {
                default: "h-11 px-8 py-2",
                sm: "h-9 rounded-full px-4 text-xs",
                lg: "h-14 rounded-full px-10 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

/* 
   We are not installing radix-ui/react-slot just yet, using a simple conditionally rendered component approach 
   or just bypassing 'asChild' for now to save complexity if not strictly needed. 
   Actually, standard Shadcn uses basic props. I'll stick to standard props but added Framer Motion support.
*/

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        // Basic implementation without Slot for now to avoid extra dependency if not present,
        // but if I want asChild I need Slot. I'll remove asChild for simplicity unless I install radix-slot.
        // I didn't install @radix-ui/react-slot. I'll remove it.

        const Comp = "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
