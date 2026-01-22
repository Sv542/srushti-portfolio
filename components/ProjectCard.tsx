import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    href?: string;
    tags?: string[];
    featured?: boolean;
}

export function ProjectCard({
    title,
    description,
    href,
    tags = [],
    featured = false
}: ProjectCardProps) {
    return (
        <div className="flex flex-col h-full">
            <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className={`font-medium text-foreground ${featured ? 'text-lg' : 'text-base'}`}>
                    {title}
                </h3>
                {href && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                )}
            </div>

            <p className="text-sm text-muted-foreground mb-4 flex-1">
                {description}
            </p>

            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className="text-[10px] px-2 py-0 text-muted-foreground"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
