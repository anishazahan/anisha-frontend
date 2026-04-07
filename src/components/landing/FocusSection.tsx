"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/focus-1.jpg";
import img2 from "../../assets/focus-2.jpg";
import img3 from "../../assets/focus-3.jpg";
import MovingBorderBadge from "../ui/MovingBorderBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [img1, img2, img3];

export default function FocusSection() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // ✅ Track theme changes (important)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      // ✅ Kill previous animations (important on theme change)
      gsap.killTweensOf(".highlight-text span");

      // ✅ TEXT ANIMATION (theme-aware)
      gsap.fromTo(
        ".highlight-text span",
        {
          color: isDark ? "rgba(163,163,163,0.2)" : "rgba(115,115,115,0.3)",
        },
        {
          color: isDark ? "#ffffff" : "#111827",
          stagger: 0.08,
          ease: "none",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        },
      );

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
    { scope: container, dependencies: [isDark] },
  );

  return (
    <section
      ref={container}
      className="w-full bg-white dark:bg-[#030712] pt-20 lg:pt-44 pb-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
        <div className="mb-8 flex justify-center">
          <MovingBorderBadge text="Are Distractions Holding You Back?" />
        </div>

        <h2
          ref={textRef}
          className="highlight-text text-neutral-900 dark:text-white mx-auto max-w-5xl font-medium tracking-tight text-2xl sm:text-4xl lg:text-5xl px-4 lg:px-6 leading-relaxed"
        >
          {"If you struggle to focus, feel overwhelmed by endless tasks, or procrastinate instead of making progress, you're not alone."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block mr-[0.25em] align-baseline">
                {word}
              </span>
            ))}
        </h2>

        <div className="image-grid mt-10 grid grid-cols-3 gap-2 max-w-[400px] mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="image-card group relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-neutral-900 shadow-2xl"
            >
              <Image
                src={img}
                alt="Focus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
