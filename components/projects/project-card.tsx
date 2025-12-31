import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-2 max-w-sm bg-card border border-border rounded-lg shadow-sm transition-all hover:shadow-md hover:border-primary/20 h-full flex flex-col">
      <div className="relative w-full h-[80px]">
        <Image
          className="rounded-lg border border-border object-cover transition-transform hover:scale-105 duration-500"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-2 space-y-2">
        <h5 className="text-xs font-bold tracking-tight text-foreground leading-none">
          {project.companyName}
        </h5>
        <div className="flex items-center gap-1.5 text-[10px] text-primary font-medium leading-none">
          <Icons.calendar className="h-2.5 w-2.5" />
          <span>
            {project.endDate === "Ongoing"
              ? "Ongoing"
              : new Date(project.startDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              }) ===
                new Date(project.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
                ? new Date(project.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
                : `${new Date(project.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })} - ${new Date(project.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}`}
          </span>
        </div>
        <p className="line-clamp-3 text-[8px] font-normal text-muted-foreground leading-tight tracking-tight">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="flex gap-1.5 mt-2">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="xs" className="gap-1.5 h-5 px-1.5">
                <Icons.gitHub className="h-3 w-3" /> Info
              </Button>
            </Link>
          )}
          {project.websiteLink && (
            <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="xs" className="gap-1.5 h-5 px-1.5">
                <Icons.externalLink className="h-3 w-3" /> Live
              </Button>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
