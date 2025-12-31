import { awards } from "@/config/awards";
import AwardsCard from "./awards-card";

export function AwardsList() {
    return (
        <div className="space-y-6">
            <div className="space-y-1 text-center mb-4">
                <h2 className="font-heading text-lg md:text-xl font-bold leading-tight tracking-tighter">
                    Awards
                </h2>
                <p className="text-xs text-muted-foreground">
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
