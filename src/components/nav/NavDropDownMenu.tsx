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
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MouseEventHandler } from "react";

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
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/#home" legacyBehavior passHref>
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" legacyBehavior passHref>
            Skills
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" legacyBehavior passHref>
            Experience
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" legacyBehavior passHref>
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
