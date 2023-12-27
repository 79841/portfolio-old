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
      <div className="flex flex-wrap justify-center gap-6 rounded-lg border px-2 py-8 sm:gap-8 sm:border-0 sm:p-0">
        {children}
      </div>
    </div>
  );
};
