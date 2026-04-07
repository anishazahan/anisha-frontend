"use client";

import { cn } from "@/utils/utils";
import React from "react";

interface Props {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className }: Props) {
  return (
    <h2
      className={cn(
        // font-medium = 500, leading-[1.15] = 115% line height
        "text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-[1.15] tracking-tight",
        // Color #E0E3E5 from your Figma
        "text-neutral-900 dark:text-[#E0E3E5] transition-colors duration-300",
        className,
      )}
    >
      {title.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i !== title.split("\n").length - 1 && (
            <br className="hidden md:block" />
          )}
        </React.Fragment>
      ))}
    </h2>
  );
}
