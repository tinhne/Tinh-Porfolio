"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "idle" | "hover" | "label";

const INTERACTIVE = "a, button, [role='tab'], input, textarea, select, label";
const SIZE: Record<Mode, number> = { idle: 28, hover: 46, label: 92 };

/*
 * A ring that trails the pointer. It grows over anything clickable and turns
 * into a labelled bubble over elements marked `data-cursor="…"` (project
 * previews), where it replaces the system cursor. Everywhere else the system
 * cursor stays, so precision is never lost. Mouse + full motion only.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("idle");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);
  const state = useRef({ mode: "idle" as Mode, label: "", visible: false });

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 42, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 520, damping: 42, mass: 0.45 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const show = (next: boolean) => {
      if (state.current.visible === next) return;
      state.current.visible = next;
      setVisible(next);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      show(true);

      const target = e.target instanceof Element ? e.target : null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const nextMode: Mode = labelled ? "label" : target?.closest(INTERACTIVE) ? "hover" : "idle";
      const nextLabel = labelled?.dataset.cursor ?? "";
      if (nextMode !== state.current.mode || nextLabel !== state.current.label) {
        state.current.mode = nextMode;
        state.current.label = nextLabel;
        setMode(nextMode);
        setLabel(nextLabel);
      }
    };
    const onLeave = () => show(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className={cn(
          "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-colors duration-200",
          mode === "label" && "border-transparent bg-brand text-on-brand shadow-[0_8px_30px_rgb(0_0_0/0.35)]",
          mode === "hover" && "border-brand bg-brand/10",
          mode === "idle" && "border-ink-3/60",
        )}
        initial={false}
        animate={{ width: SIZE[mode], height: SIZE[mode], opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
      >
        <AnimatePresence>
          {mode === "label" && (
            <motion.span
              className="flex items-center gap-1 text-[13px] font-medium"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
            >
              {label}
              <ArrowUpRight className="size-3.5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
