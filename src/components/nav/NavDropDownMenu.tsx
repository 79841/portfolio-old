"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MouseEventHandler } from "react";
import { siteMap } from "@/data";

export const NavDropDownMenu = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange: MouseEventHandler<HTMLDivElement> = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
          <span className="sr-only">Menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={siteMap.home} legacyBehavior passHref>
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={siteMap.skills} legacyBehavior passHref>
            Skills
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={siteMap.experience} legacyBehavior passHref>
            Experience
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={siteMap.projects} legacyBehavior passHref>
            Projects
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleThemeChange}>
          <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute mr-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {`${theme?.charAt(0).toUpperCase()}${theme?.slice(1)}`}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
