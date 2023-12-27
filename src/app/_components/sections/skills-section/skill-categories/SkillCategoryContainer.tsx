import { PropsWithChildren } from "react";

type TSkillCategoryContainer = {
  title: string;
} & PropsWithChildren;

export const SkillCategoryContainer = ({
  title,
  children,
}: TSkillCategoryContainer) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="mb-8 text-xl font-semibold">{title}</h1>
      <div className="flex flex-wrap justify-center gap-8">{children}</div>
    </div>
  );
};
