import { PropsWithChildren } from "react";
import { IconType } from "react-icons";

type TProfileInfo = {
  Icon: IconType;
} & PropsWithChildren;
export const ProfileInfo = ({ children, Icon }: TProfileInfo) => {
  return (
    <div className="flex">
      <div className="w-8">
        <Icon />
      </div>
      {children}
    </div>
  );
};
