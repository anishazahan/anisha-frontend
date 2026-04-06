"use client";

import Image from "next/image";
import { useState } from "react";
import { default as texureImg } from "../../assets/texture.png";
import { Button } from "../ui/Button";
import { PlayButton } from "../ui/PlayButton";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-white pt-72 pb-32 transition-colors duration-300 dark:bg-black"
    >
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Large Blue Radial Glow (Matches Figma) */}
      <div className="absolute top-[-10%] left-1/2 z-0 hidden h-[600px] w-full -translate-x-1/2 opacity-30 dark:block  scale-[2]" />

      <div className="relative z-20 mx-auto max-w-[1280px] px-6 text-center">
        {/* --- PROMO BADGE --- */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-900/50 shadow-[0_0_15px_rgba(36,102,242,0.1)]">
          <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400">
            30% off until 4d : 2h : 41m : 17s
          </span>
        </div>

        {/* --- HEADINGS --- */}
        <h1 className="mx-auto max-w-4xl text-h2 font-medium leading-[1.1] tracking-tight text-neutral-900 md:text-h1 dark:text-white">
          Master Focus & Get <br /> More Done in Less Time
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-body-normal text-neutral-500 dark:text-neutral-400">
          A step-by-step system to eliminate procrastination, train your{" "}
          <br className="hidden md:block" />
          brain for deep work, and boost productivity effortlessly.
        </p>

        {/* --- CTA BUTTONS --- */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            className="px-10 rounded-[12px] h-14"
          >
            Enroll now
          </Button>
          <Button
            variant="dark_light"
            size="lg"
            className="px-10 rounded-[12px] h-14 border border-neutral-200 dark:border-white/5"
          >
            Curriculum
          </Button>
        </div>

        {/* //background texture layer with low opacity, using the imported texture image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={texureImg}
            alt="Background Texture"
            fill
            className="object-cover opacity-20 dark:opacity-2"
          />
        </div>

        {/* --- VIDEO BOX SECTION (1280px Aligned) --- */}
        <div className="relative mx-auto mt-20 w-full overflow-hidden rounded-[24px] border border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-black/40 shadow-2xl transition-transform hover:scale-[1.01] duration-500 group ">
          <div
            className="aspect-video relative z-10 cursor-pointer overflow-hidden p-0"
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
                className="w-full h-full relative z-20"
              ></iframe>
            ) : (
              <>
                <Image
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80"
                  alt="Course Preview"
                  fill
                  className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />

                {/* THE PLAY BUTTON (Using standard PlayButton Component matches image) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayButton
                    variant="white"
                    size="lg"
                    className="z-20 group-hover:scale-110 shadow-xl"
                  />
                </div>

                {/* Extra inner blue scanline effect for the video box specifically */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.01),rgba(0,0,0,0.03))] dark:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
