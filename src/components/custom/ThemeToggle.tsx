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

  const isLight = theme === "light";

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={() => setTheme(isLight ? "dark" : "light")}
        className={cn(
          "relative flex h-[52px] w-[104px] cursor-pointer items-center rounded-full p-1 transition-all duration-300",
          isLight ? "bg-neutral-200" : "bg-neutral-900",
        )}
      >
        <div
          className={cn(
            "absolute h-[44px] w-[44px] rounded-full shadow-md transition-all duration-300 ease-in-out",
            isLight
              ? "translate-x-[52px] bg-white"
              : "translate-x-0 bg-neutral-800",
          )}
        />

        {/* Icons */}
        <div className="z-10 flex w-full items-center justify-around">
          <Moon
            size={20}
            className={cn(
              "transition-all duration-300",
              !isLight
                ? "text-white opacity-100"
                : "text-neutral-500 opacity-50",
            )}
          />
          <Sun
            size={20}
            className={cn(
              "transition-all duration-300",
              isLight
                ? "text-primary-500 opacity-100"
                : "text-neutral-400 opacity-50",
            )}
          />
        </div>
      </div>
    </div>
  );
}
