import { ImageCardWithTooltip } from "../../ui/cards";

type TJavscriptCardProps = {
  className: string;
};
export const JavscriptCard = ({ className }: TJavscriptCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/javascript-original.svg"
        className={className}
        alt="Javascript"
      />
    </>
  );
};
