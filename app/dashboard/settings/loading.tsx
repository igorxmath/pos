import { cn } from '@/lib/utils'
import { FieldSetSkeleton } from '#/ui/fieldset'

export default function Loading() {
  const numberOfFieldSets = 3
  return (
    <>
      {[...Array(numberOfFieldSets)].map((_, i) => (
        <FieldSetSkeleton
          key={i}
          className={cn(i === numberOfFieldSets - 1 && 'border-red-600')}
        />
      ))}
    </>
  )
}
