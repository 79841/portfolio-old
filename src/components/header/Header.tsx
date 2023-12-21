import { NavDropDownMenu, NavMenu } from "@/components/nav";
import { ThemeModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <div>
      <div className="ml-4 flex h-20 items-center sm:ml-4 md:ml-[10%] lg:ml-[15%]">
        <Logo />
      </div>
      <div className="fixed right-0 top-0 mr-4 flex h-20 items-center md:right-[10%] md:mr-0 lg:right-[15%]">
        <div className="hidden items-center sm:flex">
          <div className="mr-2">
            <NavMenu />
          </div>
          <div>
            <ThemeModeToggle />
          </div>
        </div>
        <div className="sm:hidden">
          <NavDropDownMenu />
        </div>
      </div>
    </div>
  );
};
