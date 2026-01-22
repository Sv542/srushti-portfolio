"use client";

import { BookOpen } from "lucide-react";

const books = [
    { title: "Deep Learning", author: "Ian Goodfellow" },
    { title: "Hands-On ML", author: "Aurélien Géron" },
    { title: "Pattern Recognition", author: "Bishop" },
];

export function ReadingList() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Reading
                </span>
            </div>
            <div className="space-y-2 flex-1">
                {books.map((book, i) => (
                    <div key={i} className="text-xs">
                        <div className="font-medium line-clamp-1">{book.title}</div>
                        <div className="text-muted-foreground text-[10px]">
                            {book.author}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
