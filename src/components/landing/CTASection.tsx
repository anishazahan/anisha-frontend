"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from "../../assets/cta-1.png";
import img2 from "../../assets/cta-2.png";
import img3 from "../../assets/cta-3.png";

const CTASection = () => {
  const router = useRouter();

  const avatars = [img1, img2, img3];

  const handleJoinClick = () => {
    router.push("/enroll");
  };

  return (
    <section className="w-full bg-bg-surface_bg py-20 transition-colors duration-300">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-12 px-6 md:flex-row lg:px-8">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-[40px] font-medium leading-[1.1] text-white md:text-[56px] lg:text-[64px]">
            The Deep <br className="hidden md:block" /> Work Blueprint
          </h2>
          <p className="mt-6 text-body-normal text-neutral-400">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        {/* Blue Card */}
        <div
          //   onClick={handleJoinClick}
          className="group relative w-full max-w-[420px] cursor-pointer overflow-hidden rounded-[32px] bg-primary-500 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(36,102,242,0.3)] active:scale-[0.98]"
        >
          <div className="flex justify-between items-start">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="h-12 w-12 overflow-hidden rounded-full "
                >
                  <Image
                    src={src}
                    alt="student"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Dynamic Action Circle */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-500 transition-transform duration-500 ease-out group-hover:rotate-[-45deg] shadow-lg">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          </div>

          <div className="mt-16">
            <p className="text-[20px] font-medium text-white tracking-tight">
              Join with 5K other students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
