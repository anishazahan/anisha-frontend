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
        "text-[32px] md:text-[40px] lg:text-[46px] font-medium leading-[1.15] tracking-tight",

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
