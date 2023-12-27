import { SectionContainer } from "../SectionContainer";
import { Preview } from "./preview";
import { ProfileCard } from "./profile-card";
import { JigglerContextProvider } from "@/context/jiggler";

export const HomeSection = () => {
  return (
    <JigglerContextProvider>
      <SectionContainer id="home">
        <div className="flex flex-col sm:flex-row sm:gap-20">
          <div className="flex flex-col items-end justify-start sm:flex-[1]">
            <ProfileCard />
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden overflow-y-visible pt-8 sm:flex-[2]  min-[1800px]:overflow-visible">
            <div>
              <Preview />
            </div>
          </div>
        </div>
      </SectionContainer>
    </JigglerContextProvider>
  );
};
