"use client";
import { ProfileCard } from "@/components/profile";
import { useTheme } from "next-themes";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";

export const Home = () => {
  const { theme } = useTheme();
  return (
    <section className="flex w-full items-center justify-center py-28">
      <div className="flex max-w-7xl justify-center md:w-[75%] lg:w-[65%] ">
        <ProfileCard />
        <div className="flex- relative mx-4 flex flex-1 overflow-hidden rounded-[0.5rem] border bg-background shadow">
          <div className="flex flex-col space-y-6 p-10 pb-16">
            <div className="text-xl font-semibold">Github</div>
            <div>
              <GitHubCalendar
                username="79841"
                hideMonthLabels
                hideColorLegend
                hideTotalCount
                colorScheme={theme === "light" ? "light" : "dark"}
                blockSize={13}
                blockMargin={2}
              />
            </div>
            {/* <div className="flex-1">
              image
              <Image src="" alt="" />
            </div>
            <div className="flex-1">content</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
