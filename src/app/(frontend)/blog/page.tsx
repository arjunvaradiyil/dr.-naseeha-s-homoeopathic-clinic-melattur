import Link from 'next/link'
import Image from 'next/image'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { CLINIC } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
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

const FEATURED = {
  category: 'Homoeopathy',
  title: 'Understanding Homoeopathy for Daily Wellness',
  excerpt: 'How homoeopathy works and why it is a gentle option for the whole family.',
  slug: '/blog/understanding-homoeopathy-daily-wellness',
  image: '/skilltreatments.png',
  author: CLINIC.name,
  publishedAt: '2026-02-08',
}

const GRID_ITEMS = [
  {
    category: 'Homoeopathy',
    title: 'PCOD and Homoeopathy: What You Need to Know',
    excerpt: 'A holistic approach to PCOD with homoeopathic treatment and lifestyle support.',
    slug: '/treatments/pcod',
    image: '/pcod.png',
    author: CLINIC.name,
    publishedAt: '2026-02-08',
  },
  {
    category: 'Treatment',
    title: 'Allergy & Asthma Relief with Homoeopathy',
    excerpt: 'Seasonal, food and respiratory allergy management with natural, side-effect free treatment.',
    slug: '/treatments/allergy',
    image: '/allergy_icon_no_bg.png',
    author: CLINIC.name,
    publishedAt: '2026-02-08',
  },
  {
    category: 'Treatment',
    title: 'Skin Care and Homoeopathy in Kerala',
    excerpt: 'Natural approaches to acne, eczema and healthy skin from the inside out.',
    slug: '/treatments/skin',
    image: '/skilltreatments.png',
    author: CLINIC.name,
    publishedAt: '2026-02-08',
  },
  {
    category: 'Clinic',
    title: 'Meet Dr. Naseeha',
    excerpt: 'Personalized homoeopathic care for the entire family in Melattur, Kerala.',
    slug: '/about-doctor',
    image: '/Naeesha.jpeg',
    author: CLINIC.name,
    publishedAt: '2026-02-08',
  },
  {
    category: 'Awareness',
    title: 'Homoeopathy & Health Awareness Videos',
    excerpt: 'Watch tips on wellness and natural treatment from our clinic.',
    slug: '/awareness-videos',
    image: '/skilltreatments.png',
    author: CLINIC.name,
    publishedAt: '2026-02-08',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="blog-page blog-insights-page">
        <PageBanner title="BLOG" items={[{ label: 'HOME', href: '/' }, { label: 'BLOG' }]} />
        <div className="blog-insights-inner">
          <Link
            href={FEATURED.slug}
            className="blog-featured-hero"
            aria-label={FEATURED.title}
          >
            <div className="blog-featured-hero-image">
              <Image
                src={FEATURED.image}
                alt=""
                fill
                className="blog-featured-hero-img"
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
              <div className="blog-featured-hero-overlay" aria-hidden />
            </div>
            <div className="blog-featured-hero-content">
              <span className="blog-featured-hero-category">{FEATURED.category}</span>
              <h2 className="blog-featured-hero-title">{FEATURED.title}</h2>
              <p className="blog-featured-hero-meta">
                <span className="blog-featured-hero-avatar" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                {FEATURED.author}
                {FEATURED.publishedAt && (
                  <>
                    <span className="blog-featured-hero-sep"> · </span>
                    {formatDate(FEATURED.publishedAt)}
                  </>
                )}
              </p>
            </div>
          </Link>

          <div className="blog-insights-grid">
            {GRID_ITEMS.map((item, i) => (
              <article key={i} className="blog-insight-card">
                <Link href={item.slug} className="blog-insight-card-link" aria-label={item.title}>
                  <div className="blog-insight-card-image">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="blog-insight-card-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {item.category && (
                      <span className="blog-insight-card-category">{item.category}</span>
                    )}
                  </div>
                  <div className="blog-insight-card-body">
                    <h3 className="blog-insight-card-title">{item.title}</h3>
                    <div className="blog-insight-card-meta">
                      <span className="blog-insight-card-avatar" aria-hidden>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <span className="blog-insight-card-author">{item.author}</span>
                      {item.publishedAt && (
                        <>
                          <span className="blog-insight-card-meta-sep" aria-hidden />
                          <span className="blog-insight-card-date">{formatDate(item.publishedAt)}</span>
                        </>
                      )}
                    </div>
                    {item.excerpt && (
                      <p className="blog-insight-card-excerpt">{item.excerpt}</p>
                    )}
                    <span className="blog-insight-card-cta">View post</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <section className="blog-cta-block" aria-labelledby="blog-cta-heading">
            <h2 id="blog-cta-heading" className="blog-cta-title">Want personalized care?</h2>
            <p className="blog-cta-text">
              Explore our <Link href="/treatments">treatments</Link> or book a consultation at {CLINIC.name}, Melattur. Online consultation is also available.
            </p>
            <div className="blog-cta-buttons">
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
