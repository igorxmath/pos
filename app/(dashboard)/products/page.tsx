import { auth } from '$/auth'

import { Button } from '#/ui/button'

export default async function Page() {
  const session = await auth()

  return (
    <div className='flex w-full flex-col'>
      <div className='border-b'>
        <div className='max-auto container flex flex-col justify-between space-y-4 px-4 py-8 sm:flex-row sm:space-y-0'>
          <h1 className='font-heading text-3xl md:text-4xl'>Products</h1>
          <div className='flex space-x-4'>
            <Button>New</Button>
          </div>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <p>{session?.user?.id}</p>
      </div>
    </div>
  )
}
