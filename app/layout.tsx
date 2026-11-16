import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Chesapeake Tower Solutions',
  description: 'Rope access and communication solutions for The Bay and Beyond.',
  metadataBase: new URL('https://www.chesapeaketower.com'),
  openGraph: {
    title: 'Chesapeake Tower Solutions',
    description: 'Rope access and communication solutions for The Bay and Beyond.',
    url: 'https://www.chesapeaketower.com',
    siteName: 'Chesapeake Tower Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/hero-bg.svg',
        width: 1200,
        height: 630,
        alt: 'Chesapeake Tower Solutions — tower workers against a stormy Bay sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chesapeake Tower Solutions',
    description: 'Rope access and communication solutions for The Bay and Beyond.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        {/* Plausible Analytics script */}
        <Script
          defer
          data-domain="chesapeaketower.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="font-body bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  )
}
