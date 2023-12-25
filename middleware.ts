import { NextResponse } from 'next/server'
import { auth } from '$/auth'

export default auth((req) => {
  const nextUrl = req.nextUrl
  const isLoggedIn = !!req.auth

  if (nextUrl.pathname.startsWith('/dashboard') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth', req.url))
  } else if (nextUrl.pathname.startsWith('/auth') && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
