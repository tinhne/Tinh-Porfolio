import { renderOgImage } from "@/lib/og";

export const alt = "Le Van Trung Tinh — Software Engineer · AI Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    kicker: "Portfolio — Da Nang, Vietnam",
    title: "Le Van Trung Tinh",
    subtitle: "Software Engineer · AI Product Builder",
    footer: "Full-stack applications & AI-powered products",
  });
}
