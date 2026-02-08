'use client'

import Link from 'next/link'
import { useRef, useEffect, useCallback } from 'react'

/** pageSlug: used for /treatments/[slug] link; omit for WhatsApp-only */
const EXPERTISE_ITEMS = [
  { label: 'Skin Treatments', slug: 'skin', pageSlug: 'skin', src: '/skilltreatments.png', summary: 'Natural remedies for acne, eczema, pigmentation and other skin concerns.' },
  { label: 'Allergy', slug: 'allergy', pageSlug: 'allergy', src: '/allergy_icon_no_bg.png', summary: 'Constitutional treatment for seasonal, food and environmental allergies.' },
  { label: 'Asthma', slug: 'asthma', pageSlug: 'asthma', src: '/allergy_icon_no_bg.png', summary: 'Natural support for asthma—root-cause care to reduce attacks and improve breathing.' },
  { label: 'PCOD', slug: 'pcod', pageSlug: 'pcod', src: '/pcod.png', summary: 'Holistic homoeopathic care for hormonal balance and irregular cycles.' },
  { label: 'Gynaecology', slug: 'gynaecology', pageSlug: 'gynaecology', src: '/GYNAECOLOGY.png', summary: 'Care for menstrual disorders, fertility and women\'s health.' },
  { label: 'Migraine', slug: 'migraine', pageSlug: 'migraine', src: '/migraine.png', summary: 'Targeted relief for migraine and chronic headaches.' },
  { label: 'Hair Loss', slug: 'hair-loss', pageSlug: 'hair-loss', src: '/hairloss.png', summary: 'Treatment for hair fall, thinning and scalp conditions.' },
  { label: 'Diabetes', slug: 'diabetes', pageSlug: 'diabetes', src: '/diabtics.png', summary: 'Support for blood sugar balance and diabetic care.' },
  { label: 'Uric Acid', slug: 'uric-acid', pageSlug: 'uric-acid', src: '/uricacidf.png', summary: 'Management of raised uric acid and gout.' },
  { label: 'Knee & Back Pain', slug: 'back-pain', pageSlug: 'back-pain', src: '/backpain.png', summary: 'Relief for knee, back pain and joint issues.' },
  { label: 'Thyroid', slug: 'thyroid', pageSlug: 'thyroid', src: '/tyroid.png', summary: 'Support for hypo and hyperthyroid conditions.' },
]

const MARQUEE_SPEED = 1.2
const MARQUEE_PAUSE_AFTER_ARROW_MS = 3000

function Card({ label, pageSlug, src, summary }: { label: string; pageSlug?: string; src: string; summary: string }) {
  const content = (
    <>
      <span className="expertise-card-icon">
        <img src={src} alt="" width={80} height={80} className="expertise-card-img" />
      </span>
      <h3 className="expertise-card-title">{label}</h3>
      <p className="expertise-card-summary">{summary}</p>
      <span className="expertise-card-btn">View details →</span>
    </>
  )
  if (pageSlug) {
    return (
      <Link href={`/treatments/${pageSlug}`} className="expertise-card">
        {content}
      </Link>
    )
  }
  return <div className="expertise-card">{content}</div>
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
    let started = false
    const tick = () => {
      if (!scrollRef.current) return
      const container = scrollRef.current
      const setWidth = firstSet?.offsetWidth ?? 0
      if (setWidth <= 0 && !started) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      started = true
      if (marqueePausedRef.current) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }
      const width = setWidth || container.scrollWidth / 2
      container.scrollLeft += MARQUEE_SPEED
      if (container.scrollLeft >= width - 1) {
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
                <Card key={item.slug} label={item.label} pageSlug={item.pageSlug} src={item.src} summary={item.summary} />
              ))}
            </div>
            <div className="expertise-grid">
              {EXPERTISE_ITEMS.map((item) => (
                <Card key={`dup-${item.slug}`} label={item.label} pageSlug={item.pageSlug} src={item.src} summary={item.summary} />
              ))}
            </div>
          </div>
        </div>
        <div className="expertise-footer">
          <Link href="/treatments" className="btn btn-teal">View all treatments</Link>
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
