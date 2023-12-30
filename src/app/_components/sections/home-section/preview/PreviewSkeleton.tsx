import {
  AirforceCpcCard,
  BobCard,
  TossCard,
} from "@/components/cards/experience-card";
import {
  JavascriptCard,
  NextjsCard,
  ReactCard,
  TypescriptCard,
} from "@/components/cards/skill-card";
import { Skeleton } from "@/components/ui/skeleton";
import { headerNavLinks } from "@/data";
import Link from "next/link";
import { GithubCalendarBox } from "../github-calendar";

export const PreviewSkeleton = () => {
  return (
    <div>
      {/* <h1 className="mb-8 ml-1 flex items-center justify-center gap-2 text-2xl font-semibold sm:justify-start">
        <FaBoltLightning />
        Preview
      </h1> */}
      <Skeleton className="mb-8 ml-1 flex h-8 w-36 items-center justify-center gap-2 text-2xl font-semibold sm:justify-start" />
      <div className="flex flex-col gap-8 sm:pl-4">
        <div>
          {/* <h1 className="ml-1 flex justify-center pb-2 text-xl font-semibold sm:justify-start">
          </h1> */}
          <div className="h-7"></div>
          <div className="inline-flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            {/* <JavascriptCard />
            <TypescriptCard />
            <ReactCard />
            <NextjsCard /> */}
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="h-7"></div>

          <div className="inline-flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
            <Skeleton className="h-20 w-20" />
          </div>
        </div>
        <Skeleton className="h-40 w-full" />
        {/* <GithubCalendarBox /> */}
      </div>
    </div>
  );
};
