import Link from 'next/link'
import Image from 'next/image'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { CLINIC } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
import { getPostsFromPayload } from '@/lib/payload-client'
import type { Media } from '@/payload-types'
import '../styles.css'

export const metadata = {
  title: 'Blog – Homoeopathy Melattur',
  description: buildMetaDescription(
    `Homoeopathy insights and articles from Dr. Naseeha's Homoeopathic Clinic, Melattur. Natural wellness, PCOD, allergy, skin care and more.`
  ),
  keywords: ['homoeopathy blog Kerala', 'homoeopathy blog Melattur', 'homoeopathy articles Malappuram', 'Dr. Naseeha blog'],
  openGraph: {
    title: 'Blog | Dr. Naseeha\'s Homoeopathic Clinic',
    description: 'Homoeopathy insights and articles from our clinic in Melattur, Kerala.',
    url: canonical('/blog'),
  },
  alternates: { canonical: canonical('/blog') },
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function featuredImageUrl(featuredImage: number | Media | null | undefined): string {
  if (!featuredImage) return '/skilltreatments.png'
  const media = typeof featuredImage === 'object' ? featuredImage : null
  const url = media?.url
  if (typeof url === 'string' && url.startsWith('/')) return url
  if (typeof url === 'string') return url
  return '/skilltreatments.png'
}

const FALLBACK_FEATURED = {
  category: 'Homoeopathy',
  title: 'Understanding Homoeopathy for Daily Wellness',
  excerpt: 'How homoeopathy works and why it is a gentle option for the whole family.',
  slug: '/blog/understanding-homoeopathy-daily-wellness',
  image: '/skilltreatments.png',
  author: CLINIC.name,
  publishedAt: '2026-02-08',
}

const FALLBACK_GRID = [
  { category: 'Homoeopathy', title: 'PCOD and Homoeopathy: What You Need to Know', excerpt: 'A holistic approach to PCOD with homoeopathic treatment and lifestyle support.', slug: '/treatments/pcod', image: '/pcod.png', author: CLINIC.name, publishedAt: '2026-02-08' },
  { category: 'Treatment', title: 'Allergy & Asthma Relief with Homoeopathy', excerpt: 'Seasonal, food and respiratory allergy management with natural, side-effect free treatment.', slug: '/treatments/allergy', image: '/allergy_icon_no_bg.png', author: CLINIC.name, publishedAt: '2026-02-08' },
  { category: 'Treatment', title: 'Skin Care and Homoeopathy in Kerala', excerpt: 'Natural approaches to acne, eczema and healthy skin from the inside out.', slug: '/treatments/skin', image: '/skilltreatments.png', author: CLINIC.name, publishedAt: '2026-02-08' },
  { category: 'Clinic', title: 'Meet Dr. Naseeha', excerpt: 'Personalized homoeopathic care for the entire family in Melattur, Kerala.', slug: '/about', image: '/Naeesha.jpeg', author: CLINIC.name, publishedAt: '2026-02-08' },
  { category: 'Awareness', title: 'Homoeopathy & Health Awareness Videos', excerpt: 'Watch tips on wellness and natural treatment from our clinic.', slug: '/awareness-videos', image: '/skilltreatments.png', author: CLINIC.name, publishedAt: '2026-02-08' },
]

export default async function BlogPage() {
  const cmsPosts = await getPostsFromPayload()
  const useCms = cmsPosts.length > 0
  const featured = useCms
    ? {
        category: cmsPosts[0].category ?? 'Blog',
        title: cmsPosts[0].title,
        excerpt: cmsPosts[0].excerpt ?? cmsPosts[0].description ?? '',
        slug: `/blog/${cmsPosts[0].slug}`,
        image: featuredImageUrl(cmsPosts[0].featuredImage),
        author: cmsPosts[0].author ?? CLINIC.name,
        publishedAt: cmsPosts[0].publishedAt,
      }
    : FALLBACK_FEATURED
  const gridItems = useCms
    ? cmsPosts.slice(1).map((p) => ({
        category: p.category ?? 'Blog',
        title: p.title,
        excerpt: p.excerpt ?? p.description ?? '',
        slug: `/blog/${p.slug}`,
        image: featuredImageUrl(p.featuredImage),
        author: p.author ?? CLINIC.name,
        publishedAt: p.publishedAt,
      }))
    : FALLBACK_GRID

  return (
    <>
      <Header />
      <main className="blog-page">
        <PageBanner title="BLOG" items={[{ label: 'HOME', href: '/' }, { label: 'BLOG' }]} />

        <div className="blog-layout">
          <section className="blog-intro">
            <h1 className="blog-intro-title">Insights &amp; articles</h1>
            <p className="blog-intro-desc">
              Homoeopathy tips, treatment insights and wellness from {CLINIC.nameShort}, Melattur.
            </p>
          </section>

          <Link href={featured.slug} className="blog-featured" aria-label={featured.title}>
            <div className="blog-featured-media">
              <Image
                src={featured.image}
                alt=""
                fill
                className="blog-featured-img"
                sizes="(max-width: 900px) 100vw, 66vw"
                priority
              />
              <span className="blog-featured-badge">{featured.category}</span>
            </div>
            <div className="blog-featured-content">
              <h2 className="blog-featured-title">{featured.title}</h2>
              <p className="blog-featured-excerpt">{featured.excerpt}</p>
              <span className="blog-featured-meta">
                {featured.author}
                {featured.publishedAt && ` · ${formatDate(featured.publishedAt)}`}
              </span>
              <span className="blog-featured-cta">Read article →</span>
            </div>
          </Link>

          <h2 className="blog-grid-title">More to explore</h2>
          <ul className="blog-grid">
            {gridItems.map((item, i) => (
              <li key={item.slug + i}>
                <Link href={item.slug} className="blog-card" aria-label={item.title}>
                  <div className="blog-card-media">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="blog-card-img"
                      sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    />
                    {item.category && (
                      <span className="blog-card-badge">{item.category}</span>
                    )}
                  </div>
                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{item.title}</h3>
                    {item.excerpt && (
                      <p className="blog-card-excerpt">{item.excerpt}</p>
                    )}
                    <span className="blog-card-meta">
                      {item.publishedAt ? formatDate(item.publishedAt) : item.author}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <section className="blog-cta" aria-labelledby="blog-cta-heading">
            <h2 id="blog-cta-heading" className="blog-cta-title">Want personalized care?</h2>
            <p className="blog-cta-desc">
              Explore our <Link href="/treatments">treatments</Link> or book a consultation at {CLINIC.name}, Melattur. Online consultation available.
            </p>
            <div className="blog-cta-actions">
              <Link href="/treatments" className="btn btn-outline">View treatments</Link>
              <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book via WhatsApp</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
