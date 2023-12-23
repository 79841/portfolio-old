"use client";
import { NextjsSkillImage } from "../skill-images/NextjsSkillImage";
import { JiggleBox } from "../ui/box/JiggleBox";
import { SimpleBox } from "../ui/box/SimpleBox";

export const SkillOverviewCard = () => {
  return (
    <JiggleBox>
      <SimpleBox>
        <div className="flex w-full justify-center">
          <NextjsSkillImage className="h-40 w-40" />
        </div>
      </SimpleBox>
    </JiggleBox>
  );
};
