// src/components/DarkModeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  // INITIAL LOAD
  useEffect(() => {
    const saved = localStorage.getItem("femc-dark-mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved !== null ? saved === "true" : prefersDark;

    setIsDark(initial);
    if (initial) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  // TOGGLE FUNCTION
  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("femc-dark-mode", String(newDark));

    if (newDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  // KEYBOARD SHORTCUT "D"
  useEffect(() => {
    const handler = (e: KeyboardInputEvent) => {
      if ((e.key === "d" || e.key === "D") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const target = e.target as HTMLElement;
        if (!target.closest("input, textarea, [contenteditable], select")) {
          e.preventDefault();
          toggle();
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isDark]);

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-7 py-5 
                 bg-red-700 hover:bg-red-600 text-white font-black text-2xl rounded-full 
                 shadow-2xl transition-all hover:scale-110 active:scale-95 
                 border-4 border-white/50 backdrop-blur-sm"
      aria-label="Toggle dark mode"
      title="Toggle dark mode (press D)"
    >
      {isDark ? <Sun className="w-10 h-10" /> : <Moon className="w-10 h-10" />}
      <span className="tracking-widest drop-shadow-2xl text-white">
        D
      </span>
    </button>
  );
}