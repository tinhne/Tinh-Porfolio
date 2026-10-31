"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";

const channels = [
  { label: "GitHub", value: "github.com/tinhne", href: site.github, external: true },
  { label: "LinkedIn", value: "Le Van Trung Tinh", href: site.linkedin, external: true },
  { label: "Resume", value: "PDF · one page", href: site.resume, download: true },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t border-rule"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="halo absolute -bottom-[60%] left-[20%] h-[110vmax] w-[110vmax]" />
      </div>

      <div className="container-x py-28 md:py-40">
        <Reveal>
          <div className="label flex items-center gap-4 border-t border-rule pt-4">
            <span className="text-brand">§ 07</span>
            <span>Contact</span>
            <span className="ml-auto hidden text-ink-4 sm:block">{site.location} · GMT+7</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 id="contact-title" className="display mt-12 max-w-[12ch] text-ink md:mt-16">
            Let&apos;s build something real<span className="text-brand">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="lead mt-8 max-w-[48ch] text-ink-3">
            Hiring for a software, full-stack or AI product role — or building something that needs
            another engineer? Email is the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 md:mt-20">
          <div className="flex flex-col gap-5 border-y border-rule py-8 md:flex-row md:items-center md:justify-between">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex min-w-0 items-center gap-3 text-[clamp(1.35rem,4.2vw,3.25rem)] font-medium tracking-[-0.035em] text-ink"
            >
              <span className="link-draw truncate">{site.email}</span>
              <ArrowUpRight
                aria-hidden
                className="size-[0.8em] shrink-0 text-ink-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand"
              />
            </a>
            <Magnetic>
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-[2px] border border-rule-strong px-4 text-[14px] text-ink transition-colors hover:border-ink"
              >
                {copied ? (
                  <Check className="size-4 text-pulse" aria-hidden />
                ) : (
                  <Copy className="size-4" aria-hidden />
                )}
                <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
              </button>
            </Magnetic>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal
              as="li"
              key={c.label}
              delay={0.2 + i * 0.05}
              className="border-b border-rule sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(c.download ? { download: site.resumeFileName } : {})}
                className="group flex items-center justify-between gap-4 py-6 sm:px-5 sm:first:pl-0"
              >
                <span>
                  <span className="label block">{c.label}</span>
                  <span className="mt-1.5 block text-[15px] text-ink transition-colors group-hover:text-brand">
                    {c.value}
                  </span>
                </span>
                {c.download ? (
                  <ArrowDown aria-hidden className="size-4 text-ink-4 transition-transform group-hover:translate-y-0.5 group-hover:text-ink" />
                ) : (
                  <ArrowUpRight aria-hidden className="size-4 text-ink-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                )}
                {c.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
