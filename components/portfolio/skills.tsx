"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups, type Skill } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { RefLinks } from "./primitives";
import { SectionHeader } from "./section-header";

function Readout({ skill, compact }: { skill: Skill | null; compact?: boolean }) {
  return (
    <div aria-live="polite" className={cn(compact ? "pt-4" : "")}>
      <AnimatePresence mode="wait" initial={false}>
        {skill ? (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {!compact && (
              <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.035em] text-ink">
                {skill.name}
              </p>
            )}
            <p className={cn("label text-ink-4", !compact && "mt-6")}>
              Used in · {skill.refs.length}
            </p>
            <RefLinks ids={skill.refs} className="mt-2" />
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[16px] leading-relaxed text-ink-3"
          >
            Hover, focus or tap any tool. You&apos;ll see the projects and roles where I actually
            used it — and related tools light up.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState<Skill | null>(null);

  const related = useMemo(() => {
    if (!active) return new Set<string>();
    const ids = new Set(active.refs);
    return new Set(
      skillGroups
        .flatMap((g) => g.skills)
        .filter((s) => s !== active && s.refs.some((r) => ids.has(r)))
        .map((s) => s.name),
    );
  }, [active]);

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="skills-title"
          index="05"
          label="Skills"
          title="Tools I've shipped with."
          muted="Each one traced back to real work."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28 border-t border-rule pt-5">
              <p className="label mb-5">
                <span className="text-brand">Where I used it</span>
              </p>
              <div className="min-h-[12rem]">
                <Readout skill={active} />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-8" onMouseLeave={() => setActive(null)}>
            {skillGroups.map((group, gi) => {
              const groupHasActive = active && group.skills.includes(active);
              return (
                <Reveal
                  key={group.key}
                  delay={gi * 0.05}
                  className="grid grid-cols-1 gap-4 border-t border-rule py-6 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <h3 className="label flex items-baseline gap-2 pt-2">
                    <span className="text-ink-2">{group.title}</span>
                    <span className="text-ink-4">{group.skills.length}</span>
                  </h3>
                  <div>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => {
                        const isActive = active === skill;
                        const isRelated = related.has(skill.name);
                        return (
                          <li key={skill.name}>
                            <button
                              type="button"
                              aria-pressed={isActive}
                              onMouseEnter={() => setActive(skill)}
                              onFocus={() => setActive(skill)}
                              onClick={() => setActive(isActive ? null : skill)}
                              className={cn(
                                "rounded-[2px] border px-3.5 py-2 text-[15px] transition-[color,background-color,border-color,opacity] duration-200",
                                isActive
                                  ? "border-ink bg-ink text-canvas"
                                  : isRelated
                                    ? "border-brand/60 text-ink"
                                    : "border-rule text-ink-2 hover:border-rule-strong hover:text-ink",
                                active && !isActive && !isRelated && "opacity-45",
                              )}
                            >
                              {skill.name}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    {groupHasActive && (
                      <div className="lg:hidden">
                        <Readout skill={active} compact />
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
            <p className="border-t border-rule pt-5 text-[15px] leading-relaxed text-ink-4">
              Listed tools are ones I&apos;ve used in professional work or shipped personal projects.
              Things I&apos;m only learning live under{" "}
              <a href="#about" className="link-draw text-ink-3 hover:text-ink">
                Currently exploring
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
