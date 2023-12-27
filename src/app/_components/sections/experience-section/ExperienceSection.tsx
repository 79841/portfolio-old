import { SectionContainer } from "../SectionContainer";
import { ExperienceSectionBanner } from "./ExperienceSectionBanner";
import { ExperienceTimeline } from "./experience-timeline/ExperienceTimeline";

export const ExperienceSection = () => {
  return (
    <SectionContainer>
      <ExperienceSectionBanner />
      <div className="sm:py-24">
        <ExperienceTimeline />
      </div>
    </SectionContainer>
  );
};
