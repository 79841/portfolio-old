import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";

type TFlipButton = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  value: string;
};
export const FlipButton = ({ onClick, value }: TFlipButton) => {
  return (
    <Button
      onClick={onClick}
      variant={"ghost"}
      className="cursor-pointer text-xs  text-muted-foreground opacity-0 transition duration-1000 group-hover:opacity-100"
    >
      {value}
    </Button>
  );
};
