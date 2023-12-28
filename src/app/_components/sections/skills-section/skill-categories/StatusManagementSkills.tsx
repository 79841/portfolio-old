import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data";

export const StatusManagementSkills = () => {
  return (
    <SkillCategoryContainer title="Status Management">
      {Object.values(skillsData.statusManagement).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
