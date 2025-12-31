import { ValidSkills } from "./constants";
import sydneyLogo from "@/university_of_sydney_logo.png";
import { StaticImageData } from "next/image";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string | StaticImageData;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "aid-lab",
    position: "Research Intern – Human Computer Interaction",
    company: "AID Lab, The University of Sydney",
    location: "Sydney, Australia",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2025-07-01"),
    description: [
      "Developed a Python based automated pipeline for the design and evaluation of ankle–foot orthoses.",
      "Incorporated simulation driven analysis, gait modeling, finite element analysis, and script-driven 3D design.",
    ],
    achievements: [
      "Developed a Python based automated pipeline for the design and evaluation of ankle–foot orthoses, incorporating simulation driven analysis, gait modeling, finite element analysis, and script-driven 3D design.",
    ],
    skills: ["Python", "3D Design", "Simulation", "Data Analysis"],
    companyUrl: "https://www.sydney.edu.au",
    logo: sydneyLogo,
  },
];
