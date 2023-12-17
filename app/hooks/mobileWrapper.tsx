'use client'

import React, { createContext, useContext } from 'react'

import useMediaQuery from '@/hooks/useMediaQuery'

interface MobileContextProps {
  isMobile: boolean
}

const MobileContext = createContext<MobileContextProps | undefined>(undefined)

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useMediaQuery()
  return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>
}

export const useMobile = (): boolean => {
  const context = useContext(MobileContext)
  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider')
  }
  return context.isMobile
}
