'use client'

import * as React from 'react'
import { Drawer } from 'vaul'

import { cn } from '@/lib/utils'

const Dialog = Drawer.Root

const DialogTrigger = Drawer.Trigger

const DialogPortal = Drawer.Portal

const DialogClose = Drawer.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Drawer.Overlay>,
  React.ComponentPropsWithoutRef<typeof Drawer.Overlay>
>(({ className, children, ...props }, ref) => (
  <Drawer.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-40 bg-background/80 bg-opacity-10 backdrop-blur', className)}
    {...props}
  >
    {children}
  </Drawer.Overlay>
))
DialogOverlay.displayName = Drawer.Overlay.displayName

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof Drawer.Content>,
  React.ComponentPropsWithoutRef<typeof Drawer.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Drawer.Content
      ref={ref}
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-border bg-background px-4 pb-4',
        className,
      )}
      {...props}
    >
      <div className='sticky top-0 z-20 mb-4 flex w-full items-center justify-center rounded-t-[10px] bg-inherit'>
        <div className='my-3 h-1 w-12 rounded-full bg-accent-foreground' />
      </div>
      {children}
    </Drawer.Content>
  </DialogPortal>
))
DialogContent.displayName = Drawer.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-1.5 text-center', className)}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogTitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
)
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
)
DialogDescription.displayName = 'DialogDescription'

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col-reverse', className)}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

export {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
