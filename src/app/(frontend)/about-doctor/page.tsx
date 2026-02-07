import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import ExpertiseSection from '../ExpertiseSection'
import { CLINIC } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'About Dr. Naseeha – Homoeopathic Doctor Melattur, Kerala',
  description: buildMetaDescription(
    `Meet Dr. Naseeha at Dr. Naseeha's Homoeopathic Clinic, Melattur. Personalized homoeopathic care for the family. Skin, allergy, PCOD, thyroid and more. Book in Malappuram, Kerala.`
  ),
  keywords: ['homoeopathic doctor Melattur', 'Dr. Naseeha', 'homeopathy doctor Malappuram', 'homoeopathy doctor Kerala', 'about Dr. Naseeha'],
  openGraph: {
    title: 'About Dr. Naseeha | Homoeopathic Doctor Melattur',
    description: 'Personalized homoeopathic care in Melattur, Kerala. Side-effect free natural treatment for the whole family.',
    url: canonical('/about-doctor'),
  },
  alternates: { canonical: canonical('/about-doctor') },
}

export default function AboutDoctorPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-content">
          <div className="about-content-inner">
            <div className="about-content-text">
              <h1 className="about-content-title">About Dr. Naseeha</h1>
              <p className="about-content-intro">
                Dr. Naseeha runs {CLINIC.name} in Melattur, Malappuram district, Kerala. With a focus on gentle, natural healing, we offer personalized homoeopathic care for the entire family—from infants to the elderly.
              </p>
              <p className="about-content-intro">
                Our approach is constitutional homoeopathy: we treat the person as a whole, not just the disease. This helps achieve long-term wellness with minimal or no side effects. We also offer online consultations and doorstep medicine delivery.
              </p>
              <h2 className="about-content-heading">Why choose our clinic</h2>
              <ul className="about-list">
                <li>Advanced treatments with imported German Homoeopathic medicines</li>
                <li>Online consultations with doorstep medicine delivery</li>
                <li>Personalized care for all ages</li>
                <li>Focus on root-cause healing and long-term wellness</li>
              </ul>
              <h3 className="about-content-heading" style={{ fontSize: '1.1rem' }}>Location & contact</h3>
              <p className="about-content-intro">
                We are located in Melattur, Kerala. For appointments and enquiries, call or WhatsApp us at{' '}
                <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}>{CLINIC.phone}</a> or visit our <Link href="/contact">Contact</Link> page.
              </p>
              <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book Appointment</a>
            </div>
            <div className="about-content-image">
              <Image
                src="/Naeesha.jpeg"
                alt="Dr. Naseeha – Homoeopathic Doctor, Melattur"
                width={600}
                height={500}
                className="about-content-img"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>
        <ExpertiseSection title="Treatments we offer" subtitle="Personalized homoeopathic care for a wide range of conditions" sectionId="treatments" />
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
