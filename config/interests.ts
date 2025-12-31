import { Icons } from "@/components/common/icons";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export interface InterestInterface {
    name: string;
    icon: LucideIcon | IconType;
}

export const interests: InterestInterface[] = [
    {
        name: "Computer Vision",
        icon: Icons.work,
    },
    {
        name: "Medical image processing",
        icon: Icons.work,
    },
    {
        name: "Machine Learning",
        icon: Icons.work,
    },
    {
        name: "Signal processing",
        icon: Icons.work,
    },
    {
        name: "HCI",
        icon: Icons.work,
    },
    {
        name: "Software Development",
        icon: Icons.work,
    },
];
