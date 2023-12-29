import { PropsWithChildren } from "react";

type TSkillCategoryContainer = {
  title: string;
} & PropsWithChildren;

export const SkillCategoryContainer = ({
  title,
  children,
}: TSkillCategoryContainer) => {
  return (
    <div className="flex w-full flex-col items-center rounded-lg p-4 pb-8">
      <h1 className="mb-8 text-xl font-semibold">{title}</h1>
      <div className="flex flex-wrap justify-center gap-8 rounded-lg sm:p-0">
        {children}
      </div>
    </div>
  );
};
