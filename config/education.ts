import { Icons } from "@/components/common/icons";
import uniLogo from "@/uni logo.gif";
import schoolLogo from "@/schoolLOGO.png";
import { StaticImageData } from "next/image";

export interface EducationItem {
    institution: string;
    degree: string;
    field: string;
    location: string;
    year: string;
    score?: string; // Made optional
    awards?: string;
    courses?: string[];
    icon?: any;
    logo?: StaticImageData | string;
    category: "Higher Education" | "School Education";
}

export const education: EducationItem[] = [
    {
        institution: "University of Moratuwa",
        degree: "B.Sc. Engineering (Hons.)",
        field: "Biomedical Engineering",
        location: "Moratuwa, Sri Lanka",
        year: "July 2022 - Present",
        score: "CGPA: 3.79/4.0",
        awards: "Dean's List: Semester 2, Semester 4, Semester 6",
        courses: [
            "Pattern Recognition",
            "Image Processing and machine vision",
            "Deep learning for Vision",
            "Data Structures and Algorithms",
            "Neural Networks and Fuzzy Logic",
            "Software Design Competition",
            "Digital Signal Processing",
            "Biosignal Processing",
            "Medical Imaging",
            "Medical Electronics and Instrumentation",
            "Electronic Instrumentation",
            "Biomedical Device Design",
            "Anatomy",
            "Modelling and Analysis of Physiological Systems",
            "Electronic Control Systems",
            "Linear Algebra",
            "Applied Statistics",
            "Circuits and Systems Design",
            "Technical and Scientific Writing"
        ],
        logo: uniLogo,
        category: "Higher Education",
    },
    {
        institution: "Department of Mathematics, University of Moratuwa",
        degree: "Minor in Mathematics",
        field: "", // Field usually is the major, but here degree has it. Keep empty or redundant? Let's use it for location or subtitle if needed. Or just repeat.
        // User image shows: "Department of Mathematics, University of Moratuwa" large. "Minor in Mathematics" smaller. "Sri Lanka". 
        // "Key courses: Linear Algebra..."
        // Layout in component uses: institution (h3), degree (p primary), field (p muted).
        // So:
        // institution: "Department of Mathematics, University of Moratuwa"
        // degree: "Minor in Mathematics"
        // field: "" (or maybe "Undergraduate"?) - leaving empty or putting something generic.
        location: "Moratuwa, Sri Lanka",
        year: "Aug 2022 - Present",
        // score: OMITTED
        courses: [
            "Linear Algebra",
            "Probability and Statistics",
            "Numerical Methods",
            "Fuzzy Logic",
            "Calculus",
            "Differential Equations"
        ],
        logo: uniLogo,
        category: "Higher Education",
    },
    {
        institution: "Sirimavo Bandaranaike Vidyalaya",
        degree: "G.C.E. Advanced Level",
        field: "Physical Science Stream",
        location: "Colombo 07, Sri Lanka",
        year: "January 2007 - October 2020",
        score: "Z-Score: 2.5332",
        courses: ["Combined Mathematics", "Physics", "Chemistry"],
        logo: schoolLogo,
        category: "School Education",
    },
];
