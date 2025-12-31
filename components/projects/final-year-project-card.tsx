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
        <div className="w-full rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="relative w-full lg:w-[45%] shrink-0 flex justify-center">
                    <div className="relative w-full max-w-[500px] aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-600 rounded-2xl blur-2xl opacity-40 animate-pulse" />
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-2xl opacity-60" />
                        <Image
                            src={fypImg}
                            alt={project.companyName}
                            fill
                            className="rounded-2xl border-[6px] border-background object-contain shadow-2xl relative z-10"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1 flex flex-col w-full">
                    <div className="flex flex-col justify-between gap-4 mb-4">
                        <h3 className="font-heading text-2xl font-bold md:text-3xl">
                            {project.companyName}
                        </h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-primary font-medium whitespace-nowrap">
                                <Icons.calendar className="h-4 w-4" />
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
                                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icons.externalLink className="h-4 w-4" />
                                    Read More
                                </Link>
                            )}
                        </div>

                    </div>

                    <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                        {project.descriptionDetails.bullets.length > 0 ? (
                            <ul className="list-disc pl-5 space-y-2">
                                {project.descriptionDetails.bullets.map((bullet, index) => (
                                    <li key={index} className="pl-1">
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{project.shortDescription}</p>
                        )}
                    </div>

                    {project.githubLink && (
                        <div className="mt-auto pt-4">
                            <Link
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Icons.gitHub className="h-4 w-4" /> See Source
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
