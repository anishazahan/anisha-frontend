"use client";

import { Testimonial, TESTIMONIALS } from "@/lib/data/landing.data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import MovingBorderBadge from "../ui/MovingBorderBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CARD_W = 308;
const CARD_GAP = 16;
const STEP = CARD_W + CARD_GAP;

type BP = "mobile" | "tablet-sm" | "tablet-lg" | "desktop";

function useBP(): BP {
  const [bp, setBP] = useState<BP>("desktop");
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w <= 520) setBP("mobile");
      else if (w <= 680) setBP("tablet-sm");
      else if (w <= 980) setBP("tablet-lg");
      else setBP("desktop");
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return bp;
}

function visibleCount(bp: BP): number {
  if (bp === "mobile") return 1;
  if (bp === "tablet-sm") return 2;
  if (bp === "tablet-lg") return 3;
  return 4;
}

function Avatar({
  src,
  name,
  size = 40,
}: {
  src: string;
  name: string;
  size?: number;
}) {
  const [err, setErr] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  if (err)
    return (
      <div
        className="rounded-full bg-neutral-700 flex items-center justify-center text-white font-semibold flex-shrink-0"
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        {initials}
      </div>
    );
  return (
    <div
      className="relative rounded-full overflow-hidden border border-white/15 flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        onError={() => setErr(true)}
      />
    </div>
  );
}

function TextCard({ item, active }: { item: Testimonial; active: boolean }) {
  return (
    <div
      className="flex flex-col justify-between h-full p-7 rounded-[24px] transition-all duration-500"
      style={{
        background: active
          ? "linear-gradient(145deg,#12132a 0%,#0d0e20 100%)"
          : "#0b0c14",
        border: active
          ? "1px solid rgba(99,102,241,0.3)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: active ? "0 0 40px rgba(99,102,241,0.1)" : "none",
      }}
    >
      <div className="flex flex-col gap-5">
        <Avatar src={item.avatar} name={item.name} size={40} />
        <p className="text-[14px] leading-[1.7] text-neutral-300">
          {item.text}
        </p>
      </div>
      <div>
        <p className="text-[15px] font-bold text-white">{item.name}</p>
        <p className="text-[12px] text-neutral-500 mt-0.5">{item.role}</p>
      </div>
    </div>
  );
}

// ── Video Card ─────────────────────────────────────────────────────────────
function VideoCard({
  item,
  active,
  onPlay,
}: {
  item: Testimonial;
  active: boolean;
  onPlay: (url: string) => void;
}) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-end h-full rounded-[24px] overflow-hidden transition-all duration-500 group/vid cursor-pointer"
      style={{
        border: active
          ? "1px solid rgba(99,102,241,0.3)"
          : "1px solid rgba(255,255,255,0.05)",
        boxShadow: active ? "0 0 40px rgba(99,102,241,0.12)" : "none",
      }}
      onClick={() => active && onPlay(item.videoUrl)}
    >
      {/* Thumbnail */}
      <div className="absolute inset-0">
        {!imgErr ? (
          <Image
            src={item.thumbnail}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover/vid:scale-105"
            onError={() => setImgErr(true)}
          />
        ) : (
          <div className="w-full h-full bg-neutral-800" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300"
        style={{ opacity: active ? 1 : 0.4 }}
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-200 group-hover/vid:scale-110"
          style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.5)" }}
        >
          <Play size={22} className="text-blue-600 ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Name / role */}
      <div className="relative z-10 p-6">
        <p className="text-[15px] font-bold text-white">{item.name}</p>
        <p className="text-[12px] text-neutral-300 mt-0.5">{item.role}</p>
      </div>
    </div>
  );
}

// ── Main Component
export default function TestimonialCarousel() {
  const container = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bp = useBP();
  const total = TESTIMONIALS.length;

  const [activeIdx, setActiveIdx] = useState(1);
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    setActiveIdx(bp === "mobile" ? 0 : 1);
  }, [bp]);

  const updateTrack = useCallback(
    (idx: number) => {
      if (!trackRef.current) return;

      const visible = visibleCount(bp);
      const maxOffset = Math.max(0, (total - visible) * STEP);

      let focusSlot: number;
      if (bp === "mobile") focusSlot = 0;
      else if (bp === "tablet-sm") focusSlot = 0;
      else if (bp === "tablet-lg") focusSlot = 1;
      else focusSlot = 1;

      const rawOffset = (idx - focusSlot) * STEP;
      const offset = Math.max(0, Math.min(rawOffset, maxOffset));

      gsap.to(trackRef.current, {
        x: -offset,
        duration: 0.5,
        ease: "power3.out",
      });
    },
    [bp, total],
  );

  useEffect(() => {
    updateTrack(activeIdx);
  }, [activeIdx, updateTrack]);

  const prev = () => setActiveIdx((i) => Math.max(0, i - 1));

  const next = () => setActiveIdx((i) => Math.min(total - 1, i + 1));

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container.current, start: "top 78%" },
      });
      tl.from(".ts-badge", {
        y: -18,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
      })
        .from(
          ".ts-title",
          {
            y: 28,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".ts-subrow",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".ts-card",
          {
            y: 36,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.25",
        );
    },
    { scope: container },
  );

  return (
    <section
      id="testimonials"
      ref={container}
      className="w-full bg-white dark:bg-[#030712] py-24 overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 flex flex-col items-center text-center gap-6">
          <div className="ts-badge">
            <MovingBorderBadge text="Testimonials" />
          </div>
          <h2 className="ts-title text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-tight text-neutral-900 dark:text-white">
            Real Results from
            <br />
            Real People
          </h2>
        </div>

        {/* ── Sub-row ── */}
        <div className="ts-subrow mb-8 flex items-center justify-between gap-4 flex-wrap">
          <h3 className="text-[20px] sm:text-[24px] font-semibold text-neutral-900 dark:text-white leading-snug max-w-[260px] sm:max-w-none">
            Join with 5K other students
          </h3>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={prev}
              disabled={activeIdx === 0}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 transition-all hover:bg-neutral-100 active:scale-90 disabled:opacity-25 disabled:cursor-not-allowed dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={activeIdx === total - 1}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900 transition-all hover:bg-neutral-100 active:scale-90 disabled:opacity-25 disabled:cursor-not-allowed dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Card Track ── */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{
              gap: `${CARD_GAP}px`,
              // total track width
              width: `${total * CARD_W + (total - 1) * CARD_GAP}px`,
            }}
          >
            {TESTIMONIALS.map((item, i) => {
              const isActive = i === activeIdx;
              return (
                <div
                  key={item.id}
                  className="ts-card flex-shrink-0 cursor-pointer transition-all duration-500"
                  style={{
                    width: `${CARD_W}px`,
                    height: "420px",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                    transformOrigin: "center bottom",
                  }}
                  onClick={() => setActiveIdx(i)}
                >
                  {item.type === "video" ? (
                    <VideoCard
                      item={item}
                      active={isActive}
                      onPlay={(url) => setModalUrl(url)}
                    />
                  ) : (
                    <TextCard item={item} active={isActive} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Video Modal ── */}
      {modalUrl && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setModalUrl(null)}
        >
          <button
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setModalUrl(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`${modalUrl}?autoplay=1`}
              title="Testimonial video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
