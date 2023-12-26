import type { Metadata } from 'next'

import { auth } from '@/lib/auth'
import { MobileProvider } from '@/hooks/mobileWrapper'
import { Toaster } from '#/ui/sonner'

import Footer from './footer'
import Nav from './nav'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (session?.user.role !== 'admin') {
    return (
      <main className='flex min-h-screen w-full justify-center'>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 className='text-2xl font-medium'>Unauthorized</h1>
          <p>You are not authorized to access this page.</p>
        </div>
      </main>
    )
  }

  return (
    <MobileProvider>
      <Nav />
      <main className='flex min-h-screen w-full justify-center'>{children}</main>
      <Footer />
      <Toaster />
    </MobileProvider>
  )
}
