"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRealTheme } from "@/hooks/useRealTheme";

export type TImageBoxProps = {
  defaultImage: string;
  alt: string;
  darkModeImage?: string;
  className?: string;
  imageStyle?: string;
};
export const ImageBox = ({
  defaultImage,
  darkModeImage,
  alt,
  className,
  imageStyle,
}: TImageBoxProps) => {
  const realTheme = useRealTheme();
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg", className)}
    >
      <Image
        src={
          darkModeImage != null && realTheme === "dark"
            ? darkModeImage
            : defaultImage
        }
        fill
        alt={alt}
        className={cn("object-cover", imageStyle)}
      />
    </div>
  );
};
