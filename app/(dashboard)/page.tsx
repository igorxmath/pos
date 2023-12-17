import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/ui/card'
import { Gauge } from '#/ui/gauge'

import { Metric } from './overview/metric'
import { Overview } from './overview/overview'
import { RecentSales } from './overview/recentSales'

export default function Page() {
  return (
    <div className='container mx-auto flex w-full flex-col space-y-4 p-4'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card className='md:col-span-1'>
          <CardHeader>
            <CardTitle>Exercise Minutes</CardTitle>
            <CardDescription>
              Your exercise minutes are ahead of where you normally are.
            </CardDescription>
          </CardHeader>
          <CardContent className='pb-4'>
            <div className='h-[200px]'>
              <Gauge
                value={80}
                size='large'
                showValue={true}
              />
            </div>
          </CardContent>
        </Card>
        <Card className='md:col-span-3'>
          <CardHeader>
            <CardTitle>Exercise Minutes</CardTitle>
            <CardDescription>
              Your exercise minutes are ahead of where you normally are.
            </CardDescription>
          </CardHeader>
          <CardContent className='pb-4'>
            <div className='h-[200px]'>
              <Metric />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='md:col-span-4'>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <Overview />
          </CardContent>
        </Card>
        <Card className='md:col-span-3'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
