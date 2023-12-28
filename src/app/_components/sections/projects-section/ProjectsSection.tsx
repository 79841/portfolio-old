import { siteMetadata } from "@/data";
import { SectionContainer } from "../SectionContainer";
import { ProjectsSectionBanner } from "./ProjectsSectionBanner";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data";

export const ProjectsSection = () => {
  return (
    <SectionContainer id="projects">
      <ProjectsSectionBanner />
      <div className="flex flex-wrap justify-center gap-20 sm:py-36">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
