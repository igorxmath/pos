'use client'

import * as React from 'react'
import { signOutAction } from '@/actions/user'
import { Logout } from '#/icons'

import { DropdownMenuItem } from '#/ui/dropdownMenu'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export function SignOutButton() {
  const [isPending, startTransition] = React.useTransition()

  return (
    <DropdownMenuItem
      className='cursor-pointer'
      onSelect={(event) => {
        event.preventDefault()
        startTransition(async () => await signOutAction())
      }}
    >
      {isPending ? (
        <LoadingSpinner classNames={{ container: 'mr-2' }} />
      ) : (
        <Logout className='mr-2 h-4 w-4' />
      )}
      Sign out
    </DropdownMenuItem>
  )
}
