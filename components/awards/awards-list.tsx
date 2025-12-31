import { awards } from "@/config/awards";
import AwardsCard from "./awards-card";

export function AwardsList() {
    return (
        <div className="space-y-6">
            <div className="space-y-4 text-center">
                <h2 className="font-heading text-3xl font-bold leading-tight tracking-tighter md:text-6xl">
                    Awards
                </h2>
                <p className="text-lg text-muted-foreground">
                    Recognition and achievements
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-1 max-w-6xl mx-auto">
                {awards.map((award) => (
                    <AwardsCard key={award.id} award={award} />
                ))}
            </div>
        </div>
    );
}
