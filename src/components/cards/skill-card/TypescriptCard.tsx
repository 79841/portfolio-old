import { ImageCardWithTooltip } from "../../ui/cards";

type TTypescriptCardProps = {
  className: string;
};
export const TypescriptCard = ({ className }: TTypescriptCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/typescript-original.svg"
        className={className}
        alt="Typescript"
      />
    </>
  );
};
