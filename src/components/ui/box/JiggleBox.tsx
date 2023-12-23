"use client";
import { cn } from "@/lib/utils";
import { SimpleBox, TSimpleBoxProps } from "./SimpleBox";
import { forwardRef, useEffect, useRef } from "react";
import { useJigglerContext } from "@/context/jiggler";

type TJiggleBoxProps = TSimpleBoxProps;
export const JiggleBox = ({
  className,
  children,
  ...props
}: TJiggleBoxProps) => {
  const jiggleStyle = useJigglerContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (jiggleStyle == null || ref == null || ref.current == null) return;
    ref.current.style.transform = jiggleStyle.rotateStyle;
  }, [jiggleStyle]);

  return (
    <div
      ref={ref}
      className={cn("[preserve-3d] duration-100", className)}
      {...props}
    >
      {children}
    </div>
  );
};
