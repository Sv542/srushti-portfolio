"use client";

import { Terminal, Code2, Database, Brain } from "lucide-react";

const tools = [
    { name: "VS Code", icon: Code2, color: "text-blue-500" },
    { name: "Python", icon: Terminal, color: "text-yellow-500" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "PyTorch", icon: Brain, color: "text-orange-500" },
];

export function ToolsIUse() {
    return (
        <div className="flex flex-col h-full">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
                Tools I Use
            </span>
            <div className="grid grid-cols-2 gap-3 flex-1">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex flex-col items-center justify-center text-center gap-1 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                        <tool.icon className={`w-5 h-5 ${tool.color}`} />
                        <span className="text-[10px] font-medium">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
