"use client";

import { curriculumData } from "@/lib/data/landing.data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CheckCircle2, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/Button";
import MovingBorderBadge from "../ui/MovingBorderBadge";

const Curriculum = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".accordion-content");
    panels.forEach((panel: any, i) => {
      if (i === openIndex) {
        gsap.to(panel, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(panel, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      id="curriculum"
      ref={container}
      className="w-full  py-24 transition-colors duration-300 bg-[#030712] dark:bg-dark"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <MovingBorderBadge text="Course Curriculum" className="mb-8" />
          <h2 className="max-w-3xl text-h2 font-medium leading-tight text-neutral-900 dark:text-white md:text-[48px]">
            Mastering Deep Work: A Structured Path to Peak Productivity
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT */}
          <div className="space-y-2">
            {curriculumData?.map((module, idx) => (
              <div key={idx} className="relative">
                {/*  BORDER */}
                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-40 z-10" />

                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="group flex w-full items-center justify-between py-7 text-left outline-none"
                >
                  <div className="relative z-20">
                    <h3 className="text-[22px] font-medium text-neutral-900 dark:text-white transition-colors group-hover:text-primary-400">
                      {module.title}
                    </h3>
                    <p className="mt-1 text-body-sm text-neutral-500 font-medium">
                      {module.duration}
                    </p>
                  </div>

                  <div
                    className={`transition-transform duration-500 ${openIndex === idx ? "rotate-180" : ""}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-neutral-400 dark:text-white"
                      />
                    </svg>
                  </div>
                </button>

                {/* ACCORDION CONTENT */}
                <div className="accordion-content overflow-hidden h-0 opacity-0">
                  <div className="flex flex-col pt-2 pb-6">
                    {module.lessons.map((lesson, lIdx) => (
                      <div key={lIdx} className="relative group/lesson">
                        {/* NESTED CHILD BORDER */}

                        {lIdx !== module.lessons.length - 1 && (
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[95%] bg-glow-line-horizontal opacity-10 dark:opacity-20" />
                        )}

                        <div className="flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-neutral-100 dark:hover:bg-white/5 cursor-pointer">
                          <div className="flex items-center gap-5">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                                lesson.isPreview
                                  ? "bg-white text-primary-500 border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                  : "bg-[#1A1F2E] text-neutral-500 border-white/5"
                              }`}
                            >
                              <Play
                                size={18}
                                fill={
                                  lesson.isPreview ? "currentColor" : "none"
                                }
                                className={
                                  lesson.isPreview ? "translate-x-[1px]" : ""
                                }
                              />
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-[17px] font-medium text-neutral-700 dark:text-neutral-300">
                                {lesson.title}
                              </span>
                              {lesson.isPreview && (
                                <span className="rounded-full bg-primary-500/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary-400 border border-primary-500/20">
                                  Preview
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-[15px] font-medium text-neutral-500">
                            {lesson.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-[24px] bg-neutral-50 p-10 dark:bg-bg-surface_bg relative border border-white/5 overflow-hidden lg:ml-16">
            <div className="absolute inset-0 rounded-[24px] border border-primary-300/50 [mask-image:linear-gradient(225deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
            <h3 className="text-[24px] font-medium text-neutral-900 dark:text-white mb-8">
              Not only video lessons!
            </h3>
            <ul className="space-y-6 mb-12">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers – Stay on track effortlessly.",
                "Live Q&As – Expert guidance & accountability.",
                "Exclusive Community – Connect with others.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A1F2E] text-white border border-white/10 shadow-[0_0_15px_rgba(36,102,242,0.2)]">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-[16px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              size="lg"
              className="w-full h-14 rounded-[14px] text-[17px] font-bold shadow-lg shadow-primary-500/25"
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
