import type { Metadata } from "next";
import {
  Space_Grotesk,
  JetBrains_Mono,
  Playfair_Display,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trungtinh.site"),
  title: "Trung Tinh (Le Van Trung Tinh) - Full-Stack Developer | Next.js, TypeScript",
description:
  "Trung Tinh (Le Van Trung Tinh) is a Full-Stack Developer from Vietnam specializing in TypeScript, Next.js, and scalable systems. Explore projects and experience.",
  generator: "Next.js",
  keywords: [
  "Trung Tinh",
  "Le Van Trung Tinh",
  "trungtinh",
  "Trung Tinh Developer",
  "Full-Stack Developer Vietnam",
  "TypeScript Developer",
  "Next.js Developer",
],
  authors: [{ name: "Le Van Trung Tinh" }],
  openGraph: {
  title: "Trung Tinh - Full-Stack Developer",
  description: "TypeScript, Next.js, scalable full-stack systems",
  url: "https://trungtinh.site",
  siteName: "Trung Tinh Portfolio",
  images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
    },
  ],
  locale: "en_US",
  type: "website",
},
  icons: {
    icon: [
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Le Van Trung Tinh",
        "alternateName": "Trung Tinh",
        "url": "https://trungtinh.site",
        "jobTitle": "Full-Stack Developer",
        "sameAs": [
          "https://github.com/tinhne",
          "https://www.linkedin.com/in/trung-t%C3%ADnh-l%C3%AA-v%C4%83n-b72669297/"
        ],
      }),
    }}
  />
</head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
