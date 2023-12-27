import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";
import { SimpleBox } from "@/components/ui/boxes/SimpleBox";

export const FrontEndSkills = () => {
  return (
    <SkillCategoryContainer title="Font-End">
      {Object.values(siteMetaData.skills.frontEnd).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
