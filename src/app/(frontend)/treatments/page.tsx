import Link from 'next/link'
import Image from 'next/image'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
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

export default function TreatmentsIndexPage() {
  return (
    <>
      <Header />
      <main className="treatments-page">
        <PageBanner title="TREATMENTS" items={[{ label: 'HOME', href: '/' }, { label: 'TREATMENTS' }]} />
        <div className="treatments-inner">
          <header className="treatments-hero">
            <h1 className="treatments-hero-title">Homoeopathy Treatments in Melattur & Malappuram</h1>
            <p className="treatments-hero-intro">
              At {CLINIC.name}, we offer personalized homoeopathic care for a wide range of conditions. Each treatment plan is tailored to your needs. Consultations are available at our clinic in Melattur, Kerala—<strong>online consultation is also available</strong>.
            </p>
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal treatments-hero-cta">Book Appointment via WhatsApp</a>
          </header>

          <section className="treatments-list" aria-labelledby="treatment-list-heading">
            <h2 id="treatment-list-heading" className="treatments-list-title">Our Treatments</h2>
            <ul className="treatments-grid">
              {TREATMENT_SLUGS.map((slug) => {
                const t = TREATMENTS[slug]
                const img = TREATMENT_IMAGES[slug]
                const title = t.h1.replace(' with Homeopathy in Melattur', '').replace(' in Malappuram & Melattur', '').replace(' & Knee Pain Treatment with Homeopathy in Melattur', '')
                return (
                  <li key={slug}>
                    <Link href={`/treatments/${slug}`} className="expertise-card">
                      {img && (
                        <span className="expertise-card-icon">
                          <Image src={img} alt="" width={48} height={48} className="expertise-card-img" />
                        </span>
                      )}
                      <h3 className="expertise-card-title">{title}</h3>
                      <p className="expertise-card-summary">{t.description.slice(0, 120)}…</p>
                      <span className="expertise-card-btn">View details →</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="treatments-cta">
              <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book Appointment via WhatsApp</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
