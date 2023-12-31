"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRealTheme } from "@/hooks/useRealTheme";
import { memo, useEffect, useState } from "react";

export type TImageBoxProps = {
  defaultImage: string;
  alt: string;
  darkModeImage?: string;
  className?: string;
  imageStyle?: string;
};
export const ImageBox = memo(function ImageBox({
  defaultImage,
  darkModeImage,
  alt,
  className,
  imageStyle,
}: TImageBoxProps) {
  const realTheme = useRealTheme();
  const [imagePath, setImagePath] = useState(defaultImage);
  useEffect(() => {
    setImagePath((prev) =>
      darkModeImage != null && realTheme === "dark"
        ? darkModeImage
        : defaultImage,
    );
  }, [darkModeImage, defaultImage, realTheme]);

  return (
    <div
      className={cn("relative h-20 w-20 overflow-hidden rounded-lg", className)}
    >
      <Image
        src={imagePath}
        fill
        alt={alt}
        className={cn("object-cover", imageStyle)}
        // sizes="100vw"
      />
    </div>
  );
});
