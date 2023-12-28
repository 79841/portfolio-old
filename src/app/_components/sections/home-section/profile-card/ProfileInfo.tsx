import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type TProfileInfo = {
  Icon: IconType;
} & PropsWithChildren;
export const ProfileInfo = ({ children, Icon }: TProfileInfo) => {
  return (
    <div className="flex">
      <div className="flex h-6 w-8 items-center">
        <Icon />
      </div>
      {children}
    </div>
  );
};
