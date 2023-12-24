import { ImageCardWithTooltip } from "../../ui/cards";

type TAirforceCpcCardProps = {
  className: string;
};
export const AirforceCpcCard = ({ className }: TAirforceCpcCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/experience/airforce-cyber-protection-center-logo.png"
        className={className}
        alt="AirforceCpc"
        imageStyle="object-contain"
      />
    </>
  );
};
