'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'
import { segments } from 'app/lib/utils/segments'
import { motion } from 'framer-motion'

import { Button } from '#/ui/button'

export default function Nav() {
  const allSelectedSegments = useSelectedLayoutSegments()

  const activeSegment =
    allSelectedSegments.find((segment) => segments.some((s) => s.slug === segment)) ||
    segments[0].slug

  return (
    <nav className='scrollbar-hide sticky top-0 z-40 flex w-auto flex-wrap items-center justify-between space-x-2 overflow-x-auto border-b bg-background px-4 transition-all duration-150'>
      <div className='flex flex-shrink-0 items-center'>
        {segments.map(({ name, slug }, index) => {
          const isActive = activeSegment === slug

          return (
            <div key={index}>
              <Button
                variant={'ghost'}
                size={'sm'}
                className='mb-1 mt-1'
                asChild
              >
                <Link href={`/${slug}`}>{name}</Link>
              </Button>
              {isActive && (
                <motion.div
                  layoutId='indicator'
                  transition={{
                    duration: 0.25,
                  }}
                  className='border-b border-primary'
                />
              )}
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-between space-x-4'>
        <UserButton />
      </div>
    </nav>
  )
}
