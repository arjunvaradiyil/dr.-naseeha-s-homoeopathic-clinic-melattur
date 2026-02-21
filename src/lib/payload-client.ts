/**
 * Server-side Payload client and helpers for the frontend.
 * Use in Server Components / server actions only.
 */

import config from '@payload-config'
import { getPayload } from 'payload'

export type { Post } from '@/payload-types'

/** Get Payload instance (use in server context only) */
export async function getPayloadClient() {
  return getPayload({ config })
}

/** Fetch all published posts, sorted by publishedAt desc. Populates featuredImage. */
export async function getPostsFromPayload() {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      depth: 1,
      limit: 50,
      sort: '-publishedAt',
    })
    return result.docs
  } catch {
    return []
  }
}

/** Fetch a single post by slug. Returns null if not found or Payload unavailable. */
export async function getPostBySlugFromPayload(slug: string) {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      depth: 1,
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return result.docs[0] ?? null
  } catch {
    return null
  }
}

/** All post slugs from Payload (for generateStaticParams / sitemap) */
export async function getPostSlugsFromPayload(): Promise<string[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'posts',
      depth: 0,
      limit: 500,
      select: { slug: true },
    })
    return result.docs.map((d) => (d.slug ?? '').trim()).filter(Boolean)
  } catch {
    return []
  }
}
