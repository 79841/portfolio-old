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
          <ProfileCardForward isFlipped={isFlipped} />
          <ProfileCardBackward isFlipped={isFlipped} />
        </div>
      </div>
    </JiggleBox>
  );
}
