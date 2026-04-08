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
  title: "Trung Tinh (Le Van Trung Tinh) - Backend Developer | Node.js, NestJS",
description:
  "Trung Tinh (Le Van Trung Tinh) is a Backend Developer from Vietnam specializing in Node.js, NestJS, and scalable SaaS systems. Explore projects and experience.",
  generator: "Next.js",
  keywords: [
  "Trung Tinh",
  "Le Van Trung Tinh",
  "trungtinh",
  "Trung Tinh Developer",
  "Backend Developer Vietnam",
  "Node.js Developer",
  "NestJS Developer",
],
  authors: [{ name: "Le Van Trung Tinh" }],
  openGraph: {
  title: "Trung Tinh - Backend Developer",
  description: "Node.js, NestJS, scalable backend systems",
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
        "jobTitle": "Backend Developer",
        "sameAs": [
          "https://github.com/your-github",
          "https://linkedin.com/in/your-linkedin"
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
