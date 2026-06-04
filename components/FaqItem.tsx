"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqItem({
  question,
  children,
  defaultOpen = false,
}: {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="reveal faq-item">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="faq-btn">
        <span className="faq-q">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-plum-500 transition-transform duration-200 dark:text-plum-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-200 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="faq-a">{children}</p>
        </div>
      </div>
    </div>
  );
}
