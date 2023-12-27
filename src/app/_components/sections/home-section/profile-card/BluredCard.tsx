import { PropsWithChildren } from "react";

type TBlurCardProps = PropsWithChildren;
export const BlurCard = ({ children }: TBlurCardProps) => {
  return (
    <div className="group-hover:animate-show-up absolute z-30 hidden h-full w-full items-center justify-center backdrop-blur group-hover:flex">
      {children}
    </div>
  );
};
