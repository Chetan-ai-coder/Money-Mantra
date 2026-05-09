import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { BackgroundMusic } from '@/components/sections/background-music'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Money Mantra | Performace Marketing Agency',
    template: '%s | Money Mantra',
  },
  description: 'Money Mantra helps businesses scale using marketing psychology and high-performance digital systems. Expert lead generation, web development, and brand strategy.',
  // --- FAVICON & ICONS SECTION ---
  icons: {
    icon: [
      { url: '/Favicon.svg' }, // Standard favicon
      { url: '/Favicon.svg', type: 'image/svg' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  // -------------------------------
  keywords: [
    'Money Mantra', 
    'digital marketing agency Jhansi', 
    'marketing psychology', 
    'performance marketing', 
    'next.js web development', 
    'lead generation'
  ],
  authors: [{ name: 'Chetan Pratap Singh' }],
  creator: 'Money Mantra',
  metadataBase: new URL('https://moneymantra.co.in'), 
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://moneymantra.co.in',
    siteName: 'Money Mantra',
    title: 'Money Mantra | Scale Your Business with Psychology-Driven Marketing',
    description: 'Specializing in growth strategies that convert. We build high-end digital experiences for ambitious brands.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Money Mantra Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Money Mantra | Performace Marketing Agency',
    description: 'Transforming businesses through digital excellence.',
    creator: '@your_twitter_handle', 
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }, 
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-slate-50">
        <BackgroundMusic />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}