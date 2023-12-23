import { GithubCalendarBox } from "@/components/github-calendar";
import { Overview } from "@/components/overview";
import { ProfileCard } from "@/components/profile";
import { JigglerContextProvider } from "@/context/jiggler";

export const Home = () => {
  return (
    <JigglerContextProvider>
      <section className="flex w-screen justify-center sm:w-full">
        <div className="flex w-full flex-col justify-center px-2 py-32 sm:flex-row sm:px-[5%] md:w-[80%] lg:w-[70%]">
          <div className="flex flex-col items-center justify-start sm:flex-[1] sm:items-end">
            <div className="h-8" />
            <ProfileCard />
          </div>
          <div className="flex flex-col gap-8 overflow-x-hidden overflow-y-visible sm:flex-[2] sm:pl-8 min-[1800px]:overflow-visible">
            <div></div>
            <Overview />
            <GithubCalendarBox />
            <div></div>
          </div>
        </div>
      </section>
    </JigglerContextProvider>
  );
};
