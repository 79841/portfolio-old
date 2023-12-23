import { SkillOverviewCard } from "./SkillOverviewCard";

export const Overview = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
      <SkillOverviewCard />
      <SkillOverviewCard />
      <SkillOverviewCard />
    </div>
  );
};
