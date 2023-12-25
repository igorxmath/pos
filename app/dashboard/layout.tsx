import { MobileProvider } from '@/hooks/mobileWrapper'

import Footer from './footer'
import Nav from './nav'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <MobileProvider>
      <Nav />
      <main className='flex min-h-screen w-full justify-center'>{children}</main>
      <Footer />
    </MobileProvider>
  )
}
