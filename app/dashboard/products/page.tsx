import Image from 'next/image'
import { EllipsisHorizontal } from '#/icons'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/hooks/useDialog'
import SearchBar from '@/components/searchBar'
import { Badge } from '#/ui/badge'
import { Button } from '#/ui/button'
import { Checkbox } from '#/ui/checkbox'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '#/ui/table'

import Loader from './loader'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  let products = [
    {
      id: '1',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '2',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '3',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '4',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '5',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '6',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '7',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '8',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '9',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '10',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance Creations',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '11',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '12',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Lumina',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '13',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Lumin',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '14',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Lumi',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '15',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '16',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
    {
      id: '17',
      name: 'Glimmer Lamps',
      status: 'In Production',
      inventory: '500 in stock',
      vendor: 'Luminance',
      image: '/placeholder.png',
      price: '$49.99',
      category: 'Light',
    },
  ]

  if (searchParams.limit) {
    products = products.slice(0, Number(searchParams.limit))
  }

  return (
    <div className='flex w-full flex-col'>
      <div className='border-b'>
        <div className='max-auto container flex flex-col justify-between space-y-4 px-4 py-8 sm:flex-row sm:space-y-0'>
          <h1 className='font-heading text-3xl md:text-4xl'>Products</h1>
          <div className='flex space-x-4'>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Add product</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add product</DialogTitle>
                  <DialogDescription>Add a new product to your store.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant={'outline'}>Cancel</Button>
                  </DialogClose>
                  <Button>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className='container mx-auto space-y-4 p-4'>
        <SearchBar />
        <div className='rounded-lg border shadow-sm'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='flex items-center'>
                  <Checkbox aria-label='Select product' />
                </TableHead>
                <TableHead className='w-[80px]'>Image</TableHead>
                <TableHead className='max-w-[150px]'>Name</TableHead>
                <TableHead className='hidden md:table-cell'>Status</TableHead>
                <TableHead>Inventory</TableHead>
                <TableHead className='hidden md:table-cell'>Price</TableHead>
                <TableHead className='hidden md:table-cell'>Vendor</TableHead>
                <TableHead className='w-1'>
                  <Button
                    size={'icon'}
                    variant={'ghost'}
                    className='text-foreground'
                  >
                    <EllipsisHorizontal className='h-6 w-6' />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
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
                    <Button
                      className='p-0'
                      variant={'link'}
                    >
                      {product.name}
                    </Button>
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    <Badge variant={'outline'}>{product.status}</Badge>
                  </TableCell>
                  <TableCell>{product.inventory}</TableCell>
                  <TableCell className='hidden md:table-cell'>{product.price}</TableCell>
                  <TableCell className='hidden md:table-cell'>{product.vendor}</TableCell>
                  <TableCell>
                    <Button
                      size={'icon'}
                      variant={'ghost'}
                    >
                      <EllipsisHorizontal className='h-6 w-6' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className='flex justify-center'>
          <Loader />
        </div>
      </div>
    </div>
  )
}
