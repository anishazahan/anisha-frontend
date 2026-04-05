import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

//sf-pro is not available on my mac device that why i use nearly matches INter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sf-pro",
});

import { SmoothScrollProvider } from "@/components/custom/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "PPA Landing Page",
  description: "Master focus and get more done in less time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
