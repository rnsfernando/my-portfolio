export interface VolunteeringInterface {
    id: string;
    organization: string;
    role: string;
    startDate: string; // Using string for flexibility with dates like "2023 - 2023"
    endDate: string | "Present";
    logo: string;
    description?: string;
    responsibilities?: string[];
}

export const volunteeringExperiences: VolunteeringInterface[] = [
    {
        id: "brainstorm-2024",
        organization: "Brainstorm 2024 - Sri Lanka’s Premier Biomedical Engineering Competition",
        role: "Organizing Committee",
        startDate: "2024",
        endDate: "2024",
        logo: "/leadership/schoolLOGO.png", // Placeholder
    },
    {
        id: "brainstorm-2023",
        organization: "Brainstorm 2023",
        role: "Organizing Committee",
        startDate: "2023",
        endDate: "2023",
        logo: "/leadership/schoolLOGO.png", // Placeholder
    },
    {
        id: "rotaract-volunteering",
        organization: "Rotaract Club of University of Moratuwa",
        role: "General Member / Inducted Member / Co-chair (Bit Rain)",
        startDate: "Jun 2022",
        endDate: "May 2023",
        logo: "/leadership/rotaract.webp",
    },
    {
        id: "career-fair-2023",
        organization: "ENTC Career Fair 2023",
        role: "Company Coordinator - ADL (Axiata Digital Lab)",
        description: "University of Moratuwa",
        startDate: "2023",
        endDate: "2023",
        logo: "/leadership/schoolLOGO.png", // Placeholder
    },
    {
        id: "exmo",
        organization: "University of Moratuwa",
        role: "Exmo Exhibition Coordinator",
        startDate: "2023",
        endDate: "2023",
        logo: "/leadership/schoolLOGO.png", // Placeholder
    },
    {
        id: "ieee-embs-member",
        organization: "IEEE EMBS Student Branch Chapter at the UoM",
        role: "Member",
        startDate: "Apr 2022",
        endDate: "Aug 2024",
        logo: "/leadership/embs.png",
    },
    {
        id: "electronic-club",
        organization: "Electronic Club UOM",
        role: "Member",
        startDate: "Feb 2023",
        endDate: "Present",
        logo: "/leadership/schoolLOGO.png", // Placeholder
    },
    {
        id: "catholic-students",
        organization: "Catholic Students' Society - University of Moratuwa",
        role: "Member",
        startDate: "Aug 2023",
        endDate: "Aug 2024",
        logo: "/leadership/catholicsocietylogo.webp",
    }
];
