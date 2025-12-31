import { VolunteeringInterface } from "@/config/volunteering";

interface VolunteeringCardProps {
    volunteering: VolunteeringInterface;
}

export default function VolunteeringCard({ volunteering }: VolunteeringCardProps) {
    return (
        <div className="rounded-md border border-border bg-card p-1.5 shadow-sm transition-all hover:shadow-md h-full">
            <div className="flex flex-col gap-4 h-full">
                {/* Content Section */}
                <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div className="flex-1">
                            <h3 className="text-[10px] font-bold text-foreground mb-0">
                                {volunteering.organization}
                            </h3>
                            <p className="text-[9px] font-semibold text-primary">
                                {volunteering.role}
                            </p>
                        </div>
                        <div className="text-[8px] font-medium text-muted-foreground whitespace-nowrap">
                            {volunteering.startDate} - {volunteering.endDate}
                        </div>
                    </div>

                    {volunteering.description && (
                        <p className="text-[8px] text-muted-foreground leading-tight">
                            {volunteering.description}
                        </p>
                    )}

                    {volunteering.responsibilities && volunteering.responsibilities.length > 0 && (
                        <div className="mt-1">
                            <h4 className="text-[9px] font-semibold text-foreground mb-1">
                                Responsibilities:
                            </h4>
                            <ul className="list-disc pl-3 space-y-0.5 text-[8px] text-muted-foreground">
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
