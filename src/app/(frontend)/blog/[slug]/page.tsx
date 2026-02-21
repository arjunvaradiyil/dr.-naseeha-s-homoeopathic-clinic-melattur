import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '../../Header'
import Footer from '../../Footer'
import PageBanner from '../../PageBanner'
import { BLOG_SLUGS, getBlogPost } from '../blog-posts'
import type { BlogBlock } from '../blog-posts'
import { getPostBySlugFromPayload, getPostSlugsFromPayload } from '@/lib/payload-client'
import { canonical, buildMetaDescription } from '@/lib/seo'
import type { Media } from '@/payload-types'
import '../../styles.css'

export async function generateStaticParams() {
  const cmsSlugs = await getPostSlugsFromPayload()
  const merged = [...new Set([...BLOG_SLUGS, ...cmsSlugs])]
  return merged.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cmsPost = await getPostBySlugFromPayload(slug)
  const post = cmsPost ?? getBlogPost(slug)
  if (!post) return {}
  const title = 'title' in post ? post.title : ''
  const description = ('description' in post ? post.description : post.excerpt) ?? ''
  return {
    title: `${title} – Blog | Homoeopathy Melattur`,
    description: buildMetaDescription(description),
    openGraph: {
      title,
      description,
      url: canonical(`/blog/${slug}`),
    },
    alternates: { canonical: canonical(`/blog/${slug}`) },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function payloadFeaturedImageUrl(featuredImage: number | Media | null | undefined): string | null {
  if (!featuredImage) return null
  const media = typeof featuredImage === 'object' ? featuredImage : null
  const url = media?.url
  if (typeof url === 'string' && url) return url
  return null
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="blog-single-h2">{block.text}</h2>
    case 'p':
      return <p className="blog-single-p">{block.text}</p>
    case 'list':
      return (
        <ul className="blog-single-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case 'listNested':
      return (
        <>
          {block.intro && <p className="blog-single-p">{block.intro}</p>}
          <ul className="blog-single-list">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )
    default:
      return null
  }
}

/** Normalize Payload body JSON to BlogBlock[] */
function normalizeBody(body: unknown): BlogBlock[] {
  if (!Array.isArray(body)) return []
  return body.filter((b): b is BlogBlock => b != null && typeof b === 'object' && 'type' in b)
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cmsPost = await getPostBySlugFromPayload(slug)
  const staticPost = getBlogPost(slug)

  const fromCms = cmsPost && (Array.isArray(cmsPost.body) ? cmsPost.body.length > 0 : false)
  const post = fromCms ? cmsPost : staticPost
  if (!post) notFound()

  const title = 'title' in post ? post.title : ''
  const category = 'category' in post ? post.category : undefined
  const author = 'author' in post ? post.author : undefined
  const publishedAt = 'publishedAt' in post ? post.publishedAt : undefined
  const breadcrumbLabel = title.length > 40 ? 'Article' : title

  const heroSrc =
    fromCms && cmsPost
      ? payloadFeaturedImageUrl(cmsPost.featuredImage)
      : staticPost && 'featuredImage' in staticPost
        ? staticPost.featuredImage
        : null
  const blocks: BlogBlock[] = fromCms && cmsPost ? normalizeBody(cmsPost.body) : staticPost && 'blocks' in staticPost ? staticPost.blocks : []

  return (
    <>
      <Header />
      <main className="blog-single-page">
        <PageBanner
          title="BLOG"
          items={[
            { label: 'HOME', href: '/' },
            { label: 'BLOG', href: '/blog' },
            { label: breadcrumbLabel },
          ]}
        />

        <article className="blog-single-article">
          {heroSrc && (
            <div className="blog-single-hero">
              <Image
                src={heroSrc}
                alt={title}
                fill
                sizes="100vw"
                priority
                className="blog-single-hero-img"
              />
              <div className="blog-single-hero-overlay" aria-hidden />
              <div className="blog-single-hero-caption">
                {category && (
                  <span className="blog-single-category">{category}</span>
                )}
                <h1 className="blog-single-title">{title}</h1>
                <p className="blog-single-meta">
                  {author ?? 'Clinic'}
                  {publishedAt && ` · ${formatDate(publishedAt)}`}
                </p>
              </div>
            </div>
          )}

          {!heroSrc && (
            <header className="blog-single-header">
              {category && (
                <span className="blog-single-category">{category}</span>
              )}
              <h1 className="blog-single-title">{title}</h1>
              <p className="blog-single-meta">
                {author ?? 'Clinic'}
                {publishedAt && ` · ${formatDate(publishedAt)}`}
              </p>
            </header>
          )}

          <div className="blog-single-prose-wrap">
            <div className="blog-single-prose">
              {blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <footer className="blog-single-footer">
              <Link href="/blog" className="blog-single-back">← Back to blog</Link>
              <Link href="/treatments" className="btn btn-teal">View treatments</Link>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
