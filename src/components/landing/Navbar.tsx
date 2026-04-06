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
  { name: "Overview", href: "#overview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#overview");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Handle Navbar Background Change on Scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // 2. Scroll Spy: Detect which section is active
    navLinks.forEach((link) => {
      ScrollTrigger.create({
        trigger: link.href,
        start: "top 120px", // Detect slightly before it hits the top
        end: "bottom 120px",
        onEnter: () => setActiveSection(link.href),
        onEnterBack: () => setActiveSection(link.href),
      });
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      // Update active state immediately on click for better UX
      setActiveSection(href);

      const target = document.querySelector(href);
      if (target) {
        (window as any).lenis?.scrollTo(target, {
          offset: -88,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/80 py-4 text-neutral-900 backdrop-blur-md dark:bg-black/80 dark:text-white border-b border-neutral-200 dark:border-white/10"
          : "bg-white py-6 text-neutral-900 dark:bg-black dark:text-white",
      )}
    >
      {/* Fancy Glowing Bottom Border (Only shows when not scrolled) */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-40" />
      )}

      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 lg:px-8">
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
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-body-sm font-medium transition-all duration-300 rounded-full",
                  isActive
                    ? "text-primary-500 dark:text-primary-400"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                )}
              >
                {link.name}
                {/* Visual indicator for active state (Slide effect) */}
                {isActive && (
                  <gsap.div
                    layoutId="nav-active"
                    className="absolute inset-0 z-[-1] bg-primary-500/5 dark:bg-primary-500/10 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <ThemeToggle />
          <Button
            variant="primary"
            size="md"
            className="font-semibold px-8 rounded-[12px] h-12 shadow-lg shadow-primary-500/20"
          >
            Enroll now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-neutral-900 dark:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={cn(
          "absolute top-[100%] left-0 w-full bg-white dark:bg-black border-b border-neutral-200 dark:border-white/10 overflow-hidden transition-all duration-500 ease-in-out lg:hidden",
          isOpen ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0 py-0",
        )}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={cn(
                  "text-[24px] font-medium transition-colors",
                  isActive
                    ? "text-primary-500"
                    : "text-neutral-500 dark:text-neutral-400",
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-4 flex items-center justify-between border-t border-neutral-200 dark:border-white/10 pt-6">
            <ThemeToggle />
            <Button variant="primary" className="px-8 h-12">
              Enroll now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
