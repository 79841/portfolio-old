import { SimpleBox } from "@/components/ui/boxes/SimpleBox";
import { FrontEndSkills } from "./skill-categories/FrontEndSkills";
import { SkillsSectionBanner } from "./SkillsSectionBanner";

export const SkillsSection = () => {
  return (
    <section className="flex w-screen justify-center sm:w-full">
      <div className="flex h-fit w-full flex-col items-center px-2 py-32 sm:gap-20 md:w-[80%] lg:w-[70%]">
        <SkillsSectionBanner />
        <div className="w-full">
          <div className="flex justify-evenly gap-8">
            <div className="flex-[1]">
              <FrontEndSkills />
            </div>
            {/* <div className="flex-[1]">
              <FrontEndSkills />
            </div>
            <div className="flex-[1]">
              <FrontEndSkills />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
