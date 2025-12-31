import Image from "next/image";
import { education } from "@/config/education";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export function EducationList() {
    const categories = ["Higher Education", "School Education"] as const;

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-1 text-center mb-1">
                <h2 className="font-heading text-sm md:text-base">
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
                                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden p-0.5 border border-muted shadow-sm">
                                                {item.logo ? (
                                                    <Image src={item.logo} alt={item.institution} className="h-full w-full object-contain" />
                                                ) : (
                                                    <item.icon className="h-4 w-4 text-primary" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-1">
                                            <div>
                                                <h3 className="text-xs font-bold leading-tight tracking-tight">{item.institution}</h3>
                                                <p className="text-[10px] font-semibold text-primary/90 leading-none">{item.degree}</p>
                                                <p className="text-[8px] text-muted-foreground uppercase tracking-tight leading-none mt-0.5">{item.field}</p>
                                            </div>

                                            <div className="flex flex-col gap-0 text-[8px] text-muted-foreground leading-none">
                                                <div className="flex items-center gap-1">
                                                    <Icons.mapPin className="h-2 w-2" />
                                                    {item.location}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Icons.calendar className="h-2 w-2" />
                                                    {item.year}
                                                </div>
                                            </div>

                                            <div className="pt-0.5 flex flex-wrap items-center gap-1">
                                                {item.score && (
                                                    <div className="inline-flex items-center rounded-sm border border-transparent bg-secondary/30 px-1 py-0 text-[7px] font-bold text-secondary-foreground">
                                                        {item.score}
                                                    </div>
                                                )}
                                                {item.awards && (
                                                    <div className="flex items-center gap-0.5 text-[7px] text-muted-foreground font-medium">
                                                        <Icons.star className="h-2 w-2 text-yellow-500" />
                                                        {item.awards}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {item.courses && item.courses.length > 0 && (
                                        <div className="px-2 pb-2">
                                            <p className="text-[9px] font-bold mb-0.5 flex items-center gap-1 text-foreground/90 leading-none">
                                                <Icons.bookOpen className="h-2.5 w-2.5" /> Key Courses:
                                            </p>
                                            <p className="text-[8px] text-muted-foreground leading-tight">
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
