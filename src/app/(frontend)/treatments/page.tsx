import Link from 'next/link'
import Image from 'next/image'
import Header from '../Header'
import Footer from '../Footer'
import { TREATMENT_SLUGS, TREATMENTS, CLINIC, canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

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
      <main className="about-page contact-page">
        <div className="contact-inner" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 className="about-content-title">Homoeopathy Treatments in Melattur & Malappuram</h1>
          <p className="about-content-intro" style={{ marginBottom: '2rem' }}>
            At {CLINIC.name}, we offer personalized homoeopathic care for a wide range of conditions. Each treatment plan is tailored to your needs. Book a consultation at our clinic in Melattur, Kerala.
          </p>

          <section aria-labelledby="treatment-list-heading">
            <h2 id="treatment-list-heading" className="about-content-heading">Our Treatments</h2>
            <ul className="footer-links" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem', marginTop: '1rem' }}>
              {TREATMENT_SLUGS.map((slug) => {
                const t = TREATMENTS[slug]
                const img = TREATMENT_IMAGES[slug]
                return (
                  <li key={slug}>
                    <Link href={`/treatments/${slug}`} className="expertise-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: 10, border: '1px solid var(--color-teal)', textDecoration: 'none', color: 'inherit' }}>
                      {img && (
                        <span style={{ flexShrink: 0 }}>
                          <Image src={img} alt="" width={64} height={64} />
                        </span>
                      )}
                      <div>
                        <strong style={{ color: 'var(--accent, #dc2626)' }}>{t.h1.replace(' with Homeopathy in Melattur', '').replace(' in Malappuram & Melattur', '')}</strong>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--color-text)' }}>{t.description.slice(0, 100)}…</p>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="about-cta" style={{ marginTop: '2rem' }}>
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book Appointment via WhatsApp</a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
