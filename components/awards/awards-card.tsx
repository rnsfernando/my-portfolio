import { AwardsInterface } from "@/config/awards";
import { cn } from "@/lib/utils";

interface AwardsCardProps {
    award: AwardsInterface;
}

export default function AwardsCard({ award }: AwardsCardProps) {
    return (
        <div className="rounded-lg border border-border bg-card p-2 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                        <h3 className="text-sm font-bold text-foreground">
                            {award.title}
                        </h3>
                        {award.organization && (
                            <p className="text-[9px] font-semibold text-primary mt-0.5">
                                {award.organization}
                            </p>
                        )}
                    </div>
                    {award.date && (
                        <div className="text-[8px] font-medium text-muted-foreground whitespace-nowrap bg-muted px-1.5 py-0.5 rounded">
                            {award.date}
                        </div>
                    )}
                </div>
                <div className="text-[8px] text-muted-foreground leading-snug">
                    {award.description}
                </div>
            </div>
        </div>
    );
}
