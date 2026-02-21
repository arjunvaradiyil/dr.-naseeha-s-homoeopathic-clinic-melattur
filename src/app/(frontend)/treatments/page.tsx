import Link from 'next/link'
import Image from 'next/image'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import ResultsSection from '../ResultsSection'
import { TREATMENT_SLUGS, TREATMENTS, CLINIC, canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

const TREATMENT_IMAGES: Record<string, string> = {
  skin: '/skilltreatments.png',
  allergy: '/allergy_icon_no_bg.png',
  asthma: '/allergy_icon_no_bg.png',
  pcod: '/pcod.png',
  gynaecology: '/GYNAECOLOGY.png',
  migraine: '/migraine.png',
  'hair-loss': '/hairloss.png',
  diabetes: '/diabtics.png',
  'uric-acid': '/uricacidf.png',
  'back-pain': '/backpain.png',
  thyroid: '/tyroid.png',
}

export const metadata = {
  title: 'Homoeopathy Treatments in Melattur – Skin, PCOD, Allergy, Thyroid & More',
  description: buildMetaDescription(
    `Homoeopathic treatments at Dr. Naseeha's Clinic, Melattur: Skin, Allergy, PCOD, Gynaecology, Migraine, Hair Loss, Diabetes, Uric Acid, Back Pain, Thyroid. Book appointment in Malappuram, Kerala.`
  ),
  keywords: ['homeopathy treatments Melattur', 'homoeopathic clinic Malappuram', 'homoeopathy Kerala', ...TREATMENT_SLUGS.map((s) => `${TREATMENTS[s].h1} Melattur`)],
  openGraph: {
    title: 'Homoeopathy Treatments | Dr. Naseeha\'s Homoeopathic Clinic, Melattur',
    description: 'Skin, Allergy, PCOD, Gynaecology, Migraine, Hair Loss, Diabetes, Thyroid & more. Book at Melattur, Kerala.',
    url: canonical('/treatments'),
  },
  alternates: { canonical: canonical('/treatments') },
}

function treatmentTitleDisplay(h1: string) {
  return h1
    .replace(' with Homeopathy in Melattur', '')
    .replace(' in Malappuram & Melattur', '')
    .replace(' & Knee Pain Treatment with Homeopathy in Melattur', '')
    .trim()
}

export default function TreatmentsIndexPage() {
  return (
    <>
      <Header />
      <main className="treatments-page">
        <PageBanner title="TREATMENTS" items={[{ label: 'HOME', href: '/' }, { label: 'TREATMENTS' }]} />

        <div className="treatments-layout">
          <section className="treatments-intro">
            <h1 className="treatments-intro-title">Homoeopathy treatments in Melattur &amp; Malappuram</h1>
            <p className="treatments-intro-desc">
              At {CLINIC.name}, we offer personalized homoeopathic care for a wide range of conditions. Each plan is tailored to you. In-clinic and online consultation available.
            </p>
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book via WhatsApp</a>
          </section>

          <h2 className="treatments-grid-heading">Our treatments</h2>
          <ul className="treatments-grid-new">
            {TREATMENT_SLUGS.map((slug) => {
              const t = TREATMENTS[slug]
              const img = TREATMENT_IMAGES[slug]
              const title = treatmentTitleDisplay(t.h1)
              return (
                <li key={slug}>
                  <Link href={`/treatments/${slug}`} className="treatment-card" aria-label={title}>
                    {img && (
                      <div className="treatment-card-media">
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="treatment-card-img"
                          sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="treatment-card-body">
                      <h3 className="treatment-card-title">{title}</h3>
                      <p className="treatment-card-summary">{t.description.slice(0, 120)}…</p>
                      <span className="treatment-card-cta">View details →</span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="treatments-cta-wrap">
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book appointment via WhatsApp</a>
          </div>

          <ResultsSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
