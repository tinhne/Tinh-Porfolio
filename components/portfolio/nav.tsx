"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocalTime } from "./local-time";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section sits in the middle band of the viewport.
  useEffect(() => {
    if (!onHome) return;
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -54% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500",
          scrolled || open
            ? "border-b border-rule bg-canvas/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <nav aria-label="Primary" className="container-x flex h-16 items-center gap-6">
          <Link
            href={onHome ? "#home" : "/"}
            className="group mr-auto flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden
              className="grid size-6 place-items-center border border-rule-strong font-mono text-[10px] text-ink-2 transition-colors group-hover:border-brand group-hover:text-brand"
            >
              T
            </span>
            {site.shortName}
            <span className="sr-only">— home</span>
          </Link>

          <ul className="hidden items-center lg:flex">
            {navItems
              .filter((item) => item.id !== "home")
              .map((item, i) => {
                const isActive = onHome && active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={href(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative flex items-baseline gap-1.5 px-3 py-2 text-[13px] transition-colors",
                        isActive ? "text-ink" : "text-ink-3 hover:text-ink",
                      )}
                    >
                      <span className="font-mono text-[10px] text-ink-4">0{i + 1}</span>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-x-3 -bottom-[13px] h-px bg-brand"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
          </ul>

          <div className="flex items-center gap-2.5">
            <LocalTime className="label mr-2 hidden xl:inline" />
            <ThemeToggle />
            <a
              href={site.resume}
              download={site.resumeFileName}
              className="hidden h-9 items-center gap-2 rounded-[2px] border border-rule-strong px-3 text-[13px] text-ink transition-colors hover:border-ink sm:inline-flex"
            >
              Resume
              <ArrowDown className="size-3.5" aria-hidden />
            </a>
            <button
              ref={menuButton}
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-[2px] border border-rule text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
            </button>
          </div>
        </nav>

        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-brand/70"
          style={{ scaleX: progress }}
        />
      </header>

      {/* Outside the header: its backdrop-filter would trap a fixed child */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-canvas lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-x flex min-h-full flex-col py-8">
              <ul className="border-t border-rule">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-rule"
                  >
                    <a
                      ref={i === 0 ? firstLink : undefined}
                      href={href(item.id)}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 text-[2rem] font-medium leading-none tracking-[-0.03em] text-ink"
                    >
                      <span className="font-mono text-[11px] tracking-normal text-brand">
                        0{i}
                      </span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
                <a
                  href={site.resume}
                  download={site.resumeFileName}
                  className="inline-flex h-11 items-center gap-2 rounded-[2px] bg-ink px-4 text-[15px] font-medium text-canvas"
                >
                  Download resume <ArrowDown className="size-4" aria-hidden />
                </a>
                <LocalTime className="label" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
