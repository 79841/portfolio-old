"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ImageBox, TImageBoxProps } from "@/components/ui/boxes/ImageBox";
type TImageCardWithTooltipProps = TImageBoxProps;
export const ImageCardWithTooltip = (props: TImageCardWithTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2">
            <ImageBox {...props} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.alt}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
