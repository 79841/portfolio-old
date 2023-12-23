"use client";
import Image from "next/image";
import { useRealTheme } from "../../hooks/useRealTheme";
import { cn } from "@/lib/utils";
import clsx from "clsx";

type TSkillImageProps = {
  defaultImage: string;
  darkModeImage?: string;
  className?: string;
};
export const SkillImage = ({
  defaultImage,
  darkModeImage,
  className,
}: TSkillImageProps) => {
  const realTheme = useRealTheme();
  return (
    <div className={clsx("relative", className)}>
      <Image
        src={
          darkModeImage != null && realTheme === "dark"
            ? darkModeImage
            : defaultImage
        }
        fill
        alt="nextjs icon"
        className="object-contain"
      />
    </div>
  );
};
