import { MetadataRoute } from 'next'
import { SITE_URL, TREATMENT_SLUGS } from '@/lib/seo'
import { BLOG_SLUGS } from '@/app/(frontend)/blog/blog-posts'
import config from '@payload-config'
import { getPayload } from 'payload'

type PayloadSitemapDoc = {
  slug?: string | null
  updatedAt?: string
}

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Include URLs from Payload collections when the backend is available.
  try {
    const payload = await getPayload({ config })

    const [pagesResult, postsResult] = await Promise.all([
      payload.find({
        collection: 'pages',
        depth: 0,
        limit: 1000,
      }),
      payload.find({
        collection: 'posts',
        depth: 0,
        limit: 1000,
      }),
    ])

    const pageEntries = (pagesResult.docs as PayloadSitemapDoc[])
      .map((doc) => {
        const slug = (doc.slug || '').trim().replace(/^\/+|\/+$/g, '')
        if (!slug) return null
        const route = slug.toLowerCase() === 'home' ? '/' : `/${slug}`
        return {
          url: `${base}${route}`,
          lastModified: doc.updatedAt ? new Date(doc.updatedAt) : lastModified,
          changeFrequency: 'weekly' as const,
          priority: route === '/' ? 1 : 0.8,
        }
      })
      .filter(Boolean) as MetadataRoute.Sitemap

    const postEntries = (postsResult.docs as PayloadSitemapDoc[])
      .map((doc) => {
        const slug = (doc.slug || '').trim().replace(/^\/+|\/+$/g, '')
        if (!slug) return null
        return {
          url: `${base}/blog/${slug}`,
          lastModified: doc.updatedAt ? new Date(doc.updatedAt) : lastModified,
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      })
      .filter(Boolean) as MetadataRoute.Sitemap

    const deduped = new Map<string, MetadataRoute.Sitemap[number]>()
    for (const entry of [...entries, ...pageEntries, ...postEntries]) {
      deduped.set(entry.url, entry)
    }

    return Array.from(deduped.values())
  } catch {
    // Payload may be unavailable during first setup; keep sitemap generation resilient.
    return entries
  }
}
