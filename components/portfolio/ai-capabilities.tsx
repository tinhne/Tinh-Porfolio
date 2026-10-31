"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { aiCapabilities, evidenceLabels, type Capability } from "@/lib/content";
import { cn } from "@/lib/utils";
import { EvidenceMark, RefLinks } from "./primitives";

function CapabilityItems({ capability }: { capability: Capability }) {
  return (
    <ul className="border-t border-rule">
      {capability.items.map((item) => (
        <li
          key={item.name}
          className="grid grid-cols-1 gap-2 border-b border-rule py-4 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6"
        >
          <div className="flex items-start gap-2.5">
            <EvidenceMark kind={item.evidence} className="mt-[0.4em]" />
            <div>
              <p className="text-[16px] font-medium text-ink">{item.name}</p>
              <p className="mt-0.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-4">
                {evidenceLabels[item.evidence]}
              </p>
            </div>
          </div>
          <div className="pl-5 sm:pl-0">
            <p className="text-[16px] leading-relaxed text-ink-3">{item.detail}</p>
            {item.refs && (
              <p className="mt-1.5 text-ink-4">
                <span className="font-mono text-[12px]">→ </span>
                <RefLinks ids={item.refs} />
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function AiCapabilities() {
  const [index, setIndex] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = aiCapabilities[index];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowDown: 1,
      ArrowRight: 1,
      ArrowUp: -1,
      ArrowLeft: -1,
    };
    if (!(e.key in keys) && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const n = aiCapabilities.length;
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? n - 1 : (index + keys[e.key] + n) % n;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  return (
    <>
      {/* Small screens: everything open, no tabs to hunt through */}
      <div className="space-y-12 md:hidden">
        {aiCapabilities.map((cap) => (
          <div key={cap.key}>
            <p className="font-mono text-[13px] text-brand">{cap.key}</p>
            <h4 className="mt-2 text-xl font-medium tracking-tight text-ink">{cap.title}</h4>
            <p className="mb-5 mt-1.5 text-[16px] text-ink-3">{cap.summary}</p>
            <CapabilityItems capability={cap} />
          </div>
        ))}
      </div>

      <div className="hidden gap-8 md:grid md:grid-cols-12">
        <div
          role="tablist"
          aria-label="AI capabilities"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="flex flex-col border-t border-rule md:col-span-5 lg:col-span-4"
        >
          {aiCapabilities.map((cap, i) => {
            const selected = i === index;
            return (
              <button
                key={cap.key}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`ai-tab-${cap.key}`}
                aria-selected={selected}
                aria-controls={`ai-panel-${cap.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setIndex(i)}
                onMouseEnter={() => setIndex(i)}
                className={cn(
                  "relative grid grid-cols-[2rem_1fr] items-baseline border-b border-rule py-5 pl-4 pr-3 text-left transition-colors",
                  selected ? "bg-panel/70" : "hover:bg-panel/30",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="ai-tab-indicator"
                    className="absolute inset-y-0 left-0 w-px bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className={cn("font-mono text-[13px]", selected ? "text-brand" : "text-ink-4")}>
                  {cap.key}
                </span>
                <span>
                  <span
                    className={cn(
                      "block text-[18px] font-medium tracking-tight transition-colors",
                      selected ? "text-ink" : "text-ink-3",
                    )}
                  >
                    {cap.title}
                  </span>
                  <span className="mt-1 block text-[15px] leading-snug text-ink-4">
                    {cap.summary}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="md:col-span-7 lg:col-span-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              role="tabpanel"
              id={`ai-panel-${active.key}`}
              aria-labelledby={`ai-tab-${active.key}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <CapabilityItems capability={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
