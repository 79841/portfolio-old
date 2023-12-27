type TBanner = {
  title: string;
};
export const Banner = ({ title }: TBanner) => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex flex-[1] justify-end">
        <div className="h-[1px] w-[80%] bg-primary sm:w-[50%]"></div>
      </div>
      <h1 className="mx-8 flex justify-center text-3xl font-bold sm:mx-20">
        {title}
      </h1>
      <div className="flex flex-[1] justify-start">
        <div className="h-[1px] w-[80%]  bg-primary sm:w-[50%]"></div>
      </div>
    </div>
  );
};
