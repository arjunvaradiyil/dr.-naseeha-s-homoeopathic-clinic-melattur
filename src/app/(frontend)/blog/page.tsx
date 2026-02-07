import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { CLINIC } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'Health Tips & Blog – Homoeopathy Melattur',
  description: buildMetaDescription(
    `Health tips and homoeopathy insights from Dr. Naseeha's Homoeopathic Clinic, Melattur. Learn about natural wellness, PCOD, allergy, skin care and more.`
  ),
  keywords: ['homoeopathy blog Kerala', 'health tips Melattur', 'homoeopathy health tips Malappuram', 'Dr. Naseeha blog'],
  openGraph: {
    title: 'Health Tips & Blog | Dr. Naseeha\'s Homoeopathic Clinic',
    description: 'Health tips and homoeopathy insights from our clinic in Melattur, Kerala.',
    url: canonical('/blog'),
  },
  alternates: { canonical: canonical('/blog') },
}

/** Topics we cover – full articles coming soon */
const BLOG_TOPICS = [
  { title: 'Understanding Homoeopathy for Daily Wellness', excerpt: 'How homoeopathy works and why it is a gentle option for the whole family.' },
  { title: 'PCOD and Homoeopathy: What You Need to Know', excerpt: 'A holistic approach to PCOD with homoeopathic treatment and lifestyle support.' },
  { title: 'Allergy Relief with Homoeopathy in Kerala', excerpt: 'Seasonal and food allergy management with natural, side-effect free treatment.' },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="blog-page">
        <PageBanner title="HEALTH TIPS" items={[{ label: 'HOME', href: '/' }, { label: 'HEALTH TIPS' }]} />
        <div className="blog-inner">
          <header className="blog-hero">
            <h1 className="blog-hero-title">Health Tips & Blog</h1>
            <p className="blog-hero-intro">
              Practical insights on homoeopathy, common conditions and natural wellness from {CLINIC.name}, Melattur. We share tips to help you and your family stay healthy.
            </p>
          </header>

          <section className="blog-content" aria-labelledby="blog-topics-heading">
            <h2 id="blog-topics-heading" className="blog-section-title">Topics we cover</h2>
            <p className="blog-section-intro">
              New articles will be added here soon. In the meantime, explore our <Link href="/treatments">treatments</Link> and <Link href="/about-doctor">about the doctor</Link> for more on what we offer.
            </p>
            <ul className="blog-topic-list">
              {BLOG_TOPICS.map((post, i) => (
                <li key={i} className="blog-topic-card">
                  <h3 className="blog-topic-title">{post.title}</h3>
                  <p className="blog-topic-excerpt">{post.excerpt}</p>
                </li>
              ))}
            </ul>
            <p className="blog-coming-soon">More health tips and articles coming soon.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
