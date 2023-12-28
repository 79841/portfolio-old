import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data";

export const FrontEndSkills = () => {
  return (
    <SkillCategoryContainer title="Font-End">
      {Object.values(skillsData.frontEnd).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
