import { ImageCardWithTooltip } from "../../ui/cards";

type TTanstackQueryCardProps = {
  className: string;
};
export const TanstackQueryCard = ({ className }: TTanstackQueryCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/tanstack-original.png"
        alt="Tanstack"
        className={className}
      />
    </>
  );
};
