"use client";

import Link from "next/link";

const footerLinks = [
  { name: "Terms & conditions", href: "#" },
  { name: "Refund policy", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Support", href: "#" },
];

export function Footer() {
  return (
    // bg-[#030712]
    <footer className="relative w-full bg-[#030712] pt-16 pb-10">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-glow-line-horizontal opacity-40" />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-[14px] text-neutral-500 order-2 md:order-1">
            © Copyright 2026, All Rights Reserved
          </p>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 order-1 md:order-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] text-neutral-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
