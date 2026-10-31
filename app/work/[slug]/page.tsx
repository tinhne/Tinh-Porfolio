import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, site } from "@/lib/content";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";
import { ExternalLink, RegMarks, Tag } from "@/components/portfolio/primitives";
import { ProjectStatus } from "@/components/portfolio/projects";
import { Reveal } from "@/components/portfolio/reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — Case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${title} · ${site.name}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
      type: "article",
    },
  };
}

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem & solution" },
  { id: "role", label: "My role" },
  { id: "architecture", label: "Architecture" },
  { id: "stack", label: "Technology" },
  { id: "features", label: "Key features" },
  { id: "challenges", label: "Engineering challenges" },
  { id: "screens", label: "Screens" },
  { id: "links", label: "Links" },
];

function Block({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule pb-16 pt-6 md:pb-24">
      <Reveal>
        <h2 id={`${id}-title`} className="label flex gap-4">
          <span className="text-brand">§ {String(n).padStart(2, "0")}</span>
          <span className="text-ink-2">{title}</span>
        </h2>
        <div className="mt-8 md:mt-10">{children}</div>
      </Reveal>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.summary,
    author: { "@type": "Person", name: site.name, url: site.url },
    codeRepository: project.links.find((l) => l.kind === "github")?.href,
    programmingLanguage: project.tags,
    dateCreated: project.year,
  };

  return (
    <main id="main" className="pb-10 pt-24 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-x">
        {/* masthead */}
        <div className="fade-up label flex items-center justify-between gap-4 border-b border-rule pb-3">
          <Link href="/#projects" className="group inline-flex items-center gap-2 text-ink-2 hover:text-ink">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>
          <span>
            Case study <span className="text-ink-2">{project.index}</span>
            <span className="text-ink-4"> / 0{projects.length}</span>
          </span>
        </div>

        <header className="mt-12 md:mt-16">
          <p className="fade-up label flex flex-wrap items-center gap-x-3 gap-y-1" style={{ animationDelay: "0.05s" }}>
            <span className="text-brand">P—{project.index}</span>
            <span>{project.year}</span>
            <span aria-hidden className="text-ink-4">/</span>
            <ProjectStatus status={project.status} />
          </p>
          <h1 className="display mt-6 max-w-[14ch] text-ink">
            <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
              <span className="rise block" style={{ animationDelay: "0.1s" }}>
                {project.title}
              </span>
            </span>
          </h1>
          <p
            className="fade-up lead mt-8 max-w-[44ch] text-ink-2"
            style={{ animationDelay: "0.25s" }}
          >
            {project.tagline}
          </p>

          <dl
            className="fade-up mt-12 grid grid-cols-2 border-t border-rule md:grid-cols-4"
            style={{ animationDelay: "0.35s" }}
          >
            {[
              { k: "Role", v: project.role },
              { k: "Type", v: project.kind },
              { k: "Focus", v: project.focus },
              { k: "Year", v: project.year },
            ].map((row, i) => (
              <div
                key={row.k}
                className={`py-4 pr-4 ${i % 2 === 1 ? "border-l border-rule pl-4" : ""} ${i >= 2 ? "border-t border-rule md:border-t-0" : ""} ${i === 2 ? "md:border-l md:pl-4" : ""}`}
              >
                <dt className="label text-ink-4">{row.k}</dt>
                <dd className="mt-1.5 text-[14.5px] leading-snug text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>

          <div
            className="fade-up flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-5 text-[14px]"
            style={{ animationDelay: "0.4s" }}
          >
            {project.links.map((l) => (
              <ExternalLink key={l.href} href={l.href}>
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </header>

        <figure className="fade-up relative mt-14 md:mt-20" style={{ animationDelay: "0.45s" }}>
          <div className="relative overflow-hidden border border-rule bg-panel">
            <RegMarks />
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              preload
              loading="eager"
              sizes="(min-width: 1320px) 1224px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="label mt-3 text-ink-4">
            <span className="text-brand">fig. P{project.index}</span> — {project.image.alt}
          </figcaption>
        </figure>

        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 space-y-2 border-t border-rule pt-5">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 text-[13.5px] text-ink-3 transition-colors hover:text-ink"
                  >
                    <span className="font-mono text-[10px] text-ink-4 group-hover:text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="lg:col-span-9">
            <Block id="overview" n={1} title="Overview">
              <div className="space-y-5">
                {project.overview.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.022em] text-ink"
                        : "lead max-w-[64ch] text-ink-3"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Block>

            <Block id="problem" n={2} title="Problem & solution">
              <div className="grid grid-cols-1 gap-px bg-rule md:grid-cols-2">
                <div className="bg-canvas py-2 md:pr-8">
                  <p className="label text-ink-4">Problem</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{project.problem}</p>
                </div>
                <div className="bg-canvas py-2 md:pl-8">
                  <p className="label text-pulse">Solution</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{project.solution}</p>
                </div>
              </div>
            </Block>

            <Block id="role" n={3} title="My role">
              <p className="text-[15px] text-ink-3">
                <span className="text-ink">{project.role}.</span> What I personally implemented:
              </p>
              <ol className="mt-6 border-t border-rule">
                {project.contributions.map((c, i) => (
                  <li
                    key={c}
                    className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-rule py-4 text-[15px] leading-relaxed text-ink-2"
                  >
                    <span className="font-mono text-[11px] text-ink-4 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </Block>

            <Block id="architecture" n={4} title="Architecture">
              <ArchitectureDiagram architecture={project.architecture} index={project.index} />
              <ul className="mt-6 space-y-2.5">
                {project.architecture.notes.map((note) => (
                  <li key={note} className="flex gap-3 text-[15px] leading-relaxed text-ink-3">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-brand" />
                    {note}
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="stack" n={5} title="Technology stack">
              <dl className="border-t border-rule">
                {project.stack.map((g) => (
                  <div
                    key={g.group}
                    className="grid grid-cols-1 gap-3 border-b border-rule py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <dt className="label pt-1">{g.group}</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <Tag key={item} className="text-[12px] text-ink-2">
                          {item}
                        </Tag>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block id="features" n={6} title="Key features">
              <ul className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 xl:grid-cols-3">
                {project.features.map((f, i) => (
                  <li key={f.title} className="bg-canvas p-5 sm:p-6">
                    <span className="font-mono text-[11px] text-brand">
                      F{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-[16px] font-medium tracking-tight text-ink">{f.title}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-3">{f.body}</p>
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="challenges" n={7} title="Engineering challenges">
              <div className="space-y-10">
                {project.challenges.map((c, i) => (
                  <div key={c.title} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
                    <div className="md:col-span-4">
                      <span className="font-mono text-[11px] text-ink-4">C{i + 1}</span>
                      <h3 className="mt-2 text-[19px] font-medium leading-snug tracking-tight text-ink">
                        {c.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:col-span-8 sm:grid-cols-2">
                      <div className="border-l border-rule-strong pl-4">
                        <p className="label text-ink-4">Problem</p>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-3">{c.problem}</p>
                      </div>
                      <div className="border-l border-pulse/60 pl-4">
                        <p className="label text-pulse">Approach</p>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{c.approach}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <Block id="screens" n={8} title="Screens">
              <div className="space-y-10">
                {project.gallery.map((shot, i) => (
                  <figure key={shot.src + i}>
                    <div className="relative overflow-hidden border border-rule bg-panel">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(min-width: 1024px) 900px, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {shot.caption && (
                      <figcaption className="label mt-3 text-ink-4">
                        <span className="text-ink-3">S{i + 1}</span> — {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </Block>

            <Block id="links" n={9} title="Links">
              <ul className="border-t border-rule">
                {project.links.map((l) => (
                  <li key={l.href} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-rule py-4">
                    <ExternalLink href={l.href} className="text-[16px] text-ink">
                      {l.label}
                    </ExternalLink>
                    <span className="font-mono text-[12px] text-ink-4">
                      {l.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </li>
                ))}
              </ul>
              {project.linksNote && (
                <p className="mt-4 text-[14px] text-ink-4">{project.linksNote}</p>
              )}
            </Block>
          </article>
        </div>

        {/* next case study */}
        <Link
          href={`/work/${next.slug}`}
          className="group mt-8 block border-t border-rule py-14 md:py-20"
        >
          <span className="label">
            Next case study <span className="text-ink-4">/ P—{next.index}</span>
          </span>
          <span className="mt-5 flex items-center justify-between gap-6">
            <span className="heading text-ink transition-colors group-hover:text-brand">{next.title}</span>
            <ArrowRight
              aria-hidden
              className="size-8 shrink-0 text-ink-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 group-hover:text-brand md:size-12"
            />
          </span>
          <span className="mt-3 block max-w-[52ch] text-[15px] text-ink-3">{next.tagline}</span>
        </Link>
      </div>
    </main>
  );
}
