"use client";

import { useState } from "react";

const colors = [
    { name: "R", bg: "bg-red-500", value: "#ef4444" },
    { name: "G", bg: "bg-green-500", value: "#22c55e" },
    { name: "B", bg: "bg-blue-500", value: "#3b82f6" },
];

export function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState(colors[2]);

    return (
        <div className="flex flex-col h-full justify-between">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                RGB Accent
            </span>
            <div className="flex justify-center items-center gap-2 flex-1">
                {colors.map((color) => (
                    <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full font-bold text-white flex items-center justify-center transition-transform hover:scale-110 ${color.bg
                            } ${selectedColor.name === color.name
                                ? "ring-2 ring-offset-2 ring-foreground"
                                : ""
                            }`}
                    >
                        {color.name}
                    </button>
                ))}
            </div>
            <div className="text-center text-[10px] text-muted-foreground">
                {selectedColor.value}
            </div>
        </div>
    );
}
