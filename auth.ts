import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '$/db'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
})
