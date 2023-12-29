"use client";
import { ImageBox, TImageBoxProps } from "@/components/ui/boxes/ImageBox";
type TImageCardWithTooltipProps = TImageBoxProps;
export const ImageCardWithTooltip = (props: TImageCardWithTooltipProps) => {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="flex justify-center rounded-lg duration-500 hover:relative hover:-translate-y-2">
        <ImageBox {...props} />
      </div>
      <div className="absolute top-[calc(100%-0.5rem)] z-40 flex items-center justify-center rounded-lg border bg-popover p-2 text-xs text-muted-foreground opacity-0 transition duration-500 group-hover:opacity-100">
        {props.alt}
      </div>
    </div>
  );
};
