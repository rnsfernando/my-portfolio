import { volunteeringExperiences } from "@/config/volunteering";
import VolunteeringCard from "./volunteering-card";

export function VolunteeringList() {
    return (
        <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                {volunteeringExperiences.map((volunteering) => (
                    <VolunteeringCard key={volunteering.id} volunteering={volunteering} />
                ))}
            </div>
        </div>
    );
}
