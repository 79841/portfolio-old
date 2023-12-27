import { PropsWithChildren } from "react";

type TSectionContainer = { id: string } & PropsWithChildren;
export const SectionContainer = ({ id, children }: TSectionContainer) => {
  return (
    <section id={id} className="flex w-screen justify-center sm:w-full">
      <div className="flex h-fit w-full flex-col gap-20 px-2 py-32 md:w-[80%] lg:w-[70%]">
        {children}
      </div>
    </section>
  );
};
