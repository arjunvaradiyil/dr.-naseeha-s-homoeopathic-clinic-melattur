'use client'

import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'

const EXPERTISE_ITEMS = [
  { label: 'Skin Treatments', slug: 'skin-treatments', src: '/skilltreatments.png', summary: 'Natural remedies for acne, eczema, pigmentation and other skin concerns. Gentle, side-effect free care for healthy skin.' },
  { label: 'Allergy', slug: 'allergy', src: '/allergy_icon_no_bg.png', summary: 'Constitutional treatment for seasonal, food and environmental allergies. Reduce sensitivity and build long-term relief.' },
  { label: 'PCOD', slug: 'pcod', src: '/pcod.png', summary: 'Holistic homoeopathic care for hormonal balance, irregular cycles and related symptoms. Personalized plans for lasting wellness.' },
  { label: 'Gynaecology', slug: 'gynaecology', src: '/GYNAECOLOGY.png', summary: 'Care for menstrual disorders, fertility support and general women\'s health. Safe, natural treatment at every stage.' },
  { label: 'Migraine', slug: 'migraine', src: '/migraine.png', summary: 'Targeted relief for migraine and chronic headaches. Address triggers and frequency with constitutional homoeopathy.' },
  { label: 'Hair Loss', slug: 'hair-loss', src: '/hairloss.png', summary: 'Treatment for hair fall, thinning and scalp conditions. Strengthen roots and promote healthy growth naturally.' },
  { label: 'Diabetes', slug: 'diabetes', src: '/diabtics.png', summary: 'Support for blood sugar balance and diabetic care. Used alongside lifestyle changes for better control.' },
  { label: 'Uric Acid', slug: 'uric-acid', src: '/uricacidf.png', summary: 'Management of raised uric acid and gout. Reduce flare-ups and support joint health with natural remedies.' },
  { label: 'Knee Pain', slug: 'knee-pain', src: '/kenpain.png', summary: 'Relief for knee pain, stiffness and arthritis. Ease discomfort and improve mobility without harsh drugs.' },
  { label: 'Back Pain', slug: 'back-pain', src: '/backpain.png', summary: 'Care for acute and chronic back pain. Address muscle, disc and postural issues with personalized treatment.' },
  { label: 'Thyroid', slug: 'thyroid', src: '/expertise/thyroid.png', summary: 'Support for hypo and hyperthyroid conditions. Balance energy, weight and mood with homoeopathic care.' },
]

const MARQUEE_SPEED = 0.8
const MARQUEE_PAUSE_AFTER_ARROW_MS = 3000

function Card({ label, slug, src, summary }: { label: string; slug: string; src: string; summary: string }) {
  return (
    <div className="expertise-card">
      <span className="expertise-card-icon">
        <img src={src} alt="" width={96} height={96} className="expertise-card-img" />
      </span>
      <h3 className="expertise-card-title">{label}</h3>
      <p className="expertise-card-summary">{summary}</p>
      <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="expertise-card-btn">VIEW DETAILS</a>
    </div>
  )
}

type ExpertiseSectionProps = {
  title?: string
  subtitle?: string
  sectionId?: string
}

export default function ExpertiseSection({ title = 'Areas of Expertise', subtitle = 'Personalized homoeopathic care for a wide range of conditions', sectionId = 'services' }: ExpertiseSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const marqueePausedRef = useRef(false)
  const rafRef = useRef<number>(0)

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    marqueePausedRef.current = true
    const step = el.clientWidth
    const newScrollLeft = direction === 'left'
      ? Math.max(0, el.scrollLeft - step)
      : Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + step)
    el.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    setTimeout(() => {
      marqueePausedRef.current = false
    }, MARQUEE_PAUSE_AFTER_ARROW_MS)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const firstSet = firstSetRef.current
    const tick = () => {
      if (!scrollRef.current) return
      const container = scrollRef.current
      if (marqueePausedRef.current) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const setWidth = firstSet?.offsetWidth ?? container.scrollWidth / 2
      container.scrollLeft += MARQUEE_SPEED
      if (container.scrollLeft >= setWidth - 1) {
        container.scrollLeft = 0
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="expertise" id={sectionId}>
      <div className="section-inner">
        <h2 className="expertise-title">{title}</h2>
        <p className="expertise-sub">{subtitle}</p>
        <div ref={scrollRef} className="expertise-grid-wrap">
          <div className="expertise-marquee-inner">
            <div ref={firstSetRef} className="expertise-grid">
              {EXPERTISE_ITEMS.map((item) => (
                <Card key={item.slug} {...item} />
              ))}
            </div>
            <div className="expertise-grid">
              {EXPERTISE_ITEMS.map((item) => (
                <Card key={`dup-${item.slug}`} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="expertise-footer">
          <a href="https://wa.me/917356736929" target="_blank" rel="noopener noreferrer" className="btn btn-teal">VIEW MORE</a>
          <div className="expertise-nav">
            <button type="button" className="expertise-nav-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" className="expertise-nav-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
