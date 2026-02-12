import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import ExpertiseSection from '../ExpertiseSection'
import { CLINIC } from '@/lib/seo'
import '../styles.css'

import { canonical, buildMetaDescription } from '@/lib/seo'

export const metadata = {
  title: 'About Us – Homoeopathic Clinic & Dr. Naseeha, Melattur',
  description: buildMetaDescription(
    "About Dr. Naseeha's Homoeopathic Clinic, Melattur. Meet the doctor, our constitutional approach, why choose us, and how we deliver personalized care for the whole family. Malappuram, Kerala."
  ),
  keywords: ['about homoeopathic clinic Melattur', 'Dr. Naseeha', 'homeopathy clinic Malappuram Kerala', 'about doctor Melattur', 'constitutional homoeopathy Kerala'],
  openGraph: {
    title: 'About Us | Dr. Naseeha\'s Homoeopathic Clinic, Melattur',
    url: canonical('/about'),
  },
  alternates: { canonical: canonical('/about') },
}

const WHY_CHOOSE = [
  'Advanced homoeopathic treatments with imported German medicines for better results',
  'Online consultations with doorstep medicine delivery across Kerala and beyond',
  'Personalized care for all ages — from infants to the elderly',
  'Constitutional approach: we treat the whole person for lasting wellness',
  'Minimal or no side effects; gentle, natural healing',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page about-page-modern">
        <PageBanner title="ABOUT" items={[{ label: 'HOME', href: '/' }, { label: 'ABOUT' }]} />

        {/* About Us – two-column: layered image left, ABOUT US + text right, social bottom */}
        <section className="about-us-section">
          <div className="about-us-inner">
            <div className="about-us-image-col">
              <div className="about-us-image-panel">
                <span className="about-us-image-accent" aria-hidden>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M28 4L28 52M4 28L52 28M12 12L44 44M44 12L12 44M28 10L28 46M10 28L46 28M15 15L41 41M41 15L15 41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <Image
                  src="/Naeesha.jpeg"
                  alt="Dr. Naseeha – Homoeopathic Physician, Melattur"
                  width={520}
                  height={640}
                  className="about-us-img"
                  sizes="(max-width: 900px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
            <div className="about-us-text-col">
              <h1 className="about-us-heading">ABOUT US</h1>
              <p className="about-us-lead">
                {CLINIC.name} is a trusted homoeopathic practice in Melattur, Malappuram district, Kerala. We offer gentle, side-effect-free care for the entire family — from skin and allergy to PCOD, thyroid, diabetes, migraine, hair fall, and more.
              </p>
              <p className="about-us-body">
                Our mission is to help you regain vitality and long-term wellness through personalized homoeopathy. Dr. Naseeha runs the clinic with a focus on constitutional homoeopathy, treating the person as a whole for lasting improvement with minimal or no side effects. Whether you visit in Melattur or opt for online consultation, you receive the same care; we use advanced homoeopathic medicines, including imported German remedies, and offer doorstep delivery.
              </p>
              <div className="about-us-social">
                <a href={CLINIC.sameAs[0]} target="_blank" rel="noopener noreferrer" className="about-us-social-link" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={`https://wa.me/${CLINIC.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="about-us-social-link" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href={CLINIC.sameAs[1]} target="_blank" rel="noopener noreferrer" className="about-us-social-link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <span className="about-us-accent-bar" aria-hidden />
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us – card grid */}
        <section className="about-why">
          <div className="about-why-inner">
            <h2 className="about-section-title">Why choose us</h2>
            <ul className="about-why-grid">
              {WHY_CHOOSE.map((item, i) => (
                <li key={i} className="about-why-card">
                  <span className="about-why-card-num" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                  <span className="about-why-card-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Location & contact */}
        <section className="about-contact-block">
          <div className="about-contact-inner">
            <h2 className="about-section-title">Location &amp; contact</h2>
            <p className="about-contact-text">
              We are in Melattur, Kerala. For appointments and enquiries, call or WhatsApp{' '}
              <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}>{CLINIC.phone}</a>, or visit our <Link href="/contact">Contact</Link> page for the form and map.
            </p>
          </div>
        </section>

        <ExpertiseSection
          title="Treatments offered"
          subtitle="Personalized homoeopathic care for a wide range of conditions"
          sectionId="treatments"
        />

        <section className="about-cta">
          <div className="about-inner">
            <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book Appointment</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
