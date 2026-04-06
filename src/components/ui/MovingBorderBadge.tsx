"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

const MovingBorderBadge = ({ text, className }: BadgeProps) => {
  const container = useRef<HTMLDivElement>(null);
  const borderRef = useRef<SVGRectElement>(null);

  useGSAP(
    () => {
      gsap.to(borderRef.current, {
        strokeDashoffset: 0,
        duration: 4,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".dot-glow", {
        opacity: 0.4,
        scale: 1.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className={`relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-full ${className}`}
    >
      {/*  MOVING BORDER SVG */}
      <svg className="absolute inset-0 h-full w-full">
        <rect
          ref={borderRef}
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="9999"
          fill="none"
          stroke="url(#badge-gradient)"
          strokeWidth="4"
          strokeDasharray="80 200"
          strokeDashoffset="280"
        />
        <defs>
          <linearGradient
            id="badge-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#2466F2" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex items-center gap-3 rounded-full bg-[#0A0F1C] px-5 py-2 border border-white/5 shadow-[inset_0_0_12px_rgba(36,102,242,0.05)]">
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <div className="dot-glow absolute h-full w-full rounded-full bg-primary-500 blur-[2px] opacity-0" />
          <div className="relative h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_8px_#2466F2]" />
        </div>

        <span className="text-[15px] font-medium tracking-wide text-[#E2E8F0]">
          {text}
        </span>
      </div>
    </div>
  );
};

export default MovingBorderBadge;
