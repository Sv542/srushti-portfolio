"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/BentoCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Coffee, MapPin,
  ArrowUpRight, Github, Linkedin, Twitter, ExternalLink,
  Music,
} from "lucide-react";
import Link from "next/link";
import { SystemMonitor } from "@/components/SystemMonitor";
import { CodeExplorer } from "@/components/CodeExplorer";
import { CameraRoll } from "@/components/CameraRoll";
import { ReadingList } from "@/components/ReadingList";
import { ToolsIUse } from "@/components/ToolsIUse";

// Work data
const workHistory: {
  role: string;
  company: string;
  url?: string;
  period: string;
  current?: boolean;
  highlights?: string[];
}[] = [
  {
    role: "Teaching Assistant",
    company: "Florida International University",
    url: "https://www.fiu.edu",
    period: "Aug 2024—present",
    current: true,
    highlights: [
      "Mentored 100+ students in Machine Learning, Python, and Algorithms.",
      "Guided students through the full ML lifecycle: preprocessing, training, evaluation, and hyperparameter tuning.",
    ],
  },
  {
    role: "Associate Software Developer",
    company: "Aptean India",
    url: "https://www.aptean.com",
    period: "Mar 2023—July 2024",
    highlights: [
      "Built scalable backend services and data pipelines; improved processing efficiency by ~30%.",
      "Designed automated validation and transformation workflows with Python and SQL.",
      "Optimized API performance and reduced latency through efficient queries and data structuring.",
    ],
  },
];

const resumeProjects: {
  title: string;
  paragraphs: string[];
  tags: string[];
  codeUrl: string;
  githubUrl: string;
}[] = [
  {
    title: "Personalized Recommendation System",
    paragraphs: [
      "Built a recommendation engine using collaborative filtering and neural embeddings to model user behavior at scale.",
      "Improved ranking relevance using cosine similarity and evaluated performance with precision@K.",
      "Designed system to simulate real-world recommendation scenarios.",
    ],
    tags: ["Python", "PyTorch", "Embeddings", "Collaborative Filtering"],
    codeUrl: "https://github.com/Sv542/rag-upstash",
    githubUrl: "https://github.com/Sv542",
  },
  {
    title: "NLP Chat Model",
    paragraphs: [
      "Developed a transformer-based model to classify sentiment and user intent from chat data.",
      "Applied tokenization, embeddings, and preprocessing techniques for conversational datasets.",
      "Improved understanding of user interactions for scalable chat systems.",
    ],
    tags: ["NLP", "Transformers", "PyTorch", "Tokenization"],
    codeUrl: "https://github.com/Sv542/rag-upstash",
    githubUrl: "https://github.com/Sv542",
  },
  {
    title: "ML Pipeline",
    paragraphs: [
      "Designed an end-to-end ML pipeline covering data ingestion, feature engineering, model training, and evaluation.",
      "Automated retraining workflows and ensured reproducibility across experiments.",
      "Structured pipeline to reflect production ML system design.",
    ],
    tags: ["Python", "Pandas", "MLOps", "Docker"],
    codeUrl: "https://github.com/Sv542/rag-upstash",
    githubUrl: "https://github.com/Sv542",
  },
  {
    title: "Trust & Safety ML Model",
    paragraphs: [
      "Built a classification system to detect spam and unsafe behavior from user activity signals at scale.",
      "Engineered behavioral features, addressed class imbalance, and tuned for production-grade precision and recall.",
      "Framed evaluation around real-world moderation constraints—not just offline accuracy.",
    ],
    tags: ["Classification", "Scikit-learn", "Precision-Recall", "Production ML"],
    codeUrl: "https://github.com/Sv542/rag-upstash",
    githubUrl: "https://github.com/Sv542",
  },
  {
    title: "Image Captioning System",
    paragraphs: [
      "Implemented a multimodal encoder–decoder combining CNN and LSTM architectures for caption generation.",
      "Measured quality with BLEU and iterated through architecture and training choices for stronger generalization.",
      "Positioned the work as end-to-end multimodal ML: vision features, language modeling, and evaluation together.",
    ],
    tags: ["CNN", "LSTM", "Computer Vision", "BLEU"],
    codeUrl: "https://github.com/Sv542/rag-upstash",
    githubUrl: "https://github.com/Sv542",
  },
];

const whatIWorkOn = [
  "Recommendation Systems",
  "Natural Language Processing (NLP)",
  "ML Pipelines & Automation",
  "Trust & Safety Systems",
  "Large-Scale Data Processing",
];

const howIBuildML = [
  "Data preprocessing and feature engineering",
  "Model development and evaluation",
  "Experiment tracking and optimization",
  "Scalable pipeline design",
  "Deployment-ready ML workflows",
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
            <div className="flex items-center gap-3 flex-wrap justify-end">
              <Button variant="default" size="sm" className="h-8 text-xs gap-1.5 shadow-sm" asChild>
                <a href="https://github.com/Sv542" target="_blank" rel="noopener noreferrer">
                  <Github className="size-3.5" />
                  GitHub
                </a>
              </Button>
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
              <div className="font-medium">Miami, FL</div>
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

          {/* Hero - intro + What I Work On + How I Build */}
          <BentoCard colSpan={3} rowSpan={1} delay={3}>
            <div className="flex flex-col h-full justify-center gap-5 md:gap-6">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-balance">
                  Machine Learning Engineer building scalable recommendation systems,
                  <br />
                  NLP models, and end-to-end ML pipelines for real-world applications.
                </h1>
              </div>
              <Separator className="opacity-40" />
              <div>
                <h2 className="font-display text-base md:text-lg font-semibold mb-3">
                  🔹 What I Work On
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {whatIWorkOn.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-foreground shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Separator className="opacity-40" />
              <div>
                <h2 className="font-display text-base md:text-lg font-semibold mb-3">
                  How I Build ML Systems
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {howIBuildML.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-foreground shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                        {work.highlights && (
                          <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground list-disc pl-4">
                            {work.highlights.map((line, j) => (
                              <li key={j}>{line}</li>
                            ))}
                          </ul>
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

          {/* Featured Project - Chat July */}
          <BentoCard colSpan={2} delay={6} id="projects">
            <div className="flex flex-col h-full">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Latest</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Chat July</h3>
              <p className="text-xs text-muted-foreground flex-1">
                Real-time chat application from my GitHub. Built with modern web tech for seamless messaging.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <Badge variant="outline" className="text-[10px]">React</Badge>
                <Badge variant="outline" className="text-[10px]">Node.js</Badge>
                <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
                <Badge variant="outline" className="text-[10px]">WebSockets</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-border/40">
                <Button variant="outline" size="sm" className="text-xs" asChild>
                  <a href="https://github.com/vinyasv/ChatJuly" target="_blank" rel="noopener noreferrer">
                    View Code
                    <ExternalLink className="size-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="text-xs gap-1" asChild>
                  <a href="https://github.com/vinyasv/ChatJuly" target="_blank" rel="noopener noreferrer">
                    <Github className="size-3.5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </BentoCard>

          {/* Rag-upstash - RAG chat with Upstash Vector */}
          <BentoCard colSpan={2} delay={7} id="projects-rag">
            <div className="flex flex-col h-full">
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Projects</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Rag-upstash</h3>
              <p className="text-xs text-muted-foreground flex-1">
                RAG chat app using Vercel AI SDK, OpenAI, and Upstash Vector for retrieval-augmented answers.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                <Badge variant="outline" className="text-[10px]">Next.js</Badge>
                <Badge variant="outline" className="text-[10px]">OpenAI</Badge>
                <Badge variant="outline" className="text-[10px]">Upstash</Badge>
                <Badge variant="outline" className="text-[10px]">TypeScript</Badge>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-2 border-t border-border/40">
                <Button variant="outline" size="sm" className="text-xs" asChild>
                  <a href="https://github.com/Sv542/rag-upstash" target="_blank" rel="noopener noreferrer">
                    View Code
                    <ExternalLink className="size-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="text-xs gap-1" asChild>
                  <a href="https://github.com/Sv542/rag-upstash" target="_blank" rel="noopener noreferrer">
                    <Github className="size-3.5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </BentoCard>

          {/* ML & AI projects — impact + depth */}
          <BentoCard colSpan={4} delay={8} id="projects-ml">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">ML &amp; AI</span>
                <h2 className="font-display text-xl md:text-2xl font-bold mt-1">Projects</h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
                  Impact, ML depth, and production mindset: scalable ranking, NLP, pipelines you could ship, trust &amp; safety, and multimodal systems—with clear evaluation and iteration loops.{" "}
                  <span className="text-foreground/80">
                    View Code links point to a live repo with README, architecture notes, and runnable code (Rag-upstash).
                  </span>
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {resumeProjects.map((proj) => (
                  <motion.div
                    key={proj.title}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="rounded-lg border border-border/60 bg-muted/25 p-5 flex flex-col gap-3 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 hover:bg-muted/45 transition-all duration-300"
                  >
                    <h3 className="font-display text-xl md:text-2xl lg:text-[1.65rem] font-bold leading-snug text-foreground tracking-tight">
                      {proj.title}
                    </h3>
                    <div className="space-y-2.5 flex-1">
                      {proj.paragraphs.map((p, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px] font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                      <Button variant="default" size="sm" className="text-xs" asChild>
                        <a href={proj.codeUrl} target="_blank" rel="noopener noreferrer">
                          View Code
                          <ExternalLink className="size-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs gap-1" asChild>
                        <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="size-3.5" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Coffee Counter - Small */}
          <BentoCard delay={9}>
            <div className="flex flex-col items-center justify-center h-full">
              <Coffee className="w-5 h-5 text-muted-foreground mb-1" />
              <AnimatedCounter value={847} label="coffees" />
            </div>
          </BentoCard>

          {/* Music - Small */}
          <BentoCard delay={10}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Music className="w-5 h-5 text-muted-foreground mb-1" />
              <div className="text-xs font-medium">Playing</div>
              <span className="text-[10px] text-muted-foreground">Lofi</span>
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard delay={11}>
            <div className="flex flex-col h-full">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Stack</span>
              <div className="flex flex-wrap gap-1">
                {["Python", "PyTorch", "TensorFlow", "SQL", "JavaScript", "React"].map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[10px] px-1.5">{tech}</Badge>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* About/Bio Card */}
          <BentoCard colSpan={2} delay={12} href="https://linkedin.com" id="about">
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
                <p className="text-xs text-muted-foreground line-clamp-3">
                  MS in Computer Science (AI/ML) at FIU · BE in CS from Siddaganga Institute of Technology.
                  Teaching Assistant for ML and algorithms; ex–Aptean backend &amp; data pipelines.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Code Explorer */}
          <BentoCard colSpan={2} rowSpan={2} delay={13}>
            <CodeExplorer />
          </BentoCard>

          {/* Camera Roll */}
          <BentoCard colSpan={2} delay={14}>
            <CameraRoll />
          </BentoCard>

          {/* Reading List */}
          <BentoCard delay={15}>
            <ReadingList />
          </BentoCard>

          {/* Tools I Use */}
          <BentoCard delay={16}>
            <ToolsIUse />
          </BentoCard>

          {/* Footer Note - spans all 4 cols */}
          <BentoCard colSpan={4} delay={17}>
            <div className="flex items-center justify-between h-full">
              <span className="text-xs text-muted-foreground">
                © 2026 Srushti Visweswaraiah. Built with Next.js
              </span>
              <span className="text-xs text-muted-foreground">
                Miami, FL · svisw003@fiu.edu
              </span>
            </div>
          </BentoCard>

        </div>
      </main>
    </div>
  );
}
