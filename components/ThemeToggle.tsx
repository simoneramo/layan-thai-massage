"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

type Mode = "light" | "dark" | "auto";

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("auto");

  // Read stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Mode | null;
    if (stored === "light" || stored === "dark" || stored === "auto") {
      setMode(stored);
    }
  }, []);

  // Apply + react to system changes when in auto
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = mode === "dark" || (mode === "auto" && mql.matches);
      document.documentElement.classList.toggle("dark", dark);
    };
    apply();
    const onChange = () => {
      if (mode === "auto") apply();
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  const cycle = () => {
    const next: Mode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
    setMode(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      title={`Theme: ${mode}`}
      aria-label={`Theme: ${mode}. Click to change.`}
      className="grid h-10 w-10 place-items-center rounded-xl border border-plum-200 text-plum-700 transition duration-200 hover:bg-plum-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-plum-300/40 dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/5"
    >
      {mode === "light" && <Sun className="h-5 w-5" />}
      {mode === "dark" && <Moon className="h-5 w-5" />}
      {mode === "auto" && <Monitor className="h-5 w-5" />}
    </button>
  );
}
