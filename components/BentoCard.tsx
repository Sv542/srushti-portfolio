"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3 | 4;
    rowSpan?: 1 | 2;
    href?: string;
    delay?: number;
    id?: string;
}

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            delay: delay * 0.05,
            ease: [0.25, 0.4, 0.25, 1] as const
        }
    })
};

export function BentoCard({
    children,
    className,
    colSpan = 1,
    rowSpan = 1,
    href,
    delay = 0,
    id
}: BentoCardProps) {
    const colSpanClass = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4"
    }[colSpan];

    const rowSpanClass = {
        1: "row-span-1",
        2: "md:row-span-2"
    }[rowSpan];

    const cardContent = (
        <motion.div
            id={id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={delay}
            whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
            }}
            className={cn(
                "group relative overflow-hidden rounded-lg",
                "bg-card",
                "border border-border/40",
                "p-5 h-full",
                "transition-shadow duration-300",
                "hover:shadow-lg hover:shadow-black/5",
                colSpanClass,
                rowSpanClass,
                href && "cursor-pointer",
                className
            )}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={cn(colSpanClass, rowSpanClass)}>
                {cardContent}
            </a>
        );
    }

    return cardContent;
}

// Animated text component
export function AnimatedText({
    children,
    className,
    delay = 0
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: delay * 0.05,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for children animations
export function StaggerContainer({
    children,
    className
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.05
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
