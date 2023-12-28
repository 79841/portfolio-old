import { RightSideExperience } from "./RightSideExperience";
import { LeftSideExperience } from "./LeftSideExperience";
import { experiencesData } from "@/data";

export const ExperienceTimeline = () => {
  return (
    <div className="flex w-full flex-col items-center">
      {experiencesData.map((experience, i) =>
        i % 2 === 0 ? (
          <LeftSideExperience key={experience.title} experience={experience} />
        ) : (
          <RightSideExperience key={experience.title} experience={experience} />
        ),
      )}
    </div>
  );
};
