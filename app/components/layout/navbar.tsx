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
import Link from "next/link";
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
    title: "About me",
    href: "/aboutme",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contacts",
    href: "/contacts",
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
            <Link
              href={item.href}
              className="w-full cursor-pointer text-sm font-medium"
            >
              {item.title}
            </Link>
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
                ? "transition-all  duration-500 left-[calc(100%-100px)] "
                : "transition-all  duration-500 group-hover:left-[calc(100%-100px)] ",
            )}
          >
            Navigation
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 mt-2">
        {navigationData.map((item) => (
          <DropdownMenuItem key={item.title}>
            <Link
              href={item.href}
              className="w-full cursor-pointer text-sm font-medium"
            >
              {item.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
  const pathname = usePathname();
  return (
    <div>
      <header className="bg-background ">
        <div className="max-w-9xl mx-auto w-full px-4 py-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 md:gap-6 transition-all duration-500",
              sticky
                ? "p-2.5 bg-background/60 backdrop-blur-md border border-border/40 shadow-2xl shadow-primary/5 rounded-full"
                : "bg-transparent border-transparent",
            )}
          >
            <div className=" h-fit items-center ">
              <Link href="/" className="">
                <svg 
                width="66.000000pt" height="45.000000pt" viewBox="0 0 600.000000 326.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,326.000000) scale(0.066667,-0.066667)"
                 stroke="none" className="fill-primary">
                <path d="M2019 4138 c-993 -201 -1582 -2303 -763 -2718 280 -142 673 -37 862
                231 105 149 107 132 17 -195 -123 -452 -259 -595 -588 -616 -204 -13 -256 -78
                -156 -196 167 -199 579 -143 806 108 166 185 225 369 338 1047 26 152 64 358
                85 457 51 239 59 352 30 392 -77 103 -623 -49 -726 -202 -100 -148 2 -225 236
                -181 105 20 105 23 14 -138 -287 -502 -648 -555 -767 -112 -193 718 266 1787
                799 1862 258 35 262 -374 6 -653 -117 -126 -87 -223 75 -247 258 -39 459 235
                463 631 3 405 -292 620 -731 530z"/>
                <path d="M4914 3836 c-41 -36 -35 -8 -242 -1238 -80 -474 -170 -688 -349 -829
                -183 -144 -182 83 4 743 107 379 95 429 -114 441 -151 8 -177 -22 -221 -260
                -19 -99 -47 -251 -64 -338 -56 -296 -258 -630 -382 -630 -89 0 -78 92 60 523
                160 496 141 546 -208 549 l-195 2 5 85 c11 187 -187 241 -317 88 -75 -89 -72
                -206 8 -297 l46 -52 -24 -70 c-12 -39 -61 -162 -107 -273 -89 -216 -97 -254
                -60 -291 81 -82 145 -8 306 357 l98 220 82 -9 c104 -12 100 -4 56 -115 -141
                -352 -197 -723 -128 -851 126 -235 475 -156 645 145 58 102 64 100 65 -22 2
                -332 368 -335 593 -5 55 80 84 98 68 42 -61 -223 20 -345 198 -297 87 24 103
                57 131 271 35 278 77 436 153 590 140 279 407 480 399 300 -5 -122 -99 -239
                -310 -386 -141 -100 -159 -165 -99 -364 187 -613 757 -651 1177 -79 67 91 77
                89 118 -24 184 -508 698 -474 1099 72 67 91 66 91 106 -40 127 -419 481 -479
                746 -126 170 225 94 368 -89 169 -166 -180 -258 -121 -398 252 l-32 86 102
                116 c440 502 521 696 290 693 -120 -1 -148 -24 -231 -186 -96 -189 -203 -368
                -220 -368 -15 0 -17 9 -50 203 -52 305 -78 343 -231 343 -133 1 -193 -30 -207
                -106 -10 -52 131 -596 177 -684 31 -61 -324 -420 -463 -467 -130 -44 -199 21
                -320 305 l-64 149 133 160 c442 531 496 702 208 659 -94 -14 -115 -37 -203
                -216 -82 -168 -200 -361 -221 -361 -7 0 -21 64 -31 142 -41 313 -86 406 -201
                421 -303 38 -335 -199 -95 -706 l67 -141 -107 -129 c-314 -378 -529 -393 -722
                -48 -68 121 -68 118 17 160 338 163 515 483 397 716 -130 254 -444 177 -672
                -167 -30 -45 -60 -80 -65 -76 -6 4 43 271 108 595 66 330 114 603 109 623 -18
                73 -257 96 -329 31z"/>
                <path d="M4278 3585 c-168 -40 -233 -257 -111 -378 124 -125 363 -58 406 113
                46 184 -97 312 -295 265z"/>
                </g>
                </svg>
              </Link>
            </div>
            <div>
              <NavigationMenu className="max-md:hidden bg-muted p-0.5 rounded-full py-1">
                <NavigationMenuList className="flex gap-0">
                  {navigationData.map((navItem) => {
                    const isActive = pathname === navItem.href;
                    return (
                      <NavigationMenuItem key={navItem.title}>
                        <Link
                          href={navItem.href}
                          className={`px-2 md:px-4 py-2 text-sm font-medium rounded-full transition tracking-normal outline ${
                            isActive
                              ? "text-foreground bg-background outline-border shadow-xs"
                              : "text-muted-foreground hover:text-foreground hover:bg-background outline-transparent hover:outline-border hover:shadow-xs"
                          }`}
                        >
                          {navItem.title}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div>
            <MenusButton className="hidden md:flex" />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
