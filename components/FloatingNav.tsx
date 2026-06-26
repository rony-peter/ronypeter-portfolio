"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function FloatingNav({
  startAnimation,
}: {
  startAnimation: boolean;
}) {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    if (!startAnimation) return;

    // Elegant slide up and fade in for the dock container
    gsap.fromTo(
      ".floating-nav-dock",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        delay: 1.2, // Timed perfectly to slide in right after your vertical lines drop
      },
    );
  }, [startAnimation]);

  const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "Work", icon: "💼" },
    { name: "About", icon: "✨" },
    { name: "Contact", icon: "✉️" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <nav className="floating-nav-dock opacity-0 flex items-center gap-2 px-4 py-3 rounded-[24px] bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-[16px] text-sm font-medium tracking-tight transition-all duration-300 select-none
                ${
                  isActive
                    ? "text-black dark:text-white bg-white/60 dark:bg-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    : "text-gray-500 hover:text-black dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/5"
                }
              `}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-sans font-semibold text-xs uppercase tracking-widest">
                {item.name}
              </span>

              {/* iOS style subtle indicator pill beneath the active button text */}
              {isActive && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white animate-fade-in" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
