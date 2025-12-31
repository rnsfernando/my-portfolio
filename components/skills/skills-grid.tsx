
import { Icons } from "@/components/common/icons";
import { SkillCategory } from "@/config/skills";
import { cn } from "@/lib/utils";

interface SkillsGridProps {
    categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="rounded-xl border bg-card text-card-foreground shadow-sm h-full"
                >
                    <div className="flex flex-col space-y-3 p-6">
                        <h3 className="font-semibold leading-none tracking-tight flex items-center gap-3 text-2xl">
                            {getCategoryIcon(category.title)}
                            {category.title}
                        </h3>
                    </div>
                    <div className="p-6 pt-0">
                        <div className="flex flex-wrap gap-4">
                            {category.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm"
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

function getCategoryIcon(title: string) {
    switch (title) {
        case "Spoken Languages": return <Icons.user className="w-8 h-8 text-primary" />;
        case "Languages":
        case "Programming Languages": return <Icons.code className="w-8 h-8 text-primary" />;
        case "Frameworks": return <Icons.layers className="w-8 h-8 text-primary" />;
        case "Software & Tools":
        case "Developer Tools": return <Icons.settings className="w-8 h-8 text-primary" />;
        case "Cloud & Databases": return <Icons.database className="w-8 h-8 text-primary" />;
        case "Areas of Interest": return <Icons.lightbulb className="w-8 h-8 text-primary" />;
        default: return <Icons.star className="w-8 h-8 text-primary" />;
    }
}
