import { SectionContainer } from "../SectionContainer";
import { SkillsSectionBanner } from "./SkillsSectionBanner";
import {
  BackEndSkills,
  CommunicationSkills,
  DeploymentSkills,
  FrontEndSkills,
  MobileAppSkills,
  StatusManagementSkills,
} from "./skill-categories";

export const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <div className="flex flex-col sm:gap-24">
        <SkillsSectionBanner />
        <div className="w-full py-24">
          <div className="flex flex-col justify-evenly gap-24">
            <div className="flex-[1]">
              <FrontEndSkills />
            </div>
            <div className="flex-[1]">
              <BackEndSkills />
            </div>
            <div className="flex flex-[1] flex-col flex-wrap justify-center gap-24 sm:flex-row">
              <div className="flex-[1]">
                <MobileAppSkills />
              </div>
              <div className="flex-[1]">
                <DeploymentSkills />
              </div>
              <div className="flex-[1]">
                <StatusManagementSkills />
              </div>
            </div>
            <div className="flex-[1]">
              <CommunicationSkills />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
