import { GithubCalendarBox } from "@/app/_components/home/github-calendar";
import { Overview } from "@/app/_components/home/overview";
import { ProfileCard } from "@/app/_components/home/profile";
import { JigglerContextProvider } from "@/context/jiggler";
import { Intro } from "./intro/Intro";

export const Home = () => {
  return (
    <JigglerContextProvider>
      <section className="flex  w-screen justify-center sm:w-full">
        <div className="flex h-fit w-full flex-col px-2 py-32 sm:flex-row sm:gap-20 md:w-[80%] lg:w-[70%]">
          <div className="flex flex-col items-center justify-start sm:flex-[2]">
            <ProfileCard />
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden overflow-y-visible pt-12 sm:flex-[3]  min-[1800px]:overflow-visible">
            <Overview />
            <GithubCalendarBox />
          </div>
        </div>
      </section>
    </JigglerContextProvider>
  );
};
