"use client";
import { MouseEventHandler, useState } from "react";
import { JiggleBox } from "../../../../components/ui/boxes/JiggleBox";
import { ProfileCardBackward } from "./ProfileCardBackward";

import { ProfileCardForward } from "./ProfileCardForward";
import { cn } from "@/lib/utils";

export function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFilpped: MouseEventHandler<HTMLDivElement> = (e) => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <JiggleBox>
      <div className="group relative flex w-fit">
        <div onClick={handleFilpped} className={cn("relative")}>
          {/* <div
            className="absolute left-0 top-0 z-50 w-full duration-1000 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]"
          > */}
          <ProfileCardForward isFlipped={isFlipped} />
          <ProfileCardBackward isFlipped={isFlipped} />
          {/* <div className="left-0 top-0 -z-10 duration-1000 [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)]"> */}
        </div>
      </div>
    </JiggleBox>
  );
}
