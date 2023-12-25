'use client'

import type { Route } from 'next'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { settingsSegments } from '@/lib/segments'
import { cn } from '@/lib/utils'
import { Button } from '#/ui/button'

export default function AsideNav() {
  const segment = useSelectedLayoutSegment()

  return (
    <aside className='mb-4 w-full flex-col sm:mr-4 md:flex md:w-[400px]'>
      <div className='flex sm:flex-col sm:space-y-2'>
        {settingsSegments.map(({ name, slug }, index) => {
          const isActive = (index == 0 && !segment) || segment === slug

          return (
            <Link
              href={`/dashboard/settings/${slug}` as Route}
              className='sm:w-full'
              key={index}
            >
              <Button
                variant={`ghost`}
                className={cn('font-normal sm:w-full sm:justify-start', isActive && 'font-medium')}
              >
                {name}
              </Button>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
