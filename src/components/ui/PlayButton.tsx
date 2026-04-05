"use client";

import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Pause, Play } from "lucide-react"; // Switched to Lucide
import React from "react";

const playButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95 border",
  {
    variants: {
      variant: {
        // Light Mode: Yellowish/Primary background with dark icon
        primary: "bg-primary-500 text-neutral-900 border-neutral-900",
        // Dark Mode: Black background with white icon and subtle border
        dark: "bg-neutral-950 text-white border-neutral-800",
      },
      size: {
        sm: "h-10 w-10 rounded-full",
        md: "h-16 w-16 rounded-full", // Matches your 64px Figma design
        lg: "h-24 w-24 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface PlayButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof playButtonVariants> {
  isPaused?: boolean;
}

const PlayButton = React.forwardRef<HTMLButtonElement, PlayButtonProps>(
  ({ className, variant, size, isPaused = false, ...props }, ref) => {
    // Lucide Icon sizing logic
    const iconSize = {
      sm: 18,
      md: 28,
      lg: 40,
    }[size ?? "md"];

    return (
      <button
        ref={ref}
        className={cn(playButtonVariants({ variant, size, className }))}
        {...props}
      >
        {isPaused ? (
          <Pause
            size={iconSize}
            fill="currentColor" // This makes the icon solid like your design
            className="text-current"
          />
        ) : (
          <Play
            size={iconSize}
            fill="currentColor" // Fills the triangle
            className="translate-x-[2px] text-current" // Visual centering for the triangle
          />
        )}
      </button>
    );
  },
);

PlayButton.displayName = "PlayButton";

export { PlayButton, playButtonVariants };
