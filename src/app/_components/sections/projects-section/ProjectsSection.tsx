import { siteMetaData } from "@/data";
import { SectionContainer } from "../SectionContainer";
import { ProjectsSectionBanner } from "./ProjectsSectionBanner";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  return (
    <SectionContainer>
      <ProjectsSectionBanner />
      <div className="flex flex-wrap justify-center gap-20 sm:py-36">
        {siteMetaData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};
