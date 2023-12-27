import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import React from "react";
import { TExperienceData } from "@/types/ExperienceData";

type TExperienceBoxProps = {
  experience: TExperienceData;
};
export const ExperienceBox = ({ experience }: TExperienceBoxProps) => {
  return (
    <SimpleBox className="h-full w-full flex-[1] xl:max-w-[35rem]">
      <div className="text-xl font-semibold tracking-tighter">
        {experience.title}
      </div>
      {experience.content && (
        <div className="text-muted-foreground">{experience.content}</div>
      )}
      <div className="text-muted-foreground">{experience.period}</div>
    </SimpleBox>
  );
};
