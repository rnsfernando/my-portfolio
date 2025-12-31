import Image from "next/image";
import { education } from "@/config/education";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export function EducationList() {
    const categories = ["Higher Education", "School Education"] as const;

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-1 text-center mb-1">
                <h2 className="font-heading text-base md:text-lg">
                    Education
                </h2>
                <p className="text-muted-foreground text-[10px] max-w-[85%] mx-auto leading-tight">
                    Academic journey and qualifications
                </p>
            </div>

            {categories.map((category) => {
                const items = education.filter((item) => item.category === category);
                if (items.length === 0) return null;

                return (
                    <div key={category} className="flex flex-col gap-2">
                        <h3 className="font-heading text-xs md:text-sm text-primary font-semibold border-b pb-0.5 mb-0.5">
                            {category}
                        </h3>
                        <div className="flex flex-col gap-8">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                                >
                                    <div className="flex flex-col md:flex-row gap-2 p-2">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 border border-muted shadow-sm">
                                                {item.logo ? (
                                                    <Image src={item.logo} alt={item.institution} className="h-full w-full object-contain" />
                                                ) : (
                                                    <item.icon className="h-6 w-6 text-primary" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-1.5">
                                            <div>
                                                <h3 className="text-base font-bold leading-tight tracking-tight">{item.institution}</h3>
                                                <p className="text-xs font-semibold text-primary/90">{item.degree}</p>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-tight">{item.field}</p>
                                            </div>

                                            <div className="flex flex-col gap-0.5 text-[10px] text-muted-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <Icons.mapPin className="h-3 w-3" />
                                                    {item.location}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Icons.calendar className="h-3 w-3" />
                                                    {item.year}
                                                </div>
                                            </div>

                                            <div className="pt-0.5 flex flex-wrap items-center gap-1">
                                                {item.score && (
                                                    <div className="inline-flex items-center rounded-sm border border-transparent bg-secondary/50 px-1 py-0 text-[8px] font-bold text-secondary-foreground shadow-sm">
                                                        {item.score}
                                                    </div>
                                                )}
                                                {item.awards && (
                                                    <div className="flex items-center gap-0.5 text-[8px] text-muted-foreground font-medium px-0.5">
                                                        <Icons.star className="h-2 w-2 text-yellow-500" />
                                                        {item.awards}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {item.courses && item.courses.length > 0 && (
                                        <div className="px-3 pb-3">
                                            <p className="text-xs font-bold mb-0.5 flex items-center gap-1.5 text-foreground/90">
                                                <Icons.bookOpen className="h-3 w-3" /> Key Courses:
                                            </p>
                                            <p className="text-[10px] text-muted-foreground leading-snug">
                                                {item.courses.join(", ")}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
