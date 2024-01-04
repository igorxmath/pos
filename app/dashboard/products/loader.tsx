'use client'

import * as React from 'react'
import type { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '#/ui/button'
import { LoadingSpinner } from '#/ui/loadingSpinner'

export default function Loader() {
  const [isPeding, startTransition] = React.useTransition()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { replace } = useRouter()

  const loadMoreProducts = () => {
    const params = new URLSearchParams(searchParams)
    const total = params.get('total')

    if (total) {
      params.set('total', (Number(total) + 5).toString())
    } else {
      params.set('total', '10')
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}` as Route, { scroll: false })
    })
  }

  return (
    <Button
      className='w-full'
      variant={'outline'}
      onClick={() => loadMoreProducts()}
    >
      {isPeding && <LoadingSpinner classNames={{ container: 'mr-2' }} />}
      Load more
    </Button>
  )
}
