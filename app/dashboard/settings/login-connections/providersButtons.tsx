'use client'

import * as React from 'react'
import { disconnectProvider, signInWithGithubAction, signInWithGoogleAction } from '@/actions/user'
import { GitHub, Google } from '#/icons'
import { toast } from 'sonner'

import { Button } from '#/ui/button'
import { LoadingDots } from '#/ui/loadingDots'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export function ConnectGoogleProviderButton({ disabled }: { disabled?: boolean }) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <Button
      disabled={disabled || isPending}
      variant={'outline'}
      onClick={() =>
        startTransition(() => {
          signInWithGoogleAction('/dashboard/settings/login-connections')
        })
      }
    >
      {isPending ? (
        <LoadingSpinner classNames={{ container: 'mr-2 h-4 w-4', spinner: 'h-4 w-4' }} />
      ) : (
        <Google className='mr-2 h-4 w-4' />
      )}
      Google
    </Button>
  )
}

export function ConnectGitHubProviderButton({ disabled }: { disabled?: boolean }) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <Button
      disabled={disabled || isPending}
      variant={'default'}
      onClick={() =>
        startTransition(() => {
          signInWithGithubAction('/dashboard/settings/login-connections')
        })
      }
    >
      {isPending ? (
        <LoadingSpinner classNames={{ container: 'mr-2 h-4 w-4', spinner: 'h-4 w-4' }} />
      ) : (
        <GitHub className='mr-2 h-4 w-4' />
      )}
      GitHub
    </Button>
  )
}

export function DisconnectProviderButton({ provider }: { provider: string }) {
  const [isPending, startTransition] = React.useTransition()

  return (
    <Button
      variant='outline'
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          disconnectProvider(provider)
            .then(({ message }) => {
              toast.success(message)
            })
            .catch(({ message }) => {
              toast.error(message)
            })
        })
      }}
    >
      {isPending ? <LoadingDots /> : 'Disconnect'}
    </Button>
  )
}
