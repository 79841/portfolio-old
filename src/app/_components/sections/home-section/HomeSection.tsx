import { SectionContainer } from "../SectionContainer";
import { Preview } from "./preview";
import { ProfileCard } from "./profile-card";
import { JigglerContextProvider } from "@/context/jiggler";

export const HomeSection = () => {
  return (
    <JigglerContextProvider>
      <section id="home" className="flex w-screen justify-center sm:w-full">
        <div className="flex h-fit w-full flex-col gap-20 px-2 pt-32 md:w-[80%] lg:w-[70%]">
          <div className="flex flex-col sm:flex-row sm:gap-20">
            <div className="flex flex-col items-end justify-start sm:flex-[1]">
              <ProfileCard />
            </div>
            <div className="flex flex-col overflow-x-hidden overflow-y-visible pt-24 sm:flex-[2] min-[1800px]:overflow-visible">
              <Preview />
            </div>
          </div>
        </div>
      </section>
    </JigglerContextProvider>
  );
};
