import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '#/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/ui/table'

export default function Page() {
  const products = [
    {
      id: '1',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.svg',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '2',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.svg',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '3',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.svg',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '4',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.svg',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '5',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.svg',
      price: '$49.99',
      category: 'Light',
    },
  ]
  return (
    <div className='flex w-full flex-col'>
      <div className='border-b'>
        <div className='max-auto container flex flex-col justify-between space-y-4 px-4 py-8 sm:flex-row sm:space-y-0'>
          <h1 className='font-heading text-3xl md:text-4xl'>Products</h1>
          <div className='flex space-x-4'>
            <Button>Add product</Button>
          </div>
        </div>
      </div>
      <div className='container mx-auto p-4'>
        <div className='rounded-lg border shadow-sm'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[80px]'>Image</TableHead>
                <TableHead className='max-w-[150px]'>Name</TableHead>
                <TableHead className='hidden md:table-cell'>Status</TableHead>
                <TableHead className='hidden md:table-cell'>Inventory</TableHead>
                <TableHead className='hidden md:table-cell'>Price</TableHead>
                <TableHead>Vendor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Image
                      alt='Product image'
                      className='aspect-square rounded-md object-cover'
                      height='64'
                      src={product.image}
                      width='64'
                    />
                  </TableCell>
                  <TableCell className='font-medium'>
                    <Button variant={'link'}>{product.name}</Button>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    <Badge variant={'outline'}>{product.status}</Badge>
                  </TableCell>
                  <TableCell>{product.inventory}</TableCell>
                  <TableCell className='hidden md:table-cell'>{product.price}</TableCell>
                  <TableCell className='hidden md:table-cell'>{product.vendor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
