"use client";

import { motion } from "framer-motion";
import { BentoCard, AnimatedText } from "@/components/BentoCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Coffee, MapPin,
  ArrowUpRight, Github, Linkedin, Twitter, ExternalLink,
  Music, Figma, Layers
} from "lucide-react";
import Link from "next/link";
import { SystemMonitor } from "@/components/SystemMonitor";
import { CodeExplorer } from "@/components/CodeExplorer";
import { CameraRoll } from "@/components/CameraRoll";
import { ReadingList } from "@/components/ReadingList";
import { ToolsIUse } from "@/components/ToolsIUse";

// Work data
const workHistory = [
  { role: "Teaching Assistant", company: "Florida International University", url: "https://www.fiu.edu", period: "Aug 2024—present", current: true },
  { role: "Associate Software Developer", company: "Aptean India", url: "https://www.aptean.com", period: "Mar 2023—July 2024" },
];


// Animated counter
function AnimatedCounter({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <motion.div
        className="text-3xl font-bold font-display"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        {value}
      </motion.div>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-card rounded-full px-6 py-2.5 shadow-lg shadow-black/5 border border-border/50">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-display font-bold text-sm">S</Link>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="mailto:svisw003@fiu.edu" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6 pt-20">
        <div className="bento-grid">

          {/* Header/Name Card - spans 2 cols */}
          <BentoCard colSpan={2} delay={0} className="flex items-center justify-between">
            <Link href="/" className="font-display text-2xl font-bold tracking-tight">
              Srushti Visweswaraiah
            </Link>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard delay={1}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <MapPin className="w-5 h-5 text-muted-foreground mb-2" />
              <div className="font-medium">United States</div>
              <span className="text-xs text-muted-foreground">EST</span>
            </div>
          </BentoCard>

          {/* Status Badge */}
          <BentoCard delay={2}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available</span>
              </div>
              <span className="text-xs text-muted-foreground">for freelance</span>
            </div>
          </BentoCard>

          {/* Hero - Large intro card spanning 3 cols */}
          <BentoCard colSpan={3} rowSpan={1} delay={3}>
            <div className="flex flex-col h-full justify-center">
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">
                Software Developer & AI Enthusiast{" "}
                <span className="text-muted-foreground">building intelligent systems</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl">
                Master's student in Computer Science at FIU with experience in full-stack development and AI/ML.
                Currently teaching AI and Operating Systems while building secure, intelligent applications.
              </p>
            </div>
          </BentoCard>

          {/* System Monitor - Small */}
          <BentoCard delay={4}>
            <SystemMonitor />
          </BentoCard>

          {/* Work History - Large card spanning 2 cols, 2 rows */}
          <BentoCard colSpan={2} rowSpan={2} delay={5} id="work">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Experience</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  View all <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-4 flex-1">
                {workHistory.map((work, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-sm font-medium">{work.role}</h3>
                          {work.current && (
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Now</Badge>
                          )}
                        </div>
                        {work.url ? (
                          <a
                            href={work.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {work.company}
                            <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-xs text-muted-foreground">{work.company}</p>
                        )}
                      </div>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">{work.period}</span>
                    </div>
                    {i < workHistory.length - 1 && <Separator className="mt-4 opacity-40" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Featured Project */}
          <BentoCard colSpan={2} delay={6} href="https://github.com" id="projects">
            <div className="flex flex-col h-full">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Latest</span>
              <h3 className="text-lg font-medium mb-1">Secure Messaging System</h3>
              <p className="text-xs text-muted-foreground flex-1">
                End-to-end encrypted chat platform with AES/RSA encryption and real-time messaging.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <Badge variant="outline" className="text-[10px]">React</Badge>
                <Badge variant="outline" className="text-[10px]">Node.js</Badge>
                <Badge variant="outline" className="text-[10px]">WebSockets</Badge>
              </div>
            </div>
          </BentoCard>

          {/* Coffee Counter - Small */}
          <BentoCard delay={7}>
            <div className="flex flex-col items-center justify-center h-full">
              <Coffee className="w-5 h-5 text-muted-foreground mb-1" />
              <AnimatedCounter value={847} label="coffees" />
            </div>
          </BentoCard>

          {/* Music - Small */}
          <BentoCard delay={8}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Music className="w-5 h-5 text-muted-foreground mb-1" />
              <div className="text-xs font-medium">Playing</div>
              <span className="text-[10px] text-muted-foreground">Lofi</span>
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard delay={9}>
            <div className="flex flex-col h-full">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Stack</span>
              <div className="flex flex-wrap gap-1">
                {["Python", "React", "Node.js", "C++"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[10px] px-1.5">{tech}</Badge>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* About/Bio Card */}
          <BentoCard colSpan={2} delay={10} href="https://linkedin.com" id="about">
            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center font-bold text-lg shrink-0"
                whileHover={{ rotate: 3, scale: 1.05 }}
              >
                S
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-medium text-sm">Srushti Visweswaraiah</h3>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  MS in Computer Science student at FIU specializing in AI & Software Development.
                  Teaching Assistant helping 100+ students with AI and Operating Systems.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Code Explorer */}
          <BentoCard colSpan={2} rowSpan={2} delay={11}>
            <CodeExplorer />
          </BentoCard>

          {/* Camera Roll */}
          <BentoCard colSpan={2} delay={12}>
            <CameraRoll />
          </BentoCard>

          {/* Reading List */}
          <BentoCard delay={13}>
            <ReadingList />
          </BentoCard>

          {/* Tools I Use */}
          <BentoCard delay={14}>
            <ToolsIUse />
          </BentoCard>

          {/* Footer Note - spans all 4 cols */}
          <BentoCard colSpan={4} delay={15}>
            <div className="flex items-center justify-between h-full">
              <span className="text-xs text-muted-foreground">
                © 2025 Srushti Visweswaraiah. Built with Next.js
              </span>
              <span className="text-xs text-muted-foreground">
                Last updated: Dec 2025
              </span>
            </div>
          </BentoCard>

        </div>
      </main>
    </div>
  );
}
