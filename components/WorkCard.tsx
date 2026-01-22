import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface WorkCardProps {
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    current?: boolean;
}

export function WorkCard({
    role,
    company,
    companyUrl,
    period,
    current = false
}: WorkCardProps) {
    return (
        <div className="flex items-start justify-between gap-4 group">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-foreground truncate">
                        {role}
                    </h3>
                    {current && (
                        <Badge variant="secondary" className="text-[10px] px-2 py-0">
                            Current
                        </Badge>
                    )}
                </div>
                {companyUrl ? (
                    <a
                        href={companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                ) : (
                    <p className="text-sm text-muted-foreground">{company}</p>
                )}
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">
                {period}
            </span>
        </div>
    );
}
