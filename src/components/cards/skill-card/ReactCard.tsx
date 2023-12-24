import { ImageCardWithTooltip } from "../../ui/cards";

type TReactCardProps = {
  className: string;
};
export const ReactCard = ({ className }: TReactCardProps) => {
  return (
    <>
      <ImageCardWithTooltip
        defaultImage="/images/skills/react-original.svg"
        className={className}
        alt="React"
      />
    </>
  );
};
