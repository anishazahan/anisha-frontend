"use client";

import { curriculumData } from "@/lib/data/landing.data";
import { cn } from "@/utils/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/Button";
import MovingBorderBadge from "../ui/MovingBorderBadge";
import SectionHeading from "../ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });

      tl.from(".curriculum-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".accordion-item",
          {
            x: -30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".right-card",
          { x: 50, opacity: 0, duration: 1, ease: "power4.out" },
          "-=0.8",
        );
    },
    { scope: container },
  );

  useGSAP(() => {
    const panels = gsap.utils.toArray(".accordion-content");
    panels.forEach((panel: any, i) => {
      if (i === openIndex) {
        gsap.to(panel, {
          height: "auto",
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
        });
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "expo.in",
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      id="curriculum"
      ref={container}
      className="w-full py-24 bg-white dark:bg-black transition-colors duration-500"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="curriculum-header mb-32 flex flex-col items-center text-center px-8">
          <MovingBorderBadge text="Course Curriculum" className="mb-8" />
          <SectionHeading
            title={
              "Mastering Deep Work: A Structured\nPath to Peak Productivity"
            }
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16  ">
          {/* LEFT */}
          <div className="flex flex-col px-8 sm:px-12 lg:px-0 lg:mr-10">
            {curriculumData?.map((module, idx) => {
              const isActive = openIndex === idx;
              return (
                <div key={idx} className="accordion-item transition-colors">
                  {/*  BORDER */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-40 z-10" />
                  <button
                    onClick={() => setOpenIndex(isActive ? null : idx)}
                    className="group flex w-full items-center justify-between py-8 text-left outline-none"
                  >
                    <div className="relative z-20">
                      <h3
                        className={cn(
                          "text-[20px] md:text-[22px] font-medium transition-colors duration-300",
                          isActive
                            ? "text-[#2466F2]"
                            : "text-neutral-900 dark:text-white group-hover:text-[#2466F2]",
                        )}
                      >
                        {module.title}
                      </h3>
                      <p className="mt-1 text-body-sm text-neutral-500 font-medium">
                        {module.duration}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "transition-all duration-500 flex h-10 w-10 items-center justify-center rounded-full border",
                        isActive
                          ? "rotate-180 bg-[#2466F2] border-[#2466F2] text-white"
                          : "border-neutral-200 dark:border-white/10 text-neutral-400",
                      )}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 10L12 15L17 10"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div className="accordion-content overflow-hidden h-0 opacity-0">
                    <div className="flex flex-col pb-8 gap-2">
                      {module.lessons.map((lesson, lIdx) => (
                        <div
                          key={lIdx}
                          className="flex items-center relative justify-between rounded-2xl p-4 transition-all hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer"
                        >
                          {lIdx !== module.lessons.length - 1 && (
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[95%] bg-glow-line-horizontal opacity-10 dark:opacity-20" />
                          )}

                          <div className="flex items-center gap-5">
                            <div
                              className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full border transition-all",
                                lesson.isPreview
                                  ? "bg-white text-[#2466F2] border-white shadow-xl shadow-primary-500/20"
                                  : "bg-neutral-100 dark:bg-[#1A1F2E] border-transparent dark:border-white/5 text-neutral-500",
                              )}
                            >
                              <Play
                                size={16}
                                fill={
                                  lesson.isPreview ? "currentColor" : "none"
                                }
                              />
                            </div>
                            <span className="text-[16px] font-medium text-neutral-800 dark:text-neutral-300">
                              {lesson.title}
                            </span>
                            {lesson.isPreview && (
                              <span className="rounded-full bg-[#2466F2]/10 px-3 py-0.5 text-[10px] font-bold text-[#2466F2] border border-primary-500/20">
                                PREVIEW
                              </span>
                            )}
                          </div>
                          <span className="text-[14px] font-medium text-neutral-500">
                            {lesson.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className=" right-card h-fit mt-24 lg:mt-0 rounded-[32px] max-w-[530px] lg:ml-auto  mx-auto bg-neutral-50 p-10 dark:bg-[#0A0F1C] relative border border-neutral-200 dark:border-white/5 shadow-2xl ">
            <div className="absolute inset-0 rounded-[32px] border border-[#2466F2]/20 [mask-image:linear-gradient(225deg,transparent,black,transparent)] pointer-events-none opacity-0 dark:opacity-100" />

            <h3 className="text-[26px] font-medium text-neutral-900 dark:text-white mb-10">
              Not only video lessons!
            </h3>
            <ul className="space-y-8 mb-24">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers – Stay on track effortlessly.",
                "Live Q&As – Expert guidance & accountability.",
                "Exclusive Community – Connect with others.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 dark:bg-[#1A1F2E] text-neutral-900 dark:text-[#2466F2] border border-neutral-300 dark:border-white/10">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-[17px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="md"
              className="w-full h-14 rounded-2xl text-[18px] font-bold shadow-xl shadow-primary-500/20 active:scale-95 transition-all"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
