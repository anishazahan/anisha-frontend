import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: "412px", max: "520px" },
        "tablet-sm": { min: "521px", max: "680px" },
        "tablet-lg": { min: "681px", max: "980px" },
        desktop: { min: "981px" },
      },
      fontFamily: {
        sans: ["var(--font-sf-pro)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["52px", { lineHeight: "115%", fontWeight: "500" }],
        h2: ["40px", { lineHeight: "115%", fontWeight: "500" }],
        h3: ["28px", { lineHeight: "115%", fontWeight: "500" }],
        h4: ["24px", { lineHeight: "135%", fontWeight: "400" }],
        h5: ["20px", { lineHeight: "135%", fontWeight: "400" }],
        "body-normal": ["17px", { lineHeight: "135%", fontWeight: "400" }],
        "body-sm": ["15px", { lineHeight: "135%", fontWeight: "400" }],
      },
      colors: {
        primary: {
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#2466F2",
          600: "#0047CC",
          700: "#003399",
          800: "#002266",
          900: "#001133",
          950: "#00081A",
        },
        text: {
          sub_heading: "#D0D5D9",
        },
        neutral: {
          0: "#FFFFFF",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E0E3E5",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        alpha: {
          white: "rgba(255, 255, 255, 0.30)",
          blue_0: "rgba(36, 102, 242, 0)",
          gray: "rgba(224, 227, 229, 0.30)",
          blue_15: "rgba(36, 102, 242, 0.15)",
          black: "rgba(0, 0, 0, 0.20)",
        },
        error: {
          500: "#FF1818",
        },
      },
      backgroundImage: {
        "glow-line-horizontal":
          "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
        "glow-line-vertical":
          "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
        "glow-reflect-sm":
          "radial-gradient(circle, #2466F2 0%, rgba(36, 102, 242, 0) 70%)",
        "glow-reflect-md":
          "radial-gradient(circle, #2466F2 0%, rgba(36, 102, 242, 0) 85%)",
        "glow-reflect-lg":
          "radial-gradient(circle, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
