import { SectionContainer } from "../SectionContainer";
import { ExperienceSectionBanner } from "./ExperienceSectionBanner";
import { ExperienceTimeline } from "./experience-timeline/ExperienceTimeline";

export const ExperienceSection = () => {
  return (
    <SectionContainer id="experience">
      <ExperienceSectionBanner />
      <div className="sm:py-36">
        <ExperienceTimeline />
      </div>
    </SectionContainer>
  );
};
