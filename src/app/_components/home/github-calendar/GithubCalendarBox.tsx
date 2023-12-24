"use client";

import { siteMetaData } from "@/data/siteMetaData";
import { useGithubTerm } from "@/hooks/useGithubTerm";
import { useRealTheme } from "@/hooks/useRealTheme";
import GitHubCalendar from "react-github-calendar";
import { GithubLinkTitle } from "./GithubLInkTitle";
import { SimpleBox } from "../../../../components/ui/boxes/SimpleBox";
import { JiggleBox } from "../../../../components/ui/boxes/JiggleBox";

type TDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const selectTerm = (shownMonths: number) => (contributions: TDay[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  return contributions.filter((day: TDay) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    if (currentMonth >= shownMonths)
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );

    return (
      (date.getFullYear() === currentYear && monthOfDay <= currentMonth) ||
      (date.getFullYear() === currentYear - 1 &&
        monthOfDay > currentMonth + 11 - shownMonths)
    );
  });
};

export const GithubCalendarBox = () => {
  const realTheme = useRealTheme();
  const [term, calendarRef] = useGithubTerm();

  return (
    <div className="flex w-full justify-start" ref={calendarRef}>
      {/* <JiggleBox>
        <SimpleBox> */}
      <div className="flex flex-col">
        <GithubLinkTitle />
        <div className="overflow-hidden">
          <GitHubCalendar
            username={siteMetaData.githubUsername}
            hideMonthLabels
            hideColorLegend
            colorScheme={realTheme}
            blockSize={13}
            blockMargin={2}
            transformData={selectTerm(term)}
            labels={{
              totalCount:
                term === 1
                  ? "{{count}} contributions in the month"
                  : `{{count}} contributions in the ${term} months`,
            }}
          />
        </div>
      </div>
      {/* </SimpleBox>
      </JiggleBox> */}
    </div>
  );
};
