import * as React from 'react'

import { cn } from '@/lib/utils'
import style from '@/styles/loadingDots.module.css'

const LoadingDots = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('flex space-x-2', style.loading, className)}
      ref={ref}
      {...props}
    >
      {[...Array(3)].map((_, i) => (
        <span
          key={i}
          className='h-3 w-3 rounded-full bg-current'
        ></span>
      ))}
    </div>
  ),
)

LoadingDots.displayName = 'LoadingDots'

export { LoadingDots }
