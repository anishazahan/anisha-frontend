"use client";

import Image from "next/image";
import { useState } from "react";
import texureImg from "../../assets/texture.png";
import { Button } from "../ui/Button";
import MovingBorderBadge from "../ui/MovingBorderBadge";
import { PlayButton } from "../ui/PlayButton";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-white pt-44 md:pt-56 lg:pt-72 pb-0 transition-colors duration-300 dark:bg-black"
    >
      {/* ── 2. Blue radial glow — top center ── */}

      {/* ── 4. Main content ── */}
      <div className="relative z-10 mx-auto  px-6 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <MovingBorderBadge text="30% off until 4d : 2h : 41m : 17s" />
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-4xl text-h2 font-medium leading-[1.2] text-neutral-900 md:text-h1 dark:text-white">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        {/* Sub-copy */}
        <p className="mx-auto mt-6 max-w-2xl font-normal text-body-normal text-neutral-500 dark:text-neutral-400">
          A step-by-step system to eliminate procrastination, train your{" "}
          <br className="hidden md:block" />
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            variant="primary"
            size="md"
            className="text-white rounded-xl h-12"
          >
            Enroll now
          </Button>
          <Button
            variant="dark_light"
            size="md"
            className="rounded-xl h-12 border text-white border-neutral-200 dark:border-white/5"
          >
            Curriculum
          </Button>
        </div>

        {/* ── 5. Video Box ── */}

        <div className="relative mx-auto  w-full group mt-2 pt-10 md:pt-20 ">
          <div className="h-full w-full bg-glow-line-vertical absolute left-0 top-0 bottom-0"></div>
          <div
            className="pointer-events-none absolute left-1/2 top-[-17%] z-[2] hidden h-[500px] w-[900px] -translate-x-1/2 dark:block"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.28) 0%, rgba(37,99,235,0.08) 45%, transparent 70%)",
            }}
          />
          {/* ──  texture overlay ── */}
          <div className="pointer-events-none absolute inset-0 z-[1]">
            <Image
              src={texureImg}
              alt=""
              fill
              className="object-cover opacity-[0.07] dark:opacity-[0.13]"
              priority
            />
          </div>

          {/* Main video container */}
          <div
            className="relative max-w-[1280px] mx-auto z-10 overflow-hidden rounded-[24px] border border-neutral-200 dark:border-blue-500/30 shadow-2xl transition-transform duration-500 group-hover:scale-[1.005]"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* ── 2. THE BLUE "TRACK" (Horizontal Scanlines) ── */}
            {/* This creates the blue striped background seen behind the video in your image */}
            <div
              className="absolute left-0 right-0 top-1/2 z-1 h-[300px] -translate-y-1/2 opacity-20 dark:opacity-40"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, #2466F2, #2466F2 1px, transparent 1px, transparent 8px)`,
              }}
            />
            {/* Texture scanlines inside video box */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[24px]">
              <Image
                src={texureImg}
                alt=""
                fill
                className="object-cover opacity-[0.06] dark:opacity-[0.18] mix-blend-overlay"
              />
            </div>

            {/* Video content */}
            <div
              className="aspect-video relative z-10 cursor-pointer overflow-hidden"
              onClick={() => !playVideo && setPlayVideo(true)}
            >
              {playVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <Image
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80"
                    alt="Course Preview"
                    fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-95"
                  />

                  {/* Dark vignette over thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <PlayButton
                      variant="white"
                      size="lg"
                      className="group-hover:scale-110 shadow-xl transition-transform duration-300"
                    />
                  </div>

                  {/* CRT scanline effect on video thumbnail */}
                  <div
                    className="absolute inset-0 pointer-events-none z-20 dark:opacity-100 opacity-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)",
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="h-10 md:h-20 w-full bg-glow-line-horizontal"></div>
        </div>
        {/* end video box */}
      </div>
    </section>
  );
}
