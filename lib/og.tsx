import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card in the site's spec-sheet style. */
export function renderOgImage({
  kicker,
  title,
  subtitle,
  footer,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  footer: string;
}) {
  const rule = "#1a2335";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080b12",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(99,140,255,0.22), rgba(8,11,18,0) 55%)",
          padding: "56px 64px",
          color: "#f4f7fc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: `1px solid ${rule}`,
            paddingBottom: 18,
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#929db0",
          }}
        >
          <span style={{ display: "flex" }}>
            <span style={{ color: "#638cff" }}>{kicker}</span>
          </span>
          <span>trungtinh.site</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
            {title}
          </div>
          <div style={{ marginTop: 26, fontSize: 36, color: "#929db0", letterSpacing: -1 }}>
            {subtitle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${rule}`,
            paddingTop: 18,
            fontSize: 22,
            color: "#929db0",
          }}
        >
          <span>{footer}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 12, height: 12, background: "#36d6c3" }} />
            github.com/tinhne
          </span>
        </div>
      </div>
    ),
    ogSize,
  );
}
