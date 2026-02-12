import { MetadataRoute } from 'next'
import { SITE_URL, TREATMENT_SLUGS } from '@/lib/seo'
import { BLOG_SLUGS } from '@/app/(frontend)/blog/blog-posts'

const STATIC_PATHS = [
  '',
  '/about',
  '/treatments',
  '/book-appointment',
  '/blog',
  '/contact',
  '/patient-stories',
  '/awareness-videos',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, '')
  const lastModified = new Date()

  const entries: MetadataRoute.Sitemap = [
    ...STATIC_PATHS.map((path) => ({
      url: `${base}${path || '/'}`,
      lastModified,
      changeFrequency: path === '' ? 'weekly' as const : (path === '/blog' ? 'weekly' as const : 'monthly' as const),
      priority: path === '' ? 1 : (path === '/contact' || path === '/book-appointment' ? 0.9 : 0.8),
    })),
    ...TREATMENT_SLUGS.map((slug) => ({
      url: `${base}/treatments/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...BLOG_SLUGS.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return entries
}
