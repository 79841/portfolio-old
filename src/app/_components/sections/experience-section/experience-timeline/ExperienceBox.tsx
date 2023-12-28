import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import React from "react";
import { TExperienceData } from "@/types/ExperienceData";
import Image from "next/image";

type TExperienceBoxProps = {
  experience: TExperienceData;
};
export const ExperienceBox = ({ experience }: TExperienceBoxProps) => {
  return (
    <SimpleBox className="h-full w-full flex-[1] flex-row items-center gap-4 sm:gap-6 xl:max-w-[35rem]">
      <div className="relative min-h-12 min-w-12 overflow-hidden rounded-lg sm:h-20 sm:w-20">
        {experience.image && (
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-contain"
          />
        )}
      </div>
      <div>
        <div className="text-base font-semibold tracking-tighter sm:text-xl">
          {experience.title}
        </div>
        {experience.content && (
          <div className="text-sm text-muted-foreground">
            {experience.content}
          </div>
        )}
        <div className="text-sm text-muted-foreground">{experience.period}</div>
      </div>
    </SimpleBox>
  );
};
