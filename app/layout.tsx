import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/portfolio/nav";
import { Footer } from "@/components/portfolio/footer";
import { SectionRail } from "@/components/portfolio/section-rail";
import { Cursor } from "@/components/portfolio/cursor";
import { site } from "@/lib/content";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Le Van Trung Tinh (Trung Tinh) is a software engineer in Hanoi, Vietnam, building full-stack applications and AI-powered products with TypeScript, Java, Spring Boot, Next.js and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software Engineer · AI Product Builder`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: "Trung Tinh — Portfolio",
  keywords: [
    "Le Van Trung Tinh",
    "Trung Tinh",
    "trungtinh",
    "Software Engineer Vietnam",
    "Full-stack Developer",
    "Backend Developer",
    "AI Product Engineer",
    "Next.js",
    "TypeScript",
    "Java Spring Boot",
    "Hanoi",
    "Software Engineer Hanoi",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Software Engineer · AI Product Builder`,
    description:
      "Full-stack applications and AI-powered products — case studies, architecture and the engineering behind them.",
    url: site.url,
    siteName: "Trung Tinh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Software Engineer · AI Product Builder`,
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/logo.png" }, { url: "/logo.svg", type: "image/svg+xml" }],
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b12" },
    { media: "(prefers-color-scheme: light)", color: "#f2f0ea" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  jobTitle: "Software Engineer",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Hanoi", addressCountry: "VN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Duy Tan University" },
  knowsAbout: [
    "Full-stack development",
    "Backend development",
    "AI application development",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Next.js",
    "PostgreSQL",
  ],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="grain min-h-dvh font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div id="top" />
        <a
          href="#main"
          className="fixed left-4 top-3 z-[70] -translate-y-20 rounded-[2px] bg-ink px-3 py-2 text-[15px] text-canvas transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Nav />
          <SectionRail />
          {children}
          <Footer />
          <Cursor />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
