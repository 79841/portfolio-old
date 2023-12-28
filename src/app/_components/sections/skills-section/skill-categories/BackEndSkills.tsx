import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data/";

export const BackEndSkills = () => {
  return (
    <SkillCategoryContainer title="Back-End">
      {Object.values(skillsData.backEnd).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
