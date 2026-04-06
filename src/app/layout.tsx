import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SmoothScrollProvider } from "@/components/custom/SmoothScrollProvider";
import { ThemeProvider } from "next-themes";
// import { ThemeProvider } from "@/components/provider/ThemeProvider";

//sf-pro is not available on my mac device that why i use nearly matches INter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "PPA Landing Page",
  description: "Master focus and get more done in less time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} h-full antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
