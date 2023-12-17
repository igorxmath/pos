import './globals.css'

import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { cn } from '@/lib/utils/merge'
import { MobileProvider } from '@/hooks/mobileWrapper'

import Footer from './footer'
import Nav from './nav'

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
}

export const metadata: Metadata = {
  title: {
    default: 'Verbalizy',
    template: '%s | Verbalizy',
  },
  description: 'A simple way to create documents',
  metadataBase: new URL('https://verbalizy.vercel.app/'),
  twitter: {
    title: 'Verbalizy',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Verbalizy',
    siteName: 'Verbalizy',
    description: 'A simple way to create documents',
    url: 'https://verbalizy.vercel.app/',
    type: 'website',
    locale: 'pt-BR',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        suppressHydrationWarning
      >
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            `${GeistSans.variable} ${GeistMono.variable}`,
          )}
        >
          <MobileProvider>
            <Nav />
            <main className='flex min-h-screen w-full justify-center'>{children}</main>
            <Footer />
          </MobileProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
