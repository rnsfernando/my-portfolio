import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import { EducationList } from "@/components/education/education-list";
import { ExperienceList } from "@/components/experience/experience-list";
import { LeadershipList } from "@/components/leadership/leadership-list";
import { AwardsList } from "@/components/awards/awards-list";
import { VolunteeringList } from "@/components/volunteering/volunteering-list";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import FinalYearProjectCard from "@/components/projects/final-year-project-card";
import SkillsCard from "@/components/skills/skills-card";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills, skillsCategories } from "@/config/skills";
import { interests } from "@/config/interests";
import { cn } from "@/lib/utils";
import profileImg from "@/1763872083219.png";
import volunteeringImg from "../../public/volentering.png";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Biomedical Engineering Undergraduate",
    sameAs: [siteConfig.links.github, siteConfig.links.twitter],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Global Fixed Background */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px] animate-pulse delay-700" />

        {/* Additional Orbs for Page Body */}
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <section className="relative space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-16 lg:py-24 min-h-[70vh] flex items-center overflow-hidden">

        <div className="container relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-center order-1 lg:order-1">
            <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-600 rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-purple-600 rounded-full opacity-60" />
              <Image
                src={profileImg}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-full border-[6px] border-background object-cover shadow-2xl relative z-10"
                alt="Rebecca Fernando - Biomedical Engineering Portfolio"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-2">


            <div className="space-y-1">
              <AnimatedText
                as="h1"
                delay={0.2}
                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight"
              >
                {siteConfig.authorName}
              </AnimatedText>
              <AnimatedText
                as="h3"
                delay={0.3}
                className="font-heading text-xs sm:text-sm md:text-base text-muted-foreground"
              >
                Biomedical Engineering Undergraduate
              </AnimatedText>
            </div>

            <AnimatedText delay={0.4} className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              I am a Biomedical Engineering Undergraduate with a strong passion for AI, Machine Learning, and Computer Vision. I enjoy applying data-driven approaches to solve real-world problems and building intelligent software systems that make a difference in healthcare and technology.
            </AnimatedText>



            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mt-2">
              <AnimatedText delay={0.5}>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  className={cn(buttonVariants({ size: "sm" }))}
                  aria-label="View Rebecca Fernando's GitHub profile"
                >
                  <Icons.gitHub className="w-3.5 h-3.5 mr-2" /> GitHub
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.6}>
                <Link
                  href={"https://www.linkedin.com/in/rebecca-fernando-bb4873397/"}
                  target="_blank"
                  className={cn(buttonVariants({ size: "sm" }))}
                  aria-label="View Rebecca Fernando's LinkedIn profile"
                >
                  <Icons.linkedin className="w-3.5 h-3.5 mr-2" /> LinkedIn
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.7}>
                <Link
                  href={"/contact"}
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })
                  )}
                  aria-label="Contact Rebecca Fernando"
                >
                  <Icons.contact className="w-3.5 h-3.5 mr-2" /> Contact
                </Link>
              </AnimatedText>
              <AnimatedText delay={0.8}>
                <Link
                  href="/rebecca-fernando-cv.pdf"
                  download="Rebecca_Fernando_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })
                  )}
                  aria-label="Download CV"
                >
                  <Icons.download className="w-3.5 h-3.5 mr-2" /> Download CV
                </Link>
              </AnimatedText>
            </div>

            <div className="mt-6 w-full">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Areas of Interest</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {interests.map((interest, index) => (
                  <AnimatedText
                    key={index}
                    delay={0.8 + index * 0.1}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-muted border border-border text-foreground text-[9px] sm:text-[10px] font-medium hover:scale-105 transition-transform duration-200"
                  >
                    <interest.icon className="w-3 h-3" />
                    <span>{interest.name}</span>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icons.chevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="education"
      >
        <div className="w-full max-w-6xl mx-auto">
          <EducationList />
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="w-full max-w-6xl mx-auto">
          <ExperienceList />
        </div>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-xl md:text-2xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full max-w-6xl mx-auto space-y-16">
          {/* Final Year Project Section */}
          {featuredProjects.find(p => p.id === "digital-companion") && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center lg:text-left font-heading">Final Year Project</h3>
              <AnimatedSection delay={0.1} direction="up">
                <FinalYearProjectCard project={featuredProjects.find(p => p.id === "digital-companion")!} />
              </AnimatedSection>
            </div>
          )}

          {/* Other Projects Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center lg:text-left font-heading">Other Projects</h3>
            <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-3">
              {featuredProjects
                .filter(p => p.id !== "digital-companion")
                .map((exp, index) => (
                  <AnimatedSection
                    key={exp.id}
                    delay={0.1 * (index + 1)}
                    direction="up"
                  >
                    <ProjectCard project={exp} />
                  </AnimatedSection>
                ))}
            </div>
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="awards"
      >
        <div className="w-full max-w-6xl mx-auto">
          <AwardsList />
        </div>
      </AnimatedSection>

      <AnimatedSection
        className="container space-y-12 bg-muted/50 py-12 md:py-24"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
          <AnimatedText
            as="h2"
            className="font-heading text-xl md:text-2xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <SkillsGrid categories={skillsCategories} />
        </div>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="leadership"
      >
        <div className="w-full max-w-6xl mx-auto">
          <LeadershipList />
        </div>
      </AnimatedSection>



      <AnimatedSection
        className="w-full py-10 my-14 space-y-12"
        id="volunteering"
      >
        <div className="container mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-lg md:text-xl"
          >
            Volunteering
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground text-xs"
          >
            Contributing to the community and organizing events
          </AnimatedText>
        </div>

        {/* Collage Section inside Volunteering */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={volunteeringImg}
              alt="Volunteering Collage"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="container w-full max-w-6xl mx-auto">
          <VolunteeringList />
        </div>
      </AnimatedSection>

    </ClientPageWrapper >
  );
}
