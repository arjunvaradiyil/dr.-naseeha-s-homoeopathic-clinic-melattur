import Header from '../Header'
import Footer from '../Footer'
import PageBanner from '../PageBanner'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'Terms of Use – Homoeopathic Clinic Melattur',
  description: buildMetaDescription(
    "Terms of use for the website of Dr. Naseeha's Homoeopathic Clinic, Melattur. Use of site and services. Malappuram, Kerala."
  ),
  openGraph: { title: 'Terms of Use | Dr. Naseeha\'s Homoeopathic Clinic', url: canonical('/terms') },
  alternates: { canonical: canonical('/terms') },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="contact-page generic-page">
        <PageBanner title="TERMS OF USE" items={[{ label: 'HOME', href: '/' }, { label: 'TERMS OF USE' }]} />
        <div className="contact-inner" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div className="prose">
            <p>
              By using this website, you agree to these terms. The content is for general information about Dr. Naseeha&apos;s Homoeopathic Clinic and homoeopathic care. It is not a substitute for professional medical advice.
            </p>
            <h2>Use of site</h2>
            <p>You may use this site for personal, non-commercial purposes. Do not misuse the site or attempt to gain unauthorized access to our systems.</p>
            <h2>Medical disclaimer</h2>
            <p>Information on this site is for awareness only. Always consult a qualified practitioner for diagnosis and treatment. We do not guarantee outcomes.</p>
            <h2>Contact</h2>
            <p>For questions about these terms, contact us at <a href="tel:+917356736929">+91 73567 36929</a> or <a href="mailto:contact@drnaseeha.com">contact@drnaseeha.com</a>.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
