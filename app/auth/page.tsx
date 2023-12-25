'use client'

import * as React from 'react'
import Link from 'next/link'
import { signInWithGoogleAction } from '@/actions/user'
import { ChevronLeft, Google } from '#/icons'

import { Button } from '#/ui/button'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export default function LoginPage() {
  const [isPending, startTransition] = React.useTransition()

  return (
    <div className='flex min-h-screen w-screen flex-col items-center justify-center'>
      <Button
        variant={'ghost'}
        className='absolute left-4 top-4 md:left-8 md:top-8'
        asChild
      >
        <Link href='/'>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Back
        </Link>
      </Button>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-sm'>Sign in to your account</p>
        </div>
        <Button
          variant={'outline'}
          className='w-full'
          disabled={isPending}
          onClick={(event) => {
            event.preventDefault()
            startTransition(async () => await signInWithGoogleAction())
          }}
        >
          {isPending ? (
            <LoadingSpinner classNames={{ container: 'mr-2 h-6 w-6', spinner: 'h-6 w-6' }} />
          ) : (
            <Google className='mr-2 h-6 w-6' />
          )}
          Continue with Google
        </Button>
        <p className='px-8 text-center text-sm text-muted-foreground'>
          By continuing, you agree to our{' '}
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
