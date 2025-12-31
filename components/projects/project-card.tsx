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
    <div className="relative p-6 max-w-sm bg-card border border-border rounded-xl shadow-sm transition-all hover:shadow-md hover:border-primary/20 h-full flex flex-col">
      <div className="relative w-full h-[200px]">
        <Image
          className="rounded-lg border border-border object-cover transition-transform hover:scale-105 duration-500"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <div className="flex items-center gap-2 text-sm text-primary font-medium">
          <Icons.calendar className="h-4 w-4" />
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
        <p className="line-clamp-3 text-sm font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <div className="flex gap-2 mt-4">
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Icons.gitHub className="h-4 w-4" /> See More
              </Button>
            </Link>
          )}
          {project.websiteLink && (
            <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="sm" className="gap-2">
                <Icons.externalLink className="h-4 w-4" /> Live
              </Button>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}
