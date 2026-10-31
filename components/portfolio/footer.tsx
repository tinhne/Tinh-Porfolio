import { ArrowUp } from "lucide-react";
import { site } from "@/lib/content";
import { LocalTime } from "./local-time";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="container-x label flex flex-col gap-4 py-8 text-ink-4 lg:flex-row lg:items-center lg:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="normal-case tracking-normal text-ink-3">
          Designed &amp; engineered in {site.city} · Next.js, Tailwind CSS, Framer Motion
        </p>
        <div className="flex items-center gap-6">
          <LocalTime />
          <a href="#top" className="group inline-flex items-center gap-1.5 text-ink-3 hover:text-ink">
            Top
            <ArrowUp aria-hidden className="size-3 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
