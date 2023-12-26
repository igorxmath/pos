import { redirect } from 'next/navigation'
import { GitHub, Google } from '#/icons'
import { db } from '$/db'
import { accounts } from '$/schema'
import { eq } from 'drizzle-orm'

import { auth } from '@/lib/auth'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '#/ui/card'

import { DisconnectProviderButton, GitHubSignInButton, GoogleSignInButton } from './buttonActions'

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
          Connect your Personal Account with a third-party service to use it for login.
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
              <GitHubSignInButton
                disabled={providersLinked.includes('github')}
              />
              <GoogleSignInButton
                disabled={providersLinked.includes('google')}
              />
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
                  <DisconnectProviderButton provider={provider} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
