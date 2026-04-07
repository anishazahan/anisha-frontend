import { StaticImageData } from "next/image";
import avater1 from "../../assets/cta-1.png";
import avater2 from "../../assets/cta-2.png";
import avater3 from "../../assets/cta-3.png";
import img1 from "../../assets/focus-1.jpg";
import img2 from "../../assets/focus-2.jpg";
import img3 from "../../assets/focus-3.jpg";

export const curriculumData = [
  {
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        title: "Understanding Focus & Distraction",
        time: "14:23",
        isPreview: true,
      },
      {
        title: "The Science Behind Deep Work",
        time: "22:51",
        isPreview: false,
      },
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        isPreview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        isPreview: false,
      },
    ],
  },
  {
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        isPreview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        isPreview: false,
      },
    ],
  },
  {
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        isPreview: false,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        isPreview: true,
      },
    ],
  },
  {
    title: "Module 4: Advanced Focus & Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        title: "Identifying Your Productivity Killers",
        time: "34:42",
        isPreview: true,
      },
      {
        title: "How to Strengthen Your Attention Span",
        time: "27:08",
        isPreview: false,
      },
    ],
  },
];

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string | StaticImageData;
  text: string;
  type: "text" | "video";
  thumbnail: string | StaticImageData;
  videoUrl: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Freelance Designer",
    avatar: avater1,
    text: "As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!",
    type: "text",
    thumbnail: img1,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 2,
    name: "Daniel Foster",
    role: "Content Creator",
    avatar: avater2,
    text: "I used to spend hours procrastinating. Now I have a clear system for deep work. My output has tripled and the community support is incredible.",
    type: "video",
    thumbnail: img2,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 3,
    name: "Mark Davidson",
    role: "Software Developer",
    avatar: avater3,
    text: "I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!",
    type: "text",
    thumbnail: img3,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 4,
    name: "Tom David",
    role: "Entrepreneur",
    avatar: avater1,
    text: "This is the most practical productivity course I've ever taken. The results were visible within the first week. I now complete more in 3 hours than I used to in a full day.",
    type: "video",
    thumbnail: img1,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 5,
    name: "James Wu",
    role: "Entrepreneur",
    avatar: avater2,
    text: "Procrastination was killing my progress until I found this course. Now I take consistent action every single day and my results have skyrocketed beyond what I thought possible.",
    type: "text",
    thumbnail: img1,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 6,
    name: "Priya Sharma",
    role: "UX Researcher",
    avatar: avater3,
    text: "The deep work framework changed everything for me. I went from scattered and overwhelmed to focused and intentional. My design work improved dramatically in just two weeks.",
    type: "video",
    thumbnail: img3,
    videoUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
];
