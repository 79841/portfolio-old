type TBanner = {
  title: string;
};
export const Banner = ({ title }: TBanner) => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex flex-[1] justify-end">
        <div className="w-[80%] border"></div>
      </div>
      <h1 className="mx-8 flex justify-center text-3xl font-bold sm:mx-20">
        {title}
      </h1>
      <div className="flex flex-[1] justify-start">
        <div className="w-[80%] border bg-primary"></div>
      </div>
    </div>
  );
};
