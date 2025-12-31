import { VolunteeringInterface } from "@/config/volunteering";

interface VolunteeringCardProps {
    volunteering: VolunteeringInterface;
}

export default function VolunteeringCard({ volunteering }: VolunteeringCardProps) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md h-full">
            <div className="flex flex-col gap-4 h-full">
                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-foreground mb-1">
                                {volunteering.organization}
                            </h3>
                            <p className="text-lg font-semibold text-primary">
                                {volunteering.role}
                            </p>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                            {volunteering.startDate} - {volunteering.endDate}
                        </div>
                    </div>

                    {volunteering.description && (
                        <p className="text-muted-foreground leading-relaxed">
                            {volunteering.description}
                        </p>
                    )}

                    {volunteering.responsibilities && volunteering.responsibilities.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                                Responsibilities:
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {volunteering.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
