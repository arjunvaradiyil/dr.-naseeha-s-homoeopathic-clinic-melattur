import Header from '../Header'
import Footer from '../Footer'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { canonical, buildMetaDescription } from '@/lib/seo'
import '../styles.css'

export const metadata = {
  title: 'Contact – Homoeopathic Clinic Melattur, Kerala',
  description: buildMetaDescription(
    "Contact Dr. Naseeha's Homoeopathic Clinic, Melattur. Address, phone +91 73567 36929, email and map. Book appointment in Malappuram, Kerala."
  ),
  keywords: ['contact Dr. Naseeha Melattur', 'homoeopathic clinic contact Malappuram', 'clinic address Melattur Kerala'],
  openGraph: {
    title: 'Contact | Dr. Naseeha\'s Homoeopathic Clinic, Melattur',
    description: 'Get in touch. Address, phone, email and contact form. Melattur, Malappuram, Kerala.',
    url: canonical('/contact'),
  },
  alternates: { canonical: canonical('/contact') },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="contact-inner">
          {/* Left: info cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden>
                <FaMapMarkerAlt size={22} />
              </span>
              <h3 className="contact-card-heading">Address</h3>
              <p className="contact-card-text">
                Dr. Naseeha&apos;s Homoeopathic<br />
                Clinic<br />
                Melattur, Malappuram Dist.,<br />
                Kerala, India
              </p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden>
                <FaMobileAlt size={20} />
              </span>
              <h3 className="contact-card-heading">Contact Us</h3>
              <p className="contact-card-text">
                <a href="tel:+917356736929">+91 73567 36929</a>
              </p>
              <p className="contact-card-sub">
                <strong>Appointments &amp; Enquiries</strong>
                <a href="tel:+917356736929" className="contact-card-sub-link">+91 73567 36929</a>
              </p>
            </div>
            <div className="contact-card">
              <span className="contact-card-icon" aria-hidden>
                <FaEnvelope size={20} />
              </span>
              <h3 className="contact-card-heading">Email</h3>
              <p className="contact-card-text">
                <a href="mailto:contact@drnaseeha.com">contact@drnaseeha.com</a>
              </p>
            </div>
          </div>

          {/* Right: form + map */}
          <div className="contact-right">
            <h2 className="contact-form-title">Get in touch with us</h2>
            <p className="contact-book-cta">
              <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Book Appointment via WhatsApp</a>
            </p>
            <form className="contact-form" action="#" method="post">
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Enter Name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" name="email" type="email" placeholder="Enter Email Address" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-phone">Telephone No.</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="Enter Telephone No." />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" placeholder="Enter Subject" />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={5} placeholder="Enter Message" required />
              </div>
              <button type="submit" className="btn contact-submit">SEND NOW</button>
            </form>
            <div className="contact-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7060257060284!2d76.27148097585574!3d11.060652953885134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62d848c34c735%3A0xdca02cb138f47f64!2sDr.%20Naseeha%27s%20Homoeopathic%20Clinic%2C%20melattur!5e0!3m2!1sen!2sin!4v1770449742585!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Naseeha's Homoeopathic Clinic, Melattur"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
