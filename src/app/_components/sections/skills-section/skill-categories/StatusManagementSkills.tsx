import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";
import { SkillCategoryContainer } from "./SkillCategoryContainer";

export const StatusManagementSkills = () => {
  return (
    <SkillCategoryContainer title="Status Management">
      {Object.values(siteMetaData.skills.statusManagement).map((skill) => (
        <SkillBox key={skill.name} {...skill} />
      ))}
    </SkillCategoryContainer>
  );
};
