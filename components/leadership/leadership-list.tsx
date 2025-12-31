import { leadershipExperiences } from "@/config/leadership";
import LeadershipCard from "./leadership-card";

export function LeadershipList() {
    return (
        <div className="space-y-6">
            <div className="space-y-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                    Leadership Experience
                </h2>
                <p className="text-lg text-muted-foreground">
                    Roles and responsibilities in various organizations and societies
                </p>
            </div>

            <div className="grid gap-6">
                {leadershipExperiences.map((leadership) => (
                    <LeadershipCard key={leadership.id} leadership={leadership} />
                ))}
            </div>
        </div>
    );
}
