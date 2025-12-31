import Image from "next/image";
import { education } from "@/config/education";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export function EducationList() {
    const categories = ["Higher Education", "School Education"] as const;

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-2 text-center mb-2">
                <h2 className="font-heading text-lg md:text-xl">
                    Education
                </h2>
                <p className="text-muted-foreground text-sm max-w-[85%] mx-auto leading-normal">
                    Academic journey and qualifications
                </p>
            </div>

            {categories.map((category) => {
                const items = education.filter((item) => item.category === category);
                if (items.length === 0) return null;

                return (
                    <div key={category} className="flex flex-col gap-4">
                        <h3 className="font-heading text-base md:text-lg text-primary font-semibold border-b pb-0.5 mb-1">
                            {category}
                        </h3>
                        <div className="flex flex-col gap-8">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                                >
                                    <div className="flex flex-col md:flex-row gap-4 p-4">
                                        <div className="flex-shrink-0">
                                            <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center overflow-hidden p-1 border border-muted shadow-sm">
                                                {item.logo ? (
                                                    <Image src={item.logo} alt={item.institution} className="h-full w-full object-contain" />
                                                ) : (
                                                    <item.icon className="h-10 w-10 text-primary" />
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex-grow space-y-4">
                                            <div>
                                                <h3 className="text-4xl font-semibold leading-none tracking-tight mb-2">{item.institution}</h3>
                                                <p className="text-2xl font-medium text-primary">{item.degree}</p>
                                                <p className="text-xl text-muted-foreground">{item.field}</p>
                                            </div>

                                            <div className="flex flex-col gap-2 text-lg text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Icons.mapPin className="h-5 w-5" />
                                                    {item.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Icons.calendar className="h-5 w-5" />
                                                    {item.year}
                                                </div>
                                            </div>

                                            <div className="pt-1 flex flex-wrap items-center gap-2">
                                                {item.score && (
                                                    <div className="inline-flex items-center rounded-lg border border-transparent bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground shadow-sm">
                                                        {item.score}
                                                    </div>
                                                )}
                                                {item.awards && (
                                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium px-1">
                                                        <Icons.star className="h-3.5 w-3.5 text-yellow-500" />
                                                        {item.awards}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {item.courses && item.courses.length > 0 && (
                                        <div className="p-8 pt-0">
                                            <p className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                                <Icons.bookOpen className="h-6 w-6" /> Key Courses:
                                            </p>
                                            <p className="text-xl text-muted-foreground leading-relaxed">
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
