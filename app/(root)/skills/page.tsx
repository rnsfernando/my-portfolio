import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { pagesConfig } from "@/config/pages";
import { skillsCategories } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <div className="w-full max-w-6xl mx-auto mt-8">
        <SkillsGrid categories={skillsCategories} />
      </div>
    </PageContainer>
  );
}
