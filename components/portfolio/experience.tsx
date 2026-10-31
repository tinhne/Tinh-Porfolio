import { experience } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { ExternalLink, Tag } from "./primitives";
import { SectionHeader } from "./section-header";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-rule bg-canvas-2/50 py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeader
          id="experience-title"
          index="02"
          label="Experience"
          title="Where I've done the work."
          muted="Real teams, real codebases."
        />

        <ol className="mt-16 md:mt-24">
          {experience.map((job, i) => (
            <Reveal
              as="li"
              key={job.company}
              delay={i * 0.05}
              className="relative grid grid-cols-1 gap-6 border-t border-rule py-10 md:py-14 lg:grid-cols-12 lg:gap-8"
            >
              {/* period rail */}
              <div className="relative lg:col-span-3 lg:border-r lg:border-rule lg:pr-8">
                <span
                  aria-hidden
                  className={cn(
                    "absolute -right-[5px] top-1 hidden size-[9px] border lg:block",
                    job.current ? "border-pulse bg-pulse" : "border-rule-strong bg-canvas",
                  )}
                />
                <p className="font-mono text-[14px] text-ink-2">
                  {job.current ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="pulse-dot size-1.5 rounded-full bg-pulse" />
                      {job.period}
                    </span>
                  ) : (
                    job.period
                  )}
                </p>
                <p className="label mt-2 text-ink-4">
                  {job.kind} · {job.location}
                </p>
              </div>

              <div className="lg:col-span-9">
                <h3 className="text-[1.75rem] font-medium leading-tight tracking-[-0.03em] text-ink md:text-[2.25rem]">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw"
                    >
                      {job.company}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="mt-1.5 text-[16px] text-ink-2">{job.role}</p>
                <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-ink-3">
                  {job.context}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
                  <ul className="space-y-3 md:col-span-8">
                    {job.contributions.map((item) => (
                      <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="md:col-span-4">
                    <p className="label text-ink-4">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-2 border-t border-rule pt-6 text-[15px] text-ink-3">
            The one-page version, with education and certifications, is in my{" "}
            <ExternalLink href="/LeVanTrungTinh_CV.pdf">resume</ExternalLink>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
