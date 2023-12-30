"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProfileImage } from ".";
import { GradientText } from "@/components/gradient-text";
import { ProfileInfo } from "./ProfileInfo";
import { IoMdPerson } from "react-icons/io";
import { RiPencilFill } from "react-icons/ri";
import { siteMetadata } from "@/data/siteMetadata";
import { FaCalendar } from "react-icons/fa6";
import { MdEmail, MdPlace } from "react-icons/md";
import Link from "next/link";
import { MouseEventHandler } from "react";
import { FlipButton } from "./FlipButton";
import { FaGithub } from "react-icons/fa";
import { ImBlogger } from "react-icons/im";

type TProfileCardForward = {
  isFlipped: boolean;
  handleFilp: MouseEventHandler<HTMLButtonElement>;
};
export const ProfileCardForward = ({
  isFlipped,
  handleFilp,
}: TProfileCardForward) => {
  return (
    <div
      className={cn(
        "group absolute h-full w-full duration-1000 [backface-visibility:hidden]",
        isFlipped ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <Card className="sm:w-[350px]">
        <CardHeader>
          <ProfileImage src={siteMetadata.profilePrimary} />
          <CardTitle>
            <GradientText content={siteMetadata.username} />
          </CardTitle>
          <CardDescription>About</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ProfileInfo Icon={IoMdPerson}>{siteMetadata.name}</ProfileInfo>
          <ProfileInfo Icon={RiPencilFill}>
            <div>
              {siteMetadata.university}
              <br />
              {`${siteMetadata.major} 전공`}
              <br />
              {`${siteMetadata.doubleMajor} 복수 전공`}
            </div>
          </ProfileInfo>
          <ProfileInfo Icon={FaCalendar}>
            <div>{siteMetadata.birthday}</div>
          </ProfileInfo>
          <ProfileInfo Icon={MdPlace}>
            <div>{siteMetadata.address}</div>
          </ProfileInfo>
          <ProfileInfo Icon={MdEmail}>
            <Link href={`mailto:${siteMetadata.primaryEmail}`}>
              {siteMetadata.primaryEmail}
            </Link>
          </ProfileInfo>
          <ProfileInfo Icon={FaGithub}>
            <Link
              href={siteMetadata.githubUrl}
            >{`${siteMetadata.username}(Github)`}</Link>
          </ProfileInfo>
          <ProfileInfo Icon={ImBlogger}>
            <Link
              href={siteMetadata.blogUrl}
            >{`${siteMetadata.username}(Blog)`}</Link>
          </ProfileInfo>
        </CardContent>
        <CardFooter className="flex justify-end">
          <FlipButton onClick={handleFilp} value="Go back" />
        </CardFooter>
      </Card>
    </div>
  );
};
