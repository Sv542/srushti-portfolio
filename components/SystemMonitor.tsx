"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SystemMonitor() {
    const [lines, setLines] = useState([
        "SYSTEM ONLINE",
        "STATUS: OK",
        "CPU: 1%",
        "MEM: OK",
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % lines.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [lines.length]);

    return (
        <div className="flex flex-col h-full justify-center items-center">
            <div className="bg-black rounded-md p-3 font-mono text-green-400 text-[10px] w-full min-h-[60px] flex items-center justify-center">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center"
                >
                    {lines[currentIndex]}
                </motion.div>
            </div>
            <span className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                System Monitor
            </span>
        </div>
    );
}
