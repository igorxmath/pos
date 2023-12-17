import type { MetadataRoute } from 'next'
import { getURL } from 'app/lib/utils/helpers'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getURL(),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
