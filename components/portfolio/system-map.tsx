"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { RefId } from "@/lib/content";
import { RefLinks, RegMarks } from "./primitives";

/*
 * fig. 01 — a schematic of the kind of system Tinh builds. Every node maps to
 * real projects, so the hero visual doubles as an index into the work.
 * Geometry lives in one 640×400 coordinate space shared by the SVG wiring and
 * the absolutely positioned HTML nodes (kept as HTML so text stays crisp).
 */
const W = 640;
const H = 400;

type MapNode = {
  id: string;
  label: string;
  short: string;
  tech: string;
  x: number;
  y: number;
  w: number;
  h: number;
  refs: RefId[];
};

const nodes: MapNode[] = [
  { id: "realtime", label: "Realtime", short: "WebSocket", tech: "WebSocket · STOMP · Stream", x: 16, y: 24, w: 128, h: 56, refs: ["vehicle-telemetry", "meet-ai"] },
  { id: "auth", label: "Auth", short: "JWT · OAuth", tech: "JWT · Better Auth · role-based access", x: 176, y: 24, w: 128, h: 56, refs: ["book-review", "meet-ai"] },
  { id: "interface", label: "Interface", short: "Next.js", tech: "Next.js · React · Jetpack Compose", x: 16, y: 150, w: 128, h: 56, refs: ["meet-ai", "book-review", "vehicle-telemetry", "tomosia"] },
  { id: "api", label: "API", short: "tRPC · REST", tech: "tRPC · REST · Spring Boot · Fastify", x: 176, y: 150, w: 128, h: 56, refs: ["meet-ai", "book-review", "vehicle-telemetry", "tomosia"] },
  { id: "jobs", label: "Jobs", short: "Inngest", tech: "Inngest · @Async thread pools · schedulers", x: 336, y: 150, w: 128, h: 56, refs: ["meet-ai", "vehicle-telemetry"] },
  { id: "ai", label: "AI", short: "Gemini", tech: "Gemini 2.5 Flash · OpenAI Realtime", x: 496, y: 150, w: 128, h: 56, refs: ["meet-ai"] },
  { id: "data", label: "Data", short: "PostgreSQL", tech: "PostgreSQL · Drizzle · Spring Data JPA", x: 232, y: 276, w: 176, h: 56, refs: ["meet-ai", "book-review", "vehicle-telemetry"] },
  { id: "runtime", label: "Runtime", short: "Docker · Vercel", tech: "Docker · Vercel · Actuator health checks", x: 16, y: 356, w: 608, h: 28, refs: ["vehicle-telemetry", "tomosia", "meet-ai"] },
];

const edges = [
  { a: "interface", b: "api", d: "M144 178 H176" },
  { a: "api", b: "jobs", d: "M304 178 H336" },
  { a: "jobs", b: "ai", d: "M464 178 H496" },
  { a: "interface", b: "realtime", d: "M80 150 V80" },
  { a: "api", b: "auth", d: "M240 150 V80" },
  { a: "api", b: "data", d: "M240 206 V276" },
  { a: "jobs", b: "data", d: "M400 206 V276" },
  { a: "ai", b: "data", d: "M560 206 V304 H408" },
  { a: "data", b: "runtime", d: "M320 332 V356" },
];

// Data packets that travel the wiring once the drawing has finished.
const packets = [
  { d: "M144 178 H496", dur: "3.4s", begin: "1.6s" },
  { d: "M560 206 V304 H408", dur: "2.6s", begin: "2.4s" },
  { d: "M240 206 V276", dur: "1.8s", begin: "2s" },
  { d: "M400 206 V276", dur: "2.2s", begin: "2.9s" },
  { d: "M80 150 V80", dur: "1.6s", begin: "1.9s" },
];

const terminals = edges.flatMap((e) => {
  const nums = e.d.match(/-?\d+(\.\d+)?/g)!.map(Number);
  // Start point plus the final coordinate pair implied by H/V segments.
  const start = { x: nums[0], y: nums[1] };
  let x = start.x;
  let y = start.y;
  const cmds = e.d.match(/[HV]\s*-?\d+/g) ?? [];
  for (const c of cmds) {
    const v = Number(c.slice(1));
    if (c[0] === "H") x = v;
    else y = v;
  }
  return [start, { x, y }];
});

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export function SystemMap() {
  const [active, setActive] = useState<MapNode | null>(null);
  const activeIndex = active ? nodes.indexOf(active) : -1;

  return (
    <figure className="fade-up relative" style={{ animationDelay: "0.55s" }}>
      <div className="relative border border-rule bg-canvas-2/60 p-3 sm:p-5">
        <RegMarks />
        <div className="label mb-3 flex items-center justify-between gap-4 sm:mb-4">
          <span>
            <span className="text-brand">fig. 01</span> — System map
          </span>
          <span className="hidden text-ink-4 sm:inline">scale 1:1 · live wiring</span>
        </div>

        <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
          {/* blueprint dot grid */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--rule-strong)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]"
          />

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="absolute inset-0 h-full w-full"
            aria-hidden
            fill="none"
          >
            {edges.map((e, i) => {
              const lit = active && (e.a === active.id || e.b === active.id);
              return (
                <path
                  key={e.d}
                  d={e.d}
                  pathLength={1}
                  className="draw transition-[stroke,opacity] duration-300"
                  style={{ animationDelay: `${0.7 + i * 0.08}s` }}
                  stroke={lit ? "var(--brand)" : "var(--rule-strong)"}
                  strokeOpacity={active && !lit ? 0.45 : 1}
                  strokeWidth={lit ? 1.6 : 1.25}
                />
              );
            })}
            {terminals.map((t, i) => (
              <rect
                key={i}
                x={t.x - 2}
                y={t.y - 2}
                width={4}
                height={4}
                fill="var(--canvas)"
                stroke="var(--ink-4)"
                strokeWidth={1}
              />
            ))}
            {packets.map((p) => (
              <rect
                key={p.d}
                className="packet"
                x={-2.5}
                y={-2.5}
                width={5}
                height={5}
                fill="var(--pulse)"
                opacity={0}
              >
                <animateMotion path={p.d} dur={p.dur} begin={p.begin} repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.1;0.85;1"
                  dur={p.dur}
                  begin={p.begin}
                  repeatCount="indefinite"
                />
              </rect>
            ))}
          </svg>

          {nodes.map((node, i) => {
            const isActive = active?.id === node.id;
            const related =
              active && edges.some((e) => (e.a === active.id && e.b === node.id) || (e.b === active.id && e.a === node.id));
            const isBar = node.id === "runtime";
            return (
              <button
                key={node.id}
                type="button"
                aria-pressed={isActive}
                aria-describedby="system-map-readout"
                onMouseEnter={() => setActive(node)}
                onFocus={() => setActive(node)}
                onClick={() => setActive(node)}
                className={cn(
                  "fade-up absolute flex border bg-canvas text-left transition-[border-color,background-color,opacity] duration-300",
                  isBar
                    ? "items-center justify-between gap-3 px-2 sm:px-3"
                    : "flex-col items-center justify-center px-1 sm:items-start sm:justify-between sm:px-2.5 sm:py-2",
                  isActive
                    ? "z-10 border-brand bg-panel"
                    : related
                      ? "border-brand/50"
                      : "border-rule-strong hover:border-ink-4",
                  active && !isActive && !related && "opacity-60",
                )}
                style={{
                  left: pct(node.x, W),
                  top: pct(node.y, H),
                  width: pct(node.w, W),
                  height: pct(node.h, H),
                  animationDelay: `${0.75 + i * 0.07}s`,
                }}
              >
                <span
                  className={cn(
                    "font-mono text-[8.5px] uppercase leading-none tracking-[0.12em] sm:text-[10px]",
                    isActive ? "text-brand" : "text-ink-3",
                  )}
                >
                  <span className="hidden text-ink-4 sm:inline">N.0{i + 1} </span>
                  {node.label}
                </span>
                <span className="hidden truncate text-[12px] leading-tight text-ink sm:block md:text-[13px]">
                  {node.short}
                </span>
              </button>
            );
          })}
        </div>

        <figcaption
          id="system-map-readout"
          aria-live="polite"
          className="mt-3 flex min-h-[3.5rem] items-start gap-3 border-t border-rule pt-3 sm:mt-4"
        >
          <span className="label shrink-0 pt-px text-brand">
            {active ? `N.0${activeIndex + 1}` : "Read"}
          </span>
          {active ? (
            <span className="text-[13px] leading-relaxed text-ink-3 sm:text-sm">
              <span className="text-ink">{active.tech}</span>
              <span className="text-ink-4"> — used in </span>
              <RefLinks ids={active.refs} className="align-baseline" />
            </span>
          ) : (
            <span className="text-[13px] leading-relaxed text-ink-3 sm:text-sm">
              The shape of the systems I build. Hover or tap a node to see the stack and the projects
              where I used it.
            </span>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
