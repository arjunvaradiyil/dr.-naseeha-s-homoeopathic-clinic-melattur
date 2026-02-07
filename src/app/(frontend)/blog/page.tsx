import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
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

/** Placeholder topics for future blog posts */
const BLOG_TOPICS = [
  { title: 'Understanding Homoeopathy for Daily Wellness', excerpt: 'How homoeopathy works and why it is a gentle option for the family.' },
  { title: 'PCOD and Homoeopathy: What You Need to Know', excerpt: 'Holistic approach to PCOD with homoeopathic treatment.' },
  { title: 'Allergy Relief with Homoeopathy in Kerala', excerpt: 'Seasonal and food allergy management with natural treatment.' },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="about-page contact-page">
        <div className="contact-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="about-content-title">Health Tips & Blog</h1>
          <p className="about-content-intro">
            Insights and health tips from {CLINIC.name}, Melattur. We share practical information on homoeopathy, common conditions and natural wellness.
          </p>

          <section aria-labelledby="blog-list-heading" style={{ marginTop: '2rem' }}>
            <h2 id="blog-list-heading" className="about-content-heading">Topics we cover</h2>
            <p className="about-content-intro" style={{ marginBottom: '1.5rem' }}>
              New articles will be added here. Explore our <Link href="/treatments">treatments</Link> and <Link href="/about-doctor">about the doctor</Link> for more information.
            </p>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0 }}>
              {BLOG_TOPICS.map((post, i) => (
                <li key={i} style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.35rem', color: 'var(--accent, #dc2626)' }}>{post.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text)' }}>{post.excerpt}</p>
                </li>
              ))}
            </ul>
            <p className="about-content-intro" style={{ marginTop: '1rem' }}>More health tips and articles coming soon.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
