import Image from "next/image";
import { LeadershipInterface } from "@/config/leadership";
import { Button } from "@/components/ui/button";

interface LeadershipCardProps {
    leadership: LeadershipInterface;
}

export default function LeadershipCard({ leadership }: LeadershipCardProps) {
    const formatDate = (date: Date | "Present") => {
        if (date === "Present") return "Present";
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    };

    return (
        <div className="rounded-lg border border-border bg-card p-2 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row gap-6 md:items-start">
                {/* Logo Section */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative">
                        <Image
                            src={leadership.logo}
                            alt={leadership.organization}
                            width={32}
                            height={32}
                            className="object-contain w-auto h-auto max-w-[32px] max-h-[32px] rounded"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
                        <div className="flex-1">
                            <h3 className="text-[11px] font-bold text-foreground leading-tight">
                                {leadership.organization}
                            </h3>
                            <p className="text-[9px] font-semibold text-primary">
                                {leadership.role}
                            </p>
                        </div>
                        <div className="text-[8px] font-medium text-muted-foreground whitespace-nowrap">
                            {formatDate(leadership.startDate)} - {formatDate(leadership.endDate)}
                        </div>
                    </div>

                    {leadership.description && (
                        <p className="text-[8px] text-muted-foreground leading-snug">
                            {leadership.description}
                        </p>
                    )}

                    {leadership.link && (
                        <div className="mt-0.5">
                            <Button variant="link" className="p-0 h-auto text-[8px] font-medium text-primary hover:no-underline group" asChild>
                                <a
                                    href={leadership.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Credential <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </Button>
                        </div>
                    )}

                    {leadership.responsibilities.length > 0 && (
                        <div className="mt-1">
                            <h4 className="text-[9px] font-semibold text-foreground mb-1">
                                Responsibilities:
                            </h4>
                            <ul className="list-disc pl-3 space-y-0 text-[8px] text-muted-foreground">
                                {leadership.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {leadership.achievements && leadership.achievements.length > 0 && (
                        <div className="mt-1">
                            <h4 className="text-[9px] font-semibold text-foreground mb-1">
                                Achievements:
                            </h4>
                            <ul className="list-disc pl-3 space-y-0 text-[8px] text-muted-foreground">
                                {leadership.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
