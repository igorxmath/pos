'use client'

import * as React from 'react'
import type { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Search } from '#/icons'

import { Input } from '#/ui/input'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export default function SearchBar() {
  const [isPeding, startTransition] = React.useTransition()

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}` as Route, { scroll: false })
    })
  }

  return (
    <div className='relative w-full'>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        {!isPeding ? <Search className='h-4 w-4' /> : <LoadingSpinner />}
      </div>
      <Input
        id='search'
        className='bg-background pl-10'
        placeholder='Search...'
        defaultValue={searchParams.get('search')?.toString()}
        autoComplete='off'
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
    </div>
  )
}
