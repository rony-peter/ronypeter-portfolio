"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Loader({
  finishLoading,
}: {
  finishLoading: () => void;
}) {
  const [counter, setCounter] = useState(0);
  const loaderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (counter >= 100) {
      const tl = gsap.timeline({
        onComplete: () => finishLoading(),
      });

      tl.to(".counter-text", {
        opacity: 0,
        y: -40,
        duration: 0.8,
        ease: "power4.inOut",
      }).to(loaderRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "expo.inOut",
      });
    }
  }, [counter]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
    >
      <div className="overflow-hidden">
        <h1 className="counter-text text-[15vw] font-bold leading-none tracking-tighter">
          {counter}%
        </h1>
      </div>

      {/* Optional: Add light grey lines like your header */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 w-full h-px bg-white" />
        <div className="absolute left-1/2 h-full w-px bg-white" />
      </div>
    </div>
  );
}
