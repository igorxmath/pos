import { cn } from '@/lib/utils'
import { Skeleton } from '#/ui/skeleton'

const FieldSet = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'overflow-hidden rounded-lg border bg-fieldset text-fieldset-foreground shadow-sm',
      className,
    )}
    {...props}
  />
)

const FieldSetHeader = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('grid gap-1 p-6', className)}
    {...props}
  />
)

const FieldSetTitle = ({ className, ...props }: React.ComponentProps<'h4'>) => (
  <h4
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
)

const FieldSetDescription = ({ className, ...props }: React.ComponentProps<'p'>) => (
  <p
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
)

const FieldSetContent = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('px-6 pb-4', className)}
    {...props}
  />
)

const FieldSetFooter = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('border-t bg-secondary px-6 py-4', className)}
    {...props}
  />
)

const FieldSetSeleton = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <FieldSet
    className={cn('shadow-md', className)}
    {...props}
  >
    <FieldSetHeader className='gap-2'>
      <Skeleton className='h-5 w-1/5' />
      <Skeleton className='h-4 w-4/5' />
    </FieldSetHeader>
    <FieldSetContent className='h-10'>
      <Skeleton className='h-5 w-1/5' />
    </FieldSetContent>
    <FieldSetFooter>
      <Skeleton className='h-8 w-[120px] bg-primary' />
    </FieldSetFooter>
  </FieldSet>
)

export {
  FieldSet,
  FieldSetContent,
  FieldSetDescription,
  FieldSetFooter,
  FieldSetHeader,
  FieldSetSeleton,
  FieldSetTitle,
}
