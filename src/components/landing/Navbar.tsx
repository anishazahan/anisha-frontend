"use client";

import { cn } from "@/utils/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoText from "../../assets/PPA.png";
import lightLogo from "../../assets/Vector (1).png";
import logo from "../../assets/Vector.png";
import { ThemeToggle } from "../custom/ThemeToggle";
import { Button } from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { name: "Overview", href: "#overview" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#overview");

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      let current = "#overview";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = link.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    if (!navRef.current || !indicatorRef.current) return;

    const activeEl = navRef.current.querySelector(
      `[data-link='${active}']`,
    ) as HTMLElement;

    if (!activeEl) return;

    const { offsetLeft, offsetWidth } = activeEl;

    gsap.to(indicatorRef.current, {
      x: offsetLeft,
      width: offsetWidth,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [active]);

  //  Smooth scroll
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (href === "#") {
        (window as any).lenis?.scrollTo(0);
        setIsOpen(false);
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        (window as any).lenis?.scrollTo(target, {
          offset: -88,
          duration: 1.2,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
      }

      setActive(href);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/80 text-neutral-900 backdrop-blur-md dark:bg-black/80 dark:text-white"
          : "bg-white text-neutral-900 dark:bg-black dark:text-white",
      )}
    >
      {/* border Line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-60" />

      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 gap-2 ">
          {/* // dark logo */}
          <Image
            src={logo}
            alt="PPA Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          <Image
            src={lightLogo}
            alt="PPA Logo"
            width={40}
            height={40}
            className="dark:hidden"
          />

          <Image
            src={logoText}
            width={80}
            height={12}
            alt="PPA Text Logo"
            className="h-[28px] w-auto dark:block hidden"
          />

          <p className="text-body-sm  text-4xl  text-primary-500 dark:text-white dark:hidden">
            PPA
          </p>
        </Link>

        {/*  Desktop Nav */}
        <div
          ref={navRef}
          className="relative hidden items-center gap-2 lg:flex"
        >
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-[2px] bg-transparent rounded-full"
            style={{ width: 0 }}
          />

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-link={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={cn(
                "px-3 py-2 text-body-sm transition-colors duration-200",
                active === link.href
                  ? "text-primary-500 font-medium"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="scale-[0.8] origin-right">
            <ThemeToggle />
          </div>

          <Button
            variant="primary"
            size="md"
            className="font-medium text-white px-8 rounded-xl"
          >
            Enroll now
          </Button>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white p-6 flex flex-col gap-6 border-b border-neutral-200 dark:bg-black dark:border-white/10 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className={cn(
                "text-h5 transition-colors duration-200",
                active === link.href
                  ? "text-primary-500"
                  : "text-neutral-900 dark:text-white",
              )}
            >
              {link.name}
            </Link>
          ))}

          <hr className="border-neutral-200 dark:border-white/10" />

          <div className="flex items-center justify-between">
            <ThemeToggle />
            <Button className="px-4 text-white" variant="primary">
              Enroll now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
