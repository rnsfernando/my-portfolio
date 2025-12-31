"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-1.5 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-6 h-6 rounded border border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={24}
              height={24}
              className="w-full h-full object-contain p-0.5"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-1">
              <h3 className="text-[11px] font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {experience.position}
              </h3>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                >
                  <Icons.externalLink className="w-3 h-3" />
                </a>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 text-[8px] text-muted-foreground">
              <span className="font-medium">{experience.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center px-1 py-0 rounded-full text-[7.5px] font-medium bg-primary/10 text-primary border border-primary/20">
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
            </div>
          </div>
          <p className="mt-1 text-[8px] text-muted-foreground line-clamp-3 leading-tight">
            {experience.description[0]}
          </p>
          <div className="mt-2 flex flex-wrap gap-0.5">
            {experience.skills.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-1 py-0 rounded bg-muted text-muted-foreground text-[7px] font-medium"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 2 && (
              <span className="inline-flex items-center px-1 py-0 rounded bg-muted text-muted-foreground text-[7px] font-medium">
                +{experience.skills.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg w-full sm:w-auto"
          asChild
        >
          <Link href={`/experience/${experience.id}`}>
            View Details
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
