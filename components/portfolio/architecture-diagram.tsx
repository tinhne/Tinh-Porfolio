import type { Project } from "@/lib/content";
import { RegMarks } from "./primitives";

/** Layered architecture drawing: one band per layer, annotated flows in between. */
export function ArchitectureDiagram({
  architecture,
  index,
}: {
  architecture: Project["architecture"];
  index: string;
}) {
  const { layers, flows } = architecture;
  return (
    <figure className="relative border border-rule bg-canvas-2/60">
      <RegMarks />
      <figcaption className="label flex items-center justify-between gap-4 border-b border-rule px-4 py-3 md:px-5">
        <span>
          <span className="text-brand">fig. A{index}</span> — Architecture
        </span>
        <span className="hidden text-ink-4 sm:inline">top → bottom = request → storage</span>
      </figcaption>

      <ol className="relative px-4 py-5 md:px-6 md:py-7">
        {/* spine */}
        <span
          aria-hidden
          className="absolute bottom-10 left-[calc(1rem+3.5rem)] top-10 w-px bg-rule-strong md:left-[calc(1.5rem+6.5rem)]"
        />
        {layers.map((layer, i) => (
          <li key={layer.name}>
            <div className="relative grid grid-cols-[3.5rem_1fr] items-center gap-4 md:grid-cols-[6.5rem_1fr] md:gap-6">
              <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-ink-3 md:text-[11px]">
                <span className="block text-ink-4">L{i + 1}</span>
                {layer.name}
              </span>
              <span
                aria-hidden
                className="absolute left-[3.5rem] size-[7px] -translate-x-[3px] border border-brand bg-canvas md:left-[6.5rem]"
              />
              <ul className="flex flex-wrap gap-2 pl-3 md:pl-4">
                {layer.nodes.map((node) => (
                  <li
                    key={node}
                    className="border border-rule-strong bg-canvas px-2.5 py-1.5 text-[13px] text-ink md:px-3 md:text-[14px]"
                  >
                    {node}
                  </li>
                ))}
              </ul>
            </div>
            {flows[i] && (
              <div className="grid grid-cols-[3.5rem_1fr] gap-4 py-3 md:grid-cols-[6.5rem_1fr] md:gap-6">
                <span />
                <span className="flex items-center gap-2 pl-3 font-mono text-[11px] text-ink-4 md:pl-4">
                  <span aria-hidden className="text-pulse">↓</span>
                  {flows[i]}
                </span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
