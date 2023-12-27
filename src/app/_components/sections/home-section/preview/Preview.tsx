import {
  JavascriptCard,
  NextjsCard,
  ReactCard,
  ShadcnCard,
  TanstackQueryCard,
  TypescriptCard,
  ZustandCard,
} from "@/components/cards/skill-card";

import { GithubCalendarBox } from "../github-calendar";
import { FaBoltLightning } from "react-icons/fa6";
import {
  AirforceCpcCard,
  BobCard,
  TossCard,
} from "@/components/cards/experience-card";
import Link from "next/link";
import { siteMap, siteMetaData } from "@/data";

export const Preview = () => {
  return (
    <div>
      <h1 className="mb-8 ml-1 flex items-center justify-center gap-2 text-2xl font-semibold sm:justify-start">
        <FaBoltLightning />
        Preview
      </h1>
      <div className="flex flex-col gap-8 sm:pl-4">
        <div>
          <h1 className="ml-1 flex justify-center pb-2 text-xl font-semibold sm:justify-start">
            <Link href={siteMap.skills}>Skills</Link>
          </h1>
          <div className="inline-flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <JavascriptCard />
            <TypescriptCard />
            <ReactCard />
            <NextjsCard />
            <ZustandCard />
            <TanstackQueryCard />
            <ShadcnCard />
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="ml-1 flex justify-center pb-2 text-xl font-semibold sm:justify-start">
            <Link href={siteMap.experience}>Experience</Link>
          </h1>
          <div className="inline-flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <BobCard />
            <AirforceCpcCard />
            <TossCard />
          </div>
        </div>
        <GithubCalendarBox />
      </div>
    </div>
  );
};
