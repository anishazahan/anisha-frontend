"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Plus } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/Button";
import MovingBorderBadge from "../ui/MovingBorderBadge";
import SectionHeading from "../ui/SectionHeading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PricingSection = () => {
  const container = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     gsap.from(".pricing-card", {
  //       y: 60,
  //       opacity: 0,
  //       duration: 1.2,
  //       stagger: 0.2,
  //       ease: "power4.out",
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top 80%",
  //       },
  //     });
  //   },
  //   { scope: container },
  // );

  return (
    <section
      id="pricing"
      ref={container}
      className="w-full bg-white py-32 transition-colors duration-500 dark:bg-black"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* ── LEFT  ── */}
          <div className="pricing-card group  group-hover:border hover:border-primary-300 transition-all relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 p-10  dark:border-white/5 dark:bg-bg-surface_bg md:p-12 max-w-[500px] lg:max-w-full lg:w-full mx-auto ">
            <div>
              <p className="opacity-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores facilis in fugit doloribus facere totam, assumenda neque
                reprehenderit! Dolorem, odio.
              </p>

              <MovingBorderBadge className="mt-10 mb-4" text="Introducing" />

              <SectionHeading title={"The Deep Work\n Blueprint"} />

              <p className="mt-8 text-[17px]  text-neutral-500 dark:text-text-sub_heading">
                What extra you will get if you enroll now
              </p>

              <ul className="mt-24 space-y-10">
                {[
                  "Bonus: 1:1 coaching session to boost focus.",
                  "Discount: Save 30% when you enroll now!",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-6 group">
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-white">
                      <div className="absolute inset-0 rounded-full bg-[#2466F2]/40 blur-md opacity-80" />
                      <Plus
                        size={16}
                        strokeWidth={3}
                        className="relative z-10"
                      />
                    </div>
                    <span className="text-sm  text-neutral-700 dark:text-neutral-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── RIGHT  ── */}
          <div className="pricing-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-10 transition-all dark:border-white/5 dark:bg-bg-surface_bg  shadow-2xl pb-28 md:p-12 max-w-[500px] lg:max-w-full lg:w-full mx-auto ">
            <div className="pointer-events-none absolute inset-0 hidden rounded-3xl border border-primary-300/50 [mask-image:linear-gradient(225deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,1)_50%,rgba(0,0,0,0.2)_100%)] dark:block" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-6 mb-4">
                <div className="flex items-baseline gap-4">
                  <span className="text-[52px] font-medium tracking-tight text-neutral-900 dark:text-white md:text-[60px]">
                    $349
                  </span>
                  <p className="relative text-[24px] md:text-[28px] text-neutral-400 font-medium whitespace-nowrap">
                    $500
                    {/* Custom Strike-through Line */}
                    <span
                      className="absolute left-[-2%] top-[45%] h-[2px] w-[104%] bg-[#FF1818] rotate-[12deg] rounded-full"
                      style={{ transformOrigin: "center" }}
                    />
                  </p>
                </div>
                <div className="rounded-lg bg-primary-500 px-5 py-1.5 text-sm font-medium tracking-wider text-white">
                  30% off
                </div>
              </div>

              <p className="text-[15px] font-medium tracking-wide text-neutral-500 dark:text-text-sub_heading mt-10 ">
                30% off until 4d : 2h : 41m : 17s
              </p>

              <ul className="mt-20 space-y-10">
                {[
                  "6h of videos - Step-by-step deep work strategies.",
                  "Templates & Trackers – Stay on track effortlessly.",
                  "Live Q&As – Expert guidance & accountability.",
                  "Exclusive Community – Connect with others.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F172A] text-white">
                      <div className="absolute inset-0 border border-primary-500 rounded-full bg-[#2466F2]/40 blur-md opacity-80" />
                      <Check
                        size={16}
                        strokeWidth={3}
                        className="relative z-10"
                      />
                    </div>
                    <span className="text-sm sm:text-[15px] mt-[6px] leading-tight text-neutral-700 dark:text-neutral-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="primary"
              size="md"
              className="mt-20 h-12 w-full rounded-xl text-lg font-medium shadow-2xl shadow-primary-500/30 active:scale-[0.98] transition-transform"
            >
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
