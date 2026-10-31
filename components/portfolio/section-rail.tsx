"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { sections } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./use-active-section";

/*
 * Fixed table-of-contents rail in the left gutter: one tick per numbered
 * section, a fill line up to the current one, and its name set vertically.
 * Only on wide screens, where the gutter can hold it without touching content,
 * and only after the hero so the first screen stays clean.
 */
export function SectionRail() {
  const onHome = usePathname() === "/";
  const active = useActiveSection(onHome);
  const index = sections.findIndex((s) => s.id === active);
  const current = sections[index];
  const visible = onHome && index !== -1;

  if (!onHome) return null;

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-500 min-[1380px]:block 2xl:left-8",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ol className="relative flex flex-col gap-3.5 pl-3.5">
        <span aria-hidden className="absolute inset-y-1.5 left-0 w-px bg-rule-strong" />
        <motion.span
          aria-hidden
          className="absolute left-0 top-1.5 w-px origin-top bg-brand"
          style={{ height: "calc(100% - 0.75rem)" }}
          initial={false}
          animate={{ scaleY: index <= 0 ? 0 : index / (sections.length - 1) }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
        {sections.map((s, i) => {
          const isActive = s.id === active;
          const passed = i <= index;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                tabIndex={visible ? undefined : -1}
                aria-current={isActive ? "location" : undefined}
                className="group relative flex items-center gap-2 py-0.5"
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-px transition-all duration-300",
                    isActive ? "w-4 bg-brand" : passed ? "w-2.5 bg-ink-3" : "w-2 bg-ink-4 group-hover:w-3",
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[11px] tabular-nums transition-colors",
                    isActive ? "text-ink" : "text-ink-4 group-hover:text-ink-2",
                  )}
                >
                  {s.index}
                  <span className="sr-only"> {s.label}</span>
                </span>
                <span
                  aria-hidden
                  className="label pointer-events-none absolute left-full ml-3 whitespace-nowrap border border-rule bg-canvas px-2 py-1 text-ink-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {s.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>

      <AnimatePresence mode="wait" initial={false}>
        {current && (
          <motion.p
            key={current.id}
            aria-hidden
            className="label mt-6 rotate-180 pl-1 text-brand [writing-mode:vertical-rl]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {current.label}
          </motion.p>
        )}
      </AnimatePresence>
    </nav>
  );
}
