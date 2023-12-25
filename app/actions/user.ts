'use server'

import { signIn, signOut } from '$/auth'

export async function signInWithGoogleAction() {
  await signIn('google', { redirectTo: '/dashboard' })
}

export async function signInWithGithubAction() {
  await signIn('github', { redirectTo: '/dashboard' })
}

export async function signOutAction() {
  await signOut({ redirectTo: '/auth' })
}
