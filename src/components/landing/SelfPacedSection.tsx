"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, Brain, Lightbulb, Waypoints } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    icon: <Lightbulb size={24} />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <Brain size={24} />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <BadgeCheck size={24} />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <Waypoints size={24} />,
    text: "Build lasting habits for long-term success.",
  },
];

export default function SelfPacedSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Line drawing animation
      gsap.from(".line-spine", {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Staggered reveal for items
      gsap.from(".timeline-item", {
        opacity: 0,
        x: -20,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-32 transition-colors duration-500 dark:bg-black"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        {/* --- Header --- */}
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 dark:border-white/10 dark:bg-[#0A0F1C]">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_#2466F2]" />
            <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
              The Deep Work Blueprint
            </span>
          </div>
          <h2 className="text-[32px] font-medium leading-tight text-neutral-900 dark:text-white md:text-[48px] lg:text-[56px]">
            A self-paced, results-driven <br /> course designed to help you
          </h2>
        </div>

        {/* --- Timeline Container --- */}
        <div
          className="relative w-full dark:bg-[#030712] pb-20 "
          ref={containerRef}
        >
          <div className="mx-auto max-w-[1280px] px-6">
            {/* Timeline Container */}
            <div className="relative mx-auto max-w-xl">
              {/* ✅ THE VERTICAL LINE (Pinned exactly at 6px to match dot center) */}
              <div className="absolute left-[6px] top-0 h-full w-[1.5px] z-0">
                <div className="timeline-line-inner h-full w-full bg-gradient-to-b from-primary-500/0 via-primary-500 to-primary-500/0 opacity-50" />
                {/* Soft Glow around the line */}
                <div className="absolute inset-0 blur-[4px] bg-primary-500/30" />
              </div>

              <div className="flex flex-col gap-20">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-item relative flex items-center gap-10"
                  >
                    {/* ✅ THE DOT (Positioned exactly on the line) */}
                    <div className="relative z-10 h-3 w-3 rounded-full bg-[#2466F2] shadow-[0_0_15px_#2466F2] backdrop-blur-lg   " />

                    {/* Content Wrapper */}
                    <div className="flex flex-col gap-6">
                      {/* Icon with Blue Ambient Glow */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0A0F1C] shadow-2xl text-white dark:text-dark">
                        {/* Inner Blue Glow */}
                        <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-[10px]" />
                        <div className="relative z-10">{item.icon}</div>
                      </div>

                      {/* Text (100% Match font size and weight) */}
                      <p className="text-[19px] font-normal leading-relaxed  dark:text-dark max-w-[280px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
