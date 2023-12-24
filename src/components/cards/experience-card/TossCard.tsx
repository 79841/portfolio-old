import { ImageCardWithTooltip } from "../../ui/cards";

type TTossCardProps = {
  className: string;
};
export const TossCard = ({ className }: TTossCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/experience/toss-logo.png"
        className={className}
        alt="Toss"
        imageStyle="object-contain"
      />
    </>
  );
};
