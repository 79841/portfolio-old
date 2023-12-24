import {
  JavscriptCard,
  NextjsCard,
  ReactCard,
  ShadcnCard,
  TanstackQueryCard,
  TypescriptCard,
  ZustandCard,
} from "@/components/cards/skill-card";
import { BobCard } from "../../../../components/cards/experience-card/BobCard";
import { AirforceCpcCard } from "../../../../components/cards/experience-card/AirforceCpcCard";
import { TossCard } from "../../../../components/cards/experience-card/TossCard";
import { SimpleBox } from "../../../../components/ui/boxes/SimpleBox";

export const Overview = () => {
  return (
    <SimpleBox>
      <h1 className="ml-1 text-2xl font-semibold">Overview</h1>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="ml-1 pb-2 text-xl font-semibold">Skills</h1>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <JavscriptCard className="h-20 w-20" />
            <TypescriptCard className="h-20 w-20" />
            <ReactCard className="h-20 w-20" />
            <NextjsCard className="h-20 w-20" />
            <ZustandCard className="h-20 w-20" />
            <TanstackQueryCard className="h-20 w-20" />
            <ShadcnCard className="h-20 w-20" />
          </div>
        </div>
        <div>
          <h1 className="ml-1 pb-2 text-xl font-semibold">Experience</h1>
          <div className="flex flex-row flex-wrap justify-center gap-4 sm:justify-start">
            <BobCard className="h-20 w-20" />
            <AirforceCpcCard className="h-20 w-20" />
            <TossCard className="h-20 w-20" />
          </div>
        </div>
      </div>
    </SimpleBox>
  );
};
