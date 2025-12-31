export interface LeadershipInterface {
    id: string;
    organization: string;
    role: string;
    startDate: Date;
    endDate: Date | "Present";
    logo: string;
    description?: string;
    responsibilities: string[];
    achievements?: string[];
    link?: string;
}

export const leadershipExperiences: LeadershipInterface[] = [
    {
        id: "ieee-embs",
        organization: "IEEE Engineering in Medicine and Biology Society- University of Moratuwa",
        role: "Head of External Relationship",
        startDate: new Date("2023-08-01"),
        endDate: new Date("2024-08-01"),
        logo: "/leadership/embs.png",
        responsibilities: [],
        achievements: [],
    },
    {
        id: "brainstorm-2024",
        organization: "Brainstorm 2024- Sri Lanka's Premier Biomedical Engineering Competition",
        role: "Marketing Team",
        startDate: new Date("2023-08-01"),
        endDate: new Date("2024-08-01"),
        logo: "/leadership/brainstorm.webp",
        description: "As part of the marketing team for the Brainstorm competition, we consistently updated our audience throughout each stage of the event to maintain engagement and ensure participant involvement.",
        responsibilities: [],
        achievements: [],
    },
    {
        id: "rotaract-club",
        organization: "Rotaract Club of University of Moratuwa",
        role: "General Member / Inducted Member / Co-chair (Bit Rain)",
        startDate: new Date("2022-06-01"),
        endDate: new Date("2023-05-01"),
        logo: "/leadership/rotaract.webp",
        link: "https://linkr.rotaractmora.org/#/public/tidruawjlxu0bouzyyaixilaeao2",
        description: "Engaged as an organizing committee member for various projects.",
        responsibilities: [
            "Professional Development projects, Membership Development projects, Community Service projects.",
            "Are You Ready - Company Coordination.",
            "Suwapetha - Event day Co-ordinator, Graphic Designer.",
            "Shalom - Volounteering (teaching)",
            "Rota Spark - Event day Co-ordinator, Graphic Designer.",
            "Resume Centre - Registration Table, HR Coordinating, Poster campaig, Event day Coordinator.",
            "Data Storm 4.0 - Graphic Designer.",
            "Induction Ceremony - Presentation Designing, Event day preparation",
        ],
        achievements: [],
    },
    {
        id: "catholic-students-society",
        organization: "Catholic Students' Society - University of Moratuwa",
        role: "Vice President Communications",
        startDate: new Date("2023-08-01"),
        endDate: new Date("2024-08-01"),
        logo: "/leadership/catholicsocietylogo.webp",
        responsibilities: [],
        achievements: [],
    },
    {
        id: "senior-prefect",
        organization: "Sirimavo Bandaranaike Vidyalaya, Colombo 07",
        role: "Senior Prefect",
        startDate: new Date("2019-01-01"),
        endDate: new Date("2020-01-01"),
        logo: "/leadership/schoolLOGO.png",
        responsibilities: [],
        achievements: [],
    },
    {
        id: "junior-prefect",
        organization: "Sirimavo Bandaranaike Vidyalaya, Colombo 07",
        role: "Junior Prefect",
        startDate: new Date("2015-01-01"),
        endDate: new Date("2016-01-01"),
        logo: "/leadership/schoolLOGO.png",
        responsibilities: [],
        achievements: [],
    },
];
