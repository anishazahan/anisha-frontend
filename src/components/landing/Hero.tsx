"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import texture from "../../assets/texture.png";
import { Button } from "../ui/Button";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-16 pb-32 transition-colors duration-300 dark:bg-[#030712]">
      {/* --- BACKGROUND LAYERS --- */}
      {/* 1. Large Blue Radial Glow (Matches Figma) */}
      <div className="absolute top-[-10%] left-1/2 z-0 hidden h-[600px] w-full -translate-x-1/2 opacity-30 dark:block bg-glow-reflect-lg scale-[2]" />

      {/* 2. Texture Layer (Lines) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.1] dark:opacity-[0.2]"
        style={{
          backgroundImage: `url(${texture.src})`,
          backgroundSize: "100% 4px",
          backgroundRepeat: "repeat-y",
        }}
      />

      <div className="relative z-20 mx-auto max-w-[1280px] px-6 text-center">
        {/* --- PROMO BADGE --- */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/5 bg-neutral-900/50 px-4 py-2 backdrop-blur-sm dark:border-white/10 shadow-[0_0_15px_rgba(36,102,242,0.1)]">
          <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
          <span className="text-[13px] font-medium text-neutral-400">
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
            className="px-10 rounded-[12px] h-14 text-white"
          >
            Enroll now
          </Button>
          <Button
            variant="dark"
            size="lg"
            className="px-10 rounded-[12px] h-14 bg-neutral-900/80 border border-white/5 hover:bg-neutral-800"
          >
            Curriculum
          </Button>
        </div>

        {/* --- VIDEO BOX SECTION (1280px Aligned) --- */}
        <div className="relative mx-auto mt-20 w-full overflow-hidden rounded-[24px] border border-white/5 bg-black/40 shadow-2xl transition-transform hover:scale-[1.01] duration-500 group">
          {/* Inner Gradient Background behind the image */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary-500/10 via-transparent to-primary-500/20" />

          <div
            className="aspect-video relative z-10 cursor-pointer overflow-hidden"
            onClick={() => setPlayVideo(true)}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Course Preview"
              fill
              className="object-cover opacity-70 grayscale-[20%] transition-opacity group-hover:opacity-90"
            />

            {/* THE PLAY BUTTON (Matched to Image: White circle, Blue icon) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110">
                <div className="ml-1 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary-500 border-b-[12px] border-b-transparent" />
              </div>
            </div>

            {/* Extra inner blue scanline effect for the video box specifically */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
        </div>
      </div>

      {/* --- VIDEO PLAYER MODAL --- */}
      {playVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button
            className="absolute top-10 right-10 text-white hover:text-primary-500 transition-colors"
            onClick={() => setPlayVideo(false)}
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-5xl aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
