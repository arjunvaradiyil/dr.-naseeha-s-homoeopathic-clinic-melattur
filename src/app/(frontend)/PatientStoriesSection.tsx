'use client'

import { useState, useEffect, useCallback } from 'react'

const REVIEWS = [
  {
    quote: "I had a very positive experience at Naseeha's Homoeopathic Clinic, Melattur. The doctor's professional approach, careful listening, and personalized treatment made a noticeable difference in my health. Highly recommended.",
    name: 'Arjun V',
  },
  {
    quote: "I had a very good experience at this clinic. The doctor was professional, kind, and attentive. I felt listened to and well cared for. Overall, I'm very satisfied with the treatment.",
    name: 'Jishn U K',
  },
  {
    quote: "Very much satisfied with their care, motivational support and psychological support which helped me feel better and improve my health. All staff are good.",
    name: 'Archana P S',
  },
]

const MARQUEE_INTERVAL_MS = 4500

export default function PatientStoriesSection() {
  const [index, setIndex] = useState(0)

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % REVIEWS.length)
  }, [])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  }, [])

  useEffect(() => {
    const t = setInterval(goNext, MARQUEE_INTERVAL_MS)
    return () => clearInterval(t)
  }, [goNext])

  const review = REVIEWS[index]

  return (
    <section className="patient-stories" id="reviews">
      <div className="patient-stories-accent" aria-hidden />
      <div className="patient-stories-inner">
        <div className="patient-stories-left">
          <span className="patient-stories-line" aria-hidden />
          <h2 className="patient-stories-title">What Our Patients Are Saying</h2>
          <p className="patient-stories-subtitle">Patient Stories</p>
          <div className="patient-stories-nav">
            <button type="button" className="patient-stories-arrow" onClick={goPrev} aria-label="Previous testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" className="patient-stories-arrow" onClick={goNext} aria-label="Next testimonial">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
          <div className="patient-stories-stars" aria-hidden>
            <span className="patient-stories-star filled">★</span>
            <span className="patient-stories-star filled">★</span>
            <span className="patient-stories-star filled">★</span>
            <span className="patient-stories-star filled">★</span>
            <span className="patient-stories-star filled">★</span>
          </div>
          <div className="patient-stories-list patient-stories-marquee">
            <div className="patient-stories-item" key={index}>
              <blockquote className="patient-stories-quote">
                {review.quote}
              </blockquote>
              <hr className="patient-stories-divider" />
              <span className="patient-stories-quote-icon" aria-hidden>&ldquo;</span>
              <p className="patient-stories-name">{review.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
