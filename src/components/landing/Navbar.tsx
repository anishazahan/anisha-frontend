"use client";

import { cn } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../assets/Vector.png";
import { ThemeToggle } from "../custom/ThemeToggle";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Overview", href: "#" },
  { name: "Curriculum", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        (window as any).lenis?.scrollTo(target, { offset: -88 }); // Adjust offset for navbar
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 text-neutral-900 backdrop-blur-md dark:bg-black/80 dark:text-white border-b border-neutral-200 dark:border-white/10"
          : "bg-white text-neutral-900 dark:bg-black dark:text-white",
      )}
    >
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-60 dark:opacity-60 light:bg-neutral-200 light:opacity-100" />
      )}

      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src={logo}
            alt="PPA Logo"
            width={120}
            height={40}
            className="h-auto w-auto object-contain dark:brightness-0 dark:invert"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-body-sm font-normal text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="scale-[0.8] origin-right">
            <ThemeToggle />
          </div>

          <Button
            variant="primary"
            size="md"
            className="font-semibold px-8 rounded-[12px]"
          >
            Enroll now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-neutral-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* /-- Mobile Menu Overlay --/  */}
      {isOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white p-6 flex flex-col gap-6 border-b border-neutral-200 dark:border-white/10 lg:hidden dark:bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-h5 text-neutral-900 dark:text-white"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-neutral-200 dark:border-white/10" />
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Button className="font-normal px-4" variant="primary">
              Enroll now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
