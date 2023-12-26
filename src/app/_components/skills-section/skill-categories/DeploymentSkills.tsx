import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";

export const DeploymentSkills = () => {
  return (
    <SkillCategoryContainer title="Deployment">
      {Object.values(siteMetaData.skills.deployment).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
