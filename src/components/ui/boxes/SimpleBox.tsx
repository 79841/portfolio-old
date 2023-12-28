import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export type TSimpleBoxProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export const SimpleBox = forwardRef<HTMLDivElement, TSimpleBoxProps>(
  function SimpleBox({ children, className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-fit flex-col rounded-lg border bg-background p-4 shadow sm:p-8",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
