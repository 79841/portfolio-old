import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";

export const MobileAppSkills = () => {
  return (
    <SkillCategoryContainer title="Mobile App">
      {Object.values(siteMetaData.skills.app).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
