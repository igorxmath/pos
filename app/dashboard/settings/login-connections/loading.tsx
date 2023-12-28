import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className='space-y-8'>
      <div className='space-y-3'>
        <Skeleton className='h-8 w-1/4' />
        <Skeleton className='h-4 w-3/4' />
      </div>
      <Skeleton className='h-40 w-full' />
      <div className='space-y-4'>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <div className='flex-1 space-y-2 py-1'>
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
          <Skeleton className='h-10 w-24' />
        </div>
        <div className='flex items-center space-x-4'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <div className='flex-1 space-y-2 py-1'>
            <Skeleton className='h-4 w-3/4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
          <Skeleton className='h-10 w-24' />
        </div>
      </div>
    </div>
  )
}
