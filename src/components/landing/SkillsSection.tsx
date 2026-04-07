"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

// Assuming your assets are correctly linked
import avatar1 from "../../assets/skill-1.png";
import avatar2 from "../../assets/skill-2.png";
import avatar3 from "../../assets/skill-3.png";
import card1 from "../../assets/skill-card-1.jpg";
import card2 from "../../assets/skill-card-2.jpg";
import card3 from "../../assets/skill-card-3.jpg";
import img1 from "../../assets/testimonial-hero.jpg";
import MovingBorderBadge from "../ui/MovingBorderBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SkillsSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const cardImages = [card1, card2, card3];
  const avatars = [avatar1, avatar2, avatar3];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.from(".hero-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(".main-card", { scale: 0.95, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".animate-item",
          { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 },
          "-=0.4",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full bg-white dark:bg-black py-12 md:py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 desktop:grid-cols-[365px_1fr]">
          {/* ── LEFT: HERO IMAGE (Desktop Only) ── */}
          <div className="hero-image relative hidden desktop:block h-[680px] w-full overflow-hidden rounded-3xl">
            <Image
              src={img1}
              alt="Focus"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* ── RIGHT: CONTENT CARD ── */}
          <div className="main-card relative flex flex-col rounded-3xl bg-neutral-100 dark:bg-bg-surface_bg p-8 md:p-10 lg:h-[680px] justify-between ">
            {/* Top Section: Badge + Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
              <div className="mb-8 ">
                <MovingBorderBadge text="No worries" />
              </div>

              <div className="social-proof animate-item flex flex-col items-start sm:items-end gap-2">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 overflow-hidden rounded-full "
                    >
                      <Image
                        src={src}
                        alt="student"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="  text-[15px] text-sub_heading">
                  Join with 5K other students
                </p>
              </div>
            </div>

            {/* Middle Section: Text Content */}
            <div className="flex flex-col sm:flex-row justify-between h-full gap-10 mt-16">
              <div className="flex flex-col justify-center max-w-sm">
                <p className="animate-item text-body-normal text-neutral-500 dark:text-[#AAAEB2] max-w-[250px]  mb-6">
                  The ability to concentrate deeply is the ultimate productivity
                  hack
                </p>
                <h2 className="animate-item text-black/80 dark:text-white text-[32px] mr-2 md:text-[40px] font-medium leading-[115%]  tracking-tight mt-6">
                  And fortunately it&apos;s a skill you can train & develop.
                </h2>
              </div>

              {/* Desktop Vertical Stack (lg+) */}
              <div className="hidden sm:flex flex-col gap-2 w-[118px]">
                {cardImages.map((src, i) => (
                  <div
                    key={i}
                    className="animate-item relative h-[120px] w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl"
                  >
                    <Image
                      src={src}
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Horizontal Row  */}
            <div className="flex tablet-sm:hidden sm:hidden grid-cols-3 gap-3 mt-10">
              {cardImages.map((src, i) => (
                <div
                  key={i}
                  className="animate-item relative h-[100px] flex-1 overflow-hidden rounded-xl border border-white/5 shadow-xl"
                >
                  <Image
                    src={src}
                    alt="Student"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
