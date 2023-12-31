"use client";
import { Textfit } from "react-textfit";
import { ImageBox, TImageBoxProps } from "@/components/ui/boxes/ImageBox";
import React from "react";

type TSkillBoxProps = { name: string } & Omit<TImageBoxProps, "alt">;
export const SkillBox = ({ name, ...props }: TSkillBoxProps) => {
  return (
    <div className="flex w-20 flex-col items-center gap-1 sm:w-24">
      <div className="flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2">
        <ImageBox {...props} alt={name} />
      </div>
      <div className="text-nowrap text-xs text-secondary-foreground">
        {name}
      </div>
    </div>
  );
};
