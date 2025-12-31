import Image from "next/image";
import { experiences } from "@/config/experience";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export function ExperienceList() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-4 text-center mb-4">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Experience
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[85%] mx-auto leading-normal sm:leading-7">
                    Professional journey and career timeline
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {experiences.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                    >
                        <div className="flex flex-col md:flex-row gap-8 p-8">
                            {/* Logo Section - kept simplistic or generic icon if no logo */}
                            <div className="flex-shrink-0">
                                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 border border-muted shadow-sm">
                                    {item.logo ? (
                                        <Image src={item.logo} alt={item.company} width={100} height={100} className="h-full w-full object-contain" />
                                    ) : (
                                        <Icons.work className="h-10 w-10 text-primary" />
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow space-y-4">
                                <div>
                                    <h3 className="text-4xl font-semibold leading-none tracking-tight mb-2">{item.company}</h3>
                                    <p className="text-2xl font-medium text-primary">{item.position}</p>
                                </div>

                                <div className="flex flex-col gap-2 text-lg text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Icons.mapPin className="h-5 w-5" />
                                        {item.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Icons.calendar className="h-5 w-5" />
                                        <span>
                                            {item.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                                            {typeof item.endDate === "string" ? item.endDate : item.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                                        </span>
                                    </div>
                                </div>

                                {/* Description / Achievements */}
                                {/* Using achievements as the main description block similar to courses */}
                                {item.achievements && item.achievements.length > 0 && (
                                    <div className="pt-4">
                                        <ul className="list-disc list-outside ml-5 space-y-2 text-xl text-muted-foreground leading-relaxed">
                                            {item.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Skills chips if needed, similar to awards */}
                                {item.skills && item.skills.length > 0 && (
                                    <div className="pt-4 flex flex-wrap gap-2">
                                        {item.skills.map((skill, idx) => (
                                            <div key={idx} className="inline-flex items-center rounded-xl border border-transparent bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground shadow-sm">
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
