import { ImBlogger } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { siteMetaData } from "@/data";
export const Footer = () => {
  return (
    <div className="flex h-36 flex-col items-center justify-center gap-4 text-muted-foreground">
      <div className="flex items-center justify-center gap-4 text-2xl ">
        <Link
          href={siteMetaData.githubUrl}
          className="flex duration-500 hover:text-primary"
        >
          <FaGithub />
        </Link>
        <div className="h-full border"></div>
        <Link
          href={siteMetaData.blogUrl}
          className="flex duration-500 hover:text-primary"
        >
          <ImBlogger />
        </Link>
      </div>
      <div className="text-sm">© 2023. In Ji Myeong. All rights reserved.</div>
    </div>
  );
};
