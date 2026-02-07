import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '../../Header'
import Footer from '../../Footer'
import PageBanner from '../../PageBanner'
import { TREATMENT_SLUGS, TREATMENTS, CLINIC } from '@/lib/seo'
import type { TreatmentSlug } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
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

function treatmentTitleShort(h1: string) {
  return h1
    .replace(' with Homeopathy in Melattur', '')
    .replace(' in Malappuram & Melattur', '')
    .replace(' & Knee Pain Treatment with Homeopathy in Melattur', '')
    .trim()
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const validSlug = TREATMENT_SLUGS.includes(slug as TreatmentSlug) ? (slug as TreatmentSlug) : null
  if (!validSlug) notFound()

  const t = TREATMENTS[validSlug]
  const img = TREATMENT_IMAGES[validSlug]
  const otherSlugs = TREATMENT_SLUGS.filter((s) => s !== validSlug).slice(0, 6)

  const breadcrumbTitle = treatmentTitleShort(t.h1).toUpperCase()

  return (
    <>
      <Header />
      <main className="treatment-detail-page">
        <PageBanner
          title={breadcrumbTitle}
          items={[
            { label: 'HOME', href: '/' },
            { label: 'TREATMENTS', href: '/treatments' },
            { label: breadcrumbTitle },
          ]}
        />
        <div className="treatment-detail-inner">
          <div className="treatment-detail-content-grid">
            <article className="treatment-detail-article">
              <h1 className="treatment-detail-title">{t.h1}</h1>
              <p className="treatment-detail-lead">{t.description}</p>

              <section className="treatment-detail-section">
                <h2 className="treatment-detail-heading">Why homoeopathy for this condition?</h2>
                <p className="treatment-detail-text">
                  At {CLINIC.name}, we use constitutional homoeopathy to address the root cause, not just symptoms. Treatment is personalized, gentle and suitable for all ages. We are based in Melattur, Malappuram district, Kerala. In-clinic and online consultation is also available.
                </p>
              </section>

              <section className="treatment-detail-section">
                <h2 className="treatment-detail-heading">Our approach</h2>
                <p className="treatment-detail-text">
                  We focus on understanding your complete health picture. Homoeopathic treatment is gentle, with minimal or no side effects, and can be used for all age groups. Book an in-clinic visit or an online consultation at your convenience.
                </p>
              </section>

              <section className="treatment-detail-cta-block">
                <h2 className="treatment-detail-heading">Book a consultation</h2>
                <p className="treatment-detail-text">
                  Call us at <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}>{CLINIC.phone}</a> or message on WhatsApp. Online consultation is also available.
                </p>
                <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal treatment-detail-btn">
                  Book Appointment via WhatsApp
                </a>
              </section>

              <nav className="treatment-detail-related" aria-label="Related treatments">
                <h2 className="treatment-detail-heading">Other treatments we offer</h2>
                <ul className="treatment-detail-links">
                  {otherSlugs.map((s) => (
                    <li key={s}>
                      <Link href={`/treatments/${s}`} className="treatment-detail-link-pill">
                        {treatmentTitleShort(TREATMENTS[s].h1)}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/treatments" className="treatment-detail-link-pill treatment-detail-link-all">
                      All treatments
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>

            <aside className="treatment-detail-sidebar">
              <div className="treatment-detail-sidebar-card">
                {img ? (
                  <>
                    <div className="treatment-detail-sidebar-image">
                      <Image src={img} alt="" width={200} height={200} />
                    </div>
                    <p className="treatment-detail-sidebar-text">{treatmentTitleShort(t.h1)}</p>
                  </>
                ) : (
                  <p className="treatment-detail-sidebar-text">Book a consultation</p>
                )}
                <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal treatment-detail-sidebar-btn">
                  Book via WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
