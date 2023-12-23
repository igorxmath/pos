'use client'

import * as React from 'react'
import type { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Search } from '#/icons'

import { Input } from '#/ui/input'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export default function SearchBar() {
  const [isPeding, startTransition] = React.useTransition()

  const pathname = usePathname()
  const searchParam = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(window.location.search)

    if (term) {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}` as Route)
    })
  }

  return (
    <div className='relative w-full'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        {!isPeding ? <Search className='h-5 w-5' /> : <LoadingSpinner />}
      </div>
      <Input
        id='search'
        className='bg-background pl-10'
        placeholder='Search...'
        defaultValue={searchParam.get('search')?.toString()}
        autoComplete='off'
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}
