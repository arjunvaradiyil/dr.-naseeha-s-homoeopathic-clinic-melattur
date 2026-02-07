import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'
import Footer from '../Footer'
import ExpertiseSection from '../ExpertiseSection'
import '../styles.css'

import { canonical, buildMetaDescription } from '@/lib/seo'

export const metadata = {
  title: 'About Us – Homoeopathic Clinic Melattur',
  description: buildMetaDescription(
    "About Dr. Naseeha's Homoeopathic Clinic, Melattur. Personalized homoeopathic care, side-effect free natural solutions for the entire family. Malappuram, Kerala."
  ),
  keywords: ['about homoeopathic clinic Melattur', 'Dr. Naseeha clinic about', 'homeopathy clinic Malappuram Kerala'],
  openGraph: {
    title: 'About Us | Dr. Naseeha\'s Homoeopathic Clinic, Melattur',
    url: canonical('/about'),
  },
  alternates: { canonical: canonical('/about') },
}

const WHY_CHOOSE = [
  'Advanced treatments with imported German Homoeopathic medicines',
  'Online consultations with doorstep medicine delivery',
  'Personalized care for all ages',
  'Focus on root-cause healing and long-term wellness',
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        {/* Two-column: content left, image right */}
        <section className="about-content">
          <div className="about-content-inner">
            <div className="about-content-text">
              <h1 className="about-content-title">DR. NASEEHA&apos;S HOMOEOPATHIC CLINIC</h1>
              <p className="about-content-intro">
                Experience a gentler way to wellness at Dr. Naseeha&apos;s Homoeopathic Clinic. We understand that every patient is unique, which is why our homoeopathic care is personalized to fit your specific needs and lifestyle.
              </p>
              <p className="about-content-intro">
                Our mission is to provide side-effect free, natural solutions for the entire family. From infants to old age, we help our patients regain their vitality and balance through the time-tested science of homoeopathy.
              </p>
              <h2 className="about-content-heading">Why choose us</h2>
              <ul className="about-list">
                {WHY_CHOOSE.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-content-image">
              <Image
                src="/Naeesha.jpeg"
                alt="Dr. Naseeha's Homoeopathic Clinic"
                width={600}
                height={500}
                className="about-content-img"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Treatments offered – same design as Areas of Expertise */}
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
