import { ImageCardWithTooltip } from "../../ui/cards";

type TShadcnCardProps = {
  className: string;
};
export const ShadcnCard = ({ className }: TShadcnCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/shadcn-original.svg"
        darkModeImage="/images/skills/shadcn-white.svg"
        alt="Shadcn"
        className={className}
      />
    </>
  );
};
