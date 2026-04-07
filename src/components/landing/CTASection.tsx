"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from "../../assets/cta-1.png";
import img2 from "../../assets/cta-2.png";
import img3 from "../../assets/cta-3.png";
import SectionHeading from "../ui/SectionHeading";

const CTASection = () => {
  const router = useRouter();

  const avatars = [img1, img2, img3];

  const handleJoinClick = () => {
    router.push("/enroll");
  };

  return (
    <section className="w-full bg-neutral-100 dark:bg-bg-surface_bg py-24 transition-colors duration-300">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-12 px-6 md:flex-row lg:px-8">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <SectionHeading
            className="max-w-[250px] mx-auto md:max-w-full"
            title={"The Deep Work\n Blueprint"}
          />

          <p className="mt-6 text-body-normal text-neutral-800 dark:text-text-sub_heading max-w-[250px] mx-auto md:mx-0 md:max-w-full">
            Master Focus & Get More Done in Less Time
          </p>
        </div>

        <div
          //   onClick={handleJoinClick}
          className="group relative w-full max-w-[420px] cursor-pointer overflow-hidden rounded-3xl bg-primary-500 p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(36,102,242,0.3)] active:scale-[0.98]"
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

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-500 transition-transform duration-500 ease-out group-hover:rotate-[-45deg] shadow-lg">
              <ArrowRight size={24} strokeWidth={3} />
            </div>
          </div>

          <div className="mt-16">
            <p className="  text-white tracking-tight">
              Join with 5K other students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
