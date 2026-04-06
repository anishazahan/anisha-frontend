"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import MovingBorderBadge from "../ui/MovingBorderBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FocusSection() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 1. Text Highlighting Effect
      // Animates the text from neutral-700 to white as you scroll
      gsap.fromTo(
        ".highlight-text span",
        { color: "rgba(163, 163, 163, 0.2)" }, // neutral-400 with low opacity
        {
          color: "white",
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        },
      );

      // 2. Image Card Floating Animation
      gsap.from(".image-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-grid",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="w-full bg-[#030712] py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
        {/* Badge Header */}
        <div className="mb-12 flex justify-center">
          <MovingBorderBadge text="Are Distractions Holding You Back?" />
        </div>

        {/* Highlighting Text Content */}
        <h2
          ref={textRef}
          className="highlight-text mx-auto max-w-5xl text-[32px] font-medium leading-tight tracking-tight md:text-[56px] lg:text-[64px]"
        >
          {"If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you're not alone."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em]">
                {word}
              </span>
            ))}
        </h2>

        {/* Image Grid */}
        <div className="image-grid mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="image-card group relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/5 bg-neutral-900 shadow-2xl"
            >
              <Image
                src={`/assets/problem-${num}.png`} // Match your asset names
                alt="Stressed professional"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
