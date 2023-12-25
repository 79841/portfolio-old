import { SkillBox } from "../SkillBox";
import { siteMetaData } from "@/data/siteMetaData";

export const FrontEndSkills = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <h1 className="mb-8 text-xl font-semibold">{"Front-End"}</h1>
      {/* <SimpleBox className="grid w-full grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-4"> */}
      <div className="flex flex-wrap justify-center gap-8">
        {Object.values(siteMetaData.skills.frontEnd).map((skill) => (
          <SkillBox key={skill.name} {...skill} />
        ))}
      </div>
      {/* </SimpleBox> */}
    </div>
  );
};
