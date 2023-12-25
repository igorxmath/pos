import { redirect } from 'next/navigation'
import { db } from '$/db'
import { accounts } from '$/schema'
import { eq } from 'drizzle-orm'

import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GitHub, Google } from '@/components/icons'

export default async function Page() {
  const session = await auth()

  if (!session) {
    redirect('/auth')
  }

  const providersLinked = (
    await db.query.accounts.findMany({
      columns: {
        provider: true,
      },
      where: eq(accounts.userId, session.user.id),
    })
  ).map((account) => account.provider)

  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-2xl font-medium'>Login Connections</h1>
        <p>
          Connect your Personal Account on Vercel with a third-party service to use it for login.
          One Login Connection can be added per third-party service.
        </p>
      </div>
      <div className='space-y-6'>
        <Card className='shadow-sm'>
          <CardHeader>
            <CardTitle className='border-b text-base'>Add new</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex gap-4'>
              <Button disabled={providersLinked.includes('github')}>
                <GitHub className='mr-2 h-4 w-4' />
                GitHub
              </Button>
              <Button
                disabled={providersLinked.includes('google')}
                variant='outline'
              >
                <Google className='mr-2 h-4 w-4' />
                Google
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className='w-full border-t text-sm text-muted-foreground'>
              Connect your Personal Account with a third-party service to use it for login.
            </p>
          </CardFooter>
        </Card>
        <div className='space-y-4'>
          {providersLinked.map((provider) => (
            <Card
              className='w-full shadow-sm'
              key={provider}
            >
              <CardContent className='pt-6'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    {(() => {
                      switch (provider) {
                        case 'github':
                          return <GitHub className='mr-4 h-8 w-8' />
                        case 'google':
                          return <Google className='mr-4 h-8 w-8' />
                      }
                    })()}
                    <div className='font-medium'>
                      {provider.charAt(0).toUpperCase() + provider.slice(1)}
                    </div>
                  </div>
                  <Button variant='outline'>Disconnect</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
