import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";

export const CommunicationSkills = () => {
  return (
    <SkillCategoryContainer title="Communication">
      {Object.values(siteMetaData.skills.communication).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
