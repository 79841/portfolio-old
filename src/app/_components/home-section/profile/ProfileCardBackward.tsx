"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileImage } from "./ProfileImage";

import { MouseEventHandler, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TProfileCardBackWard = {
  isFlipped: boolean;
};
export const ProfileCardBackward = ({ isFlipped }: TProfileCardBackWard) => {
  return (
    <div
      className={cn(
        "left-0 top-0 -z-10 duration-1000 [backface-visibility:hidden] [transform:rotateY(180deg)]",
        isFlipped ? "[transform:rotateY(0deg)]" : "",
      )}
    >
      <Card className="w-fit sm:w-[350px]">
        <CardHeader>
          <ProfileImage />
          <CardTitle>저는...!</CardTitle>
          <CardDescription>
            보안전문가에서 프론트엔드 개발자로!!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="pb-2 text-2xl font-semibold leading-none tracking-tight">
              함께 성장하고 발전하는!
            </h3>
            <CardDescription>
              함께 공부하고 기술리뷰하는 것을 좋아합니다. 협업과 팀 프로젝트를
              즐기며 팀의 성장이 저의 성장이라고 생각합니다.
            </CardDescription>
          </div>
          <div className="mb-4">
            <h3 className="pb-2 text-2xl font-semibold leading-none tracking-tight">
              자바스크립트에 환장한!
            </h3>
            <CardDescription>
              개발자로 전향한 기간은 길지 않지만 컴퓨터 보안을 할 때부터
              오랜기간 JS를 팔과 다리처럼 사용해왔고 JS로 코딩하는 것을 정말
              좋아합니다.
            </CardDescription>
          </div>
          <div className="mb-4">
            <h3 className="pb-2 text-2xl font-semibold leading-none tracking-tight">
              개발 트렌드에 민감한!
            </h3>
            <CardDescription>
              새로운 기술을 사용하고 적용하는 것에 익숙하며 기존에 사용하고 있는
              기술과 비교 분석하여 애플리케이션 퍼포먼스를 향상시킬 수 있습니다.
            </CardDescription>
          </div>
          <div>
            <h3 className="pb-2 text-2xl font-semibold leading-none tracking-tight">
              개발자 입니다!
            </h3>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};
