"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeCheck, Lightbulb, ShieldAlert, Waypoints } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    icon: <Lightbulb size={24} className="text-neutral-900 dark:text-white" />,
    text: "Develop laser-sharp focus & eliminate distractions.",
  },
  {
    icon: <ShieldAlert size={24} className="text-neutral-900 dark:text-white" />,
    text: "Master deep work techniques for smarter productivity.",
  },
  {
    icon: <BadgeCheck size={24} className="text-neutral-900 dark:text-white" />,
    text: "Overcome procrastination & get more done.",
  },
  {
    icon: <Waypoints size={24} className="text-neutral-900 dark:text-white" />,
    text: "Build lasting habits for long-term success.",
  },
];

export default function SelfPacedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const items = gsap.utils.toArray(".timeline-item");
    
    gsap.from(items, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });
  }, { scope: containerRef });

  return (
    <section id="curriculum" className="relative w-full bg-white py-32 transition-colors duration-300 dark:bg-black" ref={containerRef}>
      <div className="mx-auto max-w-[1280px] px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/50 shadow-[0_0_15px_rgba(36,102,242,0.1)]">
            <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400">
              The Deep Work Blueprint
            </span>
          </div>
          
          <h2 className="max-w-2xl text-h3 font-medium leading-[1.2] tracking-tight text-neutral-900 md:text-h2 dark:text-white">
            A self-paced, results-driven <br className="hidden md:block" /> course designed to help you
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-2xl px-4 md:px-0">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-[27px] top-0 h-full w-[2px] bg-gradient-to-b from-primary-500/80 via-primary-500/40 to-transparent dark:from-primary-500/80 dark:via-primary-500/20 md:left-[39px]" />

          <div className="flex flex-col gap-16">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item flex items-center gap-8 md:gap-12 pl-6 md:pl-10 relative">
                {/* Visual marker dot */}
                <div className="absolute left-0 top-1/2 -mt-[6px] h-3 w-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(36,102,242,0.8)] -ml-[1.5px]" />
                
                {/* Circular icon container */}
                <div className="flex z-10 h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white/50 dark:border-white/10 dark:bg-neutral-900 backdrop-blur-md shadow-lg">
                  {item.icon}
                </div>
                
                {/* Text */}
                <p className="text-body-normal text-neutral-600 dark:text-neutral-300 max-w-xs">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          <div className="timeline-item mt-16 flex flex-col pl-[88px] md:pl-[120px] relative">
             <div className="absolute left-0 top-6 -mt-[6px] h-3 w-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(36,102,242,0.8)] -ml-[1.5px] border-2 border-black" />

             <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/50 shadow-[0_0_15px_rgba(36,102,242,0.05)]">
                <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
                <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400">
                  Course Curriculum
                </span>
             </div>
             <p className="text-h4 font-medium text-neutral-900 dark:text-white">
               Mastering Deep Work: A <br /> Structured Path to Peak <br /> Productivity
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
