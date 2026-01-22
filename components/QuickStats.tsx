"use client";

import { motion } from "framer-motion";
import { GitCommit, Code, Zap } from "lucide-react";

const stats = [
    { icon: GitCommit, value: "500+", label: "Commits" },
    { icon: Code, value: "15", label: "Projects" },
    { icon: Zap, value: "3", label: "Hackathons" },
];

export function QuickStats() {
    return (
        <div className="flex flex-col h-full">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
                Quick Stats
            </span>
            <div className="grid grid-cols-3 gap-2 flex-1">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <stat.icon className="w-4 h-4 text-muted-foreground mb-1" />
                        <div className="text-lg font-bold">{stat.value}</div>
                        <span className="text-[10px] text-muted-foreground">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
