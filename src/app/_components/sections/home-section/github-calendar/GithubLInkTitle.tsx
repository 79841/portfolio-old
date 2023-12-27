import { siteMetaData } from "@/data/siteMetaData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { memo } from "react";

export const GithubLinkTitle = memo(function GithubLinkTitle() {
  return (
    <h1 className="flex justify-center pb-2 sm:justify-center">
      <Link href={siteMetaData.githubUrl}>
        <div className="flex items-center">
          <GitHubLogoIcon width={20} height={20} />
          <div className="ml-1 text-xl font-semibold">Github</div>
        </div>
      </Link>
    </h1>
  );
});
