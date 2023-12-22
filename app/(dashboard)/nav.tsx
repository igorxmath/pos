'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Square } from '#/icons'
import { motion } from 'framer-motion'

import { segments } from '@/lib/segments'
import { Button } from '#/ui/button'

export default function Nav() {
  const segment = useSelectedLayoutSegment()

  return (
    <nav className='scrollbar-hide sticky top-0 z-40 flex w-auto flex-wrap items-center justify-between space-x-2 overflow-x-auto border-b bg-background px-4 transition-all duration-150'>
      <div className='flex flex-shrink-0 items-center'>
        <Link
          href='/'
          className='cursor-default'
        >
          <Square className='mr-4 h-6 w-6 transition-transform duration-300 hover:scale-105' />
        </Link>

        {segments.map(({ name, slug }, index) => {
          const isActive = (index == 0 && !segment) || segment === slug

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
      <div className='flex items-center justify-between space-x-4'></div>
    </nav>
  )
}
