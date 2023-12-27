import { TExperienceData } from "@/types/ExperienceData";
import { ExperienceBox } from "./ExperienceBox";

type TExperienceRightSideBoxProps = {
  experience: TExperienceData;
};
export const RightSideExperience = ({
  experience,
}: TExperienceRightSideBoxProps) => {
  return (
    <div className="flex w-[100%] justify-center pl-3 sm:pl-0">
      <div className="hidden w-[50%] border-r xl:block"></div>
      <div className="relative flex w-[100%] items-center border-l py-4 pr-4 sm:w-[80%] sm:pr-0 xl:w-[50%] xl:border-l-0 xl:py-0">
        <div className="absolute -left-3 h-6 w-6 -translate-y-8 rounded-[50%] border bg-primary-foreground sm:-left-4 sm:h-8 sm:w-8"></div>
        <div className="h-0 min-w-8 -translate-y-8 border-8 border-b-transparent border-l-transparent border-t-transparent sm:min-w-12"></div>
        <ExperienceBox experience={experience} />
      </div>
    </div>
  );
};
