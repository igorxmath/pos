import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db } from '$/db'
import { users } from '$/schema'
import { eq } from 'drizzle-orm'
import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
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
  providers: [Google, GitHub],
  callbacks: {
    async session({ session, user }) {
      const findUserRole = await db.query.users.findFirst({
        columns: { role: true },
        where: eq(users.id, user.id),
      })

      session.user.role = findUserRole?.role ?? 'member'
      session.user.id = user.id
      return session
    },
  },
})
