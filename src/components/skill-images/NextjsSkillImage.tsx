import { SkillImage } from "./SkillImage";

const defaultNextjsImage = "/images/skills/nextjs-black.svg";
const darkModeNextjsImage = "/images/skills/nextjs-white.svg";

type TNextjsSkillImageProps = {
  className?: string;
};
export const NextjsSkillImage = ({ className }: TNextjsSkillImageProps) => {
  return (
    <>
      <SkillImage
        defaultImage={defaultNextjsImage}
        darkModeImage={darkModeNextjsImage}
        className={className}
      />
    </>
  );
};
