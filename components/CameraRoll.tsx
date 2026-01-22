"use client";

import { useRef } from "react";
import Image from "next/image";

const photos = [
    { id: 1, src: "/workspace.png", alt: "Workspace setup" },
    { id: 2, src: "/campus.png", alt: "Campus view" },
    { id: 3, src: "/coding.png", alt: "Coding session" },
    { id: 4, src: "/meetup.png", alt: "Tech meetup" },
];

export function CameraRoll() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col h-full">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">
                Camera Roll
            </span>
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-1"
                style={{ scrollbarWidth: "none" }}
            >
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="flex-shrink-0 w-32 h-32 bg-muted rounded-lg snap-center relative overflow-hidden"
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="128px"
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-1 mt-2">
                {photos.map((_, i) => (
                    <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-muted-foreground/30"
                    />
                ))}
            </div>
        </div>
    );
}
