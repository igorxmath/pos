import * as React from 'react'

import { useMobile } from '@/hooks/mobileWrapper'
import {
  Dialog as MobileDialog,
  DialogContent as MobileDialogContent,
  DialogTrigger as MobileDialogTrigger,
} from '#/ui/mobileDialog'
import {
  Popover as BasePopover,
  PopoverContent as BasePopoverContent,
  PopoverTrigger as BasePopoverTrigger,
} from '#/ui/popover'

const Popover = ({ children, ...props }: React.ComponentProps<typeof BasePopover>) => {
  const isMobile = useMobile()
  const PopoverComponent = isMobile ? MobileDialog : BasePopover

  return <PopoverComponent {...props}>{children}</PopoverComponent>
}

const PopoverTrigger = ({
  children,
  ...props
}: React.ComponentProps<typeof BasePopoverTrigger>) => {
  const isMobile = useMobile()
  const PopoverTriggerComponent = isMobile ? MobileDialogTrigger : BasePopoverTrigger

  return <PopoverTriggerComponent {...props}>{children}</PopoverTriggerComponent>
}

const PopoverContent = ({
  children,
  ...props
}: React.ComponentProps<typeof MobileDialogContent>) => {
  const isMobile = useMobile()
  const PopoverContentComponent = isMobile ? MobileDialogContent : BasePopoverContent

  return <PopoverContentComponent {...props}>{children}</PopoverContentComponent>
}

export { Popover, PopoverContent, PopoverTrigger }
