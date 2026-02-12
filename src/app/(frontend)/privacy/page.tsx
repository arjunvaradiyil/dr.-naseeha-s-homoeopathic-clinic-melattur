import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'Privacy Policy – Homoeopathic Clinic Melattur',
  description: buildMetaDescription(
    "Privacy policy of Dr. Naseeha's Homoeopathic Clinic, Melattur. How we collect, use and protect your information. Malappuram, Kerala."
  ),
  openGraph: { title: 'Privacy Policy | Dr. Naseeha\'s Homoeopathic Clinic', url: canonical('/privacy') },
  alternates: { canonical: canonical('/privacy') },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="contact-page generic-page">
        <PageBanner title="PRIVACY POLICY" items={[{ label: 'HOME', href: '/' }, { label: 'PRIVACY POLICY' }]} />
        <div className="contact-inner" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="prose">
            <p>
              Dr. Naseeha&apos;s Homoeopathic Clinic (&quot;we&quot;) respects your privacy. This policy describes how we handle information when you visit our website or contact us for appointments and consultations.
            </p>
            <h2>Information we collect</h2>
            <p>We may collect your name, phone number, email, and health-related information you share when booking appointments or during consultations. We do not sell your data to third parties.</p>
            <h2>Use of information</h2>
            <p>We use your information only to provide homoeopathic care, manage appointments, and communicate with you about our services.</p>
            <h2>Contact</h2>
            <p>For privacy-related queries, contact us at <a href="tel:+917356736929">+91 73567 36929</a> or <a href="mailto:contact@drnaseeha.com">contact@drnaseeha.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
