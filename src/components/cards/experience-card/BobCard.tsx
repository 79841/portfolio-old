import { ImageCardWithTooltip } from "../../ui/cards";

type TBobCardProps = {
  className: string;
};
export const BobCard = ({ className }: TBobCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/experience/bob-logo.png"
        className={className}
        alt="Bob"
        imageStyle="object-contain"
      />
    </>
  );
};
