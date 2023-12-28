import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data";

export const MobileAppSkills = () => {
  return (
    <SkillCategoryContainer title="Mobile App">
      {Object.values(skillsData.app).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
