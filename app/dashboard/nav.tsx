import Link from 'next/link'
import { Square } from '#/icons'
import { auth } from '$/auth'

import { segments } from '@/lib/segments'
import { Avatar, AvatarFallback, AvatarImage } from '#/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '#/ui/dropdownMenu'

import { SignOutButton } from './signOut'
import Tabs from './tabs'

export default function Nav() {
  return (
    <div className='scrollbar-hide sticky top-0 z-40 flex w-auto flex-wrap items-center justify-between space-x-2 overflow-x-auto border-b bg-background px-4 transition-all duration-150'>
      <div className='flex flex-shrink-0 items-center'>
        <Link
          href='/dashboard'
          className='cursor-default'
        >
          <Square className='mr-4 h-6 w-6 transition-transform duration-300 hover:scale-105' />
        </Link>
        <Tabs />
      </div>
      <div className='flex items-center justify-between space-x-4'>
        <UserAccountNav />
      </div>
    </div>
  )
}

async function UserAccountNav() {
  const session = await auth()

  const name = session?.user?.name || ''
  const email = session?.user?.email || ''
  const image = session?.user?.image || ''

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='h-8 w-8'>
          <AvatarImage
            src={image}
            alt={name}
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {name && <p className='font-medium'>{name}</p>}
            {email && <p className='w-[200px] truncate text-sm text-muted-foreground'>{email}</p>}
          </div>
        </div>
        <DropdownMenuSeparator />
        {segments.map(({ name, slug, Icon }) => (
          <Link
            key={slug}
            href={`/dashboard/${slug}`}
          >
            <DropdownMenuItem className='cursor-pointer'>
              <Icon className='mr-2 h-4 w-4' />
              {name}
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
