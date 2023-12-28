import { SkillBox } from "../SkillBox";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { skillsData } from "@/data";

export const DeploymentSkills = () => {
  return (
    <SkillCategoryContainer title="Deployment">
      {Object.values(skillsData.deployment).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
