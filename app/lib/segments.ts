import { Columns, LineChart, Package, Settings, ShoppingCart, Users } from '#/icons'

export const segments = [
  {
    slug: '',
    name: 'Overview',
    Icon: Columns,
  },
  {
    slug: 'products',
    name: 'Products',
    Icon: Package,
  },
  {
    slug: 'orders',
    name: 'Orders',
    Icon: ShoppingCart,
  },
  {
    slug: 'customers',
    name: 'Customers',
    Icon: Users,
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    Icon: LineChart,
  },
  {
    slug: 'settings',
    name: 'Settings',
    Icon: Settings,
  },
]

export const settingsSegments = [
  {
    slug: '',
    name: 'General',
  },
  {
    slug: 'login-connections',
    name: 'Login Connections',
  },
]
