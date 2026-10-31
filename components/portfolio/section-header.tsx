"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { sections } from "@/lib/content";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

const drawRule: Variants = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { duration: 1.2, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  shown: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } }),
};

const rise: Variants = {
  hidden: { y: "105%" },
  shown: (delay: number) => ({ y: "0%", transition: { duration: 0.95, delay, ease } }),
};

function Line({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <span className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
      <motion.span variants={rise} custom={delay} className={cn("block", className)}>
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Numbered section opener. As it scrolls in, the rule draws across, the
 * "03 / 07 · Projects" marker fades up and each heading line rises out of a mask.
 */
export function SectionHeader({
  id,
  index,
  label,
  title,
  muted,
  intro,
  size = "heading",
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  muted?: ReactNode;
  intro?: ReactNode;
  size?: "heading" | "display";
}) {
  return (
    <motion.header
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
    >
      <div className="relative pt-4">
        <motion.span
          aria-hidden
          variants={drawRule}
          className="absolute inset-x-0 top-0 h-px origin-left bg-rule-strong"
        />
        <motion.p
          variants={fadeUp}
          custom={0.15}
          className="flex items-baseline gap-3 font-mono text-[13px] uppercase tracking-[0.12em]"
        >
          <span className="text-brand">{index}</span>
          <span className="text-ink-4">/ {String(sections.length).padStart(2, "0")}</span>
          <span className="text-ink-2">{label}</span>
        </motion.p>
      </div>

      <h2
        id={id}
        className={cn(
          "text-ink",
          size === "display" ? "display mt-12 max-w-[12ch] md:mt-16" : "heading mt-10 max-w-[20ch] md:mt-14",
        )}
      >
        <Line delay={0.22}>{title}</Line>
        {muted && (
          <>
            {" "}
            <Line delay={0.32} className="text-ink-4">
              {muted}
            </Line>
          </>
        )}
      </h2>

      {intro && (
        <motion.div
          variants={fadeUp}
          custom={0.42}
          className={cn("lead max-w-[58ch] text-ink-3", size === "display" ? "mt-8" : "mt-6")}
        >
          {intro}
        </motion.div>
      )}
    </motion.header>
  );
}
