'use client'

import * as React from 'react'
import { Reorder, useDragControls } from 'framer-motion'

import { cn } from '@/lib/utils'

const ReorderableGroup = React.forwardRef<
  React.ElementRef<typeof Reorder.Group>,
  React.ComponentPropsWithoutRef<typeof Reorder.Group>
>(({ className, children, ...props }, ref) => (
  <Reorder.Group
    className={cn('flex flex-col space-y-4 p-4', className)}
    ref={ref}
    {...props}
  >
    {children}
  </Reorder.Group>
))
ReorderableGroup.displayName = 'ReorderableGroup'

const ReorderableItem = React.forwardRef<
  React.ElementRef<typeof Reorder.Item>,
  React.ComponentPropsWithoutRef<typeof Reorder.Item>
>(({ className, children, ...props }, ref) => {
  const controls = useDragControls()

  return (
    <Reorder.Item
      dragListener={false}
      dragControls={controls}
      className={cn('flex rounded-sm border bg-secondary p-4', className)}
      ref={ref}
      {...props}
    >
      <div
        className={cn('mr-4 cursor-grab', className)}
        onPointerDown={(e) => controls.start(e)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
      {children}
    </Reorder.Item>
  )
})
ReorderableItem.displayName = 'ReorderableItem'

export { ReorderableGroup, ReorderableItem }
