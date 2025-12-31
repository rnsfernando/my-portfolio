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
        <div className="rounded-md border border-border bg-card p-1.5 shadow-sm transition-all hover:shadow-md">
            <div className="flex flex-col md:flex-row gap-2 md:items-start">
                {/* Logo Section */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative">
                        <Image
                            src={leadership.logo}
                            alt={leadership.organization}
                            width={32}
                            height={32}
                            className="object-contain w-auto h-auto max-w-[32px] max-h-[32px] rounded-sm"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1">
                            <h3 className="text-[10px] font-bold text-foreground mb-0">
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
                        <p className="text-[8px] text-muted-foreground leading-tight">
                            {leadership.description}
                        </p>
                    )}

                    {leadership.link && (
                        <div>
                            <Button variant="link" className="p-0 h-auto font-medium text-primary hover:no-underline group" asChild>
                                <a
                                    href={leadership.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[9px]"
                                >
                                    View Credential <span className="ml-0.5 transition-transform group-hover:translate-x-0.5">→</span>
                                </a>
                            </Button>
                        </div>
                    )}

                    {leadership.responsibilities.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                                Responsibilities:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {leadership.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {leadership.achievements && leadership.achievements.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                                Achievements:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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
