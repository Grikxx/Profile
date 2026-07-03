"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Blue
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("red")}>
          Red
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("darkred")}>
          Dark Red
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("brown")}>
          Brown
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("teal")}>
          Teal
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
