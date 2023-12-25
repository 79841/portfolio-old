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
import { siteMetaData } from "@/data/siteMetaData";
import { FaCalendar } from "react-icons/fa6";
import { MdEmail, MdPlace } from "react-icons/md";
import Link from "next/link";

type TProfileCardForward = {
  isFlipped: boolean;
};
export const ProfileCardForward = ({ isFlipped }: TProfileCardForward) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-0 w-full duration-1000 [backface-visibility:hidden]",
        isFlipped ? "[transform:rotateY(180deg)]" : "",
      )}
    >
      <Card className="sm:w-[350px]">
        <CardHeader>
          <ProfileImage />
          <CardTitle>
            <GradientText content={siteMetaData.username} />
          </CardTitle>
          <CardDescription>About</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ProfileInfo Icon={IoMdPerson}>{"명인지"}</ProfileInfo>
          <ProfileInfo Icon={RiPencilFill}>
            <div>
              {`서울과학기술대학교`}
              <br />
              {`산업정보시스템 전공`}
              <br />
              {`(컴퓨터공학 복수 전공)`}
            </div>
          </ProfileInfo>
          <ProfileInfo Icon={FaCalendar}>
            <div>{`1997.10.10.`}</div>
          </ProfileInfo>
          <ProfileInfo Icon={MdPlace}>
            <div>{`서울 구로구 고척동`}</div>
          </ProfileInfo>
          <ProfileInfo Icon={MdEmail}>
            <div>
              <Link href="mailto:79841@naver.com">79841@naver.com</Link>
            </div>
          </ProfileInfo>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};
