"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function FloatingNav({
  startAnimation,
}: {
  startAnimation: boolean;
}) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;

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
        delay: 1.2,
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
    <>
      <div className="md:hidden fixed top-6 right-6 z-50">
        <div
          className={`flex flex-col items-end transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden origin-top-right
            ${isOpen ? "w-48 h-60 rounded-2xl p-2" : "w-12 h-12 rounded-full p-0"}
          `}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 min-h-12 flex items-center justify-center rounded-full transition-transform duration-300 active:scale-95 text-black dark:text-white"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-300 rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-300 rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          <div
            className={`w-full flex flex-col gap-1 transition-opacity duration-300 mt-1
              ${isOpen ? "opacity-100 delay-150 pointer-events-auto" : "opacity-0 pointer-events-none"}
            `}
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-all duration-200 whitespace-nowrap w-full
                    ${
                      isActive
                        ? "text-black dark:text-white bg-white dark:bg-white/10 shadow-sm"
                        : "text-gray-500 hover:text-black dark:hover:text-white"
                    }
                  `}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="font-sans font-semibold text-xs uppercase tracking-widest">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <nav className="floating-nav-dock opacity-0 flex items-center gap-2 px-4 py-3 rounded-3xl bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium tracking-tight transition-all duration-300 select-none
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

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black dark:bg-white animate-fade-in" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
