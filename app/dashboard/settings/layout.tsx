import React from 'react'

import AsideNav from './asideNav'

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-col'>
      <div className='border-b'>
        <div className='max-auto container flex flex-col justify-between space-y-4 px-4 py-8 sm:flex-row sm:space-y-0'>
          <h1 className='text-3xl md:text-4xl'>Account Settings</h1>
        </div>
      </div>
      <div className='space-y-4 p-4 md:container'>
        <div className='flex flex-col md:flex-row'>
          <AsideNav />
          <div className='w-full space-y-4'>{children}</div>
        </div>
      </div>
    </div>
  )
}
