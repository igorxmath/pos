import './globals.css'

import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { cn } from '@/lib/utils'
import { MobileProvider } from '@/hooks/mobileWrapper'

import Footer from './footer'
import Nav from './nav'

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
}

export const metadata: Metadata = {
  title: {
    default: 'POS',
    template: '%s | POS',
  },
  description: 'A POS system for your business',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
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
  )
}
