import { renderOgImage } from "@/lib/og";
import { projects } from "@/lib/content";

export const alt = "Case study by Le Van Trung Tinh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) ?? projects[0];
  return renderOgImage({
    kicker: `Case study ${project.index} — ${project.year}`,
    title: project.title,
    subtitle: project.tagline,
    footer: project.tags.slice(0, 5).join(" · "),
  });
}
