import { ImageCardWithTooltip } from "../../ui/cards";

type TZustandCardProps = {
  className: string;
};
export const ZustandCard = ({ className }: TZustandCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/bear.jpg"
        alt="Zustand"
        className={className}
      />
    </>
  );
};
