"use client";
import { BlogCard } from "@/components/blog-card/BlogCard";
import { GithubCalendarBox } from "@/components/github-calendar";
import { ProfileCard } from "@/components/profile";
import { useTheme } from "next-themes";

export const Home = () => {
  const { theme } = useTheme();
  return (
    <section className="flex h-[70rem] w-full justify-center py-28">
      <div className="flex max-w-7xl justify-center md:w-[75%] lg:w-[65%]">
        <ProfileCard />
        <div className="ml-4 flex flex-grow flex-col overflow-hidden">
          <BlogCard />
          <GithubCalendarBox />
        </div>
      </div>
    </section>
  );
};
