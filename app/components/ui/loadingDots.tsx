import { cn } from '@/lib/utils'

export const LoadingDots = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <div className={'flex space-x-1 [&>*:nth-child(2)]:delay-200 [&>*:nth-child(3)]:delay-500'}>
    {[...Array(3)].map((_, i) => (
      <span
        key={i}
        className={cn('h-1 w-1 animate-blink rounded-full bg-current fill-mode-both', className)}
        {...props}
      />
    ))}
  </div>
)
