'use client'

import Image from 'next/image'
import { useRef, useEffect, useCallback, useState } from 'react'

const MARQUEE_SPEED = 0.6
const MARQUEE_PAUSE_AFTER_ARROW_MS = 2500

type ResultsSliderProps = {
  images: string[]
}

function ResultCard({ filename, index }: { filename: string; index: number }) {
  return (
    <div className="results-card">
      <div className="results-card-image">
        <Image
          src={`/RESULTS/${encodeURIComponent(filename)}`}
          alt={`Treatment result ${index + 1}`}
          width={320}
          height={400}
          className="results-img"
          sizes="(max-width: 768px) 280px, (max-width: 900px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default function ResultsSlider({ images }: ResultsSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const firstSetRef = useRef<HTMLDivElement>(null)
  const marqueePausedRef = useRef(false)
  const rafRef = useRef<number>(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const scroll = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    marqueePausedRef.current = true
    const step = el.clientWidth * 0.8
    const newScrollLeft =
      direction === 'left'
        ? Math.max(0, el.scrollLeft - step)
        : Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + step)
    el.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
    setTimeout(() => {
      marqueePausedRef.current = false
    }, MARQUEE_PAUSE_AFTER_ARROW_MS)
  }, [])

  useEffect(() => {
    if (!isMobile) return
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
  }, [isMobile, images.length])

  if (images.length === 0) return null

  return (
    <>
      {isMobile ? (
        <div ref={scrollRef} className="results-grid-wrap">
          <div className="results-marquee-inner">
            <div ref={firstSetRef} className="results-grid results-grid-set">
              {images.map((filename, i) => (
                <ResultCard key={`a-${filename}`} filename={filename} index={i} />
              ))}
            </div>
            <div className="results-grid results-grid-set">
              {images.map((filename, i) => (
                <ResultCard key={`b-${filename}`} filename={filename} index={i} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="results-grid">
          {images.map((filename, i) => (
            <ResultCard key={filename} filename={filename} index={i} />
          ))}
        </div>
      )}
      <div className="results-footer">
        <a
          href="https://wa.me/917356736929"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-teal results-view-more"
        >
          VIEW MORE
        </a>
        <div className="results-nav">
          <button
            type="button"
            className="results-nav-btn"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="results-nav-btn"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
