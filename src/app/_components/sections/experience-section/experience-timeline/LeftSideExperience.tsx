import { TExperienceData } from "@/types/ExperienceData";
import { ExperienceBox } from "./ExperienceBox";

type TExperienceLeftSideBoxProps = {
  experience: TExperienceData;
};
export const LeftSideExperience = ({
  experience,
}: TExperienceLeftSideBoxProps) => {
  return (
    <div className="flex w-[100%] justify-center pl-3 sm:pl-0">
      <div className="relative flex w-[100%] items-center border-l py-4 pr-4 sm:w-[70%] sm:py-0 sm:pr-0 xl:w-[50%] xl:justify-end xl:border-l-0 xl:border-r">
        <div className="absolute -left-3 h-6 w-6 -translate-y-8 rounded-[50%] border bg-primary-foreground sm:-left-4 sm:h-8 sm:w-8 sm:min-w-8 sm:-translate-y-8 xl:hidden"></div>
        <div className="h-0 min-w-8 -translate-y-8 border-8 border-b-transparent border-l-transparent border-t-transparent sm:min-w-12 xl:hidden"></div>
        <ExperienceBox experience={experience} />
        <div className="hidden h-0 w-12 -translate-y-8 border-8 border-b-transparent border-r-transparent border-t-transparent xl:block"></div>
        <div className="absolute -right-4 hidden h-8 w-8 min-w-8 -translate-y-8 rounded-[50%] border bg-primary-foreground xl:block"></div>
      </div>
      <div className="hidden w-[50%] xl:block"></div>
    </div>
  );
};
