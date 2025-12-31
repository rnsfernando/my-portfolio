import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

import FinalYearProjectCard from "@/components/projects/final-year-project-card";

export default function ProjectsPage() {
  const finalYearProject = Projects.find((p) => p.id === "digital-companion");
  const otherProjects = Projects.filter((p) => p.id !== "digital-companion");

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      {finalYearProject && (
        <section className="mb-16">
          <h2 className="mb-8 font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
            Final Year Project
          </h2>
          <FinalYearProjectCard project={finalYearProject} />
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-8 font-heading text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Other Projects
        </h2>
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

