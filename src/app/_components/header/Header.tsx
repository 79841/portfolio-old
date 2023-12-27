import { NavDropDownMenu, NavMenu } from "@/components/nav";
import { ThemeModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <div className="z-50 w-screen">
      <div className="fixed right-0 top-0 z-50 flex h-20 w-full items-center justify-between px-4 lg:px-[10%] xl:px-[15%]">
        <div className="flex h-20 items-center">
          <Logo />
        </div>
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
