import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";

export const BackEndSkills = () => {
  return (
    <SkillCategoryContainer title="Back-End">
      {Object.values(siteMetaData.skills.backEnd).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
