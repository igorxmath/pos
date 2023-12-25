import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '$/db'
import { type users } from '$/schema'
import NextAuth, { type DefaultSession } from 'next-auth'
import Google from 'next-auth/providers/google'

declare module 'next-auth' {
  interface Session {
    user: {
      id: (typeof users.$inferSelect)['id']
      role: (typeof users.$inferSelect)['role']
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
})
