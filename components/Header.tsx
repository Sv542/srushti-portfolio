"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="font-display text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                >
                    Srushti Visweswaraiah
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="#work"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Work
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        About
                    </Link>
                </nav>

                <Button variant="outline" size="sm" className="rounded-full">
                    Let&apos;s Talk
                </Button>
            </div>
        </header>
    );
}
