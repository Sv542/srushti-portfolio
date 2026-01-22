import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="font-display text-lg font-bold tracking-tight"
                        >
                            Srushti Visweswaraiah
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Software Developer & AI Enthusiast building intelligent systems.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-12">
                        <div>
                            <h4 className="text-sm font-medium mb-3">Navigation</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium mb-3">Social</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                                    >
                                        <Github className="w-3 h-3" />
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                                    >
                                        <Linkedin className="w-3 h-3" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                                    >
                                        <Twitter className="w-3 h-3" />
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Typography credits */}
                    <div>
                        <h4 className="text-sm font-medium mb-3">Typography</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://fonts.google.com/specimen/Inter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Inter
                            </a>
                            <a
                                href="https://fonts.google.com/specimen/Archivo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Archivo
                            </a>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2025 Srushti Visweswaraiah. All rights reserved.</p>
                    <p>Built with Next.js & ShadCN</p>
                </div>
            </div>
        </footer>
    );
}
