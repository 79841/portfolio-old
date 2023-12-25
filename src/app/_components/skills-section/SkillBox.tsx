"use client";
import { Textfit } from "react-textfit";
import { ImageBox, TImageBoxProps } from "@/components/ui/boxes/ImageBox";
import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import React from "react";

type TSkillBoxProps = { name: string } & Omit<TImageBoxProps, "alt">;
export const SkillBox = ({ name, ...props }: TSkillBoxProps) => {
  return (
    <div className="flex w-24 flex-col items-center gap-2">
      <div className="flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2">
        <ImageBox {...props} alt={name} />
      </div>
      <Textfit mode="single" max={16}>
        {name}
      </Textfit>
    </div>
  );
};