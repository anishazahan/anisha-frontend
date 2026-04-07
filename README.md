# 🚀 Deep Work Blueprint – High-Performance Landing Page

**🔗 [Live Demo: anisha-ppa-landing.netlify.app](https://anisha-ppa-landing.netlify.app/)**

A premium, conversion-focused landing page built with **Next.js 15**, **GSAP**, and **Tailwind CSS**. This project is engineered for high-end displays (optimized for MacBook M4 Retina) with a focus on fluid animations, modular architecture, and a flawless multi-theme experience.

## ✨ Key Features

### 🎨 Advanced Theme Engine

- **True Dark/Light Mode**: Seamlessly transitions between a high-contrast "OLED" Dark Mode and a clean, professional Light Mode.
- **Hydration-Safe Architecture**: Implements a custom `ThemeProvider` wrapper to prevent flickering and "script tag" hydration errors during initial client-side rendering.
- **Theme-Aware Components**: UI elements like the Pricing Cards, Testimonials, and Dividers dynamically update their borders, shadows, and background gradients based on the active theme.

### 🎭 High-End GSAP Animations

- **Scroll-Triggered Reveals**: Page sections utilize staggered timelines to slide and fade into view as the user scrolls.
- **Smooth Accordion System**: The Curriculum section features an accordion with `expo.out` easing for buttery-smooth height transitions.
- **Dynamic Reveal Text**: A sophisticated "Highlight Text" component that changes color word-by-word based on scroll progress.
- **Interactive Hover States**: Features magnetic buttons, glowing badges, and scale-transformations on image cards for a tactile feel.

### 📱 Precision Responsive Design

The project uses a specialized breakpoint system to ensure the UI scales perfectly from mobile devices to ultra-wide monitors:

- **Mobile** (`412px - 520px`): Includes a 1.5-slide peek for carousels to encourage swiping.
- **Tablet-SM** (`521px - 680px`): Optimized for dual-column layouts.
- **Tablet-LG** (`681px - 980px`): Triple-column and expanded grid views.
- **Desktop** (`981px+`): High-impact 4+ item grid layouts.

### 💎 Pixel-Perfect UI Elements

- **Rising Strike-through**: A custom-angled red price mark (`#FF1818`) that mimics hand-drawn designs by rising slightly above the text baseline.
- **Glowing Timeline**: A vertical timeline with a soft blue "bloom" and solid glow dots without hard outlines.
- **Section Headings**: Dynamic heading components with precise Figma-matched typography (Weight 500, Line-height 115%).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: GSAP (GreenSock Animation Platform)
- **Carousel**: Swiper.js
- **Icons**: Lucide React
- **Typography**: Inter (Variable)

---

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/anishazahan/anisha-frontend.git](https://github.com/anishazahan/anisha-frontend.git)
    ```

2.  **Install dependencies:**

    ```bash
    yarn
    ```

3.  **Run the development server:**

    ```bash
    yarn dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:3000`.

---

## 📄 License

© Copyright 2026, All Rights Reserved By Anisha Zahan.
Built with precision for peak productivity.
