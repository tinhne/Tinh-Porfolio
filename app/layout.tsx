import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Le Van Trung Tinh | Fresher Full Stack Developer',
  description: 'Fresher Full Stack Developer based in Vietnam. Passionate about Backend Development with Node.js, NestJS, and building scalable applications.',
  generator: 'v0.app',
  keywords: ['Full Stack Developer', 'Backend Developer', 'Node.js', 'NestJS', 'TypeScript', 'Vietnam', 'Fresher'],
  authors: [{ name: 'Le Van Trung Tinh' }],
  openGraph: {
    title: 'Le Van Trung Tinh | Fresher Full Stack Developer',
    description: 'Passionate about Backend Development with Node.js & NestJS',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
