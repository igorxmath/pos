'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { motion } from 'framer-motion'

import { segments } from '@/lib/segments'
import { Button } from '#/ui/button'

export default function Tabs() {
  const segment = useSelectedLayoutSegment()

  return (
    <>
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
              <Link href={`/dashboard/${slug}`}>{name}</Link>
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
    </>
  )
}
