import { PropsWithChildren, PropsWithRef, forwardRef } from "react";

type TSimpleBoxProps = PropsWithChildren;

export const SimpleBox = forwardRef<HTMLDivElement, TSimpleBoxProps>(
  function SimpleBox({ children }, ref) {
    return (
      <div
        ref={ref}
        className="mb-4 flex w-full flex-col space-y-6 rounded-[0.5rem] border bg-background p-8 shadow"
      >
        {children}
      </div>
    );
  },
);
