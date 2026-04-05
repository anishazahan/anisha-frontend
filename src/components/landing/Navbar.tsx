"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <nav className="sticky top-0 z-50 w-full bg-black text-white transition-colors duration-300 dark:bg-black light:bg-white light:text-neutral-900">
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-60 dark:opacity-60 light:bg-neutral-200 light:opacity-100" />

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
            className="h-auto w-auto object-contain brightness-0 invert dark:brightness-0 dark:invert light:brightness-100 light:invert-0"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-body-sm font-normal text-neutral-400 transition-colors hover:text-white light:text-neutral-500 light:hover:text-neutral-900"
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
          className="block lg:hidden text-white light:text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* /-- Mobile Menu Overlay --/  */}
      {isOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-black p-6 flex flex-col gap-6 border-b border-white/10 lg:hidden dark:bg-black light:bg-white light:border-neutral-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-h5 text-white light:text-neutral-900"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-white/10 light:border-neutral-200" />
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
