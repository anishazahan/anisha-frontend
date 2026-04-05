"use client";

import { cn } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-6 p-10 items-center justify-center bg-neutral-100 rounded-custom">
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative flex h-[52px] w-[104px] cursor-pointer items-center rounded-full bg-neutral-950 p-1 transition-all duration-300"
      >
        <div
          className={cn(
            "absolute h-[44px] w-[44px] rounded-full bg-neutral-800 transition-all duration-300 ease-in-out",
            theme === "light" ? "translate-x-[52px]" : "translate-x-0",
          )}
        />

        {/* Icons */}
        <div className="z-10 flex w-full justify-around items-center text-white">
          <Moon
            size={20}
            className={cn(
              "transition-opacity",
              theme === "dark" ? "opacity-100" : "opacity-40",
            )}
          />
          <Sun
            size={20}
            className={cn(
              "transition-opacity",
              theme === "light" ? "opacity-100" : "opacity-40",
            )}
          />
        </div>
      </div>
    </div>
  );
}
