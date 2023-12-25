import { Preview } from "./preview";
import { ProfileCard } from "./profile";
import { JigglerContextProvider } from "@/context/jiggler";

export const HomeSection = () => {
  return (
    <JigglerContextProvider>
      <section id="home" className="flex w-screen justify-center sm:w-full">
        <div className="flex h-fit w-full flex-col px-2 py-32 sm:flex-row sm:gap-20 md:w-[80%] lg:w-[70%]">
          <div className="flex flex-col items-end justify-start sm:flex-[1]">
            <ProfileCard />
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden overflow-y-visible pt-8 sm:flex-[2]  min-[1800px]:overflow-visible">
            <div>
              <Preview />
            </div>
          </div>
        </div>
      </section>
    </JigglerContextProvider>
  );
};