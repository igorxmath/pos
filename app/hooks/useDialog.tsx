import * as React from 'react'

import { useMobile } from '@/hooks/mobileWrapper'
import {
  Drawer as MobileDialog,
  DrawerContent as MobileDialogContent,
  DrawerDescription as MobileDialogDescription,
  DrawerFooter as MobileDialogFooter,
  DrawerHeader as MobileDialogHeader,
  DrawerTitle as MobileDialogTitle,
  DrawerTrigger as MobileDialogTrigger,
} from '@/components/ui/drawer'
import {
  Dialog as BaseDialog,
  DialogContent as BaseDialogContent,
  DialogDescription as BaseDialogDescription,
  DialogFooter as BaseDialogFooter,
  DialogHeader as BaseDialogHeader,
  DialogTitle as BaseDialogTitle,
  DialogTrigger as BaseDialogTrigger,
} from '#/ui/dialog'

const Dialog = ({ children, ...props }: React.ComponentProps<typeof BaseDialog>) => {
  const isMobile = useMobile()
  const DialogComponent = isMobile ? MobileDialog : BaseDialog

  return <DialogComponent {...props}>{children}</DialogComponent>
}

const DialogTitle = ({ children, ...props }: React.ComponentProps<typeof BaseDialogTitle>) => {
  const isMobile = useMobile()
  const DialogTitleComponent = isMobile ? MobileDialogTitle : BaseDialogTitle

  return <DialogTitleComponent {...props}>{children}</DialogTitleComponent>
}

const DialogHeader = ({ children, ...props }: React.ComponentProps<typeof BaseDialogHeader>) => {
  const isMobile = useMobile()
  const DialogHeaderComponent = isMobile ? MobileDialogHeader : BaseDialogHeader

  return <DialogHeaderComponent {...props}>{children}</DialogHeaderComponent>
}

const DialogContent = ({
  children,
  ...props
}: React.ComponentProps<typeof MobileDialogContent>) => {
  const isMobile = useMobile()
  const DialogContentComponent = isMobile ? MobileDialogContent : BaseDialogContent

  return <DialogContentComponent {...props}>{children}</DialogContentComponent>
}

const DialogDescription = ({
  children,
  ...props
}: React.ComponentProps<typeof BaseDialogDescription>) => {
  const isMobile = useMobile()
  const DialogDescriptionComponent = isMobile ? MobileDialogDescription : BaseDialogDescription

  return <DialogDescriptionComponent {...props}>{children}</DialogDescriptionComponent>
}

const DialogFooter = ({ children, ...props }: React.ComponentProps<typeof BaseDialogFooter>) => {
  const isMobile = useMobile()
  const DialogFooterComponent = isMobile ? MobileDialogFooter : BaseDialogFooter

  return <DialogFooterComponent {...props}>{children}</DialogFooterComponent>
}

const DialogTrigger = ({ children, ...props }: React.ComponentProps<typeof BaseDialogTrigger>) => {
  const isMobile = useMobile()
  const DialogTriggerComponent = isMobile ? MobileDialogTrigger : BaseDialogTrigger

  return <DialogTriggerComponent {...props}>{children}</DialogTriggerComponent>
}

export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
}
