3"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLHeadingElement>(null);
  const [showCredits, setShowCredits] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        giantTextRef.current,
        {
          y: "80%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".footer-fade-el",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="w-full bg-[#E5E5E5]/5 text-white pt-[6vw] pb-[2.5vw] px-[5vw] select-none relative z-10 border-t border-dashed border-white/10 scroll-mt-24 flex flex-col justify-between overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 w-full mb-[4vw]">
        {/* Left Column: Contacts */}
        <div className="footer-fade-el flex flex-col gap-[1vw]">
          <span className="text-[clamp(12px,1.1vw,16px)] font-medium uppercase tracking-[0.25em] opacity-60 font-sans">
            Contacts
          </span>
          <a
            href="mailto:ronypeter2001official@gmail.com"
            className="text-[clamp(14px,1.8vw,28px)] font-bold tracking-tight hover:text-white/60 transition-all duration-300"
          >
            ronypeter2001official@gmail.com
          </a>
        </div>

        {/* Middle Column: Follow (Instagram) */}
        <div className="footer-fade-el flex flex-col gap-[1vw] md:items-center">
          <div className="flex flex-col gap-[1vw] items-start">
            <span className="text-[clamp(12px,1.1vw,16px)] font-medium uppercase tracking-[0.25em] opacity-60 font-sans">
              Follow
            </span>
            <a
              href="https://instagram.com/roo_n_ey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(14px,1.8vw,28px)] font-bold tracking-tight hover:text-white/60 transition-all duration-300"
            >
              @roo_n_ey
            </a>
          </div>
        </div>

        {/* Right Column: Connect (LinkedIn) */}
        <div className="footer-fade-el flex flex-col gap-[1vw] items-end">
          <div className="flex flex-col gap-[1vw] items-end">
            <span className="text-[clamp(12px,1.1vw,16px)] font-medium uppercase tracking-[0.25em] opacity-60 font-sans">
              Connect
            </span>
            <a
              href="https://www.linkedin.com/in/rony-peter-289394256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(14px,1.8vw,28px)] font-bold tracking-tight hover:text-white/60 transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rony-peter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(14px,1.8vw,28px)] font-bold tracking-tight hover:text-white/60 transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden py-[1vw] my-[1vw] flex items-center justify-center">
        <h2
          ref={giantTextRef}
          className="text-[13vw] font-black tracking-tighter leading-none uppercase text-center w-full select-none cursor-default font-sans transform-gpu text-white"
          style={{ fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }}
        >
          RONY PETER
        </h2>
      </div>

      {showCredits && (
        <div className="fixed bottom-24 right-8 bg-[#111111] border border-white/10 text-white text-xs px-4 py-3 rounded-xl shadow-xl z-50 flex items-center gap-3 animate-bounce">
          <span>Designed & developed with love in 2026.</span>
          <button 
            onClick={() => setShowCredits(false)} 
            className="text-white/40 hover:text-white font-bold"
          >
            ✕
          </button>
        </div>
      )}

      <div className="footer-fade-el border-t border-white/10 pt-[2vw] flex flex-row justify-between items-center text-[clamp(10px,0.8vw,14px)] font-mono uppercase tracking-wider">
        <span>&copy;2026 — Rony Peter</span>
        <button 
          onClick={() => setShowCredits(true)}
          className="hover:text-white/60 transition-colors duration-300"
        >
          Credits
        </button>
      </div>
    </footer>
  );
}