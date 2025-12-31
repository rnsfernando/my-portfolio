import { AwardsInterface } from "@/config/awards";
import { cn } from "@/lib/utils";

interface AwardsCardProps {
    award: AwardsInterface;
}

export default function AwardsCard({ award }: AwardsCardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground">
                            {award.title}
                        </h3>
                        {award.organization && (
                            <p className="text-sm font-semibold text-primary mt-1">
                                {award.organization}
                            </p>
                        )}
                    </div>
                    {award.date && (
                        <div className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted px-2 py-1 rounded">
                            {award.date}
                        </div>
                    )}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                </div>
            </div>
        </div>
    );
}
