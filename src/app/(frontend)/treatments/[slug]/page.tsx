import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '../../Header'
import Footer from '../../Footer'
import { TREATMENT_SLUGS, TREATMENTS, CLINIC } from '@/lib/seo'
import type { TreatmentSlug } from '@/lib/seo'
import { canonical, buildMetaTitle, buildMetaDescription } from '@/lib/seo'
import '../../styles.css'

const TREATMENT_IMAGES: Record<string, string> = {
  skin: '/skilltreatments.png',
  allergy: '/allergy_icon_no_bg.png',
  pcod: '/pcod.png',
  gynaecology: '/GYNAECOLOGY.png',
  migraine: '/migraine.png',
  'hair-loss': '/hairloss.png',
  diabetes: '/diabtics.png',
  'uric-acid': '/uricacidf.png',
  'back-pain': '/backpain.png',
  thyroid: '/tyroid.png',
}

export function generateStaticParams() {
  return TREATMENT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = TREATMENTS[slug as TreatmentSlug]
  if (!t) return {}
  return {
    title: t.title,
    description: buildMetaDescription(t.description),
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: canonical(`/treatments/${slug}`),
    },
    alternates: { canonical: canonical(`/treatments/${slug}`) },
  }
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const validSlug = TREATMENT_SLUGS.includes(slug as TreatmentSlug) ? (slug as TreatmentSlug) : null
  if (!validSlug) notFound()

  const t = TREATMENTS[validSlug]
  const img = TREATMENT_IMAGES[validSlug]
  const otherSlugs = TREATMENT_SLUGS.filter((s) => s !== validSlug).slice(0, 6)

  return (
    <>
      <Header />
      <main className="about-page contact-page">
        <div className="contact-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <article>
            {img && (
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <Image src={img} alt="" width={120} height={120} />
              </div>
            )}
            <h1 className="about-content-title">{t.h1}</h1>
            <p className="about-content-intro">{t.description}</p>

            <h2 className="about-content-heading">Why homoeopathy for this condition?</h2>
            <p className="about-content-intro">
              At {CLINIC.name}, we use constitutional homoeopathy to address the root cause, not just symptoms. Treatment is personalized, gentle and suitable for all ages. We are based in Melattur, Malappuram district, Kerala.
            </p>

            <h3 className="about-content-heading" style={{ fontSize: '1.1rem' }}>Book a consultation</h3>
            <p className="about-content-intro">
              To discuss your case or book an appointment, call us at{' '}
              <a href="tel:+917356736929">{CLINIC.phone}</a> or message on WhatsApp.
            </p>
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ marginTop: '0.5rem' }}>
              Book Appointment via WhatsApp
            </a>

            <nav aria-label="Related treatments" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
              <h2 className="about-content-heading">Other treatments we offer</h2>
              <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                {otherSlugs.map((s) => (
                  <li key={s}>
                    <Link href={`/treatments/${s}`} style={{ padding: '0.35rem 0.75rem', background: 'var(--color-teal)', color: '#fff', borderRadius: 6, textDecoration: 'none', fontSize: '0.9rem' }}>
                      {TREATMENTS[s].h1.replace(' with Homeopathy in Melattur', '').replace(' in Malappuram & Melattur', '').replace(' & Knee Pain Treatment with Homeopathy in Melattur', '')}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/treatments" style={{ padding: '0.35rem 0.75rem', background: '#e2e8f0', color: 'var(--color-text)', borderRadius: 6, textDecoration: 'none', fontSize: '0.9rem' }}>
                    All treatments
                  </Link>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
