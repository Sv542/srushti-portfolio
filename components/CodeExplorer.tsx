"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown, Folder, File } from "lucide-react";

const fileTree = [
    {
        name: "ChatJuly",
        type: "folder",
        url: "https://github.com/vinyasv/ChatJuly",
        children: [
            { name: "client", type: "folder" },
            { name: "server", type: "folder" },
            { name: "README.md", type: "file" },
        ],
    },
    {
        name: "rag-upstash",
        type: "folder",
        url: "https://github.com/Sv542/rag-upstash",
        children: [
            { name: "app", type: "folder" },
            { name: "lib", type: "folder" },
            { name: "README.md", type: "file" },
        ],
    },
    {
        name: "recommendation-system",
        type: "folder",
        url: "https://github.com/Sv542",
        children: [
            { name: "models", type: "folder" },
            { name: "embeddings.py", type: "file" },
            { name: "evaluate.py", type: "file" },
        ],
    },
    {
        name: "ml-pipeline",
        type: "folder",
        url: "https://github.com/Sv542",
        children: [
            { name: "ingest", type: "folder" },
            { name: "train.py", type: "file" },
            { name: "config.yaml", type: "file" },
        ],
    },
    {
        name: "nlp-chat-model",
        type: "folder",
        url: "https://github.com/Sv542/rag-upstash",
        children: [
            { name: "tokenizer", type: "folder" },
            { name: "model.py", type: "file" },
            { name: "README.md", type: "file" },
        ],
    },
    {
        name: "trust-safety-classifier",
        type: "folder",
        url: "https://github.com/Sv542",
        children: [
            { name: "features.py", type: "file" },
            { name: "train.py", type: "file" },
        ],
    },
    {
        name: "image-captioning",
        type: "folder",
        url: "https://github.com/Sv542",
        children: [
            { name: "encoder.py", type: "file" },
            { name: "decoder.py", type: "file" },
        ],
    },
];

export function CodeExplorer() {
    const [expanded, setExpanded] = useState<string[]>(["ChatJuly"]);

    const toggleFolder = (name: string) => {
        setExpanded((prev) =>
            prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
        );
    };

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
                Exploring Code
            </span>
            <div className="space-y-1 flex-1 overflow-auto">
                {fileTree.map((item) => (
                    <div key={item.name}>
                        <div className="flex items-center gap-1.5 group">
                            <button
                                onClick={() => toggleFolder(item.name)}
                                className="p-0 hover:bg-muted rounded"
                            >
                                {expanded.includes(item.name) ? (
                                    <ChevronDown className="w-3 h-3" />
                                ) : (
                                    <ChevronRight className="w-3 h-3" />
                                )}
                            </button>
                            <Folder className="w-3 h-3 text-muted-foreground" />
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:underline"
                            >
                                {item.name}
                            </a>
                        </div>
                        {expanded.includes(item.name) && item.children && (
                            <div className="ml-6 mt-1 space-y-1">
                                {item.children.map((child) => (
                                    <div key={child.name} className="flex items-center gap-1.5">
                                        {child.type === "folder" ? (
                                            <Folder className="w-3 h-3 text-muted-foreground/80" />
                                        ) : (
                                            <File className="w-3 h-3 text-muted-foreground" />
                                        )}
                                        <span className="text-muted-foreground">{child.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
