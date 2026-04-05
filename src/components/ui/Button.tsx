import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 font-normal",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-primary-300 text-white hover:bg-primary-400 dark:bg-primary-500",

        dark: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
        dark_light: "bg-neutral-800 text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900",
        black: "bg-black text-white dark:bg-white dark:text-black",

        outline:
          "border border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800",
      },
      size: {
        sm: "h-9 px-4 text-body-sm rounded-[8px]",
        md: "h-11 px-6 text-body-normal rounded-[12px]",
        lg: "h-14 px-8 text-h5 rounded-[16px]",
        pill: "h-11 px-8 rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "pill",
        variant: ["dark", "dark_light", "black"],
        className: "text-primary-500",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? "Loading..." : children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
