import Image from "next/image";
import { education } from "@/config/education";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/common/icons";

export function EducationList() {
    const categories = ["Higher Education", "School Education"] as const;

    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-4 text-center mb-4">
                <h2 className="font-heading text-2xl leading-[1.1] sm:text-3xl md:text-5xl">
                    Education
                </h2>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[85%] mx-auto leading-normal sm:leading-7">
                    Academic journey and qualifications
                </p>
            </div>

            {categories.map((category) => {
                const items = education.filter((item) => item.category === category);
                if (items.length === 0) return null;

                return (
                    <div key={category} className="flex flex-col gap-6">
                        <h3 className="font-heading text-xl md:text-2xl text-primary font-semibold border-b pb-2 mb-4">
                            {category}
                        </h3>
                        <div className="flex flex-col gap-8">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/20"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 p-8">
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

                                            <div className="pt-2 flex flex-wrap items-center gap-4">
                                                {item.score && (
                                                    <div className="inline-flex items-center rounded-xl border border-transparent bg-secondary px-6 py-3 text-lg font-medium text-secondary-foreground shadow-sm">
                                                        {item.score}
                                                    </div>
                                                )}
                                                {item.awards && (
                                                    <div className="flex items-center gap-2 text-lg text-muted-foreground font-medium px-2">
                                                        <Icons.star className="h-5 w-5 text-yellow-500" />
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
