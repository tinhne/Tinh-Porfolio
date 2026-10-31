import type { ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "./magnetic";
import { SystemMap } from "./system-map";
import { button } from "./primitives";

/** One line of display type that rises out of a mask. CSS-only, so it paints before hydration. */
function Line({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
      <span className={cn("rise block", className)} style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

const spec = [
  { label: "Focus", value: "Full-stack & AI-powered products" },
  { label: "Stack", value: "TypeScript · Java · PostgreSQL" },
  { label: "Now", value: "Product engineering at Margick" },
  { label: "Before", value: "Backend intern at Tomosia" },
];

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="halo absolute -right-[25%] -top-[45%] h-[110vmax] w-[110vmax] rounded-full" />
        <div className="container-x relative h-full">
          <div className="columns-guide h-full border-r border-rule" />
        </div>
      </div>

      <div className="container-x pb-16 pt-24 md:pb-20 md:pt-28">
        <div
          className="fade-up label flex items-center justify-between gap-4 border-b border-rule pb-3"
          style={{ animationDelay: "0.05s" }}
        >
          <span>
            <span className="text-ink-4">{site.coords}</span>
            <span className="hidden sm:inline"> — </span>
            <span className="block sm:inline">{site.location}</span>
          </span>
          <span className="text-right">
            {site.availability ? (
              <span className="inline-flex items-center gap-2 text-ink-2">
                <span className="pulse-dot size-1.5 rounded-full bg-pulse" />
                {site.availability}
              </span>
            ) : (
              <>
                Portfolio <span className="text-ink-4">/ Rev. 2026</span>
              </>
            )}
          </span>
        </div>

        <h1 id="hero-title" className="mt-10 md:mt-12">
          <Line delay={0.1} className="mb-5 md:mb-8">
            <span className="flex items-center gap-3 text-[16px] font-medium tracking-[-0.01em] text-ink md:text-xl">
              <span aria-hidden className="h-px w-8 bg-brand" />
              {site.name}
            </span>
          </Line>
          <Line delay={0.18} className="display text-ink">
            Software Engineer<span className="text-brand">.</span>
          </Line>
          <Line delay={0.3} className="display text-ink-4 lg:pl-[25%]">
            AI Product Builder<span className="text-pulse">.</span>
          </Line>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-14 md:mt-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-6 lg:pr-4">
            <p
              className="fade-up lead max-w-[34ch] text-ink-2"
              style={{ animationDelay: "0.45s" }}
            >
              {site.statement}
            </p>
            <p
              className="fade-up mt-5 max-w-[46ch] text-[16px] leading-relaxed text-ink-3"
              style={{ animationDelay: "0.52s" }}
            >
              I focus on the parts users never see but always feel — APIs, data, background jobs —
              and increasingly on the AI features built on top of them.
            </p>

            <div
              className="fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.6s" }}
            >
              <Magnetic>
                <a href="#projects" className={button.primary}>
                  Explore my work
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
              </Magnetic>
              <a href={site.resume} download={site.resumeFileName} className={button.secondary}>
                Download resume
                <ArrowDown
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  aria-hidden
                />
              </a>
              <a href="#contact" className={cn(button.quiet, "px-2")}>
                <span className="link-draw">Let&apos;s connect</span>
                <ArrowRight
                  className="size-4 text-ink-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  aria-hidden
                />
              </a>
            </div>

            <div
              className="fade-up mt-auto hidden items-center gap-5 pt-10 text-[14px] lg:flex"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-ink-3 hover:text-ink"
              >
                github.com/tinhne
              </a>
              <span aria-hidden className="h-3 w-px bg-rule-strong" />
              <a href={site.url} className="link-draw font-mono text-ink-3 hover:text-ink">
                trungtinh.site
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SystemMap />
          </div>
        </div>

        <dl
          className="fade-up mt-16 grid grid-cols-2 border-t border-rule md:mt-20 lg:grid-cols-4"
          style={{ animationDelay: "0.85s" }}
        >
          {spec.map((item, i) => (
            <div
              key={item.label}
              className={cn(
                "py-5 pr-4",
                i % 2 === 1 && "border-l border-rule pl-4",
                i >= 2 && "border-t border-rule lg:border-t-0",
                i === 2 && "lg:border-l lg:pl-4",
              )}
            >
              <dt className="label text-ink-4">{item.label}</dt>
              <dd className="mt-2 text-[16px] leading-snug text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
