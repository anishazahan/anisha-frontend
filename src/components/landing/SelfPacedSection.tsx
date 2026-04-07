"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, Brain, Lightbulb, Waypoints } from "lucide-react";
import { useRef } from "react";
import MovingBorderBadge from "../ui/MovingBorderBadge";
import SectionHeading from "../ui/SectionHeading";

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
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="mb-8 flex justify-center">
            <MovingBorderBadge text="   The Deep Work Blueprint" />
          </div>

          <SectionHeading
            title={"A self-paced, results-driven\ncourse designed to help you"}
          />
        </div>

        <div
          className="relative w-full dark:bg-black pb-20 "
          ref={containerRef}
        >
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute left-[10px] top-0 h-full w-[1.5px] z-0">
                <div className="timeline-line-inner h-full w-full bg-gradient-to-b from-primary-500/0 via-primary-500 to-primary-500/0 opacity-50" />
                <div className="absolute inset-0 blur-[4px] bg-primary-500/30" />
              </div>

              <div className="flex flex-col gap-20">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className="timeline-item relative flex items-center gap-10"
                  >
                    {/* primary DOT  */}
                    <div className="relative z-10 h-5 w-5 rounded-full bg-[#2466F2] shadow-[0_0_15px_#2466F2] backdrop-blur-lg   " />

                    {/* Content Wrapper */}
                    <div className="flex flex-col gap-6">
                      {/* Icon with Blue Ambient Glow */}
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-full  bg-neutral-200 dark:bg-bg-surface_bg shadow-2xl text-neutral-800 dark:text-white dark:text-dark">
                        {/* Inner Blue Glow */}
                        <div className="absolute inset-0 rounded-full border border-primary-400 dark:border-primary-300/50 [mask-image:linear-gradient(225deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
                        <div className="absolute inset-0 rounded-full bg-primary-500/10 blur-[10px]" />
                        <div className="relative z-10">{item.icon}</div>
                      </div>

                      <p className="text-[17px] font-normal leading-relaxed  dark:text-dark max-w-[280px]">
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
