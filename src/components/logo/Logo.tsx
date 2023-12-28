import Link from "next/link";
import { FaCode } from "react-icons/fa6";

export const Logo = () => {
  return (
    <Link href="/#home">
      <div className="flex items-center">
        <FaCode size={50} color={"#49dee9"} />
        <div className="ml-4 h-6 select-none text-2xl font-semibold ">
          {"LEtMeDEv"}
        </div>
      </div>
    </Link>
  );
};
