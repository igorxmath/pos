'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import type { DialogProps } from '@radix-ui/react-alert-dialog'
import { segments } from 'app/lib/utils/segments'

import { cn } from '@/lib/utils/merge'
import { Button } from '#/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '#/ui/command'

type CommandMenuProps = DialogProps

export function CommandMenu({ ...props }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false)

  const { push } = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant='secondary'
        className={cn(
          'relative h-9 justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-36',
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className='inline-flex'>Command...</span>
        <kbd className='pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex'>
          <span className='text-xs'>⌘</span>K
        </kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Links'>
            {segments.map(({ slug, name, Icon }, index) => (
              <CommandItem
                key={index}
                onSelect={() => runCommand(() => push(`/${slug}`))}
              >
                <Icon className='mr-2 h-4 w-4' />
                {name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}