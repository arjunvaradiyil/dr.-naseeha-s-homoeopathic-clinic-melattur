import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import ExpertiseSection from './ExpertiseSection'
import PatientStoriesSection from './PatientStoriesSection'
import ResultsSection from './ResultsSection'
import ParallaxLayer from './ParallaxLayer'
import './styles.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - full background video */}
        <section className="hero hero-bg-video" aria-label="Introduction">
          <ParallaxLayer speed={0.5} className="hero-bg-video-wrap">
            <video
              className="hero-bg-video-el"
              src="/142528-780232204_small.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
          </ParallaxLayer>
          <div className="hero-overlay" aria-hidden />
          <div className="hero-inner">
            <div className="hero-content">
              <h1 className="hero-title">Experience a Gentler Way to Wellness</h1>
              <p className="hero-subtitle">At Dr. Naseeha&apos;s Homoeopathic Clinic</p>
              <p className="hero-desc">
                Every patient is unique. We offer personalized, side-effect free homoeopathic care for the whole family—from infants to old age—so you can regain vitality and balance through time-tested, natural solutions.
              </p>
              <p className="hero-whatsapp-hint">You&apos;ll be redirected to WhatsApp to message us.</p>
              <a href="https://wa.me/917356736929?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Dr.%20Naseeha's%20Homoeopathic%20Clinic." target="_blank" rel="noopener noreferrer" className="btn btn-teal btn-hero-cta">Book Appointment</a>
            </div>
          </div>
        </section>

        {/* Areas of Expertise - reference layout: grey cards, VIEW DETAILS, VIEW MORE + arrows */}
        <ExpertiseSection />

        {/* Know Us Better - like AboutGallium: content left, image right on lg; image below heading on smaller */}
        <section className="know-us" id="about">
          <div className="know-us-inner">
            {/* Left column: heading, image (tablet/mobile only), body, button */}
            <div className="know-us-col know-us-col-content">
              <h2 className="know-us-heading">Know Us Better</h2>
              {/* Image below heading on tablet/mobile only; hidden on large (right col shows it) */}
              <div className="know-us-image-mid">
                <div className="know-us-image-wrap">
                  <div className="know-us-pattern" aria-hidden>
                    <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
                    <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg></span>
                    <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 12h20M8 4v16M16 4v16"/></svg></span>
                    <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg></span>
                  </div>
                  <figure className="know-us-figure">
                    <Image
                      src="/Naeesha.jpeg"
                      alt="Dr. Naseeha - Dr. Naseeha's Homoeopathic Clinic"
                      width={340}
                      height={370}
                      className="know-us-img"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </figure>
                </div>
              </div>
              <h3 className="know-us-title">DR. NASEEHA&apos;S HOMOEOPATHIC CLINIC</h3>
              <p className="know-us-text">
                Experience a gentler way to wellness at Dr. Naseeha&apos;s Homoeopathic Clinic. We understand that every patient is unique, which is why our homoeopathic care is personalized to fit your specific needs and lifestyle.
              </p>
              <p className="know-us-text">
                Our mission is to provide side-effect free, natural solutions for the entire family. From infants to old age, we help our patients regain their vitality and balance through the time-tested science of homoeopathy.
              </p>
              <p className="know-us-whatsapp-hint">You&apos;ll be redirected to WhatsApp to connect with us.</p>
              <a href="https://wa.me/917356736929?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Dr.%20Naseeha's%20Homoeopathic%20Clinic." target="_blank" rel="noopener noreferrer" className="btn btn-teal know-us-btn">VIEW MORE</a>
            </div>
            {/* Right column: image on large screens only */}
            <div className="know-us-col know-us-col-image">
              <div className="know-us-image-wrap">
                <div className="know-us-pattern" aria-hidden>
                  <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
                  <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg></span>
                  <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 12h20M8 4v16M16 4v16"/></svg></span>
                  <span className="know-us-icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg></span>
                </div>
                <figure className="know-us-figure">
                  <Image
                    src="/Naeesha.jpeg"
                    alt="Dr. Naseeha - Dr. Naseeha's Homoeopathic Clinic"
                    width={340}
                    height={370}
                    className="know-us-img"
                    sizes="360px"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Stories - one review at a time, marquee auto-rotate */}
        <PatientStoriesSection />

        {/* Review Videos - play on website */}
        <section className="review-videos-home" aria-labelledby="review-videos-home-heading">
          <div className="review-videos-home-inner">
            <h2 id="review-videos-home-heading" className="review-videos-home-title">Review Videos</h2>
            <p className="review-videos-home-subtitle">Watch what our patients say</p>
            <div className="review-videos-embed-grid">
              <div className="review-video-embed-card">
                <div className="review-video-embed-wrap">
                  <iframe
                    src="https://www.youtube.com/embed/vIyEdGQJOkY"
                    title="Patient Review 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="review-video-embed-iframe"
                  />
                </div>
                <p className="videos-card-title">Patient Review 1</p>
              </div>
              <div className="review-video-embed-card">
                <div className="review-video-embed-wrap">
                  <iframe
                    src="https://www.youtube.com/embed/NmBK2rEjbaA"
                    title="Patient Review 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="review-video-embed-iframe"
                  />
                </div>
                <p className="videos-card-title">Patient Review 2</p>
              </div>
            </div>
            <Link href="/patient-stories#review-videos-heading" className="btn btn-teal review-videos-home-btn">View all Patient Stories</Link>
          </div>
        </section>

        {/* Treatment Results - images from public/RESULTS */}
        <ResultsSection />
      </main>
      <Footer />
    </>
  )
}
