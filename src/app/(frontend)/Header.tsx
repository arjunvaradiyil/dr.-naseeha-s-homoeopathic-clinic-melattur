'use client'

import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/about-doctor', label: 'About Doctor' },
  { href: '/about', label: 'About Us' },
  { href: '/patient-stories', label: 'Patient Stories' },
  { href: '/awareness-videos', label: 'Awareness Videos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 993) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" onClick={closeMenu}>
          <span className="logo-text">
            <span className="logo-main">DR. NASEEHA&apos;S</span>
            <span className="logo-sub">HOMOEOPATHIC CLINIC</span>
          </span>
        </Link>

        <button
          type="button"
          className="header-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="header-menu-icon">
            <span className="header-menu-line" />
            <span className="header-menu-line" />
            <span className="header-menu-line" />
          </span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`} aria-hidden={!menuOpen}>
          <button
            type="button"
            className="main-nav-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/917356736929"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal btn-header-cta"
            onClick={closeMenu}
          >
            Book Appointment
          </a>
        </nav>
      </div>
      {menuOpen && (
        <div
          className="header-backdrop"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          role="button"
          tabIndex={-1}
          aria-label="Close menu"
        />
      )}
    </header>
  )
}
