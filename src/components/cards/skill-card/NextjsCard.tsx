import { ImageCardWithTooltip } from "../../ui/cards";

type TNextjsCardProps = {
  className: string;
};
export const NextjsCard = ({ className }: TNextjsCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/nextjs-original.svg"
        darkModeImage="/images/skills/nextjs-white.svg"
        className={className}
        alt="Nextjs"
      />
    </>
  );
};
