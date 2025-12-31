import Image from "next/image";
import Link from "next/link";
import fypImg from "@/fyp1.png";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ProjectInterface } from "@/config/projects";

interface FinalYearProjectCardProps {
    project: ProjectInterface;
}

export default function FinalYearProjectCard({
    project,
}: FinalYearProjectCardProps) {
    return (
        <div className="w-full rounded-lg border border-border bg-card text-card-foreground shadow-sm p-3">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="relative w-full lg:w-[45%] shrink-0 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-600 rounded-2xl blur-2xl opacity-40 animate-pulse" />
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-60" />
                        <Image
                            src={fypImg}
                            alt={project.companyName}
                            fill
                            className="rounded-lg border-[3px] border-background object-contain shadow-xl relative z-10"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col w-full">
                    <div className="flex flex-col justify-between gap-4 mb-4">
                        <h3 className="font-heading text-lg font-bold">
                            {project.companyName}
                        </h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-center gap-1.5 text-[8px] text-primary font-medium whitespace-nowrap">
                                <Icons.calendar className="h-3 w-3" />
                                <span>
                                    {project.endDate === "Ongoing"
                                        ? "Ongoing"
                                        : new Date(project.startDate).toLocaleDateString("en-US", {
                                            month: "short",
                                            year: "numeric",
                                        }) ===
                                            new Date(project.endDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })
                                            ? new Date(project.startDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })
                                            : `${new Date(project.startDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })} - ${new Date(project.endDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })}`}
                                </span>
                            </div>
                            {project.websiteLink && (
                                <Link
                                    href={project.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-[8px] font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icons.externalLink className="h-3 w-3" />
                                    Read More
                                </Link>
                            )}
                        </div>

                    </div>

                    <div className="space-y-1.5 text-muted-foreground text-[8px] leading-snug mb-3 flex-1">
                        {project.descriptionDetails.bullets.length > 0 ? (
                            <ul className="list-disc pl-3 space-y-0.5">
                                {project.descriptionDetails.bullets.map((bullet, index) => (
                                    <li key={index} className="pl-0.5">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{project.shortDescription}</p>
                        )}
                    </div>

                    {project.githubLink && (
                        <div className="mt-auto">
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="sm" className="h-6 px-2 text-[8px] gap-1">
                                    <Icons.gitHub className="h-2.5 w-2.5" /> See Source
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
