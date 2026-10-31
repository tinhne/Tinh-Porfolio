import { achievements, education } from "@/lib/content";
import { Reveal } from "./reveal";
import { ExternalLink, RegMarks, SectionHeader } from "./primitives";

export function Achievements() {
  const items = achievements.filter((a) => a.confirmed);

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-title"
      className="border-t border-rule bg-canvas-2/50 py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeader
          id="recognition-title"
          index="06"
          label="Achievements & Education"
          title="Milestones."
          muted="Competitions, certificates and the degree behind them."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full flex-col border border-rule bg-panel/60 p-6 md:p-8">
              <RegMarks />
              <p className="label">
                <span className="text-brand">Education</span>
              </p>
              <p
                aria-hidden
                className="mt-8 font-mono text-[clamp(4rem,9vw,7.5rem)] font-medium leading-none tracking-[-0.06em] text-rule-strong"
              >
                2025
              </p>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.025em] text-ink md:text-[1.75rem]">
                {education.school}
              </h3>
              <p className="mt-1.5 text-[16px] text-ink-2">{education.degree}</p>
              <p className="label mt-auto pt-8 text-ink-4">
                {education.period} · {education.location}
              </p>
            </div>
          </Reveal>

          <ul className="border-t border-rule lg:col-span-7">
            {items.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.05}
                className="grid grid-cols-1 gap-2 border-b border-rule py-5 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="label text-ink-4">{item.kind}</span>
                <div>
                  <p className="text-[18px] font-medium tracking-tight text-ink">
                    {item.title}
                    <span className="font-normal text-ink-3"> — {item.org}</span>
                  </p>
                  <p className="mt-1 text-[16px] text-ink-2">
                    {item.result}
                    {item.date && <span className="text-ink-4"> · {item.date}</span>}
                  </p>
                </div>
                <span className="text-[15px] sm:text-right">
                  {item.link && <ExternalLink href={item.link.href}>{item.link.label}</ExternalLink>}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
