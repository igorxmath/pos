import type { MetadataRoute } from 'next'
import { getURL } from 'app/lib/utils/helpers'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${getURL()}/sitemap.xml`,
  }
}
