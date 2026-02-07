import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { CLINIC } from '@/lib/seo'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'Book Appointment – Homoeopathic Clinic Melattur',
  description: buildMetaDescription(
    `Book an appointment at Dr. Naseeha's Homoeopathic Clinic, Melattur. Call ${CLINIC.phone} or message on WhatsApp. Online consultation and doorstep medicine delivery available.`
  ),
  keywords: ['book appointment homeopathy Melattur', 'homoeopathic clinic appointment Malappuram', 'Dr. Naseeha book appointment', 'WhatsApp appointment Kerala'],
  openGraph: {
    title: 'Book Appointment | Dr. Naseeha\'s Homoeopathic Clinic, Melattur',
    description: `Book your homoeopathic consultation in Melattur. Call or WhatsApp ${CLINIC.phone}.`,
    url: canonical('/book-appointment'),
  },
  alternates: { canonical: canonical('/book-appointment') },
}

const WHATSAPP_URL = 'https://wa.me/917356736929?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.%20Naseeha%27s%20Homoeopathic%20Clinic.'

export default function BookAppointmentPage() {
  return (
    <>
      <Header />
      <main className="contact-page about-page">
        <PageBanner title="BOOK APPOINTMENT" items={[{ label: 'HOME', href: '/' }, { label: 'BOOK APPOINTMENT' }]} />
        <div className="contact-inner" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 className="about-content-title">Book an Appointment</h1>
          <p className="about-content-intro">
            Book your consultation at {CLINIC.name}, Melattur, Kerala. You can reach us by phone or WhatsApp for appointments and enquiries.
          </p>

          <section aria-labelledby="contact-options-heading" style={{ marginTop: '2rem' }}>
            <h2 id="contact-options-heading" className="about-content-heading">How to book</h2>
            <ul className="about-list">
              <li><strong>WhatsApp:</strong> Easiest way—click the button below to message us directly.</li>
              <li><strong>Phone:</strong> Call us at <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}>{CLINIC.phone}</a>.</li>
              <li><strong>Visit:</strong> Come to our clinic in Melattur, Malappuram district, Kerala.</li>
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-teal" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Book via WhatsApp
            </a>
          </section>

          <section aria-labelledby="what-to-expect-heading" style={{ marginTop: '2rem' }}>
            <h2 id="what-to-expect-heading" className="about-content-heading">What to expect</h2>
            <p className="about-content-intro">
              We offer in-clinic and online consultations. Medicine can be delivered to your doorstep. First visit includes a detailed case-taking to personalize your homoeopathic treatment.
            </p>
          </section>

          <p className="about-content-intro" style={{ marginTop: '2rem' }}>
            <Link href="/contact">Contact us</Link> for address and more details.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
