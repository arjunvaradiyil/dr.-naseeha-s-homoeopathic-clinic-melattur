import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaUser } from 'react-icons/fa'
import Header from '../../Header'
import Footer from '../../Footer'
import PageBanner from '../../PageBanner'
import { BLOG_SLUGS, getBlogPost } from '../blog-posts'
import type { BlogBlock } from '../blog-posts'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../../styles.css'

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} – Blog | Homoeopathy Melattur`,
    description: buildMetaDescription(post.description),
    openGraph: {
      title: post.title,
      description: post.description,
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

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="blog-post-heading">{block.text}</h2>
    case 'p':
      return <p className="blog-post-p">{block.text}</p>
    case 'list':
      return (
        <ul className="blog-post-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case 'listNested':
      return (
        <>
          {block.intro && <p className="blog-post-p">{block.intro}</p>}
          <ul className="blog-post-list">
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const breadcrumbLabel = post.title.length > 40 ? 'Article' : post.title.toUpperCase()

  return (
    <>
      <Header />
      <main className="blog-post-page">
        <PageBanner
          title="BLOG"
          items={[
            { label: 'HOME', href: '/' },
            { label: 'BLOG', href: '/blog' },
            { label: breadcrumbLabel },
          ]}
        />
        <article className="blog-post-article-wrap">
          <div className="blog-post-inner">
            <header className="blog-post-header">
              {post.category && (
                <span className="blog-post-category">{post.category}</span>
              )}
              <h1 className="blog-post-title">{(post.title ?? '').toUpperCase()}</h1>
              <div className="blog-post-meta">
                <span className="blog-post-author-avatar" aria-hidden>
                  <FaUser className="blog-post-author-icon" />
                </span>
                <span className="blog-post-author-text">
                  {post.author ?? 'Blog'}
                  {post.publishedAt && (
                    <>
                      <span className="blog-post-meta-sep"> · </span>
                      {formatDate(post.publishedAt)}
                    </>
                  )}
                </span>
              </div>
            </header>

            {post.featuredImage && (
              <div className="blog-post-featured-image">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            <div className="blog-post-article">
              <div className="blog-post-body">
                {post.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
              <footer className="blog-post-footer">
                <Link href="/blog" className="blog-post-back">← Back to blog</Link>
                <Link href="/treatments" className="btn btn-teal">View treatments</Link>
              </footer>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
