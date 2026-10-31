import { about, approach, exploring } from "@/lib/content";
import { Reveal } from "./reveal";
import { ScrollText } from "./scroll-text";
import { SectionHeader } from "./primitives";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pb-28 pt-20 md:pb-40 md:pt-28">
      <div className="container-x">
        <SectionHeader
          id="about-title"
          index="01"
          label="About"
          aside="Profile"
          title="Engineering ideas"
          muted="into real products."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <dl className="border-t border-rule">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3.5"
                >
                  <dt className="label pt-0.5">{fact.label}</dt>
                  <dd className="text-[15px] text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="lg:col-span-8">
            <ScrollText
              text={about.paragraphs[0]}
              className="text-[clamp(1.375rem,2.5vw,2.125rem)] font-medium leading-[1.3] tracking-[-0.025em] text-ink"
            />
            <Reveal>
              <p className="lead mt-8 max-w-[62ch] text-ink-3">{about.paragraphs[1]}</p>
            </Reveal>
          </div>
        </div>

        {/* How I work */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                My engineering approach
              </h3>
              <span className="label hidden sm:block">Five habits, in order</span>
            </div>
          </Reveal>
          <ol className="mt-8 grid grid-cols-1 border-t border-rule sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.06}
                className="group relative border-b border-rule pb-8 pr-6 pt-6 sm:even:border-l sm:even:pl-5 lg:border-b-0 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
                />
                <span className="font-mono text-[11px] text-brand">0{i + 1}</span>
                <p className="mt-6 text-lg font-medium tracking-tight text-ink">{step.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-3">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Currently exploring */}
        <div className="mt-24 grid grid-cols-1 gap-10 md:mt-32 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
              Currently exploring
            </h3>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-relaxed text-ink-3">
              Areas I&apos;m actively learning. Interested, practising — not claiming expertise.
            </p>
          </Reveal>
          <ul className="border-t border-rule lg:col-span-8">
            {exploring.map((item, i) => (
              <Reveal
                as="li"
                key={item.topic}
                delay={i * 0.05}
                className="group grid grid-cols-1 gap-1 border-b border-rule py-4 sm:grid-cols-[1fr_1.3fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="text-[15px] text-ink transition-colors group-hover:text-brand">
                  {item.topic}
                </span>
                <span className="text-[14px] text-ink-3">{item.detail}</span>
                <span className="label hidden border border-dashed border-rule-strong px-2 py-0.5 text-[10px] text-ink-4 sm:inline">
                  Learning
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
