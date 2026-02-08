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

const FEATURED = {
  category: 'Homoeopathy',
  date: 'Feb 2026',
  title: 'Understanding Homoeopathy for Daily Wellness',
  excerpt: 'How homoeopathy works and why it is a gentle option for the whole family.',
  slug: '/blog/understanding-homoeopathy-daily-wellness',
  image: '/skilltreatments.png',
}

const PRIMARY_POST = {
  category: 'Homoeopathy',
  title: 'PCOD and Homoeopathy: What You Need to Know',
  excerpt: 'A holistic approach to PCOD with homoeopathic treatment and lifestyle support. Personalized care for hormonal balance and wellness…',
  slug: '/treatments/pcod',
  moreLinks: [
    { title: 'Allergy & Asthma Relief with Homoeopathy', href: '/treatments/allergy' },
    { title: 'Skin Care and Homoeopathy in Kerala', href: '/treatments/skin' },
  ],
}

const PROFILE_POST = {
  category: 'Clinic',
  date: '12 Feb',
  title: 'Meet Dr. Naseeha',
  slug: '/about-doctor',
  image: '/Naeesha.jpeg',
}

const BLOG_CATEGORIES = [
  'Skin',
  'Allergy',
  'Asthma',
  'PCOD',
  'Gynaecology',
  'Migraine',
  'Hair Loss',
  'Diabetes',
  'Thyroid',
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="blog-page">
        <PageBanner title="BLOG" items={[{ label: 'HOME', href: '/' }, { label: 'BLOG' }]} />
        <div className="blog-inner">
          <header className="blog-header-row">
            <h1 className="blog-main-title">Blog</h1>
            <Link href="#blog-grid" className="blog-header-cta-pill">
              Read our blog <span aria-hidden>→</span>
            </Link>
          </header>

          <div id="blog-grid" className="blog-grid">
            {/* Featured – large card with image */}
            <Link href={FEATURED.slug} className="blog-card blog-card-featured">
              <div className="blog-card-featured-image">
                <Image src={FEATURED.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
                <span className="blog-card-badge" aria-hidden>✦</span>
              </div>
              <div className="blog-card-featured-body">
                <p className="blog-card-meta">{FEATURED.category} · {FEATURED.date}</p>
                <h2 className="blog-card-featured-title">{FEATURED.title}</h2>
              </div>
            </Link>

            {/* Primary – pastel teal/green, excerpt + more links */}
            <article className="blog-card blog-card-primary">
              <p className="blog-card-meta">{PRIMARY_POST.category}</p>
              <h2 className="blog-card-primary-title">{PRIMARY_POST.title}</h2>
              <p className="blog-card-excerpt">{PRIMARY_POST.excerpt}</p>
              <Link href={PRIMARY_POST.slug} className="blog-card-more">More</Link>
              <ul className="blog-card-links">
                {PRIMARY_POST.moreLinks.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href}>{item.title} <span aria-hidden>→</span></Link>
                  </li>
                ))}
              </ul>
              <span className="blog-card-corner-icon" aria-hidden>↗</span>
            </article>

            {/* Profile – light blue, circular image */}
            <Link href={PROFILE_POST.slug} className="blog-card blog-card-profile">
              <div className="blog-card-profile-content">
                <p className="blog-card-meta">{PROFILE_POST.category} · {PROFILE_POST.date}</p>
                <h2 className="blog-card-profile-title">{PROFILE_POST.title}</h2>
              </div>
              <div className="blog-card-profile-image">
                <Image src={PROFILE_POST.image} alt="" width={140} height={140} />
              </div>
            </Link>

            {/* Video – warm tan, play button, link to awareness videos */}
            <Link href="/awareness-videos" className="blog-card blog-card-video">
              <div className="blog-card-video-thumb">
                <Image src="/skilltreatments.png" alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
                <span className="blog-card-play-btn" aria-hidden>
                  <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg" width="56" height="40">
                    <path d="M66.5 24.4c0-1.2-.5-2.3-1.3-3.1L41.2 5.3c-1.4-.9-3.3-.9-4.7 0-1.4.9-2.2 2.5-2.2 4.2v32c0 1.7.8 3.3 2.2 4.2.7.5 1.5.7 2.3.7.8 0 1.6-.2 2.3-.7l24-16c.8-.8 1.3-1.9 1.3-3.1z" fill="currentColor"/>
                    <path d="M28 32V16l16 8-16 8z" fill="#fff"/>
                  </svg>
                </span>
              </div>
              <div className="blog-card-video-body">
                <p className="blog-card-meta">Awareness · Videos</p>
                <h2 className="blog-card-video-title">Homoeopathy & health awareness</h2>
              </div>
            </Link>

            {/* Categories – purple tint, tag grid */}
            <div className="blog-card blog-card-categories">
              <div className="blog-card-categories-grid">
                {BLOG_CATEGORIES.map((name, i) => (
                  <Link key={i} href="/treatments" className="blog-category-pill">{name}</Link>
                ))}
              </div>
              <Link href="/treatments" className="blog-card-categories-footer">
                <span>View all treatments</span>
                <span className="blog-card-categories-btn" aria-hidden>→</span>
              </Link>
            </div>
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
