export interface AwardsInterface {
    id: string;
    title: string;
    organization?: string;
    description: string;
    date?: string;
}

export const awards: AwardsInterface[] = [
    {
        id: "brainstorm-2024",
        title: "Semifinalist - Brainstorm 2024",
        organization: "Sri Lanka’s Premier Biomedical Engineering Competition",
        description: "Recognized as a semifinalist in this prestigious competition. Developed a mobile application designed to revolutionize the management of baby health records in Sri Lanka.",
        date: "2024",
    },
    {
        id: "spark-challenge-2024",
        title: "Semifinalist - Spark Challenge 2024",
        organization: "Department of ENTC, University of Moratuwa",
        description: "A flagship year-long innovation competition. Developed a mobile application designed to revolutionize the management of baby health records in Sri Lanka.",
        date: "2024",
    },
    {
        id: "spirit-of-service",
        title: "Spirit of Service Award",
        organization: "Rotaract Club of University of Moratuwa",
        description: "Recognizes outstanding dedication and commitment demonstrated throughout the 2022/23 term in the Rotaract Club of University of Moratuwa.",
        date: "2022/23",
    }
];
