import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { refs, type Evidence, type RefId } from "@/lib/content";
import { Reveal } from "./reveal";

export const button = {
  primary:
    "group inline-flex h-12 items-center gap-3 rounded-[2px] bg-ink px-5 text-[16px] font-medium text-canvas transition-colors duration-300 hover:bg-brand hover:text-on-brand",
  secondary:
    "group inline-flex h-12 items-center gap-3 rounded-[2px] border border-rule-strong px-5 text-[16px] font-medium text-ink transition-colors duration-300 hover:border-ink",
  quiet:
    "group inline-flex h-12 items-center gap-2 text-[16px] font-medium text-ink-2 transition-colors hover:text-ink",
};

/** Numbered section opener: a ruled meta line, then an editorial two-tone heading. */
export function SectionHeader({
  index,
  label,
  title,
  muted,
  intro,
  id,
}: {
  index: string;
  label: string;
  title: ReactNode;
  muted?: ReactNode;
  intro?: ReactNode;
  id: string;
}) {
  return (
    <header>
      <Reveal>
        <div className="label flex items-center gap-4 border-t border-rule pt-4">
          <span className="text-brand">§ {index}</span>
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={id} className="heading mt-10 max-w-[20ch] text-ink md:mt-14">
          {title}
          {muted && <span className="text-ink-4"> {muted}</span>}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <div className="lead mt-6 max-w-[58ch] text-ink-3">{intro}</div>
        </Reveal>
      )}
    </header>
  );
}

/** Registration marks at the four corners of a figure. */
export function RegMarks({ className }: { className?: string }) {
  const corner = "absolute h-2.5 w-2.5 border-ink-4/70";
  return (
    <span aria-hidden className={cn("pointer-events-none absolute -inset-[5px]", className)}>
      <span className={cn(corner, "left-0 top-0 border-l border-t")} />
      <span className={cn(corner, "right-0 top-0 border-r border-t")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-rule px-2 py-[3px] font-mono text-[12px] leading-none tracking-wide text-ink-3",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group -my-1 inline-flex items-center gap-1 py-1 text-ink-2 transition-colors hover:text-ink",
        className,
      )}
    >
      <span className="link-draw">{children}</span>
      <ArrowUpRight
        aria-hidden
        className="size-3.5 text-ink-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Links to the projects / roles that back up a claim. */
export function RefLinks({ ids, className }: { ids: RefId[]; className?: string }) {
  return (
    <span className={cn("inline-flex flex-wrap gap-x-3 gap-y-1", className)}>
      {ids.map((id) => {
        const ref = refs[id];
        const internal = ref.href.startsWith("/");
        return internal ? (
          <Link
            key={id}
            href={ref.href}
            className="link-draw font-mono text-[13px] text-ink-2 transition-colors hover:text-brand"
          >
            {ref.label}
          </Link>
        ) : (
          <a
            key={id}
            href={ref.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw font-mono text-[13px] text-ink-2 transition-colors hover:text-brand"
          >
            {ref.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        );
      })}
    </span>
  );
}

/** Square glyph that encodes how strong the evidence behind a claim is. */
export function EvidenceMark({ kind, className }: { kind: Evidence; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block size-2.5 shrink-0",
        kind === "work" && "bg-brand",
        kind === "project" &&
          "border border-pulse bg-[linear-gradient(90deg,var(--pulse)_50%,transparent_50%)]",
        kind === "exploring" && "border border-dashed border-ink-4",
        className,
      )}
    />
  );
}
