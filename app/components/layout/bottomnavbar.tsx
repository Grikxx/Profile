"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  Home,
  LineChart,
  FolderOpenDot,
  User,
  Handshake,
  BookCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Experience", icon: LineChart, href: "/experience" },
  { label: "Projects", icon: FolderOpenDot, href: "/projects" },
  { label: "About Me", icon: User, href: "/aboutme" },
  { label: "Blog", icon: BookCheck, href: "/blog" },
  { label: "Contacts", icon: Handshake, href: "/contacts" },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  stickyBottom = true,
}: BottomNavBarProps) {
  const pathname = usePathname();

  const [show, setShow] = useState(true);

  const handleResize = useCallback(() => {
    setShow(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="flex justify-center w-full">
      <motion.nav
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        role="navigation"
        aria-label="Bottom Navigation"
        className={cn(
          "bg-card dark:bg-card border border-border/40 dark:border-border/40 rounded-full flex items-center p-[5.5px] shadow-xl space-x-1 min-w-[320px] max-w-[95vw] h-[52px]",
          stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-20 w-fit",
          show ? "block" : "hidden",
          className,
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const href = item.href;

          const isActive = pathname === href;

          return (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.97 }}
              aria-label={item.label}
              type="button"
            >
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[44px] min-h-[40px] max-h-[48px]",
                  isActive
                    ? "bg-primary/10 dark:bg-primary/25 text-primary dark:text-primary gap-2"
                    : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted",
                  "focus:outline-none focus-visible:ring-0",
                )}
              >
                <Icon
                  size={22}
                  strokeWidth={2}
                  aria-hidden
                  className="transition-colors duration-200"
                />

                <motion.div
                  initial={false}
                  animate={{
                    width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                    opacity: isActive ? 1 : 0,
                    marginLeft: isActive ? "8px" : "0px",
                  }}
                  transition={{
                    width: { type: "spring", stiffness: 350, damping: 32 },
                    opacity: { duration: 0.19 },
                    marginLeft: { duration: 0.19 },
                  }}
                  className={cn(
                    "overflow-hidden flex items-center max-w-[72px]",
                  )}
                >
                  <span
                    className={cn(
                      "font-medium text-sm whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] leading-[1.9]",
                      isActive ? "text-primary dark:text-primary" : "opacity-0",
                    )}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            </motion.button>
          );
        })}
      </motion.nav>
    </div>
  );
}

export default BottomNavBar;
