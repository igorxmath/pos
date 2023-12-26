'use server'

import { revalidatePath } from 'next/cache'
import { auth, signIn, signOut } from '$/auth'
import { db } from '$/db'
import { accounts } from '$/schema'
import { and, count, eq } from 'drizzle-orm'

export async function signInWithGoogleAction(redirectTo = '/dashboard') {
  await signIn('google', { redirectTo })
}

export async function signInWithGithubAction(redirectTo = '/dashboard') {
  await signIn('github', { redirectTo })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/auth' })
}

export async function disconnectProvider(provider: string) {
  const session = await auth()

  if (!session) return { message: 'Not authenticated' }

  const userId = session.user.id

  const providerCount = await db
    .select({ value: count() })
    .from(accounts)
    .where(eq(accounts.userId, userId))

  if (providerCount[0].value <= 1) throw new Error('Cannot disconnect last provider')

  try {
    await db
      .delete(accounts)
      .where(and(eq(accounts.userId, userId), eq(accounts.provider, provider)))

    revalidatePath('/dashboard/settings/login-connections')

    return { message: 'Provider disconnected' }
  } catch (e) {
    throw new Error('Failed to disconnect provider')
  }
}
