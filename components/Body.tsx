"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILLS_DATA = [
  {
    id: "vue",
    name: "Vue.js",
    category: "FRONTEND FRAMEWORK",
    year: "2026",
    color: "#41B883",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full p-8 opacity-80">
        <path d="M50 15L15 75h15L50 45l20 30h15z" fill="#41B883" />
        <path d="M50 35L27.5 75h15L50 62l7.5 13h15z" fill="#35495E" />
      </svg>
    ),
  },
  {
    id: "react",
    name: "React.js",
    category: "UI ENGINE & LIB",
    year: "2026",
    color: "#61DAFB",
    svg: (
      <svg
        viewBox="-11.5 -10.23174 23 20.46348"
        className="w-full h-full p-8 opacity-80"
      >
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: "nuxt",
    name: "Nuxt.js",
    category: "PRODUCTION HUB",
    year: "2025",
    color: "#00DC82",
    svg: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-8 opacity-80"
        fill="none"
      >
        <path
          d="M30 75L50 40L70 75H30Z"
          stroke="#00DC82"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M55 75L67.5 53L80 75H55Z"
          fill="#00S852"
          stroke="#00DC82"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "CROSS-PLATFORM ENGINE",
    year: "2025",
    color: "#02569B",
    svg: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-8 opacity-80"
        fill="none"
      >
        <path d="M55 15L25 45L40 60L70 30H55Z" fill="#13B9FD" />
        <path d="M40 60L25 75L40 90H55L40 75L55 60H40Z" fill="#02569B" />
        <path d="M40 60L47 67L55 60H40Z" fill="#0175C2" />
      </svg>
    ),
  },
  {
    id: "gsap",
    name: "GSAP",
    category: "MOTION & TIMELINES",
    year: "2026",
    color: "#88CE02",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full p-8 opacity-80">
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#88CE02"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M35 50h30M50 35v30"
          stroke="#88CE02"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="12" fill="#88CE02" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "UTILITY CORE",
    year: "2026",
    color: "#38BDF8",
    svg: (
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-8 opacity-80"
        fill="none"
      >
        <path
          d="M15 50C15 35 30 25 45 35C52 40 55 45 60 40C65 35 65 30 65 30C65 45 50 55 35 45C28 40 25 35 20 40C15 45 15 50 15 50Z"
          fill="#38BDF8"
        />
        <path
          d="M35 70C35 55 50 45 65 55C72 60 75 65 80 60C85 55 85 50 85 50C85 65 70 75 55 65C48 60 45 55 40 60C35 65 35 70 35 70Z"
          fill="#0EA5E9"
        />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    category: "INTERFACE DESIGN",
    year: "2025",
    color: "#F24E1E",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full p-8 opacity-80">
        <path
          d="M35 25c0-5.5 4.5-10 10-10h10v20H45c-5.5 0-10-4.5-10-10z"
          fill="#F24E1E"
        />
        <path d="M55 15c5.5 0 10 4.5 10 10s-4.5 10-10 10V15z" fill="#FF7262" />
        <path
          d="M35 45c0-5.5 4.5-10 10-10h10v20H45c-5.5 0-10-4.5-10-10z"
          fill="#A259FF"
        />
        <path d="M55 35c5.5 0 10 4.5 10 10s-4.5 10-10 10V35z" fill="#1ABC9C" />
        <path
          d="M35 65c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10s-10-4.5-10-10V65z"
          fill="#0ACF83"
        />
      </svg>
    ),
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "DATABASE SCHEMA",
    year: "2023",
    color: "#336791",
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full p-8 opacity-80">
        <rect
          x="25"
          y="25"
          width="50"
          height="50"
          rx="10"
          stroke="#336791"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="50" cy="50" r="12" fill="#336791" />
        <path
          d="M32 50h36M50 32v36"
          stroke="#336791"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
];

export default function Body() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverCardRef = useRef<HTMLDivElement>(null);
  const scrollPathRef = useRef<SVGPathElement>(null);
  const scrollGlowRef = useRef<SVGPathElement>(null);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  useGSAP(
    () => {
      // 1. Scroll-Driven Curvy SVG Path Drawing
      const mainPath = scrollPathRef.current;
      const glowPath = scrollGlowRef.current;

      if (mainPath && glowPath) {
        const pathLength = mainPath.getTotalLength();
        
        // Synchronize initial state for both sharp line and background glow
        gsap.set([mainPath, glowPath], {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Sync stroke offsets dynamically with scroll tracking
        gsap.to([mainPath, glowPath], {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
          },
        });
      }

      // 2. Existing Elements entrance timelines
      gsap.fromTo(
        ".hero-text-line",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, ease: "power3.out", duration: 1 },
      );

      gsap.fromTo(
        ".section-header-1 > *",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: ".section-header-1",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".timeline-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: ".timeline-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".section-header-2 > *",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
          duration: 0.8,
          scrollTrigger: {
            trigger: ".section-header-2",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".interactive-skill-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: ".skills-list-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );

      // QuickTo configurations for smooth card following
      const xTo = gsap.quickTo(hoverCardRef.current, "x", {
        duration: 0.35,
        ease: "power3.out",
      });
      const yTo = gsap.quickTo(hoverCardRef.current, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!hoverCardRef.current) return;

        const cardWidth = hoverCardRef.current.clientWidth;
        const cardHeight = hoverCardRef.current.clientHeight;

        xTo(e.clientX - cardWidth / 2);
        yTo(e.clientY - cardHeight / 2);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  const handleRowMouseEnter = (skillId: string) => {
    setActiveSkillId(skillId);
    gsap.to(hoverCardRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.5)",
    });
  };

  const handleRowMouseLeave = () => {
    setActiveSkillId(null);
    gsap.to(hoverCardRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white py-[6vw] select-none overflow-x-hidden"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-text {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
      `}</style>

      {/* Decorative Static Grid Lines Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 bottom-0 left-[5vw] w-px border-l border-dashed border-white/5" />
        <div className="absolute top-0 bottom-0 left-[35vw] w-px border-l border-dashed border-white/2" />
        <div className="absolute top-0 bottom-0 left-[65vw] w-px border-l border-dashed border-white/2" />
        <div className="absolute top-0 bottom-0 right-[5vw] w-px border-r border-dashed border-white/5" />
        <div className="absolute top-[15vh] left-0 right-0 h-px border-t border-dashed border-white/5" />
        <div className="absolute top-[50vh] left-0 right-0 h-px border-t border-dashed border-white/3" />
        <div className="absolute bottom-[15vh] left-0 right-0 h-px border-b border-dashed border-white/5" />
      </div>

      {/* Dynamic Animated Scroll SVG Path (Curvy + Neon Gradient) */}
      <div className="absolute inset-0 pointer-events-none z-0 w-full h-full">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="scroll-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#61DAFB" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#41B883" stopOpacity="0.7" />
              <stop offset="65%" stopColor="#88CE02" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF7262" stopOpacity="0.8" />
            </linearGradient>
            
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Core Glow Ambient Line */}
          <path
            ref={scrollGlowRef}
            d="M 10,0 C 15,15 50,10 65,25 C 80,40 20,45 35,60 C 50,75 85,75 80,100"
            stroke="url(#scroll-gradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            filter="url(#neon-glow)"
            opacity="0.35"
          />

          {/* Foreground Crisp Curvy Line */}
          <path
            ref={scrollPathRef}
            d="M 10,0 C 15,15 50,10 65,25 C 80,40 20,45 35,60 C 50,75 85,75 80,100"
            stroke="url(#scroll-gradient)"
            strokeWidth="0.25"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Segment 1: Header and Timelines Wrapper */}
      <div className="w-[90%] mx-auto relative z-10 mb-[8vw] space-y-[8vw]">
        <section className="space-y-[2vw]">
          <div className="section-header-1 max-w-[65vw] space-y-[1.5vw] relative">
            <p className="text-[clamp(10px,0.8vw,14px)] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-[0.5vw]">
              <span className="w-[0.4vw] h-[0.4vw] min-w-1.25 min-h-1.25 rounded-full bg-white/40 inline-block" />
              Executive Summary & Timeline
            </p>
            <h2 className="text-[4.2vw] font-bold font-sans tracking-tight leading-[1.1] text-[#EAEAEA]">
              <span className="hero-text-line block">
                Architecting scalable SaaS, mobile,
              </span>
              <span className="hero-text-line block text-white/50">
                and progressive web ecosystems.
              </span>
            </h2>
            <p className="hero-text-line text-[clamp(14px,1.2vw,20px)] text-gray-400 font-sans max-w-[45vw] pt-[1vw] leading-relaxed">
              Senior Frontend Engineer specializing in transforming
              sophisticated product designs into high-performance user
              interfaces while optimizing core delivery speeds up to 50%.
            </p>
            <div className="w-full pt-[2vw] border-b border-dashed border-white/10" />
          </div>
        </section>

        <section>
          <div className="timeline-grid grid grid-cols-1 xl:grid-cols-3 gap-[2.5vw] items-stretch">
            <div className="timeline-card bg-white/1 hover:bg-white/2 border border-white/10 rounded-[1.8vw] p-[2.5vw] flex flex-col justify-between backdrop-blur-md transition-all duration-300 group relative">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-[1vw]">
                  <span className="text-[clamp(10px,0.8vw,13px)] font-mono tracking-widest text-gray-500">
                    2023 — 2026
                  </span>
                  <span className="text-[clamp(9px,0.7vw,11px)] font-mono px-[0.6vw] py-[0.15vw] rounded border border-white/10 text-gray-400 uppercase tracking-wider">
                    SaaS & Mobile
                  </span>
                </div>
                <h4 className="text-[1.6vw] font-bold text-white mt-[1.8vw] tracking-tight">
                  Senior Frontend Engineer
                </h4>
                <p className="text-[clamp(12px,0.9vw,15px)] font-semibold text-gray-400 mt-[0.2vw] font-mono">
                  Dibasys Pvt Ltd
                </p>
                <ul className="mt-[1.8vw] space-y-[0.8vw] text-[clamp(13px,1vw,16px)] text-gray-400 font-sans leading-relaxed list-none">
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Managed end-to-end full product lifecycles using Agile
                      Scrum frameworks.
                    </span>
                  </li>
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Achieved a 50% increase in layout performance and load
                      optimization.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-[clamp(10px,0.75vw,13px)] font-mono text-gray-600 uppercase tracking-widest pt-[1.5vw] mt-[1.8vw] border-t border-white/5">
                Ecosystem Core
              </div>
            </div>

            <div className="timeline-card bg-white/1 hover:bg-white/2 border border-white/10 rounded-[1.8vw] p-[2.5vw] flex flex-col justify-between backdrop-blur-md transition-all duration-300 group relative">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-[1vw]">
                  <span className="text-[clamp(10px,0.8vw,13px)] font-mono tracking-widest text-gray-500">
                    2023
                  </span>
                  <span className="text-[clamp(9px,0.7vw,11px)] font-mono px-[0.6vw] py-[0.15vw] rounded border border-white/10 text-gray-400 uppercase tracking-wider">
                    Web Apps
                  </span>
                </div>
                <h4 className="text-[1.6vw] font-bold text-white mt-[1.8vw] tracking-tight">
                  Software Developer
                </h4>
                <p className="text-[clamp(12px,0.9vw,15px)] font-semibold text-gray-400 mt-[0.2vw] font-mono">
                  Codea Technologies
                </p>
                <ul className="mt-[1.8vw] space-y-[0.8vw] text-[clamp(13px,1vw,16px)] text-gray-400 font-sans leading-relaxed list-none">
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Led responsive, mobile-first design system reviews raising
                      interaction by 30%.
                    </span>
                  </li>
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Optimized PostgreSQL query data extraction loops, shaving
                      15% off latencies.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-[clamp(10px,0.75vw,13px)] font-mono text-gray-600 uppercase tracking-widest pt-[1.5vw] mt-[1.8vw] border-t border-white/5">
                Database & Systems
              </div>
            </div>

            <div className="timeline-card bg-white/1 hover:bg-white/2 border border-white/10 rounded-[1.8vw] p-[2.5vw] flex flex-col justify-between backdrop-blur-md transition-all duration-300 group relative">
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-[1vw]">
                  <span className="text-[clamp(10px,0.8vw,13px)] font-mono tracking-widest text-gray-500">
                    2022 — 2023
                  </span>
                  <span className="text-[clamp(9px,0.7vw,11px)] font-mono px-[0.6vw] py-[0.15vw] rounded border border-white/10 text-gray-400 uppercase tracking-wider">
                    Full Stack
                  </span>
                </div>
                <h4 className="text-[1.6vw] font-bold text-white mt-[1.8vw] tracking-tight">
                  MEARN Stack Intern
                </h4>
                <p className="text-[clamp(12px,0.9vw,15px)] font-semibold text-gray-400 mt-[0.2vw] font-mono">
                  Luminar Technolab
                </p>
                <ul className="mt-[1.8vw] space-y-[0.8vw] text-[clamp(13px,1vw,16px)] text-gray-400 font-sans leading-relaxed list-none">
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Shipped and maintained end-to-end API integration layers
                      for over 5 live apps.
                    </span>
                  </li>
                  <li className="flex items-start gap-[0.6vw]">
                    <span className="text-white/30 mt-[0.4vw] text-[clamp(8px,0.6vw,11px)]">
                      ■
                    </span>
                    <span>
                      Reduced prototyping cycles by 40% using optimized
                      component modules.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-[clamp(10px,0.75vw,13px)] font-mono text-gray-600 uppercase tracking-widest pt-[1.5vw] mt-[1.8vw] border-t border-white/5">
                Integration & Dev
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Continuous Auto-Scrolling Marquee — Positioned Out of bounds for Full screen bleed */}
      <section className="w-full overflow-hidden py-[3vw] border-y border-white/10 relative z-10 my-[8vw]">
        <div className="animate-marquee-text flex whitespace-nowrap text-[10vw] font-black tracking-tighter uppercase leading-none text-[#EAEAEA]/90 select-none">
          <span className="pr-12">
            WHAT WE DO • CRAFTING DIGITAL EXPERIENCES • SENIOR FRONTEND ENGINEER
            • INTERACTION DESIGNER •
          </span>
          <span className="pr-12">
            WHAT WE DO • CRAFTING DIGITAL EXPERIENCES • SENIOR FRONTEND ENGINEER
            • INTERACTION DESIGNER •
          </span>
        </div>
      </section>

      {/* Segment 2: Skills Stack Wrapper */}
      <div className="w-[90%] mx-auto relative z-10 mt-[8vw]">
        <section className="pt-[4vw] border-t border-white/10 relative">
          <div>
            <div className="section-header-2">
              <p className="text-[clamp(10px,0.8vw,14px)] font-mono tracking-widest text-gray-500 uppercase flex items-center gap-[0.5vw]">
                <span className="w-[0.4vw] h-[0.4vw] min-w-1.25 min-h-1.25 rounded-full bg-white/40 inline-block" />
                Ecosystem & Stack
              </p>
              <h3 className="text-[2.6vw] font-black tracking-tighter text-white mt-[0.5vw] mb-[4vw] uppercase">
                The Technical Arsenal
              </h3>
            </div>

            <div className="skills-list-container flex flex-col w-full border-t border-white/10">
              {SKILLS_DATA.map((skill) => {
                const isHovered = activeSkillId === skill.id;
                const isAnyRowHovered = activeSkillId !== null;

                return (
                  <div
                    key={skill.id}
                    onMouseEnter={() => handleRowMouseEnter(skill.id)}
                    onMouseLeave={handleRowMouseLeave}
                    className="interactive-skill-row flex justify-between items-center py-[2vw] border-b border-white/10 cursor-none transition-all duration-300 relative"
                    style={{
                      opacity: isAnyRowHovered && !isHovered ? 0.25 : 1,
                      transform: isHovered
                        ? "translateX(1.5vw)"
                        : "translateX(0px)",
                    }}
                  >
                    <div className="flex items-center gap-[2vw]">
                      <span className="text-[3.2vw] font-extrabold tracking-tight transition-all duration-300 leading-none">
                        {skill.name}
                      </span>
                      {isHovered && (
                        <div
                          className="w-[1.6vw] h-[1.6vw] min-w-4.5 min-h-4.5 rounded-full flex items-center justify-center border border-white text-[10px] animate-pulse"
                          style={{ borderColor: skill.color }}
                        >
                          +
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-[4vw] text-right">
                      <span className="hidden sm:inline text-[clamp(10px,0.8vw,14px)] font-semibold tracking-wider text-gray-400 uppercase font-mono">
                        {skill.category}
                      </span>
                      <span className="text-[clamp(11px,0.9vw,15px)] font-mono text-gray-500">
                        {skill.year}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Floating Cursor/Hover Card Toolkit */}
      <div
        ref={hoverCardRef}
        className="fixed pointer-events-none z-50 overflow-hidden rounded-[20px] bg-[#111111]/90 backdrop-blur-md border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.8)] w-60 h-60 opacity-0 scale-75 origin-center select-none flex flex-col justify-between p-4"
        style={{
          boxShadow: activeSkillId
            ? `0 16px 48px -12px ${SKILLS_DATA.find((s) => s.id === activeSkillId)?.color}33`
            : "none",
        }}
      >
        <div className="flex-1 flex items-center justify-center">
          {SKILLS_DATA.find((s) => s.id === activeSkillId)?.svg}
        </div>

        <div className="flex justify-between items-end border-t border-white/5 pt-2 mt-2">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
              Focus Hub
            </span>
            <span className="text-sm font-bold text-white">
              {SKILLS_DATA.find((s) => s.id === activeSkillId)?.name ||
                "Technology"}
            </span>
          </div>
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-white"
            style={{
              borderColor: SKILLS_DATA.find((s) => s.id === activeSkillId)
                ?.color,
              color: SKILLS_DATA.find((s) => s.id === activeSkillId)?.color,
            }}
          >
            ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
}