export const SkillsSectionBanner = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-[1] justify-end">
        <div className="h-[1px] w-[80%] bg-black sm:w-[50%] dark:bg-white"></div>
      </div>
      <h1 className="mx-8 flex justify-center text-2xl font-semibold sm:mx-20">
        Skills
      </h1>
      <div className="flex flex-[1] justify-start">
        <div className="h-[1px] w-[80%] bg-black sm:w-[50%] dark:bg-white"></div>
      </div>
    </div>
  );
};