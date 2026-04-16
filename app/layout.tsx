import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Agency | Digital Marketing & Growth',
    template: '%s | Agency',
  },
  description: 'We craft digital experiences that drive growth. Strategic digital marketing, brand identity, web development, and performance marketing for ambitious brands.',
  keywords: ['digital marketing', 'brand identity', 'web development', 'SEO', 'performance marketing', 'social media marketing'],
  authors: [{ name: 'Agency' }],
  creator: 'Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://agency.com',
    siteName: 'Agency',
    title: 'Agency | Digital Marketing & Growth',
    description: 'We craft digital experiences that drive growth. Strategic digital marketing, brand identity, web development, and performance marketing for ambitious brands.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency | Digital Marketing & Growth',
    description: 'We craft digital experiences that drive growth.',
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
