"use client";

import { useEffect, useState } from "react";
import { pageSectionIds } from "@/lib/content";

/** Id of the home-page section crossing the middle band of the viewport. */
export function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    if (!enabled) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -54% 0px" },
    );
    for (const id of pageSectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [enabled]);

  return active;
}
