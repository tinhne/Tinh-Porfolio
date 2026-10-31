import { aiWorkflow, evidenceLabels, type Evidence } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AiCapabilities } from "./ai-capabilities";
import { Reveal } from "./reveal";
import { EvidenceMark, RegMarks, SectionHeader } from "./primitives";

function Lane({ who }: { who: "me" | "agent" }) {
  return (
    <>
      <div className="flex flex-col justify-center border-r border-rule py-6 pr-4">
        <p className={cn("font-mono text-[12px] uppercase tracking-[0.14em]", who === "me" ? "text-brand" : "text-pulse")}>
          {who === "me" ? "Me" : "AI agent"}
        </p>
        <p className="mt-1 text-[13.5px] leading-snug text-ink-4">
          {who === "me" ? "Owns decisions & quality" : "Accelerates execution"}
        </p>
      </div>
      <div className="relative col-span-6 grid grid-cols-6">
        {/* the lane's wire, with a signal running along it */}
        <span aria-hidden className="absolute inset-x-0 top-1/2 h-px bg-rule-strong" />
        <span
          aria-hidden
          className={cn(
            "packet absolute top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2",
            who === "me" ? "bg-brand" : "bg-pulse",
          )}
          style={{ animation: `lane-run ${who === "me" ? 9 : 7}s linear ${who === "me" ? 0 : 1.5}s infinite` }}
        />
        {aiWorkflow.map((step, i) => {
          const text = step[who];
          const shared = Boolean(step.me && step.agent);
          return (
            <div key={step.step} className="relative flex items-center px-2 py-4 lg:px-3">
              {shared && (
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-1/2 border-l border-dashed border-rule-strong",
                    who === "me" ? "bottom-0 top-1/2" : "bottom-1/2 top-0",
                  )}
                />
              )}
              {text ? (
                <div
                  className={cn(
                    "relative z-10 w-full border bg-canvas p-2.5 text-[13px] leading-snug text-ink-2 hyphens-auto xl:p-3 xl:text-[14px]",
                    who === "me" ? "border-brand/40" : "border-pulse/40",
                  )}
                >
                  <span className="sr-only">{`Step ${i + 1}, ${who === "me" ? "me" : "agent"}: `}</span>
                  {text}
                </div>
              ) : (
                <span
                  aria-hidden
                  className="relative z-10 mx-auto size-[7px] border border-rule-strong bg-canvas"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

const legend: Evidence[] = ["work", "project", "exploring"];

export function AiBuilder() {
  return (
    <section
      id="ai"
      aria-labelledby="ai-title"
      className="relative isolate overflow-hidden border-y border-rule bg-canvas-2/70 py-24 md:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="halo absolute -left-[30%] top-[10%] h-[90vmax] w-[90vmax] opacity-70" />
      </div>

      <div className="container-x">
        <SectionHeader
          id="ai-title"
          index="04"
          label="AI & Product Building"
          aside="Tools are not titles"
          title="Building with AI."
          muted="Engineering beyond prompts."
          intro={
            <>
              I use AI in two places: <span className="text-ink">inside products</span>, as features
              people actually touch, and <span className="text-ink">inside my workflow</span>, as a
              tool that makes me faster. In both, the design, the review and the testing stay my
              responsibility.
            </>
          }
        />

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[62ch] border-l border-pulse/60 pl-4 text-[16px] leading-relaxed text-ink-3">
            To be precise about it: I&apos;m an application engineer, not an ML researcher. I
            don&apos;t train models — I build reliable software around them.
          </p>
        </Reveal>

        {/* fig. 04 — swimlane of who does what */}
        <Reveal className="mt-16 md:mt-24">
          <figure className="relative border border-rule bg-canvas/60">
            <RegMarks />
            <figcaption className="label flex flex-wrap items-center justify-between gap-3 border-b border-rule px-4 py-3 md:px-5">
              <span>
                <span className="text-brand">fig. 04</span> — How I work with coding agents
              </span>
              <span className="text-ink-4">The agent writes drafts. I own the outcome.</span>
            </figcaption>

            {/* desktop swimlane */}
            <div className="hidden px-5 pb-2 md:block">
              <div className="grid grid-cols-[7.5rem_repeat(6,minmax(0,1fr))] xl:grid-cols-[9rem_repeat(6,minmax(0,1fr))]">
                <div />
                {aiWorkflow.map((step, i) => (
                  <div key={step.step} className="px-2 pb-1 pt-5 lg:px-3">
                    <span className="font-mono text-[12px] text-ink-4">0{i + 1}</span>
                    <p className="text-[16px] font-medium tracking-tight text-ink">{step.step}</p>
                  </div>
                ))}
                <Lane who="me" />
                <div className="col-span-7 h-px bg-rule" />
                <Lane who="agent" />
              </div>
            </div>

            {/* mobile: a numbered list */}
            <ol className="divide-y divide-rule md:hidden">
              {aiWorkflow.map((step, i) => (
                <li key={step.step} className="px-4 py-4">
                  <p className="flex items-baseline gap-3">
                    <span className="font-mono text-[12px] text-ink-4">0{i + 1}</span>
                    <span className="text-[17px] font-medium text-ink">{step.step}</span>
                  </p>
                  <dl className="mt-2 space-y-1.5 pl-7 text-[15px] leading-snug">
                    {step.me && (
                      <div className="flex gap-2">
                        <dt className="w-12 shrink-0 font-mono text-[12px] uppercase text-brand">Me</dt>
                        <dd className="text-ink-2">{step.me}</dd>
                      </div>
                    )}
                    {step.agent && (
                      <div className="flex gap-2">
                        <dt className="w-12 shrink-0 font-mono text-[12px] uppercase text-pulse">Agent</dt>
                        <dd className="text-ink-2">{step.agent}</dd>
                      </div>
                    )}
                  </dl>
                </li>
              ))}
            </ol>
          </figure>
        </Reveal>

        <div className="mt-20 md:mt-28">
          <Reveal>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h3 className="text-xl font-medium tracking-tight text-ink md:text-2xl">
                Capabilities, with receipts
              </h3>
              <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Evidence legend">
                {legend.map((kind) => (
                  <li key={kind} className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-3">
                    <EvidenceMark kind={kind} />
                    {evidenceLabels[kind]}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <AiCapabilities />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
