'use client'

import * as React from 'react'

import { useMobile } from '@/hooks/mobileWrapper'
import {
  Drawer as MobilePopover,
  DrawerContent as MobilePopoverContent,
  DrawerTrigger as MobilePopoverTrigger,
} from '@/components/ui/drawer'
import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger as BasePopoverTrigger,
} from '#/ui/popover'

const Popover = ({ children, ...props }: React.ComponentProps<typeof BasePopover>) => {
  const isMobile = useMobile()
  const PopoverComponent = isMobile ? MobilePopover : BasePopover

  return <PopoverComponent {...props}>{children}</PopoverComponent>
}

const PopoverTrigger = ({
  children,
  ...props
}: React.ComponentProps<typeof BasePopoverTrigger>) => {
  const isMobile = useMobile()
  const PopoverTriggerComponent = isMobile ? MobilePopoverTrigger : BasePopoverTrigger

  return <PopoverTriggerComponent {...props}>{children}</PopoverTriggerComponent>
}

const PopoverContent = ({
  children,
  ...props
}: React.ComponentProps<typeof MobilePopoverContent>) => {
  const isMobile = useMobile()
  const PopoverContentComponent = isMobile ? MobilePopoverContent : BasePopoverContent

  return <PopoverContentComponent {...props}>{children}</PopoverContentComponent>
}

export { Popover, PopoverContent, PopoverTrigger }
