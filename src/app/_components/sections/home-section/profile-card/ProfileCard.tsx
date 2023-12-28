"use client";
import { MouseEventHandler, useCallback, useState } from "react";
import { JiggleBox } from "@/components/ui/boxes/JiggleBox";
import { ProfileCardBackward } from "./ProfileCardBackward";
import { ProfileCardForward } from "./ProfileCardForward";
import { cn } from "@/lib/utils";

export function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFilp: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    setIsFlipped((prev) => !prev);
  }, []);
  return (
    <JiggleBox>
      <div className="group relative flex w-fit">
        <div className={cn("relative")}>
          <ProfileCardForward isFlipped={isFlipped} handleFilp={handleFilp} />
          <ProfileCardBackward isFlipped={isFlipped} handleFilp={handleFilp} />
        </div>
      </div>
    </JiggleBox>
  );
}
