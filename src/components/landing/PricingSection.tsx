"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Plus } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PricingSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".pricing-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.to(".badge-glow", {
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  return (
    <section
      id="pricing"
      ref={container}
      className="w-full bg-white py-24 transition-colors duration-300 dark:bg-[#030712]"
    >
      {/* Gradient border utility styles injected once */}
      <style>{`
        .grad-border {
          position: relative;
          border-radius: 24px;
        }
        .grad-border::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.18) 0%,
            rgba(255,255,255,0.06) 40%,
            rgba(255,255,255,0.01) 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .icon-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 0 10px 2px rgba(36,102,242,0.35), 0 0 20px 4px rgba(36,102,242,0.15);
          flex-shrink: 0;
          color: white;
        }

        .icon-plus {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0f172a;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 0 10px 2px rgba(36,102,242,0.30), 0 0 20px 4px rgba(36,102,242,0.12);
          flex-shrink: 0;
          color: white;
          transition: box-shadow 0.2s;
        }

        .icon-plus:hover {
          box-shadow: 0 0 14px 4px rgba(36,102,242,0.55), 0 0 28px 6px rgba(36,102,242,0.25);
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <div className="pricing-card grad-border dark:bg-bg-surface_bg  bg-neutral-900/60 p-10">
            {/* "Introducing" Badge */}
            <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <div className="badge-glow absolute inset-0 rounded-full bg-primary-500/20 blur-md opacity-0" />
              <div className="h-2 w-2 rounded-full bg-primary-500" />
              <span className="text-[13px] font-medium text-white/80 uppercase tracking-wider">
                Introducing
              </span>
            </div>

            <h2 className="text-[48px] font-medium leading-tight text-white">
              The Deep Work <br /> Blueprint
            </h2>
            <p className="mt-6 text-[15px] text-neutral-400">
              What extra you will get if you enroll now
            </p>

            <ul className="mt-12 space-y-6">
              {[
                "Bonus: 1:1 coaching session to boost focus.",
                "Discount: Save 30% when you enroll now!",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="icon-plus">
                    <Plus size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="pricing-card grad-border dark:bg-bg-surface_bg bg-neutral-900/60 p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[56px] font-semibold text-white">
                  $349
                </span>
                <span className="text-[24px] text-neutral-400 line-through decoration-red-500 decoration-2">
                  $500
                </span>
              </div>
              <div className="rounded-full bg-primary-500 px-4 py-1 test-sm font-bold text-white">
                30% off
              </div>
            </div>

            <p className="mt-4 text-[15px] font-medium text-neutral-400">
              30% off until 4d : 2h : 41m : 17s
            </p>

            <ul className="mt-12 space-y-6">
              {[
                "6h of videos - Step-by-step deep work strategies.",
                "Templates & Trackers – Stay on track effortlessly.",
                "Live Q&As – Expert guidance & accountability.",
                "Exclusive Community – Connect with others.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="icon-check mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              size="lg"
              className="mt-12 w-full h-16 rounded-[16px] text-[18px] font-bold shadow-lg shadow-primary-500/20"
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
