import { cn } from '@/lib/utils'

export const LoadingDots = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <div className={'flex space-x-1 [&>*:nth-child(2)]:delay-200 [&>*:nth-child(3)]:delay-500'}>
    {[...Array(3)].map((_, i) => (
      <span
        key={i}
        className={cn('animate-blink fill-mode-both h-1 w-1 rounded-full bg-current', className)}
        {...props}
      />
    ))}
  </div>
)
