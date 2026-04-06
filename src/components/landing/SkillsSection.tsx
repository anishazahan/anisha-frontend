"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import img1 from "../../assets/testimonial-hero.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AVATAR_1 = img1;
const AVATAR_2 = "/images/avatar2.jpg";
const AVATAR_3 = "/images/avatar3.jpg";
const CARD_IMG_1 = "/images/student1.jpg";
const CARD_IMG_2 = "/images/student2.jpg";
const CARD_IMG_3 = "/images/student3.jpg";
const HERO_IMAGE = img1;

const SkillsSection = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });

      tl.from(".hero-image-wrap", {
        x: -60,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
      })
        .from(
          ".content-card",
          { y: 40, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.7",
        )
        .from(
          ".badge-no-worries",
          { y: -16, opacity: 0, duration: 0.55, ease: "back.out(2)" },
          "-=0.5",
        )
        .from(
          ".social-proof",
          { x: 16, opacity: 0, duration: 0.5, ease: "power2.out" },
          "-=0.35",
        )
        .from(
          ".cursor-tag-top",
          { scale: 0.5, opacity: 0, duration: 0.45, ease: "back.out(2.5)" },
          "-=0.25",
        )
        .from(
          ".quote-block",
          { opacity: 0, y: 16, duration: 0.6, ease: "power2.out" },
          "-=0.2",
        )
        .from(
          ".headline",
          { y: 24, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.35",
        )
        .from(
          ".photo-card",
          {
            y: 28,
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".cursor-tag-bottom",
          { scale: 0.5, opacity: 0, duration: 0.45, ease: "back.out(2.5)" },
          "-=0.25",
        );

      gsap.to(".badge-glow", {
        opacity: 0.7,
        scale: 1.05,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-image-wrap", {
        y: -6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full bg-white dark:bg-[#0a0a0c] py-16 md:py-24 transition-colors duration-300"
    >
      <style>{`
        .content-card-inner {
          background: #111114;
          border-radius: 28px;
          padding: 28px 24px 28px 24px;
        }
        @media (min-width: 1024px) {
          .content-card-inner {
            padding: 36px 32px;
            border-radius: 32px;
          }
        }
        .dark .content-card-inner {
          background: #111114;
        }

        /* Light mode card */
        :not(.dark) .content-card-inner {
          background: #18181c;
        }

        .photo-stack-desktop {
          display: none;
        }
        .photo-row-mobile {
          display: flex;
        }
        @media (min-width: 640px) {
          .photo-stack-desktop {
            display: flex;
          }
          .photo-row-mobile {
            display: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.08fr]">
          {/* ── LEFT: Hero image (hidden on mobile, shown lg+) ── */}
          <div className="hero-image-wrap hidden lg:block">
            <div className="relative h-full min-h-[620px] w-full overflow-hidden rounded-[32px]">
              <Image
                src={HERO_IMAGE}
                alt="Student deep working"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* ── RIGHT: Content card ── */}
          <div className="content-card">
            <div className="content-card-inner relative flex flex-col justify-between min-h-[540px] sm:min-h-[600px] lg:min-h-[620px]">
              {/* ── Top row: Badge + Social Proof ── */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                {/* Badge */}
                <div className="badge-no-worries relative">
                  <div className="badge-glow absolute inset-0 rounded-full bg-blue-500/20 blur-lg opacity-0" />
                  <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                    <span className="h-[7px] w-[7px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
                    <span className="text-[13px] font-medium text-white tracking-wide">
                      No worries
                    </span>
                  </div>
                </div>

                {/* Social proof */}
                <div className="social-proof flex flex-col items-end gap-1.5">
                  {/* Avatars */}
                  <div className="flex items-center">
                    {[AVATAR_1, AVATAR_2, AVATAR_3].map((src, i) => (
                      <div
                        key={i}
                        className="relative h-9 w-9 overflow-hidden rounded-full border-[2.5px] border-[#111114]"
                        style={{
                          marginLeft: i === 0 ? 0 : "-10px",
                          zIndex: 3 - i,
                        }}
                      >
                        <Image
                          src={src}
                          alt={`Avatar ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[12px] text-neutral-400">
                    Join with 5K other students
                  </p>
                </div>
              </div>

              {/* ── Middle: desktop photo stack (absolute right) + quote + headline ── */}
              <div className="relative mt-6 flex flex-col gap-5">
                {/* Desktop vertical photo stack — absolute right */}
                <div
                  className="photo-stack-desktop absolute right-0 top-0 flex-col gap-2.5 w-[150px] sm:w-[160px]"
                  style={{ display: "flex" }}
                >
                  {[CARD_IMG_1, CARD_IMG_2, CARD_IMG_3].map((src, i) => (
                    <div
                      key={i}
                      className="photo-card relative overflow-hidden rounded-[14px] shadow-xl"
                      style={{ height: "130px" }}
                    >
                      <Image
                        src={src}
                        alt={`Student ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="quote-block max-w-[230px] sm:max-w-[260px]">
                  <p className="text-[14px] leading-snug text-neutral-400">
                    The ability to concentrate deeply is the ultimate
                    productivity hack
                  </p>
                </div>

                {/* Headline */}
                <h2 className="headline max-w-[260px] sm:max-w-[300px] text-[28px] sm:text-[32px] font-bold leading-tight text-white">
                  And fortunately it's a skill you can train & develop.
                </h2>
              </div>

              {/* ── Bottom: mobile horizontal photos ── */}
              <div
                className="photo-row-mobile mt-6 gap-2.5"
                style={{ display: "none" }}
              >
                {[CARD_IMG_1, CARD_IMG_2, CARD_IMG_3].map((src, i) => (
                  <div
                    key={i}
                    className="photo-card relative flex-1 overflow-hidden rounded-[12px]"
                    style={{ height: "100px" }}
                  >
                    <Image
                      src={src}
                      alt={`Student ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ── END RIGHT ── */}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
