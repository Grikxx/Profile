"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, TextAlignJustify } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type NavigationSection = {
  title: string;
  href: string;
};

const navigationData: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "TechStack",
    href: "/techstack",
  },
  {
    title: "About me",
    href: "/aboutme",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const MenusButton = ({ className }: { className?: string }) => (
    <DropdownMenu open={clicked} onOpenChange={setClicked}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group bg-primary  transition-all duration-500  ",
            clicked
              ? "ps-12 pe-4 w-fit overflow-hidden  bg-primary/80"
              : "transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hover:bg-primary/80",
            className,
          )}
        >
          <div
            className={cn(
              "absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500  ",
              clicked
                ? " right-[calc(100%-36px)] rotate-90"
                : " transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-90",
            )}
          >
            <ArrowUpRight size={20} />
          </div>
          <span
            className={cn("relative  z-10   transition-all duration-500  ")}
          >
            Menus
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-2">
        {navigationData.map((item) => (
          <DropdownMenuItem key={item.title}>
            <a
              href={item.href}
              className="w-full cursor-pointer text-sm font-medium"
            >
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const ProfileButton = ({ className }: { className?: string }) => (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group bg-primary ",
            isOpen
              ? "ps-12 pe-4 w-fit overflow-hidden transition-all duration-500 bg-primary/80"
              : "transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hover:bg-primary/80",
            className,
          )}
        >
          <div
            className={cn(
              "absolute left-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center ",
              isOpen
                ? "transition-all duration-500 left-[calc(100%-36px)] rotate-90"
                : " transition-all duration-500 group-hover:left-[calc(100%-36px)] group-hover:rotate-90",
            )}
          >
            <TextAlignJustify size={20} />
          </div>
          <span
            className={cn(
              "relative left-8 z-10  ",
              isOpen
                ? "transition-all  duration-500 left-[calc(100%-72px)] "
                : "transition-all  duration-500 group-hover:left-[calc(100%-72px)] ",
            )}
          >
            Grikxx
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-2">
        {navigationData.map((item) => (
          <DropdownMenuItem key={item.title}>
            <a
              href={item.href}
              className="w-full cursor-pointer text-sm font-medium"
            >
              {item.title}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
  const pathname = usePathname();
  return (
    <div>
      <header className="bg-background ">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 md:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-md border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <div className="flex justify-start h-fit items-center gap-4">
              <div className="md:hidden">
                <ProfileButton />
              </div>

              <a href="#" className="hidden md:block">
                <h1>Grikxx</h1>
              </a>
            </div>
            <div>
              <NavigationMenu className="max-md:hidden bg-muted p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-0">
                  {navigationData.map((navItem) => {
                    const isActive = pathname === navItem.href;
                    return (
                      <NavigationMenuItem key={navItem.title}>
                        <NavigationMenuLink
                          href={navItem.href}
                          className={`px-2 md:px-4 py-2 text-sm font-medium rounded-full transition tracking-normal outline ${
                            isActive
                              ? "text-foreground bg-background outline-border shadow-xs"
                              : "text-muted-foreground hover:text-foreground hover:bg-background outline-transparent hover:outline-border hover:shadow-xs"
                          }`}
                        >
                          {navItem.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <MenusButton className=" md:flex" />
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
