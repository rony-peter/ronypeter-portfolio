"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroParticles from "./HeroParticles";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 4000);

    return () => clearTimeout(delayTimer);
  }, []);

  useGSAP(
    () => {
      if (!startAnimation) return;

      const tl = gsap.timeline();

      gsap.set([".grid-line", ".bg-text-char", ".hero-image"], { opacity: 1 });

      tl.from(".grid-line-v", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.4,
        ease: "power3.inOut",
        stagger: 0.05,
      });

      tl.from(
        ".grid-line-h",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.08,
        },
        "-=1.0",
      );

      tl.from(
        ".bg-text-char",
        {
          y: 120,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.03,
        },
        "-=0.8",
      );

      tl.from(
        ".hero-image",
        {
          y: 60,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.8",
      );
    },
    { scope: heroRef, dependencies: [startAnimation] },
  );

  useGSAP(
    () => {
      if (!startAnimation) return;

      const textX = gsap.quickTo(".parallax-text", "x", {
        duration: 0.8,
        ease: "power2.out",
      });
      const textY = gsap.quickTo(".parallax-text", "y", {
        duration: 0.8,
        ease: "power2.out",
      });

      const imageX = gsap.quickTo(".parallax-image", "x", {
        duration: 0.6,
        ease: "power2.out",
      });
      const imageY = gsap.quickTo(".parallax-image", "y", {
        duration: 0.6,
        ease: "power2.out",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;

        const { width, height, left, top } =
          containerRef.current.getBoundingClientRect();

        const mouseX = (e.clientX - left) / width - 0.5;
        const mouseY = (e.clientY - top) / height - 0.5;

        textX(mouseX * 20);
        textY(mouseY * 20);

        imageX(mouseX * -50);
        imageY(mouseY * -50);
      };

      const handleMouseLeave = () => {
        textX(0);
        textY(0);
        imageX(0);
        imageY(0);
      };

      const container = containerRef.current;
      if (container) {
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
        if (container) {
          container.removeEventListener("mousemove", handleMouseMove);
          container.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    },
    { scope: heroRef, dependencies: [startAnimation] },
  );

  const name = "RONY PETER";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden px-8 select-none"
    >
      <div className="absolute inset-0 pointer-events-none px-8">
        <div className="absolute inset-y-0 left-8 right-8 grid grid-cols-8 h-full w-[calc(100%-4rem)]">
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-white/10 h-full w-full"></div>
          <div className="grid-line grid-line-v opacity-0 border-l border-r border-white/10 h-full w-full"></div>
        </div>

        <div className="absolute inset-x-0 top-[20%] grid-line grid-line-h opacity-0 border-b border-white/10 w-full"></div>
        <div className="absolute inset-x-0 top-[40%] grid-line grid-line-h opacity-0 border-b border-white/10 w-full"></div>
        <div className="absolute inset-x-0 top-[60%] grid-line grid-line-h opacity-0 border-b border-white/10 w-full"></div>
        <div className="absolute inset-x-0 top-[80%] grid-line grid-line-h opacity-0 border-b border-white/10 w-full"></div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center z-10"
      >
        <div className="parallax-text absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hiddenWillChange">
          <h1 className="text-[13vw] font-black tracking-tighter text-[#EAEAEA] select-none flex whitespace-nowrap leading-none font-sans text-center justify-center items-center">
            {name.split("").map((char, index) => (
              <span key={index} className="bg-text-char opacity-0 inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        <HeroParticles startAnimation={startAnimation} />

        <div className="parallax-image hero-image opacity-0 relative z-20 w-70 sm:w-90 md:w-130 aspect-4/5 drop-shadow-xl filter contrast-[1.05]">
          <Image
            src="/images/my-cut-out.png"
            alt="Rony Peter Portrait"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
