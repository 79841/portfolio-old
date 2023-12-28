import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data";

export const CommunicationSkills = () => {
  return (
    <SkillCategoryContainer title="Communication">
      {Object.values(skillsData.communication).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
