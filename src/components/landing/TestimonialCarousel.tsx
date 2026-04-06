"use client";

import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovingBorderBadge from "../ui/MovingBorderBadge";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: "/assets/av1.png",
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=308&h=420&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: "/assets/av2.png",
    text: "I used to spend hours procrastinating. Now, I have a clear system for deep work. The community is also amazing!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=308&h=420&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: "/assets/av3.png",
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=308&h=420&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Product Manager",
    avatar: "/assets/av1.png",
    text: "The best investment I've made for my career this year. Highly recommended for anyone in tech.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=308&h=420&auto=format&fit=crop",
  },
];

export default function TestimonialCarousel() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      id="testimonials"
      className="w-full bg-[#030712] py-24 overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <MovingBorderBadge text="Testimonials" className="mb-8" />
          <h2 className="text-h2 font-medium text-white md:text-[56px] leading-tight">
            Real Results from <br /> Real People
          </h2>
        </div>

        {/* Sub-header with Navigation */}
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-[24px] font-medium text-white">
            Join with 5K other students
          </h3>
          <div className="flex gap-4">
            <button className="swiper-prev flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 active:scale-90">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: ".swiper-prev", nextEl: ".swiper-next" }}
          centeredSlides={true}
          loop={true}
          spaceBetween={24}
          slidesPerView="auto"
          breakpoints={{
            412: { slidesPerView: 1.2, centeredSlides: false }, // Mobile
            681: { slidesPerView: 2.2, centeredSlides: true }, // Tablet
            981: { slidesPerView: 3, centeredSlides: true }, // Desktop
          }}
          className="testimonial-swiper !overflow-visible"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="!w-[308px]">
              {({ isActive }) => (
                <div
                  className={`relative h-[420px] w-[308px] rounded-[32px] border transition-all duration-500 overflow-hidden group
                    ${
                      isActive
                        ? "border-primary-500/30 scale-105 z-10"
                        : "border-white/5 bg-[#090E1A] opacity-40 scale-95"
                    }`}
                >
                  {/* --- ACTIVE STATE (VIDEO PREVIEW) --- */}
                  {isActive ? (
                    <div
                      className="relative h-full w-full cursor-pointer"
                      onClick={() => setActiveVideo(item.videoUrl)}
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.name}
                        fill
                        className="object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-500 shadow-xl transition-transform group-hover:scale-110">
                          <Play size={24} fill="currentColor" />
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-8 w-8 rounded-full border border-white/20 overflow-hidden">
                            <Image
                              src={item.avatar}
                              alt={item.name}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div>
                            <h4 className="text-[16px] font-bold text-white">
                              {item.name}
                            </h4>
                            <p className="text-[12px] text-neutral-400">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* --- STANDARD STATE (TEXT CARD) --- */
                    <div className="flex h-full flex-col p-8 justify-between">
                      <div>
                        <div className="h-10 w-10 rounded-full border border-white/20 overflow-hidden mb-6">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <p className="text-[15px] leading-relaxed text-neutral-400 italic">
                          &quot;{item.text}&quot;
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {item.name}
                        </h4>
                        <p className="test-sm text-neutral-500">{item.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <button
            className="absolute top-10 right-10 text-white"
            onClick={() => setActiveVideo(null)}
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src={`${activeVideo}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
