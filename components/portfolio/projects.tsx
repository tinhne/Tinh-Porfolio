import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { archive, projects, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { ParallaxImage } from "./parallax-image";
import { ExternalLink, RegMarks, SectionHeader, Tag } from "./primitives";

export function ProjectStatus({ status }: { status: Project["status"] }) {
  return (
    <span className="inline-flex items-center gap-2">
      {status === "Live demo" ? (
        <span className="pulse-dot size-1.5 rounded-full bg-pulse" />
      ) : (
        <span className="size-1.5 border border-ink-4" />
      )}
      {status}
    </span>
  );
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  const href = `/work/${project.slug}`;
  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-8"
    >
      <Reveal className={cn("lg:col-span-7", flip && "lg:order-2")}>
        <Link
          href={href}
          className="group relative block border border-rule bg-panel"
          aria-label={`Read the ${project.title} case study`}
        >
          <RegMarks />
          <div className="relative aspect-[16/10] overflow-hidden">
            <ParallaxImage shot={project.image} sizes="(min-width: 1024px) 760px, 100vw" />
          </div>
          <div className="label flex items-center justify-between gap-4 border-t border-rule px-4 py-3">
            <span className="truncate">
              <span className="text-brand">fig. P{project.index}</span> — {project.kind}
            </span>
            <span className="hidden shrink-0 items-center gap-2 text-ink-2 sm:flex">
              Case study
              <ArrowRight
                aria-hidden
                className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5"
              />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal
        delay={0.08}
        className={cn("lg:col-span-5", flip ? "lg:order-1 lg:pr-10" : "lg:pl-6")}
      >
        <div className="label flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-brand">P—{project.index}</span>
          <span>{project.year}</span>
          <span aria-hidden className="text-ink-4">/</span>
          <ProjectStatus status={project.status} />
        </div>
        <h3
          id={`project-${project.slug}`}
          className="mt-5 text-[2.125rem] font-medium leading-[1.02] tracking-[-0.038em] text-ink md:text-[2.75rem]"
        >
          <Link href={href} className="link-draw">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-xl leading-snug tracking-[-0.01em] text-ink-2">{project.tagline}</p>
        <p className="mt-3 text-[16px] leading-relaxed text-ink-3">{project.summary}</p>

        <dl className="mt-8 border-t border-rule text-[15px]">
          {[
            { k: "Role", v: project.role },
            { k: "Focus", v: project.focus },
          ].map((row) => (
            <div key={row.k} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-3">
              <dt className="label pt-0.5">{row.k}</dt>
              <dd className="text-ink-2">{row.v}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-rule py-3">
            <dt className="label pt-1">Stack</dt>
            <dd className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
          <Link
            href={href}
            className="group inline-flex h-10 items-center gap-2 rounded-[2px] bg-ink px-4 font-medium text-canvas transition-colors hover:bg-brand hover:text-on-brand"
          >
            View case study
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          {project.links
            .filter((l) => l.kind !== "github" || l.label === "GitHub" || l.label === "API source")
            .map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.kind === "github" ? "GitHub" : l.label}
              </ExternalLink>
            ))}
        </div>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="projects-title"
          index="03"
          label="Projects"
          aside={`${projects.length} case studies · ${archive.length} in the archive`}
          title="Selected work."
          muted="Explained end to end."
        />

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
          {projects.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-28 md:mt-40">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
              <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">Archive</h3>
              <span className="label">Earlier builds, smaller scope</span>
            </div>
          </Reveal>
          <ul>
            {archive.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.04}
                className="group grid grid-cols-1 gap-3 border-b border-rule py-6 transition-colors hover:bg-panel/40 md:grid-cols-12 md:gap-6 md:px-3"
              >
                <span className="font-mono text-[13px] text-ink-4 md:col-span-1 md:pt-1">
                  {item.year}
                </span>
                <div className="md:col-span-6">
                  <p className="text-[18px] font-medium tracking-tight text-ink">{item.title}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-3">{item.description}</p>
                </div>
                <div className="flex flex-wrap content-start gap-1.5 md:col-span-3 md:pt-1">
                  {item.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px] md:col-span-2 md:justify-end md:pt-0.5">
                  {item.links.map((l) => (
                    <ExternalLink key={l.href} href={l.href}>
                      {l.label}
                    </ExternalLink>
                  ))}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
